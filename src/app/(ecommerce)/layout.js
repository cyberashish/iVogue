"use client"
import { ProductProvider } from "@/store/CartProvider/CartData"
import Announcementbar from "./layout/AnnouncementBar"
import Footer from "./layout/Footer"
import Header from "./layout/Header"
import { usePathname } from "next/navigation"

 const WebLayout = ({children}) => {
    const pathname = usePathname();
    console.log(pathname);
    return(
        <>
        <ProductProvider>
        <Announcementbar/>
        <Header/>
        {children}
        {pathname.includes("/acco-struc")?null:<Footer/>}
        </ProductProvider>
        </>
    )
 }

 export default WebLayout