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
        <a href="https://skyl.app/skydays-ctf-basvuru-formu">
          Yarışmaya Başvur
        </a>
      </section>
      <img src={PrizeSVG} alt="Ödüller" />
    </article>
  );
}

export default Skydaysctf;
