import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

import SectionHead from "./SectionHead";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactDetails = [
    {
      icon: Phone,
      title: "Call Me",
      detail: "+880-1846-108023",
      href: "tel:+880-1846-108023",
    },
    {
      icon: Mail,
      title: "Email Me",
      detail: "tanjimulislam2001@gmail.com",
      href: "mailto:tanjimulislam2001@gmail.com",
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "Chattogram, Bangladesh",
      href: "https://maps.app.goo.gl/HUmr12gAthLwKyhR8",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Thank you for your message!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead heading={"Contact"} descriptionText={""} />
        <div className="bg-slate-50 dark:bg-slate-800 p-8 md:p-12 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-700">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-lime-500 focus:border-lime-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                >
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-lime-500 focus:border-lime-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                >
                  Message*
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-lime-500 focus:border-lime-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-slate-800 dark:bg-slate-900 text-white font-semibold hover:bg-slate-700 dark:hover:bg-black focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>

            {/* Contact Details */}
            <div className="flex flex-col justify-center space-y-8">
              {contactDetails.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-lime-400/20 dark:bg-lime-900/50 p-3 rounded-full">
                    <item.icon className="w-6 h-6 text-lime-600 dark:text-lime-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      <a href={item.href} target="_blank"> {item.detail} </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
