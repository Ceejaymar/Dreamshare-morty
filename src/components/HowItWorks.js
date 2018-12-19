import React from "react";

const HowItWorks = () => {
  const cards = [
    {
      id: '1',
      title: "Sed leo enim, condimentum",
      para: "Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis."
    },
    {
      id: '2',
      title: "Morbi velit risus",
      para: "Nulla venenatis tempor dui in molestie. Nulla quis dictum purus, sit amet porttitor est."
    },
    {
      id: '3',
      title: "Sed leo enim, condimentum",
      para: "Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis."
    }
  ]

  return (
    <section className="section-howitworks">
      <div className="how-it-works">
        <h2 className="how-it-works__title">how dreamshare works</h2>
        <div className="how-it-works__cards">
          {
            cards.map((card, key) => {
              let { id, title, para } = card;
              
              return (
                <article key={key} className={ `how-it-works__card how-it-works__card--${card.id}` }>
                  <div className="how-it-works__content">
                    <p className="how-it-works__step">{ `step ${ id }` }</p>
                    <h3 className="how-it-works__sub-title">{ title }</h3>
                    <p className="how-it-works__para">{ para }</p>
                  </div>
                </article>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default HowItWorks;