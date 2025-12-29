import { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }, 2000);
  };
  return (
    <section id="contact" className="c-space my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src={`/assets/terminal.png`}
          alt="terminal-bg"
          className="absolute inset-0 min-h-screen"
        />

        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-white-600 mt-3 text-lg">
            Are you looking to build a website for your business? A mobile
            application ? A custom solution unique to your business leveraging
            cutting edge tech such as Blockchain and Artifical Intelligence ? I
            am here to help.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>

              <input
                type="text"
                onChange={handleChange}
                name="name"
                value={form.name}
                className="field-input"
                placeholder="John Doe"
                required
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>

              <input
                type="email"
                onChange={handleChange}
                name="email"
                value={form.email}
                className="field-input"
                placeholder="john.doe@example.com"
                required
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Message</span>

              <textarea
                onChange={handleChange}
                name="message"
                value={form.message}
                className="field-input"
                placeholder="Hi, i have a job for you"
                required
                rows={5}
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
