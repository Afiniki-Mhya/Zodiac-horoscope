import React, { useState, useEffect } from "react";
import aries from "../Images/aries.jpg";
import Taurus from "../Images/Taurus.jpg";
import gemini from "../Images/gemini.jpg";
import cancer from "../Images/cancer.jpg";
import leo from "../Images/leo.jpg";
import virgo from "../Images/virgo.jpg";
import libra from "../Images/libra.jpg";
import scorpio from "../Images/scorpio.jpg";
import sagittarius from "../Images/sagittarius.jpg";
import capricon from "../Images/capricon.jpg";
import acquarius from "../Images/acquarius.jpg";
import pices from "../Images/pices.jpg";
import "./CarouselData.css";



function CarouselData() {
  const [current, setCurrent] = useState(0);
  useEffect (() => {
    setInterval(() => {
      setCurrent ((previous) => {
        return(
          (previous + 1)% data.length
        )
      })
    }, 5000)
  }, [  ])

  return (
    <div className="zodia-imgs">
      <div className="zodiac-items">
        {data.map((item, index) => {
          return (
            <div
              className={`imgs ${
                current === index
                  ? "active"
                  : (current + 1) % data.lenght === index
                  ? "previous"
                  : ""
              }`}
              style={{ color: "black" }}
            >
              <img src={item.img}></img>
              <h2>{item.heading}</h2>
              <p>{item.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
const data = [
  {
    img: aries,
    heading: "Aries (March 21 - April 19)",
    body: "The first sign of the zodiac, Aries loves to be number one. Naturally, this dynamic fire sign is no stranger to competition.",
  },
  {
    img: Taurus,
    heading: "Taurus (April 20 - May 20)",
    body: " What sign is more likely to take a six-hour bath, followed by a    luxurious Swedish massage and decadent dessert spread? Why Taurus, of    course! Taurus is an earth sign represented by the bull.",
  },
  {
    img: gemini,
    heading: "Gemini (May 21 - June 20)",
    body: "Have you ever been so busy that you wished you could clone yourself just to get everything done? That's the Gemini experience in a nutshell. Spontaneous, playful, and adorably erratic, Gemini is driven by its insatiable curiosity.",
  },
  {
    img: cancer,
    heading: "Cancer (June 21 - July 22)",
    body: "Represented by the crab, Cancer seamlessly weaves between the sea and shore representing Cancer’s ability to exist in both emotional and material realms.",
  },
  {
    img: leo,
    heading: "Leo (July 23 - August 22)",
    body: "Roll out the red carpet because Leo has arrived. Passionate, loyal, and infamously dramatic, Leo is represented by the lion and these spirited fire signs are the kings and queens of the celestial jungle.",
  },
  {
    img: virgo,
    heading: "Virgo (August 23 - September 22)",
    body: "You know the expression, 'if you want something done, give it to a busy person?' Well, that definitely is the Virgo anthem.",
  },
  {
    img: libra,
    heading: "Libra (September 23 - October 22)",
    body: "Balance, harmony, and justice define Libra energy. As a cardinal air sign, Libra is represented by the scales (interestingly, the only inanimate object of the zodiac), an association that reflects Libra's fixation on establishing equilibrium.",
  },
  {
    img: scorpio,
    heading: "Scorpio (October 23 - November 21)",
    body: "Elusive and mysterious, Scorpio is one of the most misunderstood signs of the zodiac. Scorpio is a water sign that uses emotional energy as fuel, cultivating powerful wisdom through both the physical and unseen realms.",
  },
  {
    img: sagittarius,
    heading: "Sagittarius (November 22 - December 21)",
    body: "Oh, the places Sagittarius goes! But… actually. This fire sign knows no bounds. Represented by the archer, Sagittarians are always on a quest for knowledge. ",
  },
  {
    img: capricon,
    heading: "Capricorn (December 22 - January 19)",
    body: "What is the most valuable resource? For Capricorn, the answer is clear: Time. Capricorn is climbing the mountain straight to the top and knows that patience, perseverance, and dedication is the only way to scale. ",
  },
  {
    img: acquarius,
    heading: "Aquarius (January 20 - February 18)",
    body: "Despite the 'aqua' in its name, Aquarius is actually the last air sign of the zodiac. Innovative, progressive, and shamelessly revolutionary, Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land.",
  },
  {
    img: pices,
    heading: "Pisces (February 19 - March 20)",
    body: "Despite the 'aqua' in its name, Aquarius is actually the last air sign of the zodiac. Innovative, progressive, and shamelessly revolutionary, Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land.",
  },
  {
    img: aries,
    heading: "Aries (March 21 - April 19)",
    body: "If you looked up the word 'psychic' in the dictionary, there would definitely be a picture of Pisces next to it. Pisces is the most intuitive, sensitive, and empathetic sign of the entire zodiac — and that’s because it’s the last of the last.",
  },
];
// const images = [aries]

export default CarouselData;

// export const images = [
//     {title:"Aries (March 21st - April 29th)" subtitile}
// ]
