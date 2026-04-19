const contactInfo = {
  addressLine1: '505 Queensway Ave. E., UN12,',
  addressLine2: 'Mississauga, Ontario.',
  postalCode: 'L5A 4B4',
  email: 'daycare@boaden.com',
  workingHours: 'Mon-Friday 9-5',
};

function ContactDetails() {
  return (
    <div className="contact-details" aria-label="Contact information">
      <p>{contactInfo.addressLine1}</p>
      <p>{contactInfo.addressLine2}</p>
      <p>{contactInfo.postalCode}</p>
      <p>Email: {contactInfo.email}</p>
      <p>Working Hours: {contactInfo.workingHours}</p>
    </div>
  );
}

export { contactInfo };
export default ContactDetails;
