import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faInfoCircle,
  faAngleDown,
  faAngleRight,
  faTrophy,
  faStar,
  faDiamond,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import image1 from "./b1.png";

const MainSection = () => {
  return (
    <section className="relative w-full max-w-5xl mx-auto mt-8">
      {" "}
      <h1 className="font-inter font-normal text-4xl lg:text-5xl text-gray-800 text-center mb-5">
        {" "}
        Best Website builders in the US
      </h1>
      <div className="w-full max-w-5xl h-0.5 bg-gray-300 mb-2"></div>{" "}
      <div className="flex flex-row bg-gray-50 rounded items-center">
        {" "}
        <FontAwesomeIcon icon={faCheckCircle} className="mr-4" />
        <div className="font-inter font-normal text-base">
          Last Updated - February 22, 2020
        </div>{" "}
        <FontAwesomeIcon icon={faInfoCircle} className="ml-6" />
        <div className="font-inter font-normal text-base ml-4">
          Advertising Disclosure
        </div>{" "}
        <div className="flex-grow"></div>
        <div className="flex items-center">
          <div className="font-inter font-normal text-base mr-3">
            Top Relevant
          </div>{" "}
          <FontAwesomeIcon icon={faAngleDown} className="text-gray-600" />
        </div>
      </div>
      <div className="w-full max-w-5xl h-0.5 bg-gray-300 mt-2 "></div>{" "}
      <div className="flex flex-row bg-gray-50 mt-5 rounded items-center">
        {" "}
        <div className="font-inter font-normal text-base ml-2">Tools</div>{" "}
        <div className="font-inter font-normal text-base ml-20">
          AWS Builder
        </div>{" "}
        <div className="font-inter font-normal text-base ml-20">
          Start Build
        </div>
        <div className="font-inter font-normal text-base ml-20">
          Build Supplies
        </div>
        <div className="font-inter font-normal text-base ml-20">Tooling</div>
        <div className="font-inter font-normal text-base ml-20">
          BlueHosting
        </div>
      </div>
      <div className="flex flex-row bg-gray-50 mt-5 rounded items-center">
        <div className="font-inter font-normal text-base">Home</div>
        <FontAwesomeIcon icon={faAngleRight} className="text-gray-600 ml-3" />
        <div className="font-inter font-normal text-base ml-3">
          Hosting for all
        </div>
        <FontAwesomeIcon icon={faAngleRight} className="text-gray-600 ml-3" />
        <div className="font-inter font-normal text-base ml-3">Hosting</div>
        <FontAwesomeIcon icon={faAngleRight} className="text-gray-600 ml-3" />
        <div className="font-inter font-normal text-base ml-3">Hosting6</div>
        <FontAwesomeIcon icon={faAngleRight} className="text-gray-600 ml-3" />
        <div className="font-inter font-normal text-base ml-3">Hosting5</div>
      </div>
      <div className="flex items-center ml-auto mt-7">
        <div className="bg-orange-500 rounded-l p-2">
          <FontAwesomeIcon icon={faTrophy} className="text-white mr-2" />
          <span className="text-white">Best Choice</span>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <div className="flex flex-col items-center mb-72">
          <div
            className="font-inter font-normal text-base mt-5"
            style={{ fontSize: "2rem", lineHeight: "1" }}
          >
            1
          </div>
        </div>
        <div className="flex flex-col items-center mt-8 mb-48">
          <img src={image1} alt="Builder 1" className="w-48 h-38 mt-5 ml-6" />
          <div className="text-center mt-2 ml-8 text-xl">Builder 1</div>
        </div>

        <div className="flex flex-col items-center ml-8 mb-36">
          <div className="text-center ml-1 font-inter text-base text-lg">
            <b>WixPro 72-Inch Responsive Website Builder</b> - Comprehensive
          </div>
          <div className="text-center font-inter text-base text-lg">
            Digital Platform Creation Tool, Streamlined Design Interface for
          </div>
          <div className="text-center font-inter text-base text-lg mr-20">
            Professional Websites and Online Stores (Black/Blue)
          </div>
          <div className="text-center font-inter text-base text-lg ml-4 mr-96">
            <b>Main highlights</b>
          </div>
          <div className="text-center ml-1 font-inter text-base text-lg">
            [What You Get]: Receive the WixPro website builder suite,
          </div>
          <div className="text-center ml-7 font-inter text-base text-lg ">
            access to premium design templates, an extensive library of
          </div>
          <div className="text-center font-inter text-base text-lg mr-7">
            widgets and apps, and detailed step-by-step guides.
          </div>
          <div className="text-center font-inter text-base text-blue-600 text-lg mt-3 ml-4 mr-96">
            Show more
            <FontAwesomeIcon icon={faAngleDown} className="ml-3 mr-3" />
          </div>
        </div>
        <div className="flex flex-col items-center ml-8 mb-96 ml-16">
          <div className="relative">
            <div
              className="absolute w-135 h-118 left-1099 top-347 rounded-b-lg flex flex-col justify-center items-center"
              style={{ backgroundColor: "#F3F9FF" }}
            >
              <div className="text-3xl " style={{ color: "#074786" }}>
                9.8
              </div>
              <div className="text-base mt-1" style={{ color: "#074786" }}>
                Exceptional
              </div>
              <div className="flex mt-2">
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD700" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD700" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD700" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD700" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD700" }} />
              </div>
            </div>
          </div>
          <button className="absolute w-48 h-232 bg-blue-600 rounded-lg text-white mt-36 ml-24">
            View
          </button>
        </div>
      </div>
      <div className="flex items-center ml-auto">
        <div className="bg-orange-500 rounded-l p-2">
          <FontAwesomeIcon icon={faDiamond} className="text-white mr-2" />
          <span className="text-white">Best Value</span>
        </div>
      </div>
      <div className="flex flex-row items-center ">
        <div className="flex flex-col items-center mb-72">
          <div
            className="font-inter font-normal text-base mt-5"
            style={{ fontSize: "2rem", lineHeight: "1" }}
          >
            2
          </div>
        </div>
        <div className="flex flex-col items-center mt-8 mb-48">
          <img src={image1} alt="Builder " className="w-48 h-38 mt-5 ml-6" />
          <div className="text-center mt-2 ml-8 text-xl">Builder</div>
        </div>

        <div className="flex flex-col items-center ml-8 mb-36">
          <div className="text-center ml-1 font-inter text-base text-lg">
            <b>SiteCraft 68-Inch Ultimate Web Design Studio</b> - Advanced Site
          </div>
          <div className="text-center font-inter text-base text-lg mr-9">
            Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic
          </div>
          <div className="text-center font-inter text-base text-lg mr-24">
            Websites and E-commerce Platforms (Green/White)
          </div>
          <div className="text-center font-inter text-base text-lg ml-4 mr-96">
            <b>Main highlights</b>
          </div>
          <div className="text-center ml-1 font-inter text-base text-lg">
            [What You Get]: Gain access to the SiteCraft design studio,
          </div>
          <div className="text-center ml-7 font-inter text-base text-lg mr-16">
            featuring a robust selection of design elements, SEO
          </div>
          <div className="text-center font-inter text-base text-lg mr-16">
            optimization tools, and e-commerce integrations.
          </div>
          <div className="text-center font-inter text-base text-blue-600 text-lg mt-3 ml-4 mr-96">
            Show more
            <FontAwesomeIcon icon={faAngleDown} className="ml-3 mr-3" />
          </div>
        </div>
        <div className="flex flex-col items-center ml-8 mb-96 ml-16">
          <div className="relative">
            <div
              className="absolute w-135 h-118 left-1099 top-347 rounded-b-lg flex flex-col justify-center items-center"
              style={{ backgroundColor: "#F3F9FF" }}
            >
              <div className="text-3xl " style={{ color: "#074786" }}>
                9.5
              </div>
              <div className="text-base mt-1" style={{ color: "#074786" }}>
                Exceptional
              </div>
              <div className="flex mt-2">
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD700" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD700" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD700" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD700" }} />
                <FontAwesomeIcon
                  icon={faStarHalfAlt}
                  style={{ color: "#FFD700" }}
                />
              </div>
            </div>
          </div>
          <button className="absolute w-48 h-232 bg-blue-600 rounded-lg text-white mt-36 ml-24">
            View
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <div className="flex flex-col items-center mb-72">
          <div
            className="font-inter font-normal text-base mt-5"
            style={{ fontSize: "2rem", lineHeight: "1" }}
          >
            3
          </div>
        </div>
        <div className="flex flex-col items-center mt-8 mb-48">
          <img src={image1} alt="Builder 1" className="w-48 h-38 mt-5 ml-6" />
          <div className="text-center mt-2 ml-8 text-xl">Builder 1</div>
        </div>

        <div className="flex flex-col items-center ml-8 mb-36">
          <div className="text-center ml-1 font-inter text-base text-lg">
            <b>WixPro 72-Inch Responsive Website Builder</b> - Comprehensive
          </div>
          <div className="text-center font-inter text-base text-lg">
            Digital Platform Creation Tool, Streamlined Design Interface for
          </div>
          <div className="text-center font-inter text-base text-lg mr-20">
            Professional Websites and Online Stores (Black/Blue)
          </div>
          <div className="text-center font-inter text-base text-lg ml-4 mr-96">
            <b>Main highlights</b>
          </div>
          <div className="text-center ml-1 font-inter text-base text-lg">
            [What You Get]: Receive the WixPro website builder suite,
          </div>
          <div className="text-center ml-7 font-inter text-base text-lg ">
            access to premium design templates, an extensive library of
          </div>
          <div className="text-center font-inter text-base text-lg mr-7">
            widgets and apps, and detailed step-by-step guides.
          </div>
          <div className="text-center font-inter text-base text-blue-600 text-lg mt-3 ml-4 mr-96">
            Show more
            <FontAwesomeIcon icon={faAngleDown} className="ml-3 mr-3" />
          </div>
        </div>
        <div className="flex flex-col items-center ml-8 mb-96 ml-16">
          <div className="relative">
            <div
              className="absolute w-135 h-118 left-1099 top-347 rounded-b-lg flex flex-col justify-center items-center"
              style={{ backgroundColor: "#F3F9FF" }}
            >
              <div className="text-3xl " style={{ color: "#074786" }}>
                9.3
              </div>
              <div className="text-base mt-1" style={{ color: "#074786" }}>
                Exceptional
              </div>
              <div className="flex mt-2">
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD700" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD700" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD700" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD700" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD700" }} />
              </div>
            </div>
          </div>
          <button className="absolute w-48 h-232 bg-blue-600 rounded-lg text-white mt-36 ml-24">
            View
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <div className="flex flex-col items-center mb-72">
          <div
            className="font-inter font-normal text-base mt-5"
            style={{ fontSize: "2rem", lineHeight: "1" }}
          >
            4
          </div>
        </div>
        <div className="flex flex-col items-center mt-8 mb-48">
          <img src={image1} alt="Builder 1" className="w-48 h-38 mt-5 ml-6" />
          <div className="text-center mt-2 ml-8 text-xl">Builder 1</div>
        </div>

        <div className="flex flex-col items-center ml-8 mb-36">
          <div className="text-center ml-1 font-inter text-base text-lg">
            <b>WixPro 72-Inch Responsive Website Builder</b> - Comprehensive
          </div>
          <div className="text-center font-inter text-base text-lg">
            Digital Platform Creation Tool, Streamlined Design Interface for
          </div>
          <div className="text-center font-inter text-base text-lg mr-20">
            Professional Websites and Online Stores (Black/Blue)
          </div>
          <div className="text-center font-inter text-base text-lg ml-4 mr-96">
            <b>Main highlights</b>
          </div>
          <div
            className="absolute w-505 h-116  rounded-b-lg flex flex-col justify-center items-center mt-28 mr-60"
            style={{ backgroundColor: "#FFF4ED" }}
          >
            <div className="flex flex-row items-center mt-3">
              <div className="text-lg ml-2" style={{ color: "#1B88F4" }}>
                9.9
              </div>
              <div
                className="text-center font-inter text-base text-lg ml-3 mr-2"
                style={{ color: "#4B5665" }}
              >
                Building Responsive
              </div>
            </div>
            <div className="flex flex-row items-center ">
              <div className="text-lg" style={{ color: "#1B88F4" }}>
                8.9
              </div>
              <div
                className="text-center font-inter text-base text-lg ml-3 mr-28"
                style={{ color: "#4B5665" }}
              >
                Cool
              </div>
            </div>
            <div className="flex flex-row items-center mb-3">
              <div className="text-lg" style={{ color: "#1B88F4" }}>
                8.9
              </div>
              <div
                className="text-center font-inter text-base text-lg ml-3 mr-28"
                style={{ color: "#4B5665" }}
              >
                Docs
              </div>
            </div>
          </div>
          <div className="text-center font-inter text-base text-blue-600 text-lg mt-28 ml-4 mr-96">
            Show more
            <FontAwesomeIcon icon={faAngleDown} className="ml-3 mr-3" />
          </div>
        </div>
        <div className="flex flex-col items-center ml-8 mb-96 ml-16">
          <div className="relative">
            <div
              className="absolute w-135 h-118 left-1099 top-347 rounded-b-lg flex flex-col justify-center items-center"
              style={{ backgroundColor: "#F3F9FF" }}
            >
              <div className="text-3xl " style={{ color: "#074786" }}>
                9.8
              </div>
              <div className="text-base mt-1" style={{ color: "#074786" }}>
                Exceptional
              </div>
              <div className="flex mt-2">
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD700" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD700" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD700" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD700" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD700" }} />
              </div>
            </div>
          </div>
          <button className="absolute w-48 h-232 bg-blue-600 rounded-lg text-white mt-36 ml-24">
            View
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center ">
        <div
          className="absolute  font-inter font-normal text-base mb-24"
          style={{ fontSize: "32px", lineHeight: "44px", color: "#5C6874" }}
        >
          Sign up and get exclusive special deals
        </div>
        <button className="absolute w-20 h-57 bg-blue-600 rounded-lg text-white mb-8">
          Sign Up
        </button>
      </div>
    </section>
  );
};

export default MainSection;
