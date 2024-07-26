"use client";
import "./page.scss"

import GoBackSVG from "@/components/goba/comp";
import Hobbies from "./hobbies";
import Books from "./books";


export default function Home() {
    return (
      <>
        <GoBackSVG/>
        <div className="block">
            <h2>Backstory</h2>
            <p>
              I was born in Russia and moved to Germany at 6 years old. With 14 I started to get into ML and programming in general. 
              While It was shallow at best, one year
              later I used that knowledge and interest to cofound an AI agency. During that time I taught myself Web Development
              and the Infrastructue behind it on the Cloud. Recently I moved to Berlin to pursue my studies at the 
              CODE University of Applied Sciences
              </p>
        </div>

        <div className="block">
          <h2>Favorite Books</h2>
          <Books/>
        </div>

        <div className="block">
          <h2>Stuff I Like To Do</h2>
          <Hobbies />
        </div>
      </>
    );
  }