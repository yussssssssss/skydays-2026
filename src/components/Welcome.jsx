import "./Welcome.css";
import SkyDaysLogo from "../assets/skydayslogo.png";
import Canvas from "./Canvas";

function Welcome() {
  return (
    <article className="welcome">
      <Canvas className="canvas-background" />
      <div className="welcome-skydays">
        <img src={SkyDaysLogo} alt="SkyDays Yarışma Logosu" />
        <h1>SKYDAYS</h1>
        <p>Türkiye'nin En Büyük Siber Güvenlik Etkinliği</p>
      </div>

      <a href="https://skyl.app/skydays-katilimci-formu">Hemen Başvur!</a>

      <div className="welcome-footer">
        <p>27 Mart 2026</p>
        <a href="https://maps.app.goo.gl/RpLkG3WoQG2CfdFH7" target="_blank">
          YTÜ Davutpaşa <br /> Tarihi Hamam
        </a>
      </div>
    </article>
  );
}

export default Welcome;
