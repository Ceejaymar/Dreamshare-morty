import React from "react";

const Header = () => {
  return (
    <section className="section-header">
      <div className="header">
        <nav className="header__nav">
          <p className="header__brand">dreamshare</p>
          <div className="header__links">
            <a href="index.html" className="header__link header__link--1">Log in</a>
            <a href="index.html" className="header__link header__link--2">Sign up</a>
          </div>
        </nav>
        <div className="header__content">
          <h1 className="header__title">share your holiday dream</h1>
          <p className="header__sub-title">And find the perfect partner to fulfill it</p>
          <button className="header__cta">Find your holiday partner</button>
        </div>
      </div>
    </section>
  )
}

export default Header;