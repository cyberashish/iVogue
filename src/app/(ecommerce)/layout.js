import Footer from "./layout/Footer"
import Header from "./layout/Header"

 const WebLayout = ({children}) => {
    return(
        <>
        <Header/>
        {children}
        <Footer/>
        </>
    )
 }

 export default WebLayout