import React from "react";

const Footer = () => {
  let links = ["About", "Contact", "Press", "Blog", "Terms & Privacy", "Help"];

  return (
    <section className="section-footer">
      <div className="footer">
        <h3 className="footer__title">Dreamshare</h3>
        <ul className="footer__site-map">
          <p>Company</p>
          {
            links.map((link, key) => {
              return <li key={key} className="footer__link">{link}</li>;
            })
          }
        </ul>
        <p className="footer__partners">Partners</p>
      </div>
    </section>
  )
}

export default Footer;