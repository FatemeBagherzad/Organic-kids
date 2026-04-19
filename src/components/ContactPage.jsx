import ContactDetails from './ContactDetails';

function ContactPage() {
  return (
    <main className="contact-page" aria-label="Contact us page">
      <section className="contact-page__card">
        <h1>Contact Us</h1>
        <p className="contact-page__subtitle">
          Reach out for enrollment, nutrition questions, or weekly menu support.
        </p>
        <ContactDetails />
      </section>
    </main>
  );
}

export default ContactPage;
