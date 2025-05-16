import React from "react";
export default function Contact() {
  return (
    <form className="max-w-3xl mt-6 space-y-4 text-center mx-auto ">
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="First name"
          className="border rounded p-2 w-full"
        />
        <input
          type="text"
          placeholder="Last name"
          className="border rounded p-2 w-full"
        />
      </div>
      <input
        type="email"
        placeholder="Email"
        className="border rounded p-2 w-full"
      />
      <textarea
        placeholder="Your message"
        className="border rounded p-2 w-full h-32"
      ></textarea>
      <button
        type="submit"
        className="border p-2 bg-blue-400 rounded-xl cursor-pointer hover:bg-blue-700 text-white"
      >
        Submit
      </button>
    </form>
  );
}
