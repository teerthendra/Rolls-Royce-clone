import React from "react";
import Discoverbutton from "./Discoverbutton";

function ArcadiaDroptail({ lines }) {
  return (
    <>
      {lines.map((item, index) => (
        <div
          key={index}
          className="bg-cover bg-center bg-no-repeat flex justify-center items-center h-screen w-screen"
          style={{
            backgroundImage: `url("https://cf-images.eu-west-1.prod.boltdns.net/v1/static/1634657725001/55fbe828-d7f0-4595-b6e2-64ca6e2b1a51/943c838a-27ec-4a2f-bf4c-f88917afe981/1080x1920/match/image.jpg")`,
          }}
        >
          <div className="text-white text-center slide-up">
            <div className="text-8xl tracking-wider mb-5 uppercase">
              {item.line3}
            </div>
            <Discoverbutton />
          </div>
        </div>
      ))}
    </>
  );
}

export default ArcadiaDroptail;
