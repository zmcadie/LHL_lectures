import {useState, useEffect} from "react"

import Child from "./Child"

// const restaurants = ["McDonalds", "Subway", "Harvey's", "Taco Bell"]

const restaurants = [
  {
    title: "McDonalds",
    menu: [
      "Fries",
      "Milkshakes",
      "Burgers",
      "McFlurries"
    ]
  },
  {
    title: "Subway",
    menu: [
      "6'' sub",
      "12'' sub",
    ]
  },
  {
    title: "Taco Bell",
    menu: [
      "Tacos",
      "Bells"
    ]
  }
]

function fetchRestaurants() {
  return restaurants
}

function Parent() {
  const [restaurants, setRestaurants] = useState([])
  const [title, setTitle] = useState()
  const [menu, setMenu] = useState([])
  const [selectedRestaurant, setSelectedRestaurant] = useState(0)

  useEffect(() => {
    const restaurantsResponse = fetchRestaurants()
    setRestaurants(restaurantsResponse)
  }, [])

  useEffect(() => {
    const newRest = restaurants[selectedRestaurant]
    if (newRest) {
      setTitle(restaurants[selectedRestaurant].title)
      setMenu(restaurants[selectedRestaurant].menu)
    }
  }, [restaurants, selectedRestaurant])

  // useEffect(() => {
  //   const newRestaurant = restaurants[selectedRestaurant]
  //   setTitle(newRestaurant.title)
  //   setMenu(newRestaurant.menu)
  // }, [selectedRestaurant])

  return (
    <div>
      { console.log("Parent — render")}
      <h1>{ title }</h1>
      <Child
        restaurants={ restaurants }
        setSelectedRestaurant={ setSelectedRestaurant }
      />
      <h2>MENU</h2>
      <ul>
      { menu.map(item => (
        <li>{ item }</li>
      )) }
      </ul>
    </div>
  )
}

export default Parent