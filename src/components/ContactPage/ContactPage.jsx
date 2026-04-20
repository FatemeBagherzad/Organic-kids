import { useState } from 'react';
import ContactDetails, { contactInfo } from '../ContactDetails/ContactDetails';
import './ContactPage.scss';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = formData.subject || 'Organic Kids inquiry';
    const bodyLines = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      '',
      formData.message,
    ];

    const mailtoUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
    window.location.href = mailtoUrl;
  };

  return (
    <main className="contact-page" aria-label="Contact us page">
      <section className="contact-page__card">
        <div className="contact-page__intro">
          <span className="contact-page__eyebrow">
            We would love to hear from you
          </span>
          <h1>Contact Us</h1>
          <p className="contact-page__subtitle">
            Reach out for enrollment, menu questions, allergies, billing help,
            or anything families need before placing an order.
          </p>
        </div>

        <div className="contact-page__content">
          <ContactDetails />

          <form className="contact-form" onSubmit={handleSubmit}>
            <label className="contact-form__field">
              <span>Your Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Parent or guardian name"
                required
              />
            </label>

            <label className="contact-form__field">
              <span>Email Address</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </label>

            <label className="contact-form__field">
              <span>Subject</span>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can we help?"
              />
            </label>

            <label className="contact-form__field">
              <span>Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us what you need and we will get back to you."
                rows="5"
                required
              />
            </label>

            <button type="submit" className="contact-form__submit">
              Email Organic Kids
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
