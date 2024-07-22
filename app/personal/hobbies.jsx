"use-client";
import "./hobbies.scss"

import Image from "next/image";
import { useState } from "react";

import snowboarding from "../../public/hobbies/snowboarding.jpg";
import cooking from "../../public/hobbies/cooking.jpg";

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
          If I'm not going to make in technology, I would go ahead and work in a kitchen. From italian Pasta Alla Gricia, 
          or indian chicken biryani, over to Persian Kebab Koobideh, cooking is always a good way to clear your head or
          impress a girl
        `}
        alt="Picture of a Bolognese that I cooked"
        src={cooking}/>
  
        <Hobby 
        name="Snowboarding" 
        text={`
            +20/+31 hard Freeride Euro-Carve build (picture is asymetrical duck on freestyle though). 
            If this makes sense, I like you <3
        `}
        alt="Picture of me on a snowboard"
        src={snowboarding}/>
      </div>
    )
}