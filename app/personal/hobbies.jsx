"use-client";
import "./hobbies.scss"

import Image from "next/image";
import { useState } from "react";

import snowboarding from "../../public/hobbies/snowboarding.jpg";
import cooking from "../../public/hobbies/cooking.jpg";
import motor from "../../public/hobbies/motor.jpg";
import read from "../../public/hobbies/read.jpg";
import gym from "../../public/hobbies/gym.jpg";

function Hobby({name, text, alt, src}) {
    const [hovered, setHovered] = useState(false)
    const imageStyle = hovered ? {filter: "blur(5px) brightness(0.2)"} : {};
    const textStyle = hovered ? {filter: "opacity(100%)"} : {}

    return (
      <div className="hobbies__item" onMouseEnter={(e) => {setHovered(true)}} onMouseLeave={(e) => {setHovered(false)}}>
        <Image 
          alt={alt}
          src={src}
          loading="lazy"  
          style={imageStyle} 
        />
        <p style={textStyle}>
          {text}
        </p>
      </div>
    )
  }
  
export default function Hobbies() {
    return (
      <div className="hobbies">
      <Hobby 
        name="Cooking" 
        text={`
          Cooking is the highest form of art, also it's always a good way for me to relax or to impress a girl
        `}
        alt="Picture of a Bolognese that I cooked"
        src={cooking}/>
  
      <Hobby 
        name="Snowboarding" 
        text={`
            +20/+31 hard-boot Freeride build for eurocarving (picture is  obviously asymetrical duck on freestyle though). 
            If this makes sense, I like you
        `}
        alt="Picture of me on a snowboard"
        src={snowboarding}/>

      <Hobby 
        name="Reading" 
        text={`
            The most fascinating thing to me is that you can just learn anything you want and by that do a software update to your brain
        `}
        alt="Book, Coffee, and rolling equipment"
        src={read}/>

      {/* <Hobby 
        name="Motorsport" 
        text={`
            Please hire me so I can buy a motorcycle again
        `}
        alt="Picture of me on a motorcycle"
        src={motor}/> */}

      <Hobby 
        name="Gym" 
        text={`
            No man has the right to be an amateur in the matter of physical training ~some greek guy
        `}
        alt="Picture of me in my hometown gym"
        src={gym}/>
      </div>
    )
}