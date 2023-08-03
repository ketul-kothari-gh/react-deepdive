import style from "./InvestmentForm.module.css";

const InvestmentForm = (props) => {
  const submitForm = (event) => {
    event.preventDefault();
    props.onSubmit();
  };

  const resetForm = () => {
    props.onReset();
  };

  return (
    <form className={style.form} onSubmit={submitForm}>
      <div className={style["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={props.onCurrentSavingsChange}
            value={props.formInput.currentSavings}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={props.onYearlySavingsChange}
            value={props.formInput.yearlySavings}
          />
        </p>
      </div>
      <div className={style["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={props.onExpectedReturnChange}
            value={props.formInput.expectedReturn}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={props.onDurationChange}
            value={props.formInput.duration}
          />
        </p>
      </div>
      <p className={style.actions}>
        <button type="reset" className={style.buttonAlt} onClick={resetForm}>
          Reset
        </button>
        <button type="submit" className={style.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestmentForm;
