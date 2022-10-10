import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as counterActions from "../../store/modules/counter";

export default function Counter() {
  const dispatch = useDispatch();
  const number = useSelector(({ counter }) => counter.number);

  const plus = useCallback(() => {
    dispatch(counterActions.increase());
  }, [dispatch]);

  const minus = useCallback(() => {
    dispatch(counterActions.decrease());
  }, [dispatch]);

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => minus()}>-</button>
      <span>{number}</span>
      <button onClick={() => plus()}>+</button>
    </div>
  );
}
