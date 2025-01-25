import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [popupVisible, setPopupVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Please fill in all fields before submitting.");
    } else {
      // Show popup after successful form submission
      setPopupVisible(true);
      // Reset form data
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="md:text-4xl text-2xl text-[#E649A1] font-bold text-center py-2">Contact</h2>
          <div className="mt-2 w-16 h-1 bg-[#E649A1] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Contact Details */}
          <div className="p-8 rounded-lg shadow-lg hover:shadow-[0_8px_24px_rgba(230,73,161,0.5)] transition-shadow">
            <ul className="space-y-6">
              <li className="flex items-center">
                <div className="w-10 h-10 bg-[#E649A1] text-white flex items-center justify-center rounded-full">
                  📍
                </div>
                <div className="ml-4">
                  <h3 className="text-lg text-[#E649A1] font-semibold">
                    Address
                  </h3>
                  <p className="text-white">
                    Kolkata, West Bengal, 720257, India
                  </p>
                </div>
              </li>
              <li className="flex items-center">
                <div className="w-10 h-10 bg-green-500 text-white flex items-center justify-center rounded-full">
                  📞
                </div>
                <div className="ml-4">
                  <h3 className="text-lg text-[#E649A1] font-semibold">
                    Call Me
                  </h3>
                  <p className="text-white">+91 8969457707</p>
                </div>
              </li>
              <li className="flex items-center">
                <div className="w-10 h-10 bg-yellow-500 text-white flex items-center justify-center rounded-full">
                  ✉️
                </div>
                <div className="ml-4">
                  <h3 className="text-lg text-[#E649A1] font-semibold">
                    Email Me
                  </h3>
                  <p className="text-white">rajumesh8969457707@gmail.com</p>
                </div>
              </li>
            </ul>
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3182048.360692842!2d73.03633113000447!3d20.59368420000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396e84db29d2d7e9%3A0x549baaeabbf0a9c7!2sIndia!5e0!3m2!1sen!2sin!4v1695568306452!5m2!1sen!2sin"
                className="w-full h-64 rounded-lg"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              <div className="mt-4 text-center">
                <a
                  href="https://www.google.com/maps?q=Kolkata,+West+Bengal,+72xx57,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E649A1] font-semibold hover:underline"
                >
                  View Large Map
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="p-8 rounded-lg shadow-lg hover:shadow-[0_8px_24px_rgba(230,73,161,0.5)] transition-shadow">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E649A1]"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E649A1]"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-white font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E649A1]"
                  placeholder="Enter subject"
                />
              </div>
              <div className="mt-4">
                <label className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E649A1]"
                  placeholder="Write your message"
                  rows="5"
                ></textarea>
              </div>
              <div className="mt-6 text-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#E649A1] text-white font-semibold rounded-lg hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-[#E649A1] transition-all"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Popup Message */}
      {popupVisible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-lg font-semibold text-[#E649A1]">Thank You for Reaching Out!</h3>
            <p className="mt-4 text-gray-700">We will get back to you shortly.</p>
            <button
              onClick={closePopup}
              className="mt-6 px-6 py-2 bg-[#E649A1] text-white rounded-lg hover:bg-pink-500 focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
