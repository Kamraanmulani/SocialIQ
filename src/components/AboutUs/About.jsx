import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-gray-900">
      <div className="container m-auto px-6 text-gray-300 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:w-4/12 lg:w-4/12">
            <img
              src="https://img.freepik.com/free-vector/chat-bot-concept-illustration_114360-5412.jpg?t=st=1736237708~exp=1736241308~hmac=d48a8042ef1b3a0723feac146ea95853c52ab76ef00cfb55029bb120a870be7d&w=740"
              alt="Chatbot illustration"
              className="w-full max-w-sm h-auto rounded-lg shadow-lg mx-auto"
            />
          </div>

          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-2xl text-white font-bold md:text-4xl">
              SocialIQ: Revolutionizing Social Media Analysis
            </h2>
            <p className="mt-6 text-gray-300">
              SocialIQ is an advanced chatbot designed to provide insightful
              analysis of social media performance. By leveraging cutting-edge
              technologies, it helps users understand trends, engagement, and
              growth opportunities across various platforms.
            </p>
            <p className="mt-4 text-gray-300">
              With SocialIQ, you can effortlessly track engagement metrics,
              analyze post performance, and get AI-powered suggestions to
              optimize your social media strategy. Empower your decisions with
              data-driven insights and stay ahead in the digital landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
