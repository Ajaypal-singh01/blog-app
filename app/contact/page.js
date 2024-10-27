"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to an API)
    console.log(formData);
    // Reset the form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-page relative pt-16 items-center flex flex-col h-screen" style={{ maxHeight: "860px" }}>
      <div className="container mx-auto items-center flex flex-wrap">
        <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
          <div className="pt-32 sm:pt-0">
            <h2 className={cn("font-semibold text-4xl", "text-purple-700 dark:text-purple-300")}>
              Contact Us
            </h2>
            <p className={cn("mt-4 text-2xl leading-relaxed", "text-gray-600 dark:text-gray-300")}>
              We’d love to hear from you! Please fill out the form below to get in touch with us.
            </p>
            <form className="mt-8" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg font-medium text-gray-700 dark:text-gray-200">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={cn(
                    "mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2",
                    "focus:border-purple-500 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                  )}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg font-medium text-gray-700 dark:text-gray-200">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={cn(
                    "mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2",
                    "focus:border-purple-500 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                  )}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-lg font-medium text-gray-700 dark:text-gray-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className={cn(
                    "mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2",
                    "focus:border-purple-500 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                  )}
                />
              </div>
              <button
                type="submit"
                className={cn(
                  "bg-purple-600 text-white font-bold py-2 px-4 rounded shadow",
                  "hover:bg-purple-700 transition duration-150 ease-in-out"
                )}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <img
        className="absolute top-0 right-0 pt-16 sm:w-4/12 -mt-48 sm:mt-0 w-8/12"
        src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/ill_header_3.png"
        alt="Illustration"
        style={{ maxHeight: "600px", width: "auto" }}
      />
    </section>
  );
}
