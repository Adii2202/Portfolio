import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, I'm Aditya Ningule. I am a Full-Stack Developer and an
          Undergrad Student in B-Tech Computer Science studying in <b> SPIT </b>
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/Adii2202" target="black">
          <BsGithub />
        </a>
        <a href="https://instagram.com/a_diitz/" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/aditya-ningule/" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;