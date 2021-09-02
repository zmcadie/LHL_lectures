import { useState, useEffect } from "react";
import axios from "axios"
import "./App.css";

// res.data.url to access returned url
const catAPI = "https://thatcopy.pw/catapi/rest/"
const getCat = () => axios.get(catAPI).then(res => res.data.url)
const fetchCats = () => Promise.all([getCat(),getCat(),getCat(),getCat(),getCat(),getCat(),getCat(),getCat(),getCat(),getCat()])

export default function App() {
  const [title, setTitle] = useState("useEffect() Demo")
  const [catURLs, setCatURLs] = useState([])
  const [catURL, setCatURL] = useState("")

  // This useEffect handles data fetching
  useEffect(() => {
    fetchCats()
      .then(cats => {
        setCatURLs(cats)
        setCatURL(cats[0])
      })
  }, [])

  // This useEffect sets up img rotation interval
  useEffect(() => {
    console.log("Setup interval effect")
    const intervalID = setInterval(() => {
      const newCatIndex = Math.floor(Math.random() * catURLs.length)
      setCatURL(catURLs[newCatIndex])
    }, 3000)

    return () => {
      console.log("Cleanup interval effect")
      clearInterval(intervalID)
    }
  }, [catURLs])

  // Solution to trigger new catURL on title change
  // NOT a use case for useEffect
  // 
  // const handleChange = event => {
  //   setTitle(event.target.value)
  //   const newCatIndex = Math.floor(Math.random() * catURLs.length)
  //   setCatURL(catURLs[newCatIndex])
  // }

  return (
    <div className="App">
      <h1>{title}</h1>
      <label htmlFor="title-input">Update Title</label>
      <input
        id="title-input"
        onChange={ (e) => setTitle(e.target.value) }
        value={title || ""}
      />
      <img src={ catURL } />
      { catURLs.map((url, index) => (
        <button
          className={catURL === url ? "selected" : ""}
          onClick={() => setCatURL(url)}
        >
          { index + 1 }
        </button>
      )) }
    </div>
  )
}
