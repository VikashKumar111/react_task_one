import React from "react";
import FacebookLogo from "../../../../components/FacebookLogo";
import LinkedinLogo from "../../../../components/LinkedinLogo";
import TwitterLogo from "../../../../components/TwitterLogo";
import InstagramLogo from "../../../../components/InstagramLogo";
import HandPointing from "../../../../components/HandPointing";
import Logo from "../../../../components/HeaderLogo";
import HeaderArrow from "../../../../components/HeaderArrow";
import HeaderSearch from "../../../../components/HeaderSearch";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-dark">
          <FacebookLogo />
          <LinkedinLogo />
          <TwitterLogo />
          <InstagramLogo />
          <HandPointing />
          <h6> Join the fight, Become a Volunteer </h6>
        </div>
        <div className="header-green">
          <Logo />
          <ul>
            <li>
              <a style={{ color: "lightgreen" }} href="/">
                Home
              </a>
              <HeaderArrow />
            </li>
            <li>
              <a href="/">Our Cause</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
            <li>
              <a href="/">Cases</a>
            </li>
            <li>
              <a href="/">Our Benefactors</a>
            </li>
          </ul>
          <HeaderSearch />
          <div>
            <button>Help Us Fight</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
