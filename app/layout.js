import { Lato, DM_Sans } from "next/font/google";

import "./globals.css";

// importing fonts and creating variable
const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

export const metadata = {
  title: "Pomodoize",
  description: "A modern timer to help you complete your task on time",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="theme-color" content="#7ff7a1" />
      </head>
      <body
        className={`${dm_sans.className} ${lato.variable} ${dm_sans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
