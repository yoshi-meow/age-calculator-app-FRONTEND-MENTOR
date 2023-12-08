import React from "react";

const Footer = () => {
  return (
    <div className="footer text-center font-sans fixed bottom-10 left-0 right-0">
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        className="text-Purple underline-offset-1 underline"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        href="https://www.frontendmentor.io/profile/ncece11"
        className="text-Purple underline-offset-1 underline"
      >
        Yoshimeow
      </a>
      .
    </div>
  );
};

export default Footer;
