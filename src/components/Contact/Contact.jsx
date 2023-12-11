import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ContactUs = () => {
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    console.log(name,email,message);
  };

  const handleDisable = (e) => {
    const typeAll = e.target.value;
    if (typeAll) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }

  const messageSend = () => {
    Swal.fire({
      icon: "success",
      title: "Successful",
      text: "Thanks for contacting me.",
    });
  };

  return (
    <div className="my-10 bg-base-200 py-3">
      <h2 className="text-3xl text-center my-6 font-bold">
        Contact with me
      </h2>
      <h2 className="text-xl text-center my-6 font-semibold">
        E-mail: mdtawkir711@gmail.com <br />
        Call : 01787782968
      </h2>
      <form onSubmit={handleSubmit} className="md:w-3/4 lg:w-1/2 mx-auto">
        <div className="form-control" onBlur={handleDisable}>
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="input input-bordered"
            required 
            name="name"
          />
        </div>
        <div className="form-control" onBlur={handleDisable}>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter your E-mail"
            className="input input-bordered"
            required
            name="email"
          />
        </div>
        <div className="form-control" onBlur={handleDisable}>
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea name='message' required
            placeholder="Type your message.."
            className="textarea textarea-bordered textarea-lg w-full max-w-screen-xl"
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <button onClick={messageSend} type='reset' disabled={disabled} className="btn bg-amber-400 text-white">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;