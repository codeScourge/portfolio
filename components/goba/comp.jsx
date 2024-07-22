'use client';

import { redirect } from 'next/navigation'
import "./comp.scss"

export default function GoBackSVG({}) {
    return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" id="go_back_svg" onClick={() => {redirect("/")}}>
        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
        <g id="SVGRepo_iconCarrier">
            {" "}
            <path
            stroke="#F7F7F7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 18h3.75a5.25 5.25 0 100-10.5H5M7.5 4L4 7.5 7.5 11"
            />{" "}
        </g>
    </svg>
    )
}