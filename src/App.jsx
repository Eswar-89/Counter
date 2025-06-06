import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { IoMdAddCircle } from "react-icons/io";
import { AiFillMinusCircle } from "react-icons/ai";
import { RiResetLeftFill } from "react-icons/ri";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>Counter App</h1>
          <div className="my-5">
            <h2 className="my-5">{count}</h2>
            <button
              type="button"
              className="btn btn-success mx-3"
              onClick={() => setCount(count + 1)}
            >
              <IoMdAddCircle />
            </button>
            <button
              type="button"
              className="btn btn-danger mx-3"
              onClick={() => setCount(count - 1)}
              disabled={count === 0}
            >
              <AiFillMinusCircle />
            </button>
            <button
              type="button"
              className="btn btn-secondary mx-3"
              onClick={() => setCount(0)}
              disabled={count === 0}
            >
              <RiResetLeftFill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
