import React, { useState } from "react";

type Project = {
  name: string;
  link: string;
  image: string;
  description: string;
};

const FeaturedProjects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"ongoing" | "completed" | "future">("ongoing");

  const ongoingProjects: Project[] = [
    {
      name: "Earning Money Using AI",
      link: "https://earningmoneyusingai.com",
      image: "earnwithai.jpg", // replace with real image path
      description: "A comprehensive platform for earning money using AI technologies and strategies.",
    },
    {
      name: "Print Your Gifts",
      link: "https://printyourgifts.in/",
      image: "gifts.jpg",
      description: "Custom printing services for personalized gifts and merchandise.",
    },
    {
      name: "Real Estate",
      link: "https://realestate.vinofyx.com",
      image: "realestate.jpg",
      description: "Professional real estate services and property listings platform.",
    },
    {
      name: "Website Promotions",
      link: "https://promotions.vinofyx.com",
      image: "promotions.jpg",
      description: "Digital marketing and promotion services for businesses.",
    },
  ];

  const completedProjects: Project[] = [
    {
      name: "Nalini J Shankar Muses",
      link: "https://nalinijshnkrmuses.com/",
      image: "storywebsite.jpg",
      description: "A creative space sharing thoughts and inspiring content.",
    },
  ];

  return (
    <div className="elegant-card p-8">
      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-8">
        {["ongoing", "completed", "future"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as "ongoing" | "completed" | "future")}
            className={`px-6 py-2 rounded-lg font-semibold capitalize ${
              activeTab === tab
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab} Projects
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-3 gap-6">
        {activeTab === "ongoing" &&
          ongoingProjects.map((project) => (
            <div key={project.name} className="bg-white shadow-md rounded-2xl overflow-hidden">
              <img src={project.image} alt={project.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{project.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}

        {activeTab === "completed" &&
          completedProjects.map((project) => (
            <div key={project.name} className="bg-white shadow-md rounded-2xl overflow-hidden">
              <img src={project.image} alt={project.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{project.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}

        {activeTab === "future" && (
          <p className="text-muted-foreground col-span-3 text-center">
            🌟 Exciting projects coming soon…
          </p>
        )}
      </div>
    </div>
  );
};

export default FeaturedProjects;
