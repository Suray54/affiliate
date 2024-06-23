import React from "react";

const Footer = () => {
  return (
    <section className="w-full footer">
      <div className="max-w-[80vw] p-5 mx-auto flex justify-center align-middle">
        <p className="">
          Copyright &#169; {new Date().getFullYear()} all rights reserved |
          developed by Suranjan rai
        </p>
      </div>
    </section>
  );
};

export default Footer;
