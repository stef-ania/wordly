import { PT_Serif, Nunito_Sans } from "next/font/google";

export const pt_serif = PT_Serif({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pt-serif",
});

export const nunito_sans = Nunito_Sans({
  weight: ["500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
