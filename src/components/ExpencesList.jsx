import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ExpencesList.css";
import { deleteExpence } from "../redux/action";

const ExpencesList = () => {
  const expences = useSelector((state) => state.expences);
  const dispatch = useDispatch()

  const handleDelete = (id)=>{
       dispatch(deleteExpence(id))
       console.log(id)
  }

  return (
    <div>
      <h3>Expences List</h3>
      <div className="expences-list">
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {expences.map((expence) => (
              <tr key={expence.id}>
                <td>{expence.des}</td>
                <td>{expence.category}</td>
                <td>{expence.amount}</td>
                <td>
                  <button onClick={()=>handleDelete(expence.id)} className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpencesList;
