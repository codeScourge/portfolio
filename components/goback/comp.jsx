'use client';

import "./comp.scss"

export default function GoBackSVG({url}) {
    return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" id="go_back_svg" onClick={() => {location.href=url}}>
        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
        <g id="SVGRepo_iconCarrier">
            {" "}
            <path
            stroke="var(--FRONT_CLR)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 18h3.75a5.25 5.25 0 100-10.5H5M7.5 4L4 7.5 7.5 11"
            />{" "}
        </g>
    </svg>
    )
}