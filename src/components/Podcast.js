import React from "react";
import "../styles/global.css";
import PodcastTitle from "../images/PodcastTitle.png";
import PodcastTitleVertical from "../images/PodcastTitleVertical.png";
import PodcastScenery from "../images/PodcastScenery.png";

function Podcast() {
  return (
    <div className=" w-full max-h-2/3 my-24 pt-10 lg:flex xl:max-h-screen">
      <div className="w-full lg:hidden">
        <img className="w-3/4" src={PodcastTitle} alt="Podcast?" />
      </div>
      <div className="hidden w-1/5 lg:block ">
        <img
          className="h-3/4 ml-10 transform translate-y-1/3 xl:ml-24 2xl:ml-32"
          src={PodcastTitleVertical}
          alt="Podcast?"
        />
      </div>
      <div className="w-full px-5 font-sans lg:w-3/5">
        <div>
          <h3 className="text-xl pt-5 font-black text-regular-green">
            Vores national kendte podcast
          </h3>
          <h2 className="text-4xl pt-2 font-black text-regular-green xl:text-5xl 2xl:text-6xl">
            <span className="text-dark-text"> Stream vores</span> podcast nu!
          </h2>
          <p className="py-6 lg:pr-12 xl:pr-40 2xl:pr-96">
          I samarbejde med Næstved Provsti, har vi kreeret en podcast med fokus i at starte debatter med vores gæster samt sætte tanker i gang fra jeres perspektiv af. Vi debatterer om alt fra Kristendomen, depression, hvilke problemer kendte har været igennem i løbet af deres liv og meget mere. Hør mere om vores podcast herunder.
          </p>
          <a
            className="font-semibold bg-regular-green hover:bg-light-green px-4 py-2 text-biege-text rounded"
            href="https://github.com/"
          >
            Få mere at vide &rarr;
          </a>
        </div>
        <div className="w-full my-8 lg:w-3/4 lg:transform lg:translate-x-1/3 xl:w-2/3 xl:translate-x-2/4 xl:my-12 2xl:mt-24">
          <img src={PodcastScenery} alt="Podcast?" />
        </div>
      </div>
      <div className="w-full flex justify-end lg:hidden">
        <img className="w-3/4" src={PodcastTitle} alt="Podcast?" />
      </div>
      <div className="hidden w-1/5 lg:block 2xl:ml-10">
        <img className="h-3/4" src={PodcastTitleVertical} alt="Podcast?" />
      </div>
    </div>
  );
}

export default Podcast;
