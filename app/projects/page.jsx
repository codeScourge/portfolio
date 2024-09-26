import Image from "next/image";

import GoBackSVG from '@/components/goback/comp';
import "./page.scss"


import govshare from "../../public/projects/govshare.png"
import shippil from "../../public/projects/shippil.png"
import client from "../../public/projects/client.png"
// import telegram from "../../public/projects/telegram.png"
// import chatrpg from "../../public/projects/chatrpg.png"



export default function Home() {
    return (
      <>
        <GoBackSVG url="/" />


        <div className="block">
            <h2>ChatRPG</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/XEQg4dG_G8o?si=a3T95CdhKocQJRdU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>    
            <p>
My web-dev journey started with a text-adventure generation engine built 
over the OpenAI API. 
<br />
<br />
Using some clever prompting I could
provide ambient music/visuals fitting to the current situation, as well as a inventory and health system.
<br />
<br />
It was built using Flask, served by Gunicorn + Nginx, and deployed on an EC2 instance. 
<br />
<br />
This was also the first time taking care of Domain, DNS, and SSL certificates.
<br />
<br />
I tried to market this thing with some shitty Reddit posts, which obviously didnt work.
            </p>
        </div>

        <hr />

        <div className="block">
            <h2>Data-processing Pipeline</h2>
            <Image src={govshare} alt='Flowchart of the process' />
            <p>
For a client at our AI-agency, I built an automatic data processing pipeline for analyzing content.
<br />
<br />
Articles from the web were scraped using Selenium and BS4.
<br />
<br />
The data was then processed using OpenAI and Huggingface models.
<br />
<br />
Integration into Airtable allowed the results to be easily interpreted by humans.
<br />
<br />
Everything was powered by event-driven architecture on AWS using Queues, Webhooks, etc.
            </p>
        </div>

        <hr />

        <div className="block">
            <h2>Telegram Bot</h2>
            <p>
To try myself in B2C, I built and monetized a translator AI-Telegram bot, that had voice input/output.
<br />
<br />
Subscriptions were done using YooKassa (russian Stripe Alternative).
<br />
<br />
It was marketed using YandexAds and posts in Telegram Channels, but never took off (no wonder why....)
            </p>
        </div>

        <hr />

        <div className="block">
            <h2>Boilerplate</h2>
            <Image src={shippil} alt='Screenshot of Graphic demonstating pros of the boilerplate' />
            <p>
Thinking I was gonna get get rich like Marc Lou, I built <a target="_blank" href="https://shippil.xyz">ShipPil</a>, a Boilerplate for Flask developers. 
<br />
<br />
The infrastructure (runtime on Lambda Functions and DynamoDB as database) is defined as code using the Serverless Framework.
<br />
<br />
It included a full bundling setup with ESLint and PostCSS, a CDN, auth, and payments.
<br />
<br />
A strong emphasis is also put on security, taking care of things like CSRF, CSP, and input cleaning. 
<br />
<br />
The <a target="_blank" href="https://ivan.mintlify.app/intro/00_motivation">documentation</a> is actually pretty good as a ressource for learning the concepts behind it - to be trully useful it was designed like a course so the user could better work with and modify the boilerplate.
            </p>
        </div>

        <hr />

        <div className="block">
            <h2>In-House AI-Client</h2>
            <Image src={client} alt='Screenshot of the Client' />
            <p>
For another client I built an in-house ChatGPT-like client with a RAG system.
<br />
<br />
For data-compliance reasons the Vector Store and even the Model itself (LLama3.1 70b) was deployed locally.
            </p>
        </div>

        <hr />


        <div id='easter-egg'>
              <p>&#9752;</p>
        </div>
      </>
    );
  }




