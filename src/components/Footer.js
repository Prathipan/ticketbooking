import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <>
     <div className="footer-container">
       Ⓒ Copyright : {currentYear}
     </div>
    </>
  );
}

export default Footer;
