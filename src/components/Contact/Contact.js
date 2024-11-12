import React, { useRef, useState } from "react";
import { FaUbuntu } from "react-icons/fa";
import { MdLocationOn, MdCall, MdSend } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u4ayvfn",
        "template_mxhx7r8",
        form.current,
        "WOuQBcdtXMd5Y2bUD"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("messege sent ");
          toast.success("🦄 Message Sent!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          // Clear form fields
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // const notify = () => toast("Wow so easy!");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:mb-40 gap-14 items-center  justify-content-ceneter">
      <div className="mr-12i mx-6 lg:mx-0 ">
        <h3 className="text-2xl font-bold mb-6 text-gray-300">Contact Me!</h3>

        <form ref={form} onSubmit={sendEmail} className="">
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="user_name"
                id="floating_first_name"
                class="block py-3.5 px-0 w-full  rounded-md  text-gray-400 bg-gray-800 
           appearance-none 
           focus:border-b text-white text-md pl-3 border-blue-500
           focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="name"
                required
              />
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="user_email"
                id="floating_first_name"
                class="block py-3.5 px-0 w-full  rounded-md  text-gray-400 bg-gray-800 
           appearance-none 
           focus:border-b text-white text-md pl-3 border-blue-500
           focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="Email"
                required
              />
            </div>
          </div>

          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="user_subject"
              id="floating_first_name"
              class="block py-3.5 px-0 w-full  rounded-md  text-gray-400 bg-gray-800 
           appearance-none 
           focus:border-b text-white text-md pl-3 border-blue-500
           focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Subject"
              required
            />
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <textarea
              name="user_email"
              id="message"
              class="block py-3.5 px-3 w-full h-[8rem] rounded-md text-gray-400 bg-gray-800
           appearance-none resize-none
           focus:border-b border-blue-500
           focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Message"
              required
            ></textarea>
          </div>

          <button
            onClick={sendEmail}
            type="submit"
            class="text-white  
            focus:ring-4 focus:outline-none 
            font-medium rounded-lg text-lg w-full sm:w-auto px-20 py-2.5
             text-center bg-blue-500 hover:bg-blue-600 focus:ring-blue-800"
          >
            Submit
          </button>
          <ToastContainer />
        </form>
      </div>
      <div className="mt-14 mx-6 lg:mx-0">
        <h3 className="text-3xl font-bold text-gray-300 mb-3">Contact Info</h3>
        <p className="text-gray-400 text-sm leading-normal mb-5 lg:mb-0 md:text-lg mr-5">
          Always available for freelance work if the right project comes along,
          Feel free to contact me!
        </p>
        <div className="flex items-center justify-content-center">
          <div className="mb-4">
            <FaUbuntu className="text-blue-500  text-3xl my-10" />
            <MdLocationOn className="text-blue-500  text-3xl my-10" />
            <MdCall className="text-blue-500  text-3xl my-10" />
            <MdSend className="text-blue-500  text-3xl my-10" />
          </div>
          <div className="flex mx-6">
            <div className="border-l-2 border-gray-600 h-60 my-2 mt-7 ml-2 mb-8"></div>
          </div>
          <div>
            <div className="mb-4">
              <h5 className="text-gray-300 text:md sm:text-lg font-bold">
                Name
              </h5>
              <span className="text-gray-400 text-sm md:text-md font-semibold">
                Ngqabutho Kito Ndlovu
              </span>
            </div>
            <div className="mb-4">
              <h5 className="text-gray-300 text:md sm:text-lg font-bold">
                Location
              </h5>
              <span className="text-gray-400 text-sm md:text-md font-semibold">
                Beria JHB
              </span>
            </div>
            <div className="mb-4">
              <h5 className="text-gray-300 text:md sm:text-lg font-bold">
                Call Me
              </h5>
              <span className="text-gray-400 text-sm md:text-md font-semibold">
                +27 84 961 4484
              </span>
            </div>
            <div className="mb-4">
              <h5 className="text-gray-300 text:md sm:text-lg font-bold">
                Email Me
              </h5>
              <span className="text-gray-400 text-sm md:text-mdfont-semibold">
                kitokessian07@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
