import React, { useState } from "react";
import Link from "next/link";

export default function DatesLeft() {
  const [date, setDate] = useState("");
  const [differenceInDays, setDifferenceInDays] = useState(0);

  const handleDateInput = (event) => {
    setDate(event.target.value);
  };

  const handleDateDifference = () => {
    const dateObject = new Date(date);
    const currentDate = new Date();
    console.log({currentDate})
    const timeDiff = dateObject - currentDate;

    const subtractedDates = Math.ceil(timeDiff / (1000 * 3600 * 24));
    setDifferenceInDays(subtractedDates);
  };

  const formatText = "Please enter the date in the format dd-mm-yyyy";

  return (
    <div>
      {differenceInDays !== 0 && <p>Days Left for Future Date: {differenceInDays}</p>}
      <p>Enter Any future Date</p>
      <div>
        <input
          type="date"
          onChange={handleDateInput}
          placeholder="Future Date"
        />
      </div>
      <span>{formatText}</span>
      {/* Update the onClick to use an arrow function */}
      <br/>
      
      <div>
        <button onClick={() => handleDateDifference()}>Check Difference</button>
      </div>
    </div>
  );
}
