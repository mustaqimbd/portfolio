import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Home = () => {
  return (
    <div className="grid grid-cols-2 gap-6 mt-40 items-center">
      <div className="space-y-3">
        <p>MERN Stack Developer</p>
        <h1 className="text-4xl font-bold">Hi, I am</h1>
        <h1 className="text-5xl font-bold">Mustaqim Khan</h1>
        <p className="py-3">
          I am a MERN developer who is passionate about creating dynamic and
          user-friendly websites using MongoDB,I am a MERN developer who is
          passionate about creating dynamic and user-friendly websites using
          MongoDB.
        </p>
        <a href="mailto:mustaqimkhanbd@gmail.com" className="bg-[#3CBC85] hover:bg-[#2bc582]  text-white font-bold py-2 px-4 rounded-full shadow-lg">
          Hire Me
        </a>
        <h2 className="text-lg font-bold">Find With Me</h2>
        <ul className="flex gap-6 text-white">
          <li className="p-3 bg-[#3CBC85] rounded-full">
            <a href="https://www.linkedin.com/in/mustaqimbd/" target="_blank" rel="noreferrer"><FaLinkedin className="h-6 w-6" /></a>
          </li>
          <li className="p-3 bg-[#3CBC85] rounded-full">
          <a href="https://wa.me/8801728781726" target="_blank" rel="noreferrer"><FaWhatsapp className="h-6 w-6" /></a>
          </li>
        </ul>
      </div>
      <div>
        <img
          src="https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg?w=740&t=st=1688213177~exp=1688213777~hmac=fe40918ca0e184db9e756fbdc5f9d3219768d27a5116d85aa77592125fac6e7d"
          alt="photo"
        />
      </div>
    </div>
  );
};

export default Home;
