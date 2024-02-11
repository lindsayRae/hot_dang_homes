import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import { Poppins, Aboreto } from "next/font/google";
import "../styles/globals.css";
import { MainMenu } from "components/MainMenu";

//export const dynamic = "force-dynamic";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "700"],
});

const aboreto = Aboreto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-aboreto",
  weight: ["400"],
});

export const metadata = {
  title: "Hot Dang Homes Course",
  description: "Hot Dang Homes Course",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${aboreto.variable}`}>
      <body className="font-body">
        <MainMenu
          callToActionLabel="Get in touch"
          callToActionDestination="/contact"
        />
        {children}
      </body>
    </html>
  );
}
