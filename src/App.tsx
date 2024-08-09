import { useEffect, useState } from "react";
// import { EIGHTFOLD } from "./consts";
import { getMessage } from "./api";

function App() {
  const [loading, setLoading] = useState(false);
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  useEffect(() => {
    getMessage().then((r) => {
      setMessage1(r);
    });
    getMessage().then((r) => {
      setMessage2(r);
      setLoading(false);
      setInterval(() => {
        let messageDisplayed = 1;
        getMessage().then((r) => {
          if (messageDisplayed == 1) {
            setMessage2(r);
            messageDisplayed = 2;
          }
          if (messageDisplayed == 2) {
            setMessage1(r);
            messageDisplayed = 1;
          }
          console.log(messageDisplayed);
        });
      }, 5 * 60000);
    });
  }, []);

  return (
    !loading && (
      <>
        <h1>MESSAGES FROM ADAM.</h1>
        <div className="moving-text">
          <div className="message-container1">{message1}</div>
          <div className="message-container2">{message2}</div>
        </div>
      </>
    )
  );
}

export default App;
