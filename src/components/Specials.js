import React, { useEffect, useState } from "react";
import "../App.css";

function Specials() {
    const [specials, setSpecials] = useState([]);

    useEffect(() => {
        // Tässä voisi olla API-kutsu
        setSpecials([
            { id: 1, name: "Spaghetti", price: "$12" },
            { id: 2, name: "Pizza", price: "$15" },
            { id: 3, name: "Salad", price: "$10" },
        ]);
    }, []);

    return (
        <section className="features">
        {specials.map((special) => (
          <div key={special.id} className="feature-box">
            <h3>{special.name}</h3>
            <h2>{special.price}</h2>
            <p>{special.description}</p>
          </div>
        ))}
      </section>
    );
}

export default Specials;
