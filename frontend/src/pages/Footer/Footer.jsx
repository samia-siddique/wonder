import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-start'>
                <h2>KEEP LOOKING UP</h2>
                <p>There's always more to discover. The universe is full of things we don't understand yet. Worlds that seem impossibly far away, storms larger than our planet, and places we may never touch. So why wonder? Because every question takes us somewhere new.</p>
                <button className='explore-btn'>Explore</button>
            </div>

            <div className='footer-middle'>
                <div className="footer-left">
                    <h2>WONDER</h2>
                    <p>Explore beyond what you know</p>
                </div>

                <div className="footer-right">
                    <ul>
                        <li>Home</li>
                        <li>Planets</li>
                        <li>About</li>
                    </ul>
                </div>
            </div>

            <div className="footer-end">
                <p>© 2026 WONDER</p>
                <p>Made with curiosity by Samia Siddique</p>
            </div>
        </div>


    )
}

export default Footer
