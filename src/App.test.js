//import { render, screen } from "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BookingPage from './components/BookingPage.js';

test('Renders the BookingForm heading', () => {
    render(<BookingPage />);
    const headingElement = screen.getByText("Make Your reservation");
    expect(headingElement).toBeInTheDocument();
});
