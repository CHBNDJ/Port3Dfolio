import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import useAlert from "../hooks/useAlert.js";
import Alert from "../components/Alert.jsx";

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Nadji",
          from_email: form.email,
          to_email: "chabane.nadji@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )

      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <section className="sm:px-10 px-5 my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/images/terminal.png"
          alt="terminal-bg"
          className="absolute inset-0 min-h-screen"
        />

        <div className="max-w-xl relative z-10 sm:px-10 px-5 flex flex-col justify-center mt-30">
          <h3 className="md:text-4xl text-2xl font-semibold text-white">
            Let's work together
          </h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-5"
          >
            <label className="space-y-3">
              <span className="text-base md:text-lg text-white">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="text-base md:text-lg text-white">
                Email address
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="text-base md:text-lg text-white">
                Your Message
              </span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button
              className="bg-gray-500 px-5 py-1.5 min-h-12 rounded-lg shadow-black-200 shadow-2xl flex justify-center flex-row items-center text-base text-white gap-3 cursor-pointer"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}

              <img
                src="/images/arrow-up.png"
                alt="arrow-up"
                className="w-2.5 h-2.5 object-contain invert brightness-0"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
