import React from 'react'
import "./Home.css"
import StarBackground from '../../components/Stars/Stars'
import planets from '../../assets/planets'

const Home = () => {
    return (
        <div className='home'>
            <StarBackground />

            <nav>
                <ul>
                    <li>Home</li>
                    <li>Planets</li>
                    <li>About</li>
                </ul>
            </nav>

            <div className="left-home">

                <h1>SPACE</h1>

                <p>Beyond Earth, there are these weird oval shaped
                    things floating around. Do you know why they're
                    here? Everything   has a meaning... but what's
                    theirs? What if someone lives there? Sounds
                    creepy. Do we need more circle shaped rocks?</p>
                
                <img src={planets.moon} alt="moon-img" className='light-moon' />

                <button>Explore</button>
            </div>


            <div className="right-home">
                <img src={planets.moon} alt="moon-img" />
            </div>


        </div>
    )
}

export default Home
