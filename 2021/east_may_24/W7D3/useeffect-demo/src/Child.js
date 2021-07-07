// import {useState, useEffect} from "react"

function Child(props) {
  return (
    <div>
      { console.log("Child — render")}
      { props.restaurants.map((restaurant, index) => (
        <button
          key={ index }
          onClick={ () => props.setSelectedRestaurant(index) }
        >
          { restaurant.title }
        </button>
      )) }
    </div>
  )
}

export default Child