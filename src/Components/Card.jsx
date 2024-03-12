import React from "react";

function Card() {
  const card = [{
    line1: "rolls-royce la rose noire droptail",
    subline1: "a dark and dramatic roadster",
    line2: "rolls-royce amethyst droptail",
    subline2: "a coachbuild masterpiece for one visionary owner",
    line3: "the history of coachbuild",
    subline3: "legacy, craft, and inspiration"
  }];

  return (
    <>
      {card.map((item, index) => (
        <div key={index} className="w-screen bg-black/90">
          <div className="slide-up flex justify-between text-white p-[50px] md:p-8">
            <CardItem
              imageSrc="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/coachbuild-rose-droptail/properties/TILES-SINGLE-ROSE.png/jcr:content/renditions/cq5dam.web.1920.webp"
              line={item.line1}
              subline={item.subline1}
            />
            <CardItem
              imageSrc="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/coachbuild-amethyst-droptail/properties/TILES-SINGLE-AMETHYST.png/jcr:content/renditions/cq5dam.web.1920.webp"
              line={item.line2}
              subline={item.subline2}
            />
            <CardItem
              imageSrc="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/coachbuild/page-properties/TILES-SINGLE-ROSE.png/jcr:content/renditions/cq5dam.web.1920.webp"
              line={item.line3}
              subline={item.subline3}
            />
          </div>
        </div>
      ))}
    </>
  );
}

const CardItem = ({ imageSrc, line, subline }) => (
  <div className="  w-full md:w-1/3 max-w-[300px] mx-2 my-4">
    <img
      src={imageSrc}
      alt=""
      className="h-auto w-full max-h-[300px]"
    />
    <div className="border-l border-solid border-gray-500 p-4 uppercase">
      <div className="text-xl md:text-3xl mb-2 ">{line}</div>
      <div className="text-lg">{subline}</div>
    </div>
  </div>
);

export default Card;
