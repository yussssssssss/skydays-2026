import "./Skydaysctf.css";
import PrizeSVG from "../assets/prize.svg";
function Skydaysctf() {
  return (
    <article className="ctf">
      <div>
        <h2>SKYDAYS</h2>
        <h3>CTF</h3>
      </div>
      <section className="ctf-about">
        <h2>CTF Nedir?</h2>
        <p>
          CTF (Capture The Flag), bilgisayar güvenliği ve bilgi güvenliği
          becerilerini geliştirmek için düzenlenen rekabetçi bir etkinliktir.
          Katılımcılar, çeşitli bilgi güvenliği sorunlarını çözmek için yarışır
          ve bayrak adı verilen gizli verileri (flag) ele geçirmeye çalışırlar.
          Bu bayraklar genellikle bir sunucuda saklanır ve katılımcılar,
          sunucudaki güvenlik açıklarını ve zayıflıkları kullanarak bayrakları
          ele geçirmeye çalışırlar. <br />
          <br />
          Yıldız Teknik Üniversitesi'nde ikinci defa bir öğrenci kulübü
          tarafından gerçekleştirilecek olan CTF, aynı zamanda SKYDAYS tarihinde
          de ikinci olma özelliğini taşımaktadır.
        </p>
        <a href="https://forms.office.com/pages/responsepage.aspx?id=CClghVvhukORSDi8dzqBbsDsVB3oDnVBpoIpI_nbcn9UQk0yUjRCVlFXQzlPTklIWkhFWTRTRFVHVy4u&route=shorturl&fbclid=PAT01DUAQnWiZleHRuA2FlbQIxMABzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAadKLQFVS6bFuqV9Tr6zhJJ_7mW1mqOspLyQW4R634Ewh477jQG8DWRQikUXuQ_aem_hZLTJxyQ4zc_KJ-k-19LHg">
          Yarışmaya Başvur
        </a>
      </section>
      <img src={PrizeSVG} alt="Ödüller" />
    </article>
  );
}

export default Skydaysctf;
