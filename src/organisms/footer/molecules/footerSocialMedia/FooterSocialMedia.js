import React from "react";
import twitterImg from "../../../../images/twitter.png";
import InstaImg from "../../../../images/instagram.png";
import linkedImg from "../../../../images/linkedin.png";
export default function FooterSocialMedia() {
  return (
    <div className="footer-social-media flex align-center justify-center">
      <img src={twitterImg} alt="twitter image" />
      <img src={InstaImg} alt="insta image" />
      <img src={linkedImg} alt="linkedin image" />
    </div>
  );
}
