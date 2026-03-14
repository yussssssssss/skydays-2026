import { useState } from "react";
import "./Questions.css";

function Questions() {
  const [data, setData] = useState([
    {
      soru: "Etkinliğe nereden başvurabilirim?",
      cevap: (
        <>
          <a
            href="https://skyl.app/skydays-katilimci-formu"
            target="_blank"
            style={{ textDecoration: "underline" }}
          >
            Zirve formu
          </a>
          <br />
          <a
            href="https://skyl.app/skydays-ctf-basvuru-formu"
            target="_blank"
            style={{ textDecoration: "underline" }}
          >
            Yarışma formu
          </a>
        </>
      ),
      acik: false,
    },
    {
      soru: "Etkinlik nerede ve ne zaman gerçekleşecek?",
      cevap:
        "SKYDAYS, 14-15 Mart tarihlerinde Yıldız Teknik Üniversitesi Davutpaşa Kampüsü Tarihi Hamam’da gerçekleşecektir. Zirve, 14 Mart günü 12.30’da başlayıp 19.00’da biterken yarışma ise 14 Mart günü 21.00’da başlayıp 15 Mart günü 17.00’da bitecektir.",
      acik: false,
    },
    {
      soru: "Zirvede beni neler bekliyor?",
      cevap:
        "Zirve 12.30’da başlayıp 7 oturumunun sonunda 19.00’da bitecektir. Zirvenin yanı sıra oturum aralarında gezebileceğin bir fuaye alanı da bulunmaktadır. Bu alanda keyifli vakit geçirebilir, sektördeki şirketlerin stantlarını gezebilirsin. Kulübümüzün siber güvenlik ekibi olan SKY-SEC ’in standına uğrayıp neler yaptıkları hakkında bilgi almayı da unutma.",
      acik: false,
    },
    {
      soru: "Sadece zirveye veya sadece yarışmaya katılamaz mıyım?",
      cevap:
        "Elbette, ister ikisine birden istersen de yalnızca birine katıl. Karar senin!",
      acik: false,
    },
    {
      soru: "Etkinlik yüz yüze mi çevrimiçi mi olacak?",
      cevap:
        "Hem zirve hem de yarışma yüz yüze, Tarihi Hamam’da gerçekleştirilecektir.",
      acik: false,
    },
    {
      soru: "Zirve veya yarışma için yaş sınırı var mıdır?",
      cevap:
        "Zirve için yaş sınırlamamız yok fakat yarışmada 18 yaş ve üstü olan katılımcılar kabul edilecektir.",
      acik: false,
    },
    {
      soru: "⁠SKYDAYS’e neden katılmalıyım?",
      cevap:
        "Ulusal ve uluslarası güncel tehditleri anlama, sektördeki uzmanlarla bağlantı kurma, becerilerinizi geliştirme ve zorlu CTF mücadelesiyle kendinizi test etme fırsatı yaşayacağınız SKYDAYS Siber Güvenlik Etkinliği’nde aynı zamanda güncel teknolojileri keşfetme ve mesleki gelişim sağlama şansı elde edeceksiniz. Bundan dolayı katılmanızı mutlaka öneriyoruz.",
      acik: false,
    },
    {
      soru: "Etkinliğe katılım ücretsiz mi?",
      cevap: "Evet, etkinliğimiz tamamen ücretsizdir.",
      acik: false,
    },
    {
      soru: "Etkinliğe kimler katılabilir?",
      cevap:
        "Siber güvenliğin ne olduğunu merak eden, bu alanda bilgi ve fikir sahibi olmak isteyen veya sektörün son durumunu öğrenip bildiklerini derinleştirmek isteyen herkes katılabilir.",
      acik: false,
    },
    {
      soru: "Zirveye katılımım sonunda sertifika verilecek mi?",
      cevap:
        "Evet, 7 oturumdan en az 5’ine katılan katılımcılara online sertifika verilecektir.",
      acik: false,
    },
  ]);

  const paragrafAc = (index) => {
    const newData = [...data];
    newData[index].acik = !newData[index].acik;
    setData(newData);
  };

  return (
    <article className="sss">
      <h2>Sıkça Sorulan Sorular</h2>
      {data.map((item, i) => (
        <button key={i} onClick={() => paragrafAc(i)}>
          <div>
            {item.soru}
            <span>{item.acik ? "-" : "+"}</span>
          </div>
          <p className={`cevap ${item.acik ? "acik" : ""}`}>
            <br />
            {item.cevap}
            <br />
            <br />
          </p>{" "}
        </button>
      ))}
    </article>
  );
}

export default Questions;
