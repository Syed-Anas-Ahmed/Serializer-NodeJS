import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get("/api/jokes").then((response) => {
      console.log(response.data);
      setJokes(response.data);
    });
  }, []);

  return (
    <>
      <div className="App">
        {jokes.map((joke) => (
          <p key={joke.id}>{joke.joke}</p>
        ))}
      </div>
    </>
  );
}

export default App;
