import React from "react";
import { useDispatch } from "react-redux";
import {increment, decrement} from "../../redux/counter"

const Counter = () => {

  const dispatch = useDispatch()

  const handleIncrement = ()=>{
dispatch(increment())
  }
  const handleDecrement = ()=>{
    dispatch(decrement())
  }
  return (
    <>

      <button  onClick={handleIncrement} className="border border-black bg-primaryColor">Increment</button>
      <button  onClick={handleDecrement} className="border border-black bg-blue-500 ml-3">Decrement</button>
     
    </>
  );
};

export default Counter;
