
import React from "react";
import { Link } from "react-router-dom";
// Importing images from the local folder
import featureOneImage from "../images/feature_one.jpg";
import featureTwoImage from "../images/feature_two.jpg";
import featureThreeImage from "../images/feature_three.jpg";
import featureFourImage from "../images/feature_four.jpg";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <header className="mb-8 text-center">
          <h1 className="text-5xl font-extrabold text-orange-500">SocialIQ</h1>
          <p className="text-xl mt-4 text-gray-300">
            Revolutionizing Social Media Analysis
          </p>
        </header>

        <main>
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold text-gray-100 sm:text-4xl">
              Try our Social Media Analysis Chat Bot
            </h2>

            <Link
              className="inline-flex items-center px-8 py-4 font-semibold bg-orange-500 text-gray-900 rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-lg"
              to="/chat"
            >
              <svg
                fill="currentColor"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              &nbsp; Get Started with ChatBot
            </Link>
          </div>
        </main>
      </div>

      {/* Cards Section */}
      <section className="bg-gray-800 py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {[
            {
              id: 1,
              title: "Rohit Gupta",
              description1: "College: Vidyalankar Institute of Technology",
              description2: "Stream: Information Technology",
              description3: "Year of graduation: 2027",
              image: featureThreeImage,
              imageStyle: {
                borderRadius: "10px",
                width: "100%",
                height: "300px",
                objectFit: "cover",
              },
              descriptionStyle: {
                textAlign: "center",
              },
            },
            {
              id: 2,
              title: "Kamraan Mulani",
              description1: "College: Vidyalankar Institute of Technology",
              description2: "Stream: Information Technology",
              description3: "Year of graduation: 2027",
              image: featureOneImage,
              imageStyle: {
                borderRadius: "10px",
                width: "100%",
                height: "300px",
                objectFit: "cover",
              },
              descriptionStyle: {
                textAlign: "center",
              },
            },
            {
              id: 3,
              title: "Aditya Singh",
              description1: "College: Vidyalankar Institute of Technology",
              description2: "Stream: Computer Science",
              description3: "Year of graduation: 2027",
              image: featureTwoImage,
              imageStyle: {
                borderRadius: "10px",
                width: "100%",
                height: "300px",
                objectFit: "cover",
              },
              descriptionStyle: {
                textAlign: "center",
              },
            },
            {
              id: 4,
              title: "Afraz Hussain",
              description1: "College: Vidyalankar Institute of Technology",
              description2: "Stream: Computer Science",
              description3: "Year of graduation: 2027",
              image: featureFourImage,
              imageStyle: {
                borderRadius: "10px",
                width: "100%",
                height: "300px",
                objectFit: "cover",
              },
              descriptionStyle: {
                textAlign: "center",
              },
            },
          ]
            .map((feature, index) => {
              // Adjust the order of the features here
              if (index === 0) return feature;
              if (index === 1) return feature;
              if (index === 2) return feature;
              return feature; // This line ensures the order is the same
            })
            .map((feature) => (
              <div
                key={feature.id}
                className="flex flex-col items-center p-6 bg-gray-700 rounded-lg shadow-lg"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  style={feature.imageStyle} // Apply the custom image styling
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-orange-500">
                  {feature.title}
                </h3>
                <p style={feature.descriptionStyle}>{feature.description1}</p>
                <p style={feature.descriptionStyle}>{feature.description2}</p>
                <p style={feature.descriptionStyle}>{feature.description3}</p>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
