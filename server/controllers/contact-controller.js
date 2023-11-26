const Contact = require("../models/contact-model");

const contactForm = async (req, res) => {
  try {
    const contactDetails = req.body;
    await Contact.create(contactDetails);

    return res.status(200).json({ msg: "Your message sent successfully " });
  } catch (error) {
    return res.status(500).json({ msg: "Your message not delivered " });
  }
};

module.exports = contactForm;
