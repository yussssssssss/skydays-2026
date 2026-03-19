import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import "./Questions.css";

function Questions() {
  const [openIndex, setOpenIndex] = useState(null);

  const data = [
    {
      soru: "Etkinliğe nereden başvurabilirim?",
      cevap: (
        <>
          <a
            href="https://forms.office.com/pages/responsepage.aspx?id=CClghVvhukORSDi8dzqBbsDsVB3oDnVBpoIpI_nbcn9UMUxaTFVITUFEM1JZVENOVURDU0NOQ0lLSS4u&route=shorturl&fbclid=PAT01DUAQnWj9leHRuA2FlbQIxMABzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAae-klX1TXsspVincQXPU-zQXzcl5VK2F0lBIGlDuNpYcFz1ZgUS8It6OhYdWA_aem_mlirJEwb6Gge8j0xs7X7gg"
            target="_blank"
            style={{ textDecoration: "underline" }}
          >
            Zirve formu
          </a>
          <br />
          <a
            href="https://forms.office.com/pages/responsepage.aspx?id=CClghVvhukORSDi8dzqBbsDsVB3oDnVBpoIpI_nbcn9UQk0yUjRCVlFXQzlPTklIWkhFWTRTRFVHVy4u&route=shorturl&fbclid=PAT01DUAQnWiZleHRuA2FlbQIxMABzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAadKLQFVS6bFuqV9Tr6zhJJ_7mW1mqOspLyQW4R634Ewh477jQG8DWRQikUXuQ_aem_hZLTJxyQ4zc_KJ-k-19LHg"
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
        "SKYDAYS, 27-28 Mart tarihlerinde Yıldız Teknik Üniversitesi Davutpaşa Kampüsü Tarihi Hamam’da gerçekleşecektir. Zirve, 27 Mart günü 12.30’da başlayıp 19.00’da biterken yarışma ise 27 Mart günü 21.00’da başlayıp 28 Mart günü 17.00’da bitecektir.",
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
    },
  ];

  const toggleQuestion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <article className="sss">
      <h2>Sıkça Sorulan Sorular</h2>
      {data.map((item, i) => {
        const isOpen = openIndex === i;

        return (
          <motion.div key={i} className="question-item" layout>
            <button
              className="question-button"
              onClick={() => toggleQuestion(i)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
            >
              <span>{item.soru}</span>
              <ChevronDown
                className={`question-icon ${isOpen ? "open" : ""}`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-panel-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
                  className="cevap-wrapper"
                >
                  <div className="cevap">{item.cevap}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </article>
  );
}

export default Questions;
