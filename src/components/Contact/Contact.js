import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../assets/styles/style.css";
import Footer from "../Footer/Footer";

const Contact = () => {
  const form = useRef();

  // send message using email.js
  const sendEmail = (e) => {
    e.preventDefault();

    // email.js code
    emailjs
      .sendForm(
        "service_tkpd7cc",
        "template_w0uj0je",
        form.current,
        "_sxOGFnN_t5OJ2e16"
      )
      .then(
        (result) => {
          console.log(result.text);
          // show toast message
          toast.success("Message Sent Successfully!", {
            position: "bottom-center",
            autoClose: 3000,
            transition: Slide,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className="py-6 px-6 md:px-20 lg:px-20" id="contact">
      <div className="my-12">
        <h1 className="section-title text-white">
          Get In <span>Touch</span>
        </h1>
        <hr className="heading-underline-a" />
        <hr className="heading-underline-b" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-8 mb-12">
        <div className="col-span-2">
          <h1 className="contact-heading-title">Don't be shy!</h1>
          <p className="contact-heading-text">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className="flex items-center">
            <p className="bg-[#D7F9DB] text-[#1cbe59] p-3 rounded-[50px] text-3xl">
              <MdLocationOn />
            </p>
            <div className="ml-6">
              <h2 className="contact-title">Address point</h2>
              <h3 className="contact-text">Chittagong, Bangladesh</h3>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <p className="bg-[#FFE6D7] text-[#f75023] p-3 rounded-[50px] text-3xl">
              <MdEmail />
            </p>
            <div className="ml-6">
              <h2 className="contact-title">Mail me</h2>
              <a href="mailto:habidhossen2@gmail.com" className="contact-text">
                habidhossen2@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <p className="bg-[#DBEEF3] text-[#8067f0] p-3 rounded-[50px] text-3xl">
              <MdPhone />
            </p>
            <div className="ml-6">
              <h2 className="contact-title">Call me</h2>
              <a href="tel:+8801854092871" className="contact-text">
                +88 01854-092871
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <form ref={form} onSubmit={sendEmail}>
            <div className="md:flex lg:flex gap-4">
              <input
                className="w-full md:w-1/2 lg:w-1/2 mb-4 md:mb-0 lg:mb-0"
                type="text"
                placeholder="Your Name"
                name="name"
                required
              />
              <input
                className="w-full md:w-1/2 lg:w-1/2"
                type="email"
                placeholder="Your Email"
                name="email"
                required
              />
            </div>
            <input
              className="w-full mt-4"
              type="text"
              placeholder="Subject"
              name="subject"
              required
            />
            <textarea
              className="w-full mt-4"
              name="message"
              id=""
              cols="30"
              rows="6"
              placeholder="Message"
              required
            ></textarea>
            <button type="submit" className="send-msg-btn">
              Send Message <FaTelegramPlane />
            </button>
          </form>
        </div>
      </div>

      <ToastContainer />

      {/* footer component */}
      <Footer />
    </section>
  );
};

export default Contact;
