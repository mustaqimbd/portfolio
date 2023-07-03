import { useState } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="mt-20 pt-20" id="contact">
      <h1 className="text-6xl font-bold text-center mb-10 red">Contact Me</h1>
      <div className="grid grid-cols-2 gap-10 p-4 container">
        <div className=" flex flex-col gap-10 justify-center">
          <div className="flex items-center gap-5">
            <div className="bg-[#3CBC85] p-5 rounded-md text-white text-3xl">
              <BiPhoneCall />
            </div>
            <div>
              <h1 className=" text-xl font-bold">Call</h1>
              <h1 className="text-lg font-bold"><a href="https://wa.me/8801728781726" target="_blank" rel="noreferrer">+88 01728781726</a></h1>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="bg-[#3CBC85] p-5 rounded-md text-white text-3xl">
              <HiOutlineMail />
            </div>
            <div>
              <h1 className=" text-xl font-bold">Email</h1>
              <h1 className="text-lg font-bold"><a href="mailto:mustaqimkhanbd@gmail.com">mustaqimkhanbd@gmail.com</a></h1>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="bg-[#3CBC85] p-5 rounded-md text-white text-3xl">
              <GoLocation />
            </div>
            <div>
              <h1 className=" text-xl font-bold">Pabna</h1>
              <h1 className="text-lg font-bold">Bangladesh</h1>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="name">
              Name:
            </label>
            <input
              className="border border-gray-300 p-2 rounded-md w-full"
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="border border-gray-300 p-2 rounded-md w-full"
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="subject">
              Subject:
            </label>
            <input
              className="border border-gray-300 p-2 rounded-md w-full"
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="message">
              Message:
            </label>
            <textarea
              className="border border-gray-300 p-2 rounded-md w-full"
              name="message"
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-[#3CBC85] hover:bg-[#2bc582] text-white font-bold py-2 px-4 rounded w-[50%]"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
