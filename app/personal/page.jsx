"use client";
import "./page.scss"

import GoBackSVG from "@/components/goba/comp";
// import Hobbies from "./hobbies";
// import Books from "./books";


export default function Home() {
    return (
      <>
        <GoBackSVG/>
        <div className="block">
            <h2>Backstory</h2>
            <p>
              I was born in Russia and moved to Germany at 6 years old. At 14 I started to get into (very basic) ML and programming in general. 
              One year later I used that knowledge and interest to cofound an <a href="https://neural-reality.de/">AI agency</a>. During that time I taught myself Web Development
              and the Infrastructue behind it on the Cloud. Recently moved to Berlin to study at <a href="https://code.berlin/en/">CODE </a>
            </p>
        </div>
        

        <div className="block">
          <h2>Stuff I like to do</h2>
          <ul>
            <li>Cooking</li>
            <li>Bodybuilding</li>
            <li>Snowboarding</li>
            <li>Learning random stuff</li>
            <li>Motorcycle (sold it 😢)</li>
            <li>Watching People shit-talk on <a href="https://x.com/ivan_bkrv">Twitter</a></li>
          </ul>
        </div>

        <div className="block">
          <h2>Favorite Books</h2>
          <p>Can be found at <a href="https://www.goodreads.com/user/show/181216131-ivan">GoodReads</a></p>
        </div>




        {/* <div className="block">
          <h2>Favorite Books</h2>
          <Books/>
        </div>

        <div className="block">
          <h2>Stuff I Like To Do</h2>
          <Hobbies />
        </div> */}
      </>
    );
  }