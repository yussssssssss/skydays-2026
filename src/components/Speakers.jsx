import "./Speakers.css";
import SkylabImage from "../assets/skylab_logo.webp";
function Speakers() {
  return (
    <article className="flow">
      <h2>PROGRAM VE AKIŞ</h2>
      <div className="program-container">
        <h3 className="program">
          Açılış Konuşması <br />
          12.30 - 13.00
        </h3>
        <div className="speaker-container">
          <figure className="speaker">
            <img
              style={{ padding: "20px" }}
              src={SkylabImage}
              alt="Konuşmacı"
            />
            <figcaption>
              <h3>SKY LAB</h3>
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="program-container">
        <h3 className="program">
          {/* Infinitum IT */} <br /> 13.00 - 13.40
        </h3>
        <div className="speaker-container">
          <figure className="speaker">
            {/* <img src="/src/assets/konusmacilar/infinitum/Gokhan.jpeg" alt="Konuşmacı" /> */}
            <figcaption>
              <h3>{/* Gökhan Tatar */}</h3>
              <p>{/* CSO - Managing Partner */}</p>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="program-container">
        <h3 className="program">
          {/* ROKETSAN */} <br /> 14.40 - 15.20
        </h3>
        <div className="speaker-container">
          <figure className="speaker">
            {/* <img src="/src/assets/konusmacilar/roketsan/Hacer.jpeg" alt="Konuşmacı" /> */}
            <figcaption>
              {/* <h3>Hacer Dalkıran</h3>
              <p>Cyber Security Engineer</p> */}
            </figcaption>
          </figure>
          <figure className="speaker">
            {/* <img src="/src/assets/konusmacilar/roketsan/Mehmet.jpeg" alt="Konuşmacı" /> */}
            <figcaption>
              {/* <h3>Mehmet Sercan Sancak</h3>
              <p>Cyber Security Engineer</p> */}
            </figcaption>
          </figure>
          <figure className="speaker">
            {/* <img src="/src/assets/konusmacilar/roketsan/Can.jpeg" alt="Konuşmacı" /> */}
            <figcaption>
              {/* <h3>Can Öztaş</h3>
              <p>Cyber Security Engineer</p> */}
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="program-container">
        <h3 className="program">
          {/* ASELSAN */} <br /> 15.35 - 16.15
        </h3>
        <div className="speaker-container">
          <figure className="speaker">
            {/* <img src="/src/assets/konusmacilar/aselsan/Tevfik.jpeg" alt="Konuşmacı" /> */}
            <figcaption>
              {/* <h3>Tevfik Demirel</h3>
              <p>
                Cyber Security Engineer <br /> Team Lead
              </p> */}
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="program-container">
        <h3 className="program">
          {/* SIEMENS */} <br /> 16.25 - 17.05
        </h3>
        <div className="speaker-container">
          <figure className="speaker">
            {/* <img src="/src/assets/konusmacilar/siemens/Sukru.jpeg" alt="Konuşmacı" /> */}
            <figcaption>
              {/* <h3>Şükrü Güçlü Dutluca</h3>
              <p>Siber Güvenlik Ülke Yöneticisi</p> */}
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="program-container">
        <h3 className="program">
          {/* Siber Güvenlik 360 */} <br /> 17.15 - 17.55
        </h3>
        <div className="speaker-container">
          <figure className="speaker">
            {/* <img src="/src/assets/konusmacilar/360/Ayse.jpeg" alt="Konuşmacı" /> */}
            <figcaption>
              {/* <h3>Ayşe Aktağ</h3>
              <p>Cyber Security Specialist - TurkNet</p> */}
            </figcaption>
          </figure>
          <figure className="speaker">
            {/* <img src="/src/assets/konusmacilar/360/Burcu.jpeg" alt="Konuşmacı" /> */}
            <figcaption>
              {/* <h3>Burcu Yarar</h3>
                <p>Application Security Team Lead</p> */}
            </figcaption>
          </figure>
          <figure className="speaker">
            {/* <img src="/src/assets/konusmacilar/360/Sena.jpeg" alt="Konuşmacı" /> */}
            <figcaption>
              {/* <h3>Sena Yakut</h3>
                <p>AWS Security Hero <br/> Cloud Security Architect</p> */}
            </figcaption>
          </figure>
        </div>
      </div>
    </article>
  );
}

export default Speakers;
