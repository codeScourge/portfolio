import ReactMarkdown from 'react-markdown'
import Image from "next/image";

import GoBackSVG from '@/components/goba/comp';
import "./page.scss"

import chrome from "../../public/projects/chrome.png"
import govshare from "../../public/projects/govshare.png"
import shippil from "../../public/projects/shippil.png"
import telegram from "../../public/projects/telegram.png"

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

<ProjectTop text={`
For a customer at our AI agency, I built an automatic data processing pipeline for analyzing content.

Scraping was done using Selenium and BS4.

The Data was then processed using OpenAI and Huggingface models.

Integration into Airtable allowed the results to be easily used by humans.

Everything was powered by event-driven architecture on AWS using Queues, Webhooks, etc.
        `} title={"AI data-processing Pipeline"} img_source={govshare} alt_tag={"Flowchart of the process"} height={200}/>

<ProjectLeft text={`
Built and monetized smart translator Telegram bot.
  
Subscriptions done using YooKassa
(Stripe Alternative)
  
Russian version live [here](https://t.me/AlterVoice_bot?start=portfolio), it was marketed using YandexAds and
Posts in Telegram Channels.
        `} title={"Telegram Bot"} img_source={telegram} alt_tag={""} height={250}/>

<ProjectTop text={`
I am currently building [ShipPil](https://shippil.xyz), the 
most advanced Boilerplate for Flask developers. Everything is contained
with IAS (Infrastructure as Code) using the "Serverless Framework". It has everything, from a full bundling setup with 
ESLint and PostCS, to a powerful CDN for protection and performance.
See a detailed documentation [here](https://ivan.mintlify.app/intro/00_motivation)

        `} title={"Development and Deployment Boilerplate"} img_source={shippil} alt_tag={"Grafic showing how the development and deployment using this boilerplate works"} height={250}/>

<ProjectLeft text={`
Having to do cold outreach for the first time,
I built a Chrome-Plugin for quickly 
getting leads from GitHub and exporting them CSV.
I will try to monetize or open-source this soon.
        `} title={"Lead Generation Chrome Plugin"} img_source={chrome} alt_tag={"Screenshot of the Plugin"} height={200}/>
      </>
    );
  }