import ReactMarkdown from 'react-markdown'
import Image from "next/image";

import GoBackSVG from '@/components/goba/comp';
import "./page.scss"

import chrome from "../../public/projects/chrome.png"
import govshare from "../../public/projects/govshare.png"
import shippil from "../../public/projects/shippil.png"
import telegram from "../../public/projects/telegram.png"
import chatrpg from "../../public/projects/chatrpg.png"

function Project({class_appendix, title, text, img_source, alt_tag, height}) {
    return (
        <div className={`column column--${class_appendix}`}>
            <h2>{title}</h2>
            <div className={`project project--${class_appendix}`}>
                <Image className={`project__img project__img--${class_appendix}`} 
                    src={img_source} 
                    alt={alt_tag} 
                    height={height}
                    placeholder="blur"
                />
                <ReactMarkdown className={`project__text project__text--${class_appendix}`}>{text}</ReactMarkdown>
            </div>
        </div>
    )
}

function ProjectLeft({text, title, img_source, alt_tag, height}) {
    return <Project class_appendix="left" title={title} text={text} img_source={img_source} alt_tag={alt_tag} height={height}/>
}

function ProjectTop({text, title, img_source, alt_tag, height}) {
    return <Project class_appendix="top" title={title} text={text} img_source={img_source} alt_tag={alt_tag} height={height}/>
}


export default function Home() {
    return (
      <>
        <GoBackSVG/>

<ProjectLeft text={`
My web development journey started with a small passion project. It was a text-adventure game generation engine built 
over the OpenAI API. 
\n
Through vector search and prompting techniques I could
provide ambient music/visuals fitting to the current situation, as well as a working inventory and health system.
\n
It was built using Flask, served by Gunicorn + Nginx, and deployed on an EC2 instance. 
\n
This was also the first time taking care of Domain, DNS, and SSL certificates.
\n
A demo of the prototype version (still on Gradio) can be seen [here](https://www.youtube.com/watch?v=O1LhO1u-Ka0&t=307s)
        `} title={"AI text adventure game"} img_source={chatrpg} alt_tag={""} height={250}/>

<ProjectTop text={`
For a customer, I built an automatic data processing pipeline for analyzing content.
\n
Articles from the web were scraped using Selenium and BS4 on a serverless lambda function.
\n
The data was then processed using OpenAI and Huggingface models.
\n
Integration into Airtable allowed the results to be easily interpreted by humans.
\n
Everything was powered by event-driven architecture on AWS using Queues, Webhooks, etc.
        `} title={"Data-processing Pipeline"} img_source={govshare} alt_tag={"Flowchart of the process"} height={200}/>

<ProjectLeft text={`
As a side-project I developed and monetized a translator AI-Telegram bot, which could be prompted to use
dialects or specific speaking styles.
\n
Subscriptions were done using YooKassa (Stripe Alternative).
It also includes an admin panel built using ReactJS.
\n
The russian version is live [here](https://t.me/AlterVoice_bot?start=portfolio), it was marketed using YandexAds and
posts in Telegram Channels.
        `} title={"Telegram Bot"} img_source={telegram} alt_tag={""} height={250}/>

<ProjectTop text={`
I am currently building [ShipPil](https://shippil.xyz),the Boilerplate for Flask developers. 
\n
It has everything, from a full bundling setup with  ESLint and PostCS, to a powerful CDN for protection and performance.
\n
The infrastructure (runtime on Lambda Functions and NoSQL DynamoDB as database) is defined as code using the Serverless Framework.
\n
A strong emphasis is also put on security, taking care of things like CSRF, CSP, and input cleaning. 
See a detailed documentation [here](https://ivan.mintlify.app/intro/00_motivation)

        `} title={"Development and Deployment Boilerplate"} img_source={shippil} alt_tag={"Grafic showing how the development and deployment using this boilerplate works"} height={250}/>

<ProjectLeft text={`
Having to do cold outreach for the first time,
I built a Chrome-Plugin for quickly 
getting leads from GitHub and exporting them CSV.
I will try to monetize or open-source this soon.
        `} title={"Lead Generation Chrome Plugin"} img_source={chrome} alt_tag={"Screenshot of the Plugin"} height={200}/>

        <div id='easter-egg'>
            <a href="https://my-game-plum.vercel.app/">click &#9752; me</a>
            <p>This is a weekend project I built to teach myself how to build multi-user / collaboratibe webapps using liveblocks. It is a clicker game, where you can "attack" people in your lobby by forcing them to click a confirm button or typing in a text.</p>
        </div>
      </>
    );
  }