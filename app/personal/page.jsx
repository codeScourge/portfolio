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
              I was born in Russia and moved to Germany when I was little. At 14 I started to get into (very basic) ML and programming in general. 
              One year later I used that knowledge and interest to cofound an AI-software agency. During that time I taught myself web-development
              and the Infrastructue behind it (and also AI, duh?).
            </p>
        </div>

        <hr />

        <div className="block">
          <h2>stuff I like</h2>
          <ul>
            <li>cooking and baking</li>
            <li>bodybuilding</li>
            <li>snowboarding</li>
            <li>watching people shit-talk on <a target="_blank" href="https://x.com/scourge_strike">Twitter</a></li>
            <li>Goth Girls</li>
            <li>*great* video content (checkout my <a target="_blank" href="https://tokin.tv/user/@scourge">tokin</a>)</li>
            <li>reading <a target="_blank" href="https://www.goodreads.com/user/show/181216131-ivan">some books</a></li>
            <li><a target="_blank" href="https://myanimelist.net/animelist/sc0urge">that asian stuff</a></li>
          </ul>
        </div>


        <div id='easter-egg'>
              <p>&#9752;</p>
        </div>
      </>
    );
  }