"use client";

import "./page.scss"
import GoBackSVG from "@/components/goback/comp";

export default function Home() {
    return (
      <>
        <GoBackSVG url="/"/>
        <div className="block">
            <h2>Backstory</h2>
            <p>
              I was born in Russia and moved to Germany at 6 years old. At 14 I started to get into (very basic) ML and programming in general. 
              One year later I used that knowledge and interest to cofound an <a href="https://neural-reality.de/">AI agency</a>. During that time I taught myself Web Development
              and the Infrastructue behind it on the Cloud. Recently moved to Berlin to study at <a href="https://code.berlin/en/">CODE University of Applied Sciences Berlin</a>
            </p>
        </div>

        <hr />

        <div className="block">
          <h2>Stuff I like to do</h2>
          <ul>
            <li>Cooking</li>
            <li>Bodybuilding</li>
            <li>Snowboarding</li>
            <li>Learning random stuff</li>
            <li>Watching People shit-talk on <a href="https://x.com/scourge_strike">Twitter</a></li>
          </ul>
        </div>

        <hr />

        <div className="block">
          <h2>Consumption</h2>
          <p>Check out my <a href="https://www.goodreads.com/user/show/181216131-ivan">Favorite Books</a></p>
          <p>The same counts for <a href="https://myanimelist.net/animelist/sc0urge">that asian stuff</a></p>
        </div>

        <div id='easter-egg'>
              <p>&#9752;</p>
          </div>
      </>
    );
  }