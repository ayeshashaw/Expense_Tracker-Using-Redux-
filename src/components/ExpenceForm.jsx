import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpence } from "../redux/action";
import "./ExpenceForm.css";

const ExpenceForm = () => {
  const [des, setDes] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("other");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const expences = {
      id: Date.now(),
      des: des,
      amount: amount,
      category: category,
    };

    //console.log(des,amount,category)
    dispatch(addExpence(expences));

    setAmount("");
    setCategory("other");
    setDes("");
  };

  return (
    <form onSubmit={handleSubmit} className="expences-form">
      <input
        value={des}
        onChange={(e) => setDes(e.target.value)}
        type="text"
        placeholder="Enter Decription"
      />
      <input
        value={amount}
        type="number"
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter Amount"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="other">Other</option>
        <option value="food">Food</option>
        <option value="transport">Transport</option>
        <option value="utilities">Utilities</option>
        <option value="entertainment">Entertainment</option>
      </select>
      <button type="submit">Add Expences</button>
    </form>
  );
};

export default ExpenceForm;
