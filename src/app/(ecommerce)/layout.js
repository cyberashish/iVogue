import Header from "./layout/Header"

 const WebLayout = ({children}) => {
    return(
        <>
        <Header/>
        {children}
        </>
    )
 }

 export default WebLayout