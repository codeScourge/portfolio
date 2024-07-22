"use client";
import "./books.scss"

import Image from "next/image";

import foundation from "../../public/books/fiction/foundation.png"
import swordsman from "../../public/books/fiction/swordsman.png"
import vampire from "../../public/books/fiction/vampire.png"

import sales from "../../public/books/non-fiction/sales.png"
import salt from "../../public/books/non-fiction/salt.png"
import steve from "../../public/books/non-fiction/steve.png"

const book_array = [
  {name: "The Foundation Series", src: foundation},
  {name: "The Seventh Sword Series", src: swordsman},
  {name: "Empire of the Vampire", src: vampire},

  {name: "Founding Sales", src: sales},
  {name: "Salt-Fat-Heat-Acid", src: salt},
  {name: "Steve Jobs Biography", src: steve}
]

export default function Books() {
  const overlap = 25; // in pixels

  return (
    <ul className="books">
      {book_array.map((book, index) => 
        <Image className="books__item"
          alt={`Cover of the book ${book.name}`}
          src={book.src}
          key={index}
          style={{
            zIndex: {index},
            transform: `translateX(-${overlap*index}px) translateX(${0.5 * ((book_array.length - 1) * overlap)}px)`
          }}
          onMouseEnter={(e) => {e.target.style.transform = `translateX(-${overlap*index}px) scale(1.2) translateX(${0.5 * ((book_array.length - 1) * overlap)}px)`}}
          onMouseLeave={(e) => {e.target.style.transform = `translateX(-${overlap*index}px) scale(1) translateX(${0.5 * ((book_array.length - 1) * overlap)}px)`}}
        />
      )}
    </ul>
  )
}