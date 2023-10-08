import "./styles.css";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  let counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleClick = (type) => {
    dispatch({ type });
  };

  return (
    <div className="App">
      <button onClick={() => handleClick("ADD")}>+</button>
      <p>{counter}</p>
      <button onClick={() => handleClick("DEDUCT")}>-</button>
    </div>
  );
}
