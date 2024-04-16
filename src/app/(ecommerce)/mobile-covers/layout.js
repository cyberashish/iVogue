import CoverHeader from "../layout/MobileCoverLayout/CoverHeader";

export default function CoversLayout({ children }) {
    return(
     <section>
      <CoverHeader/>
      {children}
      </section>
      )
  }