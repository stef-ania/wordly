// import { PT_Serif, Nunito } from "next/font/google";
import { nunito_sans } from "./utils/fonts";
import "./globals.css";
import StyledComponentsRegistry from "./utils/registry";

export const metadata = {
  title: "Wordly",
  description:
    "Discover clear and precise definitions with our online dictionary. Quickly find the meanings of words, synonyms, and more to enhance your vocabulary and language comprehension.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito_sans.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
