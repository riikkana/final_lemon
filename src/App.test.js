import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import BookingPage from './components/BookingPage';


// Wrap komponentti BrowserRouteriin testejä varten
const BookingPageWrapper = (props) => {
  return (
    <BrowserRouter>
      <BookingPage {...props} />
    </BrowserRouter>
  );
};

// Mock data ja funktiot
const mockProps = {
  availableTimes: ['17:00', '18:00', '19:00'],
  updateTimes: jest.fn(),
  selectedDate: '2024-12-16',
  setSelectedDate: jest.fn(),
  submitForm: jest.fn()
};

describe('BookingPage Tests', () => {
  test('Renders the BookingForm heading', () => {
    render(<BookingPageWrapper {...mockProps} />);
    const headingElement = screen.getByText("Book a Table");
    expect(headingElement).toBeInTheDocument();
  });

  describe('HTML Validation', () => {
    test('name input has correct validation attributes', () => {
      render(<BookingPageWrapper {...mockProps} />);
      const nameInput = screen.getByLabelText(/name/i);

      expect(nameInput).toHaveAttribute('required');
      expect(nameInput).toHaveAttribute('minLength', '2');
      expect(nameInput).toHaveAttribute('type', 'text');
    });

    test('date input has correct validation attributes', () => {
      render(<BookingPageWrapper {...mockProps} />);
      const dateInput = screen.getByLabelText(/choose date/i);

      expect(dateInput).toHaveAttribute('required');
      expect(dateInput).toHaveAttribute('type', 'date');
    });

    test('time select has correct validation attributes', () => {
      render(<BookingPageWrapper {...mockProps} />);
      const timeSelect = screen.getByLabelText(/choose time/i);

      expect(timeSelect).toHaveAttribute('required');
    });

    test('guests input has correct validation attributes', () => {
      render(<BookingPageWrapper {...mockProps} />);
      const guestsInput = screen.getByLabelText(/number of guests/i);

      expect(guestsInput).toHaveAttribute('required');
      expect(guestsInput).toHaveAttribute('min', '1');
      expect(guestsInput).toHaveAttribute('max', '10');
      expect(guestsInput).toHaveAttribute('type', 'number');
    });

    test('occasion select has correct validation attributes', () => {
      render(<BookingPageWrapper {...mockProps} />);
      const occasionSelect = screen.getByLabelText(/occasion/i);

      expect(occasionSelect).toHaveAttribute('required');
    });
  });

  describe('Form Validation', () => {
    test('submit button should be enabled when form is valid', () => {
      render(<BookingPageWrapper {...mockProps} />);

      // Täytetään lomake validilla datalla
      fireEvent.change(screen.getByLabelText(/name/i), {
        target: { value: 'John Doe' }
      });

      fireEvent.change(screen.getByLabelText(/choose date/i), {
        target: { value: '2024-12-16' }
      });

      fireEvent.change(screen.getByLabelText(/choose time/i), {
        target: { value: '17:00' }
      });

      fireEvent.change(screen.getByLabelText(/number of guests/i), {
        target: { value: '4' }
      });

      fireEvent.change(screen.getByLabelText(/occasion/i), {
        target: { value: 'Birthday' }
      });

      const submitButton = screen.getByRole('button', { name: /make your reservation/i });
      expect(submitButton).toBeEnabled();
    });
  });

  describe('Input Validation', () => {
    test('validates name correctly', () => {
      render(<BookingPageWrapper {...mockProps} />);
      const nameInput = screen.getByLabelText(/name/i);

      // Invalidi nimi (liian lyhyt)
      fireEvent.change(nameInput, { target: { value: 'A' } });
      fireEvent.blur(nameInput);
      expect(nameInput).toHaveAttribute('aria-invalid', 'true');

      // Validi nimi
      fireEvent.change(nameInput, { target: { value: 'John' } });
      fireEvent.blur(nameInput);
      expect(nameInput).toHaveAttribute('aria-invalid', 'false');
    });

    test('validates guest number correctly', () => {
      render(<BookingPageWrapper {...mockProps} />);
      const guestsInput = screen.getByLabelText(/number of guests/i);

      // Invalidi määrä (liian vähän)
      fireEvent.change(guestsInput, { target: { value: '0' } });
      expect(guestsInput).toHaveAttribute('aria-invalid', 'true');

      // Invalidi määrä (liian paljon)
      fireEvent.change(guestsInput, { target: { value: '11' } });
      expect(guestsInput).toHaveAttribute('aria-invalid', 'true');

      // Validi määrä
      fireEvent.change(guestsInput, { target: { value: '4' } });
      expect(guestsInput).toHaveAttribute('aria-invalid', 'false');
    });
  });

  test('form submission with valid data', () => {
    const mockSubmit = jest.fn(() => true);
    render(<BookingPageWrapper {...mockProps} submitForm={mockSubmit} />);

    // Täytetään lomake
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'John Doe' }
    });
    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: '2024-12-16' }
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: '17:00' }
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: '4' }
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: 'Birthday' }
    });

    // Submit lomake
    const submitButton = screen.getByRole('button', { name: /make your reservation/i });
    fireEvent.click(submitButton);

    // Tarkista että submitForm kutsuttiin oikeilla arvoilla
    expect(mockSubmit).toHaveBeenCalledWith({
      name: 'John Doe',
      date: '2024-12-16',
      time: '17:00',
      people: 4,
      occasion: 'Birthday'
    });
  });
});