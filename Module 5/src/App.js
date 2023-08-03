import { useState } from "react";
import Header from "./components/Header/Header";
import InvestmentForm from "./components/InvestmentForm/InvestmentForm";
import InvestmentResult from "./components/InvestmentResult/InvestmentResult";

function App() {
  const [yearlyData, setYearlyData] = useState([]);
  const [userInput, setUserInput] = useState({
    currentSavings: 0,
    yearlySavings: 0,
    expectedReturn: 0,
    duration: 0,
  });

  const currentSavingsChangeHandler = (event) => {
    setUserInput((prev) => {
      return { ...prev, currentSavings: event.target.value };
    });
  };

  const yearlySavingsChangeHandler = (event) => {
    setUserInput((prev) => {
      return { ...prev, yearlySavings: event.target.value };
    });
  };

  const expectedReturnChangeHandler = (event) => {
    setUserInput((prev) => {
      return { ...prev, expectedReturn: event.target.value };
    });
  };

  const durationChangeHandler = (event) => {
    setUserInput((prev) => {
      return { ...prev, duration: event.target.value };
    });
  };

  const calculateHandler = () => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    setYearlyData([]);
    let currentSavings = +userInput.currentSavings; // feel free to change the shape of this input object!
    let totalInterestGainedTillEndOfYear = 0;
    let totalCapitalTillEndOfYear = +userInput.currentSavings;
    const yearlyContribution = +userInput.yearlySavings; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      totalInterestGainedTillEndOfYear += yearlyInterest;
      currentSavings += yearlyInterest + yearlyContribution;
      totalCapitalTillEndOfYear += yearlyContribution;

      setYearlyData((prev) => {
        return [
          ...prev,
          {
            // feel free to change the shape of the data pushed to the array!
            year: i + 1,
            yearlyInterest: yearlyInterest,
            savingsEndOfYear: currentSavings,
            yearlyContribution: yearlyContribution,
            interestGainedTillEndOfYear: totalInterestGainedTillEndOfYear,
            capitalTillEndOfYear: totalCapitalTillEndOfYear,
          },
        ];
      });
    }

    // do something with yearlyData ...
  };

  const resetHandler = () => {
    setUserInput({
      currentSavings: 0,
      yearlySavings: 0,
      expectedReturn: 0,
      duration: 0,
    });
    setYearlyData([]);
  };

  return (
    <div>
      <Header />
      <InvestmentForm
        onCurrentSavingsChange={currentSavingsChangeHandler}
        onYearlySavingsChange={yearlySavingsChangeHandler}
        onExpectedReturnChange={expectedReturnChangeHandler}
        onDurationChange={durationChangeHandler}
        onSubmit={calculateHandler}
        onReset={resetHandler}
        formInput={userInput}
      />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <InvestmentResult resultData={yearlyData} />
    </div>
  );
}

export default App;
