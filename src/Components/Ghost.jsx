import React from "react";
import Discoverbutton from "./Discoverbutton";

function Ghost({lines}) {

  return (
    <>
    {lines.map((item)=>(
      <div className='bg-[url("https://cf-images.eu-west-1.prod.boltdns.net/v1/jit/1634657725001/afdc6e1a-1e5e-464b-821d-fe1e21a038a3/main/1080x1920/7s521ms/match/image.jpg")] bg-cover bg-top h-screen w-screen bg-no-repeat '>

        <div className="text-white flex justify-center items-center h-full text-center ">
          <div className="slide-up ">
            <div className="text-lg md:text-2xl lg:text-2xl tracking-wider">
              {item.line1}
            </div>
            <div className="text-9xl tracking-wider mb-5">{item.line2}</div>
            <Discoverbutton/>
          </div>
        </div>
      </div>
      ))}
    </>
  );
}

export default Ghost;
