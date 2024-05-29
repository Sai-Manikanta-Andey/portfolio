import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const sucessNotify = () =>
    toast.success("Sent Successfully 🚀", {
      duration: 1000, // Set the duration in milliseconds (2 seconds in this example)
      onClick: () => toast.dismiss(), // Enable manual dismissal on click
    });
  const errorNotify = () =>
    toast.error("All fields are required ❌", {
      duration: 1000, // Set the duration in milliseconds (2 seconds in this example)
      onClick: () => toast.dismiss(), // Enable manual dismissal on click
    });
  const form = useRef();
  const checkData = (form)=>{
    if(form.current[0].value.length===0 || form.current[1].value.length===0 || form.current[2].value.length===0 ){
      errorNotify()
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wf4qz5l",
        "template_zcqbz5i",
        form.current,
        "At3pAz3l78Oq2I5L9"
      )
      .then(
        (result) => {
        sucessNotify()
          console.log(result.text);
        }
        
      );
  };

  return (
    <section className="paddings innerWidth contact-wrapper" id="Contact">
      <div className="contact-container">
        <div className="contact-title">
          <h3 className="heading">CONTACT</h3>
        </div>
        <div className="container-contact">
          <div className="left">
            <p className="  para secondaryText">
              Feel free to reach out for
              <strong style={{ color: "black" }}> job opportunities</strong> as
              I'm a recent graduate looking for oppurtunities, or any inquiries
              related to my work, services. I'm excited to connect with fellow
              professionals in Web Technologies.
            </p>
          </div>
          <div className="right">
            <form ref={form} onSubmit={sendEmail}>
              <div className="input-container">
                <div className="top-input-fields">
                  <div className="each-input">
                    <label className="secondaryText" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="input"
                      type="email"
                      placeholder="example@gmail.com"
                      name="from_name"
                      required
                    />
                  </div>
                  <div className="each-input">
                    <label className="secondaryText" htmlFor="subject">
                      Subject
                    </label>
                    <input
                      className="input"
                      type="text"
                      placeholder="Reaching out regarding..."
                      name="subject"
                      required
                    />
                  </div>
                </div>
                <div className="each-input">
                  <label className="secondaryText" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    style={{ resize: "vertical" }}
                    className="input"
                    placeholder="Enter your message"
                    name="message"
                    required
                  />
                </div>
                <button onClick={() => {checkData(form)
                }} type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="copyrights secondaryText">
        &copy; 2023 Sai Manikanta Andey
      </div>
    </section>
  );
};

export default Contact;
