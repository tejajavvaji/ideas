import { Component } from "react";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { TiSocialTwitter } from "react-icons/ti";
import "./index.css";

export default class SocialButtons extends Component {
  render() {
    return (
      <div className="main">
        <div className="icons-container">
          <div type="button" className="icon-button">
            <div className="icon-con con1">
              <FaFacebookF className="icon1 icon1" />
            </div>
            <p className="icon-text textColor1">Facebook</p>
          </div>
          <div type="button" className="icon-button">
            <div className="icon-con con2">
              <AiOutlineInstagram className="icon1" />
            </div>
            <p className="icon-text textColor2">Instagram</p>
          </div>
          <div type="button" className="icon-button">
            <div className="icon-con con3">
              <FaPinterestP className="icon1" />
            </div>
            <p className="icon-text textColor3">Pinterest</p>
          </div>
          <div type="button" className="icon-button">
            <div className="icon-con con4">
              <TiSocialTwitter className="icon1" />
            </div>
            <p className="icon-text textColor4">Twitter</p>
          </div>
          <div type="button" className="icon-button">
            <div className="icon-con con5">
              <AiFillYoutube className="icon1" />
            </div>
            <p className="icon-text textColor5">YouTube</p>
          </div>
        </div>
      </div>
    );
  }
}
