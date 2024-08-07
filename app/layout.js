import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ivan's Portfolio",
  description: "Build with <3 and ChatGPT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main id="menu">
          {children}
        </main>
      </body>
    </html>
  );
}
