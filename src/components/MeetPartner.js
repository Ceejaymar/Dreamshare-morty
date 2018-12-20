import React from "react";

const MeetPerson = () => {
  const people = [
    {
      id: 1,
      image: require("../assets/Person1.png"),
      icon: require("../assets/music2.png"),
      name: "Barry Hunter",
      bio: "Based in Chicago. I love playing tennis and loud music."
    },
    {
      id: 2,
      image: require("../assets/Person2.png"),
      icon: require("../assets/brush.png"),
      name: "Marie Bennett",
      bio: "Currently living in Colorado. Lover of art, languages and travelling."
    },
    {
      id: 3,
      image: require("../assets/Person3.png"),
      icon: require("../assets/camera.png"),
      name: "Diana Wells",
      bio: "Living in Athens, Greece. I love black and white classics, chillout music and green tea."
    },
    {
      id: 4,
      image: require("../assets/Person4.png"),
      icon: require("../assets/airplane.png"),
      name: "Christopher Pierce",
      bio: "Star Wars fanatic. I have a persistent enthusiasm to create new things."
    }
  ]

  return (
    <section className="section-meetperson">
      <div className="meet-person">
        <h2 className="meet-person__title">Meet a partner for your best</h2>
        <div className="meet-person__people">
          {
            people.map((person, key) => {
              let { id, image, icon, name, bio } = person;

              return (
                <div key={key} className="meet-person__content">
                  <img className="meet-person__img" src={image} alt="person" />
                  <img src={icon} className={`meet-person__icon meet-person__icon--${id}`} alt="icon" />
                  <p className="meet-person__name">{name}</p>
                  <p className="meet-person__bio">{bio}</p>
                </div>
              )
            })
          }
        </div>
        <button className="meet-person__cta">See other partners</button>
      </div>
    </section>
  )
}

export default MeetPerson;