import React from "react";
import profile from "../assets/images/pic.jpg";

const Home = () => {
  return (
    <div className="flex flex-col items-center md:flex-row">
      <div className="text-center mt-6 md:mt-0">
        <img
          src={profile}
          alt="profile"
          className="w-44 h-44 md:w-60 md:h-auto mx-auto rounded-full md:rounded-none"
        />

        <div className="py-8">
          <h1 className="text-2xl">MD. Rakibul Hasan</h1>
          <h6 className="">Front End Developer (React Js)</h6>
        </div>
      </div>
      <div className="flex items-center px-5 md:px-10 xl:px-20 flex-1 text-center md:text-left">
        <div className="py-6">
          <h1 className="text-3xl pb-4">About Myself</h1>
          <p className="text-lg">
            Hello, <br /> I am Rakibul Hasan a front-end developer and
            passionate about coding. I have more than one year of experience and
            complete almost 10+ projects. I have skills in React, JavaScript,
            HTML5, CSS3, Tailwind CSS, Bootstrap, SCSS and basic skills in
            Redux, Firebase, Webpack, Figma and XD. <br /> I am a self-learner
            and self-motivated.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
