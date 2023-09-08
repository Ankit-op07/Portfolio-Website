import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Reviews = () => {
  return (
    <div className="mx-20">
      <div className="text-center mt-20 text-4xl font-semibold">
        What Our Clients Say
      </div>
      <div className="w-full h-60 border-2  border-black mb-60 mt-12 rounded-xl">
        <div className="w-full h-52 flex ">
          {/* photo */}
          <div className="flex flex-col items-center justify-center mt-3 w-2/6  h-full">
            <img
              src="https://imagevars.gulfnews.com/2019/04/08/190408_Jackie_Shroff_resources1_16a45059255_large.jpg"
              className="w-20 h-20 rounded-full"
              alt="Avatar"
            />
            <div>Mr. Jackie shroff</div>
            <div className="text-gray-500">Actor</div>
          </div>
          {/* rating and description */}

          <div className="w-4/6 h-full mr-8">
            <div className="w-full flex h-2/6  gap-2 items-end ">
              <FaQuoteLeft className="text-3xl text-gray-500" />
              <div>⭐⭐⭐⭐⭐</div>
            </div>
            <div className="w-full h-4/6 ml-8 mt-2 ">
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              officiis dicta, nesciunt deserunt nisi consequatur quia eaque.
              Voluptate sunt ipsum sequi, iste nulla quia deleniti molestias,
              natus totam praesentium accusantium. */}
              Kya mast project banate re bidu log tum matlab maza ich aa giya tagdi tagdi website k mafik
              . ye supreet bantai kya UI banaya mere liye kya baat or ankit bhai to sala usko pura ich convert kar diye working me shi h bidu tum log please in logo se ich kaam karao.
            </div>
          </div>
        </div>

        <div className="flex items-center h-4  justify-center gap-3">
          <div className="border rounded-full bg-black w-3 h-3  cursor-pointer"></div>
          <div className="border rounded-full bg-black w-4 h-4  cursor-pointer"></div>
          <div className="border rounded-full bg-black w-3 h-3  cursor-pointer"></div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
