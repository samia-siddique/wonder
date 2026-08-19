import React from 'react'
import "./Home.css"
import StarBackground from '../../components/Stars/Stars'
import planets from '../../assets/planets'
import Planets from '../Planets/Planets'

const Home = () => {
    return (
        <div className='home'>
            <StarBackground />

            <div className='nav'>
                <h2>WONDER</h2>

                <ul>
                    <li>Home</li>
                    <li>Planets</li>
                    <li>About</li>
                </ul>

                <button className='explore-btn'>Explore</button>
            </div>

            <div className='home-container'>
                <div className="left-home">

                    <h1>SPACE</h1>

                    <p>Beyond Earth, there are these weird oval shaped
                        things floating around. Do you know why they're
                        here? Everything   has a meaning... but what's
                        theirs? What if someone lives there? Sounds
                        creepy. Do we need more circle shaped rocks?</p>

                    <img src={planets.moon} alt="moon-img" className='light-moon' />

                    <button className='explore-btn'>Explore</button>
                </div>


                <div className="right-home">
                    <img src={planets.moon} alt="moon-img" />
                </div>

            </div>

            <Planets />
        </div>
    )
}

export default Home
