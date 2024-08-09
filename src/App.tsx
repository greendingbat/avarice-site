import { useEffect, useState } from "react";
import { EIGHTFOLD } from "./consts";
import { getMessage } from "./api";

function App() {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  useEffect(() => {
    getMessage().then((r) => {setMessage(r); setLoading(false)});
  }, []);

  return !loading && (
    <>
      <h1>MESSAGES FROM ADAM.</h1>
      <p>{message}</p>
      <p>{EIGHTFOLD}</p>
    </>
  );
}

export default App;
