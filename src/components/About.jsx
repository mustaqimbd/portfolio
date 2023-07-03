import { FaFileDownload } from "react-icons/fa";

const About = () => {
  return (
    <div className="mt-20 pt-20" id="about">
      <h1 className="text-6xl font-bold text-center mb-6">About Me</h1>
      <div className="grid grid-cols-2 gap-6 items-center">
        <div>
          <img
            src="https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg?w=740&t=st=1688213177~exp=1688213777~hmac=fe40918ca0e184db9e756fbdc5f9d3219768d27a5116d85aa77592125fac6e7d"
            alt="photo"
          />
        </div>
        <div>
          <h1 className="font-bold text-2xl uppercase">Why would you consider hiring me?</h1>
          <p className="py-3">
            I am a MERN developer who is passionate about creating
            responsive,dynamic, and user-friendly websites.I am proficient in
            HTML, CSS, Tailwind,JavaScript ES6,React.js, React Router, Formik,
            Axios, Agile methodologies.
          </p>
          <p className="py-3">
            I am comfortable in utilizing Node.js, Express.js, MongoDB, etc. My
            experience includes developing front-end and back-end features,
            integrating third-party services, and implementing authentication
            and authorization systems.and I am continuously honing my skills
            through personal projects and online courses.
          </p>
          <p className="py-3">
            I am eager to contribute to a collaborative team, learn from
            experts, and enhance my expertise in Full Stack Development.
          </p>
          <a
            href="Mustaqim Khan's Resume.pdf"
            download
            className="bg-[#3CBC85] hover:bg-[#2bc582] text-white font-bold py-2 px-4 rounded-full w-[204px] shadow-lg flex gap-2 items-center justify-center"
          >
            Download Resume <FaFileDownload className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
