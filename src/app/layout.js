import "../scss/main.scss"


import { Poppins } from "next/font/google";
import { Roboto } from "next/font/google";
import BootstrapClient from "./Components/BootstrapClient";

// const poppins = Poppins({
//   weight: ['100', '200' , '300' , '400' ,'500' ,'600','700','800','900'],
//   style: ['normal', 'italic'],
//   subsets: ['latin'],
//   display: 'swap',
// })

// const roboto = Roboto({
//   weight: ['100', '300' , '400' ,'500' ,'700','900'],
//   style: ['normal', 'italic'],
//   subsets: ['latin'],
//   display: 'swap',
// })




export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
      <BootstrapClient/>
    </html>
  );
}
