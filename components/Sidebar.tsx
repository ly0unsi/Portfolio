import {AiFillBulb, AiFillGithub, AiFillInstagram, AiFillLinkedin, } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Image
        src="/images/My logo.png"
        alt="avatar"
        className="mx-auto border-solid border-1 border-red-500 rounded-full "
        height="110px"
        width="110px"
        layout="intrinsic"
        quality="100"
      />
     <Image
        src="/images/Abdellah Lyounsi.svg"
        alt="avatar"
        className="mx-auto text-red-500"
        height="60px"
        width='230px'
        layout="intrinsic"
        quality="100"
      />
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Web Developer
      </p>
      {/* Resume */}
      <a
        href="/assets/cv-Abdellah-Lyounsi.pdf"
        download="Abdellah-Lyounsi.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
      >
        <GiTie className="w-6 h-6" />
        <span>Download Resume</span>
      </a>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-red-500 md:w-full ">
        <a href="https://www.instagram.com/0ur.quran">
          <AiFillInstagram className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/abdllah-lyounsi-476bb81b9/" >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.github.com/ly0unsi">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
        </a>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Kenitra,Morocco </span>
        </div>
        <p className="my-2 "> abdllahlyounsi@gmail.com </p>
        <p className="my-2"> +212 674845729 </p>
      </div>

      {/* Email Button */}

      <button
        className="w-6/12 px-5 py-2 text-white bg-black rounded-l-full cursor-pointer bg-gradient-to-r from-red-500 to-blue-500 hover:scale-105 focus:outline-none"
        onClick={() => window.open("mailto:abdllahlyounsi@gmail.com")}
      >
        Email me
      </button>
      <button
        onClick={changeTheme}
        className="w-3/12 px-2 py-2 ml-1 text-white rounded-r-full cursor-pointer bg-gradient-to-r to-blue-600 from-blue-500 focus:outline-none hover:scale-105 "
      >

        { theme === "light" ? 'Dark' : 'Light'}
      </button>
    </>
  );
};

export default Sidebar;
