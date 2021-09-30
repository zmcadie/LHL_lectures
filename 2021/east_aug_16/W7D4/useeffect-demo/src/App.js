import { useState, useEffect } from "react";
import axios from "axios"
import "./App.css";

// res.data.url to access returned url
const catAPI = "https://thatcopy.pw/catapi/rest/"
const getCat = () => axios.get(catAPI).then(res => res.data.url)
const fetchCats = () => Promise.all([getCat(),getCat(),getCat(),getCat(),getCat(),getCat(),getCat(),getCat(),getCat(),getCat()])

export default function App() {
  const [title, setTitle] = useState("useEffect() Demo")
  const [cats, setCats] = useState([])
  const [catIndex, setCatIndex] = useState(0)

  useEffect(() => {
    fetchCats()
      .then(catArray => {
        setCats(catArray)
      })
  }, [])

  useEffect(() => {
    console.log("inside useEffect...")
    const intervalId = setInterval(() => {
      setCatIndex(prev => {
        if (prev === cats.length) return 0
        return prev + 1
      })
    }, 2000)

    return () => {
      console.log("inside cleanup...")
      clearInterval(intervalId)
    }
  }, [cats])

  return (
    <div className="App">
      {console.log("inside render...")}
      <h1>{title}</h1>
      <label htmlFor="title-input">Update Title</label>
      <input
        id="title-input"
        onChange={ (e) => setTitle(e.target.value) }
        value={title || ""}
      />
      <img src={cats[catIndex]} />
    </div>
  )
}