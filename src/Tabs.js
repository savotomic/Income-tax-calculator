import "./App.scss";
import InputField from './components/InputField';
import IncomeTable from './components/IncomeTable/Table';
import React, { useState, useEffect } from 'react';
import DollarImage from './images/dollar.png'

const Tabs = (props) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const [amount, setAmount] = useState(0);
  const [tableAmounts, setTableAmounts] = useState(0);

  useEffect(() => {
    setTableAmounts(amount);
  }, [amount]);

  return (
    <div className="container dollar">
    <h1 className="text-center p-5">Income Tax Calculator</h1>
      <div className="bloc-tabs shadow-md rounded px-8 pt-5 pb-8 m-10">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Income details
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Income
        </button>
      </div>

      <div className="bg-white shadow-md rounded px-8 pt-5 pb-8 m-10 text-gray-700">
        <div className={toggleState === 1 ? "content  active-content" : "content"}>
          <p>
          <InputField setAmount={setAmount}></InputField>
          </p>
        </div>

        <div className={toggleState === 2 ? "content  active-content" : "content"}>
          <p>
          <IncomeTable tableAmounts={tableAmounts}></IncomeTable>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;