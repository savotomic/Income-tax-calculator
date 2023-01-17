import React, { useState } from 'react';
import { taxCalculator } from '../TaxCalculator';

const InputField = (props) => {
  const [income, setIncome] = useState(0);

  const onChange = (e) => setIncome(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    props.setAmount(taxCalculator(income));
  };

  const [selects, setSelects]=useState();
  return (
    <form
    onSubmit={onSubmit}
      className="bg-white shadow-md rounded px-8 pt-5 pb-8 m-10"
    >
      <label className="block tracking-wide text-gray-700 text-md font-bold mb-2">
        What is your annualy income?
      </label>
      <div className="flex items-center border-b border-b-2 border-yellow-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 leading-tight focus:outline-none"
          id="income"
          type="number"
          placeholder="Enter annualy income"
          onChange={onChange}
        />
      </div>
      <div className="flex flex-col items-center mt-5">
        <button className="flex-shrink-0 bg-yellow-500 hover:bg-yellow-600 border-yellow-500 hover:border-yellow-400 text-sm border-4 text-white py-1 px-2 rounded">
            Calculate
        </button>
      </div>
    </form>
  );
};
export default InputField;