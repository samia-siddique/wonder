import React from 'react'
import StarBackground from '../../components/Stars/Stars'
import planets from '../../assets/planets'
import "./Planets.css"

const Planets = () => {
  const planetData = [
    {
      number: "01",
      name: "Mercury",
      img: planets.mercury,
    },

    {
      number: "02",
      name: "Venus",
      img: planets.venus,
    },

    {
      number: "03",
      name: "Earth",
      img: planets.earth,
    },

    {
      number: "04",
      name: "Mars",
      img: planets.mars,
    },

    {
      number: "05",
      name: "Jupiter",
      img: planets.jupiter,
    },

    {
      number: "06",
      name: "Saturn",
      img: planets.saturn,
    },

    {
      number: "07",
      name: "Uranus",
      img: planets.uranus,
    },

    {
      number: "08",
      name: "Neptune",
      img: planets.neptune,
    },
  ]

  return (
    <div className='planets'>
      <StarBackground />
      <p>SO, WHAT'S OUT THERE?</p>

      <h2>Meet the <span>8</span> worlds in our neighborhood</h2>

      <div className="planet-container">
        {planetData.map((planet) => (
          <div className="planet-card" key={planet.number}>

            <div className='planet-name'>
              <span>{planet.number}</span>
              <p>{planet.name}</p>
            </div>

            <img src={planet.img}
              alt={planet.name} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Planets
