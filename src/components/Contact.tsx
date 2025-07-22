"use client";
import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_MESSAGE } from "@/graphql/mutates/message";

const defaultFormState = {
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};
export const Contact = () => {
  const [loginFunction, { data, loading, error }] = useMutation(CREATE_MESSAGE);

  const [formData, setFormData] = useState(defaultFormState);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    loginFunction({
      variables: {
        name: formData.name.value,
        email: formData.email.value,
        message: formData.message.value,
      },
    });
    data && setIsSubmit(true);
  };
  if (isSubmit === true || error)
    return (
      <p className="text-white p-4 bg-black rounded-xl">
        {loading? 'Loading...' : ''}
        {error
          ? `Submission error! ${error.message}!`
          : "Message successfully sent!"}
      </p>
    );
  else
    return (
      <form className="form" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
            value={formData.name.value}
            onChange={(e) => {
              setFormData({
                ...formData,
                name: {
                  value: e.target.value,
                  error: "",
                },
              });
            }}
          />
          <input
            type="email"
            placeholder="Your email address"
            className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
            value={formData.email.value}
            onChange={(e) => {
              setFormData({
                ...formData,
                email: {
                  value: e.target.value,
                  error: "",
                },
              });
            }}
          />
        </div>
        <div>
          <textarea
            placeholder="Your Message"
            rows={10}
            className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full"
            value={formData.message.value}
            onChange={(e) => {
              setFormData({
                ...formData,
                message: {
                  value: e.target.value,
                  error: "",
                },
              });
            }}
          />
        </div>
        <button
          className="w-full px-2 py-2 mt-4 bg-neutral-100 rounded-md font-bold text-neutral-500"
          type="submit"
        >
          Submit{" "}
        </button>
      </form>
    );
};
