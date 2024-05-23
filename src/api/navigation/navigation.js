import HeaderApple from "@/app/Components/HeroSection/HeaderDropDown/HeaderApple";
import HeaderArrival from "@/app/Components/HeroSection/HeaderDropDown/HeaderArrival";
import HeaderCollection from "@/app/Components/HeroSection/HeaderDropDown/HeaderCollection";
import HeaderEssential from "@/app/Components/HeroSection/HeaderDropDown/HeaderEssential";
import HeaderGifting from "@/app/Components/HeroSection/HeaderDropDown/HeaderGifting";
import HeaderTech from "@/app/Components/HeroSection/HeaderDropDown/HeaderTech";


export const NAV_LINKS = [
    // {key:"mobile-covers",href:"/category/mobile-covers",label:"TECH"},
    // {key:"tempered-glass",href:"/category/tempered-glass",label:"Tempered Glass"},
    // {key:"airpods-cover",href:"/category/airpods-cover",label:"Airpods Cover"},
    // {key:"blog",href:"blog",label:"Blog"},
    // {key:"contact-us",href:"contact",label:"Contact Us"},
    {key:"tech",href:"tech",label:"TECH",dropContent:<HeaderTech/>},
    {key:"work-essential",href:"work-essential",label:"WORK ESSENTIAL",dropContent:<HeaderEssential/>},
    {key:"collections",href:"collections",label:"COLLECTIONS",dropContent:<HeaderCollection/>},
    {key:"gifting",href:"gifting",label:"GIFTING",dropContent:<HeaderGifting/>},
    {key:"shop-by-apple",href:"shop-by-apple",label:"SHOP BY APPLE",dropContent:<HeaderApple/>},
    {key:"new-arrivals",href:"new-arrivals",label:"NEW ARRIVALS",dropContent:<HeaderArrival/>},
]