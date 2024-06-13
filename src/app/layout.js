import { PT_Serif, Nunito } from "next/font/google";
import "./globals.css";

const pt_serif = PT_Serif({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const nunito = Nunito({
  weight: ["300", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Wordly",
  description:
    "Discover clear and precise definitions with our online dictionary. Quickly find the meanings of words, synonyms, and more to enhance your vocabulary and language comprehension.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pt_serif.className}>{children}</body>
    </html>
  );
}
