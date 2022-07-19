/* placeholder focus:ring color is set to "ringfocus" make sure to add value in tailwind config file 
required axios, nodemailer, react-hook-form (yarn add)
required contact.js api and .env.local*/

import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import Image from "next/image";

function ContactForm({}) {
  const [sent, setSent] = useState(false);
  const toggle = () => {
    setSent(!sent);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  async function onSubmitForm(values) {
    let config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };
    setSent(true);
    try {
      const response = await axios(config);
      if (response.status == 200) {
        reset();
      }
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div
      className="bg-nude py-10 flex items-center justify-center"
      id="contact-us"
    >
      <div className="md:grid md:grid-cols-2 flex items-center justify-center w-full md:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl">
        <div className="justify-center hidden md:flex">
          <Image
            className="object-contain cursor-pointer"
            src="/contactus.png"
            alt="contact us image"
            width={300}
            height={300}
          ></Image>
        </div>
        <div className="w-full">
          <div className="px-5">
            <h2 className="py-2 text-aqua">Contact us</h2>
            <p className="text-primeText">
              for any inquiries, contact us using the form below.
            </p>
          </div>
          {!sent ? (
            <div className="flex flex-col justify-center px-5 py-10 w-full min-h-490 h-full max-w-2xl relative">
              <form
                onSubmit={handleSubmit(onSubmitForm)}
                className="grid grid-cols-1 gap-y-6 w-full"
              >
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "You must enter your name",
                      },
                    })}
                    className={`block w-full shadow py-3 px-4 border-gray-300 placeholder-gray-500 focus:ring-ringfocus focus:ring-2 focus:outline-none ${
                      errors.name
                        ? `ring-2 ring-red-500 focus:ring-red-500`
                        : null
                    }`}
                    placeholder="Full Name"
                  ></input>
                  <span className="text-red-400 text-sm py-2">
                    {errors?.name?.message}
                  </span>
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="text"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "You must enter your email",
                      },
                      minLength: {
                        value: 8,
                        message: "This is too short to be an email",
                      },
                      maxLength: {
                        value: 120,
                        message: "This is too long to be an email",
                      },
                      pattern: {
                        value:
                          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
                        message: "This is not a valid email",
                      },
                    })}
                    className={`block w-full shadow py-3 px-4 border-gray-300 placeholder-gray-500 focus:ring-ringfocus focus:ring-2 focus:outline-none ${
                      errors.email
                        ? `ring-2 ring-red-500 focus:ring-red-500`
                        : null
                    }`}
                    placeholder="Email"
                  ></input>
                  <span className="text-red-400 text-sm py-2">
                    {errors?.email?.message}
                  </span>
                </div>
                <div>
                  <label htmlFor="full number" className="sr-only">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    {...register("phone")}
                    className="block w-full shadow py-3 px-4 border-gray-300 placeholder-gray-500 
            focus:ring-ringfocus focus:ring-2 focus:outline-none"
                    placeholder="Phone Number"
                  ></input>
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    {...register("message", {
                      required: {
                        value: true,
                        message: "You must write a message",
                      },
                      maxLength: {
                        value: 1000,
                        message: "Your message cannot exceed 1000 characters",
                      },
                    })}
                    className={`block w-full shadow py-3 px-4 border-gray-300 placeholder-gray-500 focus:ring-ringfocus focus:ring-2 focus:outline-none ${
                      errors.message
                        ? `ring-2 ring-red-500 focus:ring-red-500`
                        : null
                    }`}
                    placeholder="Message"
                  ></textarea>
                  <span className="text-red-400 text-sm py-2">
                    {errors?.message?.message}
                  </span>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full md:w-auto inline-flex justify-center py-3 px-6 border border-transparent shadow text-base font-medium text-white bg-ringfocus hover:bg-primeText focus:ring-primeText"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center p-8 w-full max-w-2xl h-490 text-ringfocus">
              <div className="p-5 flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h2 className="text-center">Message sent successfully!</h2>
              </div>
              <div className="p-10 w-full flex justify-center">
                <button
                  type="button"
                  className="inline-flex justify-center w-full md:w-auto py-3 px-6 border border-transparent shadow text-base font-medium text-white bg-ringfocus hover:bg-primeText"
                  onClick={() => {
                    toggle();
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
