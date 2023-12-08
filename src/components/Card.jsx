import React, { useState } from "react";

const Card = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [errorDay, setErrorDay] = useState("");
  const [errorMonth, setErrorMonth] = useState("");
  const [errorYear, setErrorYear] = useState("");
  const [resultA, setResultA] = useState("--");
  const [resultB, setResultB] = useState("--");
  const [resultC, setResultC] = useState("--");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "day") {
      setDay(value);
    } else if (name === "month") {
      setMonth(value);
    } else if (name === "year") {
      setYear(value);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Reset styles and errors
    resetStylesAndErrors();

    if (!day || !month || !year) {
      showError(
        "This field is required",
        "This field is required",
        "This field is required"
      );
      return;
    }

    const todayDate = new Date();
    const y = todayDate.getFullYear();

    if (isNaN(day) || parseInt(day) > 31) {
      showError("Must be a valid day", "", "");
      return;
    }

    if (isNaN(month) || parseInt(month) > 12) {
      showError("", "Must be a valid month", "");
      return;
    }

    if (isNaN(year) || parseInt(year) > y) {
      showError("", "", "Must be in the past");
      return;
    }

    // Calculate and display results
    // const a = todayDate.getDate() - parseInt(day);

    // Set the date to the beginning of the next year
    const nextYear = new Date(todayDate.getFullYear() + 1, 0, 1);
    // Calculate the difference in days
    const days = Math.ceil((nextYear - todayDate) / (1000 * 60 * 60 * 24));
    const months = todayDate.getUTCMonth() - parseInt(month);
    const years = todayDate.getFullYear() - parseInt(year);

    setResultA(days);
    setResultB(months);
    setResultC(years);

    resetStylesAndErrors();
  };

  const resetStylesAndErrors = () => {
    setErrorDay("");
    setErrorMonth("");
    setErrorYear("");
  };

  const showError = (dayError, monthError, yearError) => {
    if (dayError) {
      setErrorDay(dayError);
    }

    if (monthError) {
      setErrorMonth(monthError);
    }

    if (yearError) {
      setErrorYear(yearError);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card block bg-white p-14 w-[44.5%] rounded-2xl rounded-br-[12em]">
        <form onSubmit={handleFormSubmit}>
          <div className="block mb-12">
            <div className="formGroup inline-block mr-9">
              <label
                htmlFor="inputDay"
                id="labelDay"
                className={`block mb-2 text-sm tracking-[.25em] ${
                  errorDay ? "text-LightRed" : "text-SmokeyGrey"
                }`}
              >
                DAY
              </label>
              <input
                type="number"
                className={`form-input inline-block text-3xl w-[5.2em] border rounded-md p-4 ${
                  errorDay ? "border-LightRed" : "border-LightGrey"
                }`}
                id="inputDay"
                name="day"
                value={day}
                placeholder="DD"
                onChange={handleInputChange}
              />
              <p className="errorM absolute text-LightRed italic mt-1">
                {errorDay}
              </p>
            </div>
            <div className="formGroup inline-block mr-9">
              <label
                htmlFor="inputMonth"
                id="labelMonth"
                className={`block mb-2 text-sm tracking-[.25em]
                ${errorMonth ? "text-LightRed" : "text-SmokeyGrey"}`}
              >
                MONTH
              </label>
              <input
                type="number"
                className={`form-input inline-block text-3xl w-[5.2em] border rounded-md p-4 ${
                  errorMonth ? "border-LightRed" : "border-LightGrey"
                }`}
                id="inputMonth"
                name="month"
                value={month}
                placeholder="MM"
                onChange={handleInputChange}
              />
              <p className="errorM absolute text-LightRed italic mt-1">
                {errorMonth}
              </p>
            </div>
            <div className="formGroup inline-block mr-9">
              <label
                htmlFor="inputYear"
                id="labelYear"
                className={`block mb-2 text-sm tracking-[.25em] ${
                  errorYear ? "text-LightRed" : "text-SmokeyGrey"
                }`}
              >
                YEAR
              </label>
              <input
                type="number"
                className={`form-input inline-block text-3xl w-[5.2em] border rounded-md p-4 ${
                  errorYear ? "border-LightRed" : "border-LightGrey"
                }`}
                id="inputYear"
                name="year"
                value={year}
                placeholder="YYYY"
                onChange={handleInputChange}
              />
              <p className="errorM absolute text-LightRed italic mt-1">
                {errorYear}
              </p>
            </div>
          </div>

          <hr />

          <div className="divSubmit absolute top-[33%] left-[64.2%]">
            <button
              type="submit"
              className="arrowSubmit bg-Purple p-[1.70em] rounded-full hover:bg-OffBlack"
            >
              {" "}
              <img
                className="imgSubmit"
                src="/src/assets/images/icon-arrow.svg"
                alt="submit"
              />{" "}
            </button>
          </div>

          <div className="resultGroup mt-12">
            <h1 className="years text-8xl italic font-extrabold py-2 result">
              <span className="text-Purple font-extrabold italic mr-2" id="c">
                {resultC}
              </span>
              years
            </h1>
            <h1 className="months text-8xl italic font-extrabold py-2 result">
              <span className="text-Purple font-extrabold italic mr-2" id="b">
                {resultB}
              </span>
              months
            </h1>
            <h1 className="days text-8xl italic font-extrabold py-2 result">
              <span className="text-Purple font-extrabold italic mr-2" id="a">
                {resultA}
              </span>
              days
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Card;
