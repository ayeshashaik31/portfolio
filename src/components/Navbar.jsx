import React from 'react'

function Navbar() {
  return (
    <nav className='navbar'>

            <ul className='nav-links'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li> 
                <li><a href="https://github.com/ayeshashaik31" target='_blank'>GitHub</a></li> 
                <li><a href="https://www.linkedin.com/in/ayesha31/" target='_blank'>LinkedIn</a></li>     

            </ul> 

    </nav>
  )
}

export default Navbar
