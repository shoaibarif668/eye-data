import React from "react";
import FooterTop from "./footer-top";
import FooterBottom from "./footer-bottom";

const Footer = () => {
    return(
        <>
            <section className={"py-10 bg-[#1C2126]"}>
                <div className={"mx-auto container "}>
                    <FooterTop/>
                    <FooterBottom/>
                </div>
            </section>
        </>
    )
}
export default Footer
