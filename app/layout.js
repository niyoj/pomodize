import { Noto_Serif } from "next/font/google";

import "./globals.css";

const noto_serif = Noto_Serif({
  subsets: ["latin"],
  display: "swap",
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
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className={noto_serif.className}>{children}</body>
    </html>
  );
}
