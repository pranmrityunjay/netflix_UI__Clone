import React from 'react';
import GPTSearchBar from "./GPTSearchBar"
import GPTMovieSuggestion from "./GPTMovieSuggestion"

const GPTSearch = () => {
  return (
    <div>
    <div className="absolute -z-10">
      <img className='h-screen object-cover w-screen' src={"https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg"}></img>
      </div>
      <div className='pt-[30%] md:p-0'>
      <GPTSearchBar/>
      </div>
      
    </div>
  )
}

export default GPTSearch;