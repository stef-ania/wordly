import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wordly",
  description:
    "Discover clear and precise definitions with our online dictionary. Quickly find the meanings of words, synonyms, and more to enhance your vocabulary and language comprehension.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
