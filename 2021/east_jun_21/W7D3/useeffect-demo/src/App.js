import { useState, useEffect } from "react";
import axios from "axios"
import "./App.css";

export default function App() {
  const [catURL, setCatURL] = useState()
  const [title, setTitle] = useState("Hello World");
  const [counter, setCounter] = useState(0);

  const fetchCatURL = function() {
    return axios.get("https://thatcopy.pw/catapi/rest/").then(res => res.data.url)
  }

  // useEffect takes 2 arguments
  // 1) callback function (run after render)
  // 2) dependencies array
  useEffect(() => {
    console.log("Button has been clicked", counter, "times")
    
    const interval = setInterval(() => {
      console.log("inside interval, counter has been clicked", counter, "times")
      fetchCatURL().then(url => setCatURL(url))
    }, 3000)

    return () => clearInterval(interval)
  }, [counter])

  return (
    <div className="App">
      <img src={catURL} />
      <h1>{title}</h1>
      <label htmlFor="title-input">Update Title</label>
      <input
        id="title-input"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <br />
      <br />
      <br />
      <h1>{counter}</h1>
      <button onClick={() => setCounter((c) => c + 1)}>COUNT</button>
    </div>
  );
}
