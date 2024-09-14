import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({fallback: "monospace", weight: ["400", "700"], subsets: ["latin"]});

export const metadata = {
  title: "ivan ᓚᘏᗢ",
  description: "Build with <3 and ChatGPT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>
        <div id="scroll-wrapper">
          <main id="menu">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}