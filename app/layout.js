import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import { Poppins, Aboreto } from "next/font/google";
import "../styles/globals.css";
import { MainMenu } from "components/MainMenu";
import { getMenu } from "utils/getMenu";
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

export default async function RootLayout({ children }) {
  const data = await getMenu();

  return (
    <html lang="en" className={`${poppins.variable} ${aboreto.variable}`}>
      <body className="font-body">
        <MainMenu
          items={data.mainMenuItems}
          callToActionLabel={data.callToActionLabel}
          callToActionDestination={data.callToActionDestination}
        />
        {children}
      </body>
    </html>
  );
}
