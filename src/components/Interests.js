import React from "react";

const Interests = () => {
  return (
    <section className="section-interests">
      <h2 className="section-interests__title">Create your holiday</h2>
      <p className="section-interests__question">Hi! What are your holiday interests?</p>
      <div className="section-interests__search-group">
        <input type="text" className="section-interests__input" placeholder="Enter your interests" />
        <button className="section-interests__button">Search Partners</button>
      </div>
    </section>
  )
}

export default Interests;