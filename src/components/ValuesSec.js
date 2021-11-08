import React from 'react'
import '../styles/global.css';

//Det her eksempel bruger TailwindCSS

//Husk at importere '../styles/global.css'
//Herefter laver du en className attribute
//Til sidst definerer du TailwindCss værdierne
//Velbekommen <3<3

function ValueSec() {
    return (
        <div
        className="
          mb-0
          mt-20
          flex flex-col
          content-center
          text-off-white text-3xl
          sm:flex-row
        "
      >
        <div className="w-full bg-light-green pt-10 pb-20 sm:w-2/6">
          <h2 className="pl-8 text-5xl bold pb-10 stroke-current text-purple-600">01</h2>
          <h2 className="pl-10 text-biege-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</h2>
        </div>
        <div className="w-full bg-medium-green pt-10 pb-20 sm:w-2/6">
          <h2 className="pl-8 text-5xl pb-10">02</h2>
          <h2 className="pl-10 pr-10 text-2xl text-biege-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </h2>
        </div>
        <div className="w-full bg-dark-green pt-10 pb-20 sm:w-2/6">
          <h2 className="pl-8 text-5xl pb-10">03</h2>
          <h2 className="pl-10 text-biege-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</h2>
        </div>
      </div>
    )
}

export default ValueSec
