import { useState } from "react";

const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData({
        name: "",
        email: "",
        feedback: ""
    });
  };

  return (
    <main>
      <section>
        <h2>About Us</h2>
        <p>
          Beyond the Chapters is a book discovery app designed to help readers
          find their next great read. Take our personality quiz to receive book
          recommendations based on your reading personality and save your
          favorites to your personal reading list.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>

        <form id="feedback-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>{" "}
          <br />
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>{" "}
          <br />
          <br />
          <label>
            Feedback:
            <textarea
              maxLength={200}
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
            />
          </label>{" "}
          <br />
          <br />
          <button
            type="submit"
            disabled={!formData.name || !formData.email || !formData.feedback}
          >
            Submit
          </button>
        </form>
        {submitted && (<p>Thank you! Your feedback has been submitted.</p>)}
      </section>
    </main>
  );
};

export default About;
