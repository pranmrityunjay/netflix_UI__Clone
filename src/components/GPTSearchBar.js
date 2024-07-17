import React from "react";
import lang from "../utils/languageConstants";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useRef } from "react";
import openai from "../utils/openAI";
import { API_Option } from "../utils/constants";

const GPTSearchBar = () => {
  // const [choose,chnangeChoose]=useState("eng");
  const choose = useSelector((store) => store.config.lang);
  const Input = useRef(null);
  const handleClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      Input.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
    }
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    
  };

  return (
    <div>
      <div className="pt-[10%] flex justify-center">
        <form
          className=" bg-black p-3 grid grid-cols-12 rounded-sm w-screen md:w-1/2"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="col-span-9 p-2 mx-3 bg-gray-700"
            type="text"
            placeholder={
              // choose == "en" ? lang.en.gptSeacrhPlaceHolder :
              // choose == "hin" ? lang.hin.gptSeacrhPlaceHolder :
              // choose == "french" ? lang.french.gptSeacrhPlaceHolder :
              // ""
              lang[choose].gptSeacrhPlaceHolder
            }
            ref={Input}
          ></input>
          <button className="col-span-3 p-2 bg-red-700" onClick={handleClick}>
            {
              // choose == "en" ? lang.en.search:
              // choose == "hin" ? lang.hin.search:
              // choose == "french" ? lang.french.search :
              // ""

              lang[choose].search
            }
          </button>
        </form>
      </div>

      {/* <div className="bg-green-600 w-1/2 mx-auto my-2 rounded-sm">
        <span className="text-white mx-2">Select your language:</span>
        <span onClick={(e)=>chnangeChoose("en")}> English </span>
        <span onClick={(e)=>chnangeChoose("hin")}> Hindi </span>
        <span onClick={(e)=>chnangeChoose("french")}> French </span>

        
      </div> */}
    </div>
  );
};

export default GPTSearchBar;
