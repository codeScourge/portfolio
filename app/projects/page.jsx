import ReactMarkdown from 'react-markdown'
import Image from "next/image";

import GoBackSVG from '@/components/goback/comp';
import "./page.scss"

import chrome from "../../public/projects/chrome.png"
import govshare from "../../public/projects/govshare.png"
import shippil from "../../public/projects/shippil.png"
import telegram from "../../public/projects/telegram.png"
import chatrpg from "../../public/projects/chatrpg.png"
import clicker from "../../public/projects/clicker.png"




export default function Home() {
    return (
      <>
        <GoBackSVG url="/" />


        <div className="block">
            <h2>ChatRPG</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/XEQg4dG_G8o?si=a3T95CdhKocQJRdU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>    
            <p>
My web development journey started with a text-adventure generation engine built 
over the OpenAI API. 
<br />
Through vector-search and prompting techniques I could
provide ambient music/visuals fitting to the current situation, as well as a working inventory and health system.
<br />
It was built using Flask, served by Gunicorn + Nginx, and deployed on an EC2 instance. 
<br />
This was also the first time taking care of Domain, DNS, and SSL certificates.
            </p>
        </div>

        <hr />

        <div className="block">
            <h2>Data-processing Pipeline</h2>
            <Image src={govshare} alt='Flowchart of the process' />
            <p>
For a client at our AI-agency, I built an automatic data processing pipeline for analyzing content.
<br />
Articles from the web were scraped using Selenium and BS4.
<br />
The data was then processed using OpenAI and Huggingface models.
<br />
Integration into Airtable allowed the results to be easily interpreted by humans.
<br />
Everything was powered by event-driven architecture on AWS using Queues, Webhooks, etc.
            </p>
        </div>

        <hr />

        <div className="block">
            <h2>Telegram Bot</h2>
            <p>
To try myself in B2C, I built and monetized a translator AI-Telegram bot, which could be prompted to use
dialects or specific speaking styles.
<br />
Subscriptions were done using YooKassa (Stripe Alternative).
It also included an admin panel built using ReactJS.
<br />
It was marketed using YandexAds and posts in Telegram Channels.
            </p>
        </div>

        <hr />

        <div className="block">
            <h2>Boilerplate</h2>
            <Image src={shippil} alt='Screenshot of Graphic demonstating pros of the boilerplate' />
            <p>
Thinking I was gonna be rich like Marc Lou, I built <a href="https://shippil.xyz">ShipPil</a>, a Boilerplate for Flask developers. 
<br />
It has everything, from a full bundling setup with  ESLint and PostCS, to a powerful CDN for protection and performance.
<br />
The infrastructure (runtime on Lambda Functions and DynamoDB as database) is defined as code using the Serverless Framework.
<br />
A strong emphasis is also put on security, taking care of things like CSRF, CSP, and input cleaning. 
See a detailed documentation <a href="https://ivan.mintlify.app/intro/00_motivation">here</a>
            </p>
        </div>

        <hr />

        <div className="block">
            <h2>Chrome Plugin</h2>
            <Image src={chrome} alt='Screenshot of the Plugin' />
            <p>
Having to do cold outreach for the first time,
I built a Chrome-Plugin for quickly 
getting leads from GitHub and exporting them CSV.
I will try to monetize or open-source this soon.
            </p>
        </div>

        {/* <hr />

        <div className="block">
            <h2>Collaborative Clicker Game</h2>
            <p>
<a href="https://my-game-plum.vercel.app/">This</a> is a weekend project I built on NextJS to teach myself how to build multi-user / collaboratibe webapps 
using liveblocks, where I had to implement lobbies and shared state. It is a clicker game, 
where you can attack people in your lobby by forcing them to click a confirm button or typing in a text.
See a detailed documentation <a href="https://ivan.mintlify.app/intro/00_motivation">here</a>
            </p>
            <Image src={clicker} alt='Screenshot of the Game' />
        </div> */}


        <div id='easter-egg'>
              <p>&#9752;</p>
        </div>
      </>
    );
  }




