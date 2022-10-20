import "./FooterStyled.css";
import { FaHome, FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { SlSocialFacebook, SlSocialInstagram, SlSocialYoutube } from "react-icons/sl";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#f8f3f2", marginRight: "2rem" }} />
            <div>
              <p>SMA NEGERI 1 UNGARAN</p>
              <p>Jl. Diponegoro No.42 Ungaran, Jawa Tengah</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone size={20} style={{ color: "#f8f3f2", marginRight: "2rem" }} />
              024-6922791
            </h4>
          </div>
          <div className="email">
            <h4>
              <IoMdMail size={20} style={{ color: "#f8f3f2", marginRight: "2rem" }} />
              sman1ung@yahoo.com
            </h4>
          </div>
        </div>

        <div className="right">
          <div className="social">
            <SlSocialFacebook size={30} style={{ color: "#f8f3f2", marginRight: "2rem" }} />
            <SlSocialInstagram size={30} style={{ color: "#f8f3f2", marginRight: "2rem" }} />
            <SlSocialYoutube size={30} style={{ color: "#f8f3f2", marginRight: "2rem" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
