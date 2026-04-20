const contactInfo = {
  addressLine1: '505 Queensway Ave. E., UN12,',
  addressLine2: 'Mississauga, Ontario.',
  postalCode: 'L5A 4B4',
  email: 'daycare@boaden.com',
  phone: '(647) 555-1842',
  workingHours: 'Mon-Friday 9-5',
};

function ContactDetails() {
  const fullAddress = `${contactInfo.addressLine1} ${contactInfo.addressLine2} ${contactInfo.postalCode}`;

  return (
    <section className="contact-details" aria-label="Contact information">
      <div className="contact-details__panel">
        <span className="contact-details__label">Email:&nbsp; </span>
        <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
      </div>

      <div className="contact-details__panel">
        <span className="contact-details__label">Phone:&nbsp; </span>
        <a href={`tel:${contactInfo.phone.replace(/[^\d+]/g, '')}`}>
          {contactInfo.phone}
        </a>
      </div>

      <div className="contact-details__panel">
        <span className="contact-details__label">Office </span>
        <p>{fullAddress}</p>
      </div>

      <div className="contact-details__panel">
        <span className="contact-details__label">Hours </span>
        <p>{contactInfo.workingHours}</p>
      </div>
    </section>
  );
}

export { contactInfo };
export default ContactDetails;
