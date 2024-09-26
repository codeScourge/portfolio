import Image from "next/image";

import GoBackSVG from '@/components/goback/comp';
import "./page.scss"

import chrome from "../../public/projects/chrome.png"
import stickers from "../../public/projects/stickers.jpg"
import clicker from "../../public/projects/clicker.png"

export default function Home() {
    return (
      <>
        <GoBackSVG url="/" />

        <div className="block">
            <h2>GitHub Lead Clipper Plugin</h2>
            <Image src={chrome} alt='Screenshot of the Plugin' />
            <p>
Having to do cold outreach for the first time,
I built a <a target="_blank" href="https://github.com/codeScourge/github-lead-clipper">Chrome-Plugin</a> for quickly getting leads from GitHub and exporting them CSV.
            </p>
        </div>

        <hr />

        <div className="block">
            <h2>Stickers</h2>
            <Image src={stickers} alt='Photo of a sticker sheet with 6 stickers' />            
            <p>
Some dope stickers I made in PhotoShop, because no company wants to send me some.
            </p>
        </div>

        <hr />


        <div className="block">
            <h2>Video Clipper Plugin</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/zsZb31SObHE?si=wxIL9sFtUWP0FmeI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p>
Also I have built a <a target="_blank" href="https://github.com/codeScourge/video-clipper">native solution</a> to record clips from a YouTube video or any HTML video tag, 
since doing a screen recording just for that is nasty.
            </p>
        </div>

        <hr />

        <div className="block">
            <h2>Collaborative Clicker Game</h2>
            <Image src={clicker} alt='Screenshot of the Game' />
            <p>
<a target="_blank" href="https://my-game-plum.vercel.app/">This weekend project</a> is a collaborative webpage built
using LiveBlocks, that tought me about lobbies and shared state. It is a clicker game, 
where you can attack other players by forcing them to click a confirm button or type in a text.
            </p>
        </div>


        <div id='easter-egg'>
              <p>&#9752;</p>
        </div>
      </>
    );
  }




