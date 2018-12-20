import React from "react";

const Discover = () => {
  const categories = [
    {
      id: 1,
      image: require("../assets/Sports.png"),
      idea: 'Sports activities'
    },
    {
      id: 2,
      image: require("../assets/Health.png"),
      idea: 'Wellness and Health'
    },
    {
      id: 3,
      image: require("../assets/Extreme.png"),
      idea: 'Extreme Sports and Expeditions'
    },
    {
      id: 4,
      image: require("../assets/Games.png"),
      idea: 'Games'
    },
    {
      id: 5,
      image: require("../assets/Culture.png"),
      idea: 'Culture and Education'
    },
    {
      id: 6,
      image: require("../assets/Enjoyment.png"),
      idea: 'Enjoyment and Relaxation'
    },
    {
      id: 7,
      image: require("../assets/Traveling.png"),
      idea: 'Traveling'
    }
  ]

  return (

    <section className="section-discover">
      <div className="discover">
        <h2 className="discover__title">Discover holiday activity</h2>
        <div className="discover__content">
          {
            categories.map((category, key) => {
              let { id, image, idea } = category;

              return (
                <div key={key} className={`discover__category discover__category--${id}`}>
                  <img src={image} alt="" className={`discover__img discover__img--${id}`}/>
                  <div className="discover__overlay">{idea}</div>
                </div>
              )
            })

          }
        </div>
      </div>
    </section>
  )
}

export default Discover;