import React from 'react'
import './about.css'
import quartelGeneral from '../../assets/img/quartelGeneral.jpg'
function About() {
  return (
    <div className='aboutContainer'>
      <h2>Sobre nós</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident aliquid tempora veniam quas facilis nihil blanditiis impedit nobis nam voluptatum, quaerat rerum delectus voluptas odit culpa accusamus reiciendis a perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nesciunt temporibus? Repellat nostrum iste dicta dolor voluptatum, corrupti soluta maxime officiis sit illo reiciendis doloribus cupiditate, quasi repudiandae assumenda numquam!</p>
      <img src={quartelGeneral} alt="" />
    </div>
  )
}

export default About
