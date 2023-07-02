import React from "react";

const Services = () => {
  return (
    <div className="mt-20 pt-20" id="services">
      <h1 className="text-6xl font-bold text-center mb-6">Services</h1>
      <div className="grid grid-cols-3 gap-5 justify-center">
        <div className="border border-purple-600 p-4 rounded-md">
          <h1 className="text-lg text-center font-bold mb-2">Front-End Development</h1>
          <p className="text-justify">
          Proficient in creating responsive UI with HTML, CSS, Javascript and React.js. Skilled at translating design into functional interfaces, building mobile-friendly websites, and optimizing performance.
          </p>
        </div>
        <div className="border border-purple-600 p-4 rounded-md">
          <h1 className="text-lg text-center font-bold mb-2">Custom Web Application Development</h1>
          <p className="text-justify">
          Skilled in creating tailor-made web applications that meet specific client requirements. Proficient in analyzing client needs and translating them into efficient and user-friendly solutions.
          </p>
        </div>
        <div className="border border-purple-600 p-4 rounded-md">
          <h1 className="text-lg text-center font-bold mb-2">Mobile-Friendly Web Development</h1>
          <p className="text-justify">
          Skilled in mobile-friendly web development, creating responsive applications for optimal user experiences. Proficient in modern technologies and frameworks.
          </p>
        </div>
        <div className="border border-purple-600 p-4 rounded-md">
          <h1 className="text-lg text-center font-bold mb-2">API Development and Integration</h1>
          <p className="text-justify">
          Experienced in RESTful API development, Node.js/Express.js. Integration of third-party APIs for enhanced functionality and system integration.
          </p>
        </div>
        <div className="border border-purple-600 p-4 rounded-md">
          <h1 className="text-lg text-center font-bold mb-2">Back-End Development</h1>
          <p className="text-justify">
          Comfortable in building server-side logic and database management with Node.js and MongoDB. Skilled in creating high-performance and secure back-end systems.
          </p>
        </div>
        <div className="border border-purple-600 p-4 rounded-md">
          <h1 className="text-lg text-center font-bold mb-2">Full-Stack Web Development</h1>
          <p className="text-justify">
          Skilled in MERN stack development, creating end-to-end solutions with optimal performance, front-end and back-end expertise, and API integration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
