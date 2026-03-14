import "./Footer.css";
import SkylabLogo from "../assets/skylab_logo.webp";
import InstagramLogo from "../assets/InstagramLogo.svg";
import LinkedinLogo from "../assets/LinkedinLogo.svg";
import XLogo from "../assets/XLogo.svg";
import YoutubeLogo from "../assets/YoutubeLogo.svg";
import SkysecLogo from "../assets/skyseclogo.jpg";
import WeblabLogo from "../assets/weblablogo.png";

function Footer() {
  return (
    <footer>
      <div className="footer-images">
        <a href="https://yildizskylab.com/" target="_blank">
          <img src={SkylabLogo} alt="Skylab Kulüp Logosu" />
        </a>
        <a href="https://skysec.yildizskylab.com/" target="_blank">
          <img
            className="skysec-logo"
            src={SkysecLogo}
            alt="SkySec Ekibi Logosu"
          />
        </a>
      </div>
      <h3>
        Sorularınız için bize{" "}
        <a href="mailto:info@yildizskylab.com">info@yildizskylab.com</a> mail
        adresine ulaşabilirsiniz.
      </h3>
      <div className="media-container">
        <a href="https://www.instagram.com/ytuskylab/" target="_blank">
          <img src={InstagramLogo} alt="Insta Logo" />
        </a>
        <a
          href="https://www.linkedin.com/company/ytuskylab?originalSubdomain=tr"
          target="_blank"
        >
          <img src={LinkedinLogo} alt="Linkedin Logo" />
        </a>
        <a href="https://x.com/skylabkulubu" target="_blank">
          <img src={XLogo} alt="X Logo" />
        </a>
        <a
          href="https://www.youtube.com/c/SKYLABKul%C3%BCb%C3%BC"
          target="_blank"
        >
          <img src={YoutubeLogo} alt="Youtube Logo" />
        </a>
      </div>
      <h3 className="weblab-info">
        <a href="https://yildizskylab.com/" target="_blank">
          <img
            className="weblab-logo"
            src={WeblabLogo}
            alt="WEBLAB Ekibi Logosu"
          />
        </a>
        SKY LAB: Bilgisayar Bilimleri Kulübü SKYMEDYA ekibi tarafından
        tasarlanmıştır, WEBLAB ekibi tarafından geliştirilmiştir.
      </h3>
    </footer>
  );
}

export default Footer;
