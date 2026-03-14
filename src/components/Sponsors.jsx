import "./Sponsors.css";
import yktlogo from "../assets/ykt.jpg";
import aselsanlogo from "../assets/ASELSAN_logo.jpg";
import siemenslogo from "../assets/siemens.png";
import infinitumlogo from "../assets/infinitum_it.png";

function Sponsors() {
  return (
    <article className="sponsors">
      <h2>Sponsorlarımız</h2>

      <h3 className="sponsor-type">ANA SPONSOR</h3>
      <div className="sponsor">
        {/* <img className="sponsor-logo" src={yktlogo} alt="Yapı Kredi Teknoloji" /> */}
      </div>

      <h3 className="sponsor-type">GÜMÜŞ SPONSOR</h3>
      <div className="sponsor">
        {/* <img className="sponsor-logo" src={aselsanlogo} alt="ASELSAN" /> */}
      </div>

      <h3 className="sponsor-type">BRONZ SPONSOR</h3>
      <div className="sponsor">
        {/* <img className="sponsor-logo" src={siemenslogo} alt="SIEMENS" />
          <img className="sponsor-logo" src={infinitumlogo} alt="Infinitum IT" /> */}
      </div>
    </article>
  );
}

export default Sponsors;
