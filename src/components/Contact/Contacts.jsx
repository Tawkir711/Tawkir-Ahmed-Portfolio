import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fsdcfld",
        "template_dpnzgp4",
        form.current,
        "4okrIuJVVOm_E2-4F"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Successful",
            text: "Thanks for contacting me",
          });
        },
        (error) => {
          console.log(error.text);
        }
    );
    e.target.reset();
    
    
  };

  return (
    <div id="contact" className="mt-10 bg-base-200 py-3">
      <h2
        className="text-3xl text-center my-6 font-bold"
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        Contact with me
      </h2>
      <form
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
        ref={form}
        onSubmit={sendEmail}
        className="md:w-3/4 lg:w-1/2 mx-auto"
      >
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          name="your_name"
          placeholder="Your Name"
          className="input input-bordered w-full"
          required
        />
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          name="your_email"
          placeholder="Your Email"
          className="input input-bordered w-full"
          required
        />
        <label className="label">
          <span className="label-text">Message</span>
        </label>
        <textarea
          name="message"
          required
          placeholder="Your Message"
          className="textarea textarea-bordered textarea-lg w-full max-w-screen-xl"
        />
        <input
          type="submit"
          value="Send Message"
          className="btn bg-amber-400 text-white ml-52"
        />
      </form>
    </div>
  );
};
