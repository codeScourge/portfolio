import ReactMarkdown from 'react-markdown'
import Image from "next/image";

import GoBackSVG from '@/components/goba/comp';
import "./page.scss"

import chatrpg from "../../public/projects/chatrpg.png"
import chrome from "../../public/projects/chrome.png"
import govshare from "../../public/projects/govshare.png"
import shippil from "../../public/projects/shippil.png"
import telegram from "../../public/projects/telegram.png"

function Project({class_appendix, text, img_source, alt_tag}) {
    return (
        <div className={`project project--${class_appendix}`}>
            <Image className={`project__img project__img--${class_appendix}`} 
                src={img_source} 
                alt={alt_tag} 
                height={200}
                placeholder="blur"
            />
            <ReactMarkdown className={`project__text project__text--${class_appendix}`}>{text}</ReactMarkdown>
        </div>
    )
}

function ProjectLeft({text, img_source, alt_tag}) {
    return <Project class_appendix="left" text={text} img_source={img_source} alt_tag={alt_tag}/>
}

function ProjectRight({text, img_source, alt_tag}) {
    return <Project class_appendix="right" text={text} img_source={img_source} alt_tag={alt_tag}/>
}

function ProjectTop({text, img_source, alt_tag}) {
    return <Project class_appendix="top" text={text} img_source={img_source} alt_tag={alt_tag}/>
}


export default function Home() {
    return (
      <>
        <GoBackSVG/>

        {/* <ProjectTop text={`
First experience with web-dev: built an AI powered text-adventure game engine with visuals and ambient sounds depending on location

Basic CI/CD using GitHub actions connecting to my EC2

Learned SQL for database and Nginx + Gunicorn for serving the application

Did no marketing besides few Reddit Posts, project never took off but will be revived in near future
        `} img_source={chatrpg} alt_tag={"Screenshot of ChatRPG interface"} /> */}

<ProjectTop text={`
As a cofounder of an AI-agency, I built an entire AI data-processing pipeline for s customer

Scraping the web using Selenium and BS4

Processing using OpenAI and Huggingface models

Integration into Airtable

Event-driven architecture on AWS using Queues, Webhooks, etc.
        `} img_source={govshare} alt_tag={"Flowchart of the process"} />

<ProjectLeft text={`
Built and monetized smart translator Telegram bot.
  
Subscriptions done using YooKassa
(Stripe Alternative)
  
Marketed using YandexAds and
Posts in Telegram Channels.
  
Russian version live [here](https://t.me/AlterVoice_bot?start=portfolio)
        `} img_source={telegram} alt_tag={"Screenshot of conversation with Telegram Bot showing voice message being transcribed, translated, and synthesized"} />

<ProjectRight text={`
Currently building [ShipPil](https://shippil.xyz),the 
most advanced Boilerplate for Flask
developers
  
Full bundling setup with ESLint and PostCSS.
  
Serverless deployment with IAS using the Serverless Framework and AWS-CLI
  
Preconfigured CDN for caching and protection
  
Full setup for domain,email, and OAuth 2.0
  
For more details you can check out [the documentation](https://ivan.mintlify.app/intro/00_motivation)
        `} img_source={shippil} alt_tag={"Grafic showing how the development and deployment using this boilerplate works"} />

<ProjectLeft text={`
Having to do cold outreach for the first time,
I built a Chrome-Plugin for quickly 
getting leads from GitHub and exporting them CSV
        `} img_source={chrome} alt_tag={"Screenshot of the Plugin"} />
      </>
    );
  }