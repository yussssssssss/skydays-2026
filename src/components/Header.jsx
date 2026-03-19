import skylablogo from "../assets/skylab_logo.webp";
import "./Header.css";
import { useEffect, useState } from "react";

const scrollToElement = (element) => {
  // This code scrolls to desired element using "ID", More Info : https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
  const scrollingElement = document.querySelector(`.${element}`);
  if (scrollingElement) {
    scrollingElement.scrollIntoView({
      behavior: "smooth",
    });
  } else {
    return;
  }
};

function Header() {
  const TARGET_DATE = new Date("2026-03-27T00:00:00+03:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = TARGET_DATE.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {
      days: String(days).padStart(2, "0"),
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header>
      <a
        className="header-logo"
        href="https://yildizskylab.com/"
        target="_blank"
      >
        <img src={skylablogo} alt="Skylab Kulüp Logosu" />
      </a>
      <nav>
        <button onClick={() => scrollToElement("welcome")}>Ana Sayfa</button>
        <button onClick={() => scrollToElement("about")}>Hakkımızda</button>
        <button onClick={() => scrollToElement("flow")}>Program ve Akış</button>
        <button onClick={() => scrollToElement("sponsors")}>
          Sponsorlarımız
        </button>
        <button onClick={() => scrollToElement("ctf")}>CTF</button>
        <button onClick={() => scrollToElement("sss")}>S.S.S.</button>
      </nav>
      <div className="countdown" aria-label="Etkinlik geri sayımı">
        <span className="countdown-title">SKYDAYS İÇİN SON:</span>
        <div className="countdown-time">
          <div>
            <strong>{timeLeft.days}</strong>
            <small>Gün</small>
          </div>
          <div>
            <strong>{timeLeft.hours}</strong>
            <small>Saat</small>
          </div>
          <div>
            <strong>{timeLeft.minutes}</strong>
            <small>Dakika</small>
          </div>
          <div>
            <strong>{timeLeft.seconds}</strong>
            <small>Saniye</small>
          </div>
        </div>
      </div>
      <h1>SKYDAYS</h1>
      <a
        className="basvur"
        href="https://forms.office.com/pages/responsepage.aspx?id=CClghVvhukORSDi8dzqBbsDsVB3oDnVBpoIpI_nbcn9UMUxaTFVITUFEM1JZVENOVURDU0NOQ0lLSS4u&route=shorturl&fbclid=PAT01DUAQnWj9leHRuA2FlbQIxMABzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAae-klX1TXsspVincQXPU-zQXzcl5VK2F0lBIGlDuNpYcFz1ZgUS8It6OhYdWA_aem_mlirJEwb6Gge8j0xs7X7gg"
      >
        Başvur
      </a>
    </header>
  );
}

export default Header;
