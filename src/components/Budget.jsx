import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBudget } from "../redux/action";
import "./Budget.css";

const Budget = () => {
  const [newBudget, setNewBudget] = useState(0);
  const dispatch = useDispatch();
  const budget = useSelector((state) => state.budget);
  const expences = useSelector((state)=> state.expences)

  const totalExpences = expences.reduce(
    (acc, cv) => acc + Number(cv.amount),
    0
  );

  const Remaining = budget - totalExpences

  const handleSubmit = () => {
    dispatch(setBudget(newBudget));
    console.log(newBudget);
    setNewBudget("");
  };
  return (
    <div className="container">
      <div className="input-box">
        <input
          type="number"
          value={newBudget}
          onChange={(e) => setNewBudget(e.target.value)}
        />
        <button onClick={handleSubmit}>set budget</button>
      </div>
      <div className="container-box">
        <div className="budget-box">
          <strong> Total Budget</strong>

          <p className="1000">{budget} /-</p>
        </div>
        <div className="budget-box">
          <strong>Total Expences</strong>
          <p className="1000">{totalExpences}</p>
        </div>
        <div className="budget-box">
          <strong>Remaining Amount</strong>

          <p className="1000">{Remaining}</p>
        </div>
      </div>
    </div>
  );
};

export default Budget;
