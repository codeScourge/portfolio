import Image from "next/image";
import "./page.css"

function ProjectRow({align_left, text, img_source, alt_tag}) {
    return (
        <div className="project_row" style={{flexFlow: align_left ? "row-reverse" : "row"}}>
            <p style={{textAlign: align_left ? "left": "right"}}>{text}</p>
            <Image src={img_source} alt={alt_tag} />
        </div>
    )
}


export default function Home() {
    return (
      <div id="menu">
      </div>
    );
  }