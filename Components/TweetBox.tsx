import React, { useState } from "react";
import '../tailwind.config' 
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from "@heroicons/react/outline";

function TweetBox() {
  const [input, setInput] = useState<string>("");

  return (
    <div className="flex space-x-2 p-5">
      <div>
        <img
          className="h-14 w-14 rounded-full object-cover mt-4"
          src="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=1280"
          alt=""
        />
      </div>
      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col">
          <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="What's Happening?"
            className="h-24 w-full text-xl outline-none placeholder:text-xl"
          />
          <div className="flex items-center ">
            <div className="flex space-x-2  text-twitter-600 flex-1 ">
              <PhotographIcon className="h-5 w-5 text-cyan-300 cursor-pointer transition-transform duration-150 ease-out hover:scale-150  hover:bg-gray-100 hover:rounded-full" />
              <SearchCircleIcon className="h-5 w-5  text-cyan-300 cursor-pointer transition-transform duration-150 ease-out hover:scale-150  hover:bg-gray-100 hover:rounded-full" />
              <EmojiHappyIcon className="h-5 w-5  text-cyan-300 cursor-pointer transition-transform duration-150 ease-out hover:scale-150  hover:bg-gray-100 hover:rounded-full" />
              <CalendarIcon className="h-5 w-5  text-cyan-300 cursor-pointer transition-transform duration-150 ease-out hover:scale-150  hover:bg-gray-100 hover:rounded-full" />
              <LocationMarkerIcon className="h-5 w-5  text-cyan-300 cursor-pointer transition-transform duration-150 ease-out hover:scale-150 hover:bg-gray-100 hover:rounded-full  " />
            </div>
            <button disabled={!input}
             className="bg-cyan-400 px-5 py-2  text-white font-bold rounded-full disabled:opacity-40">
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TweetBox;
