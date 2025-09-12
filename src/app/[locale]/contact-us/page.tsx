import { H2 } from "@/components/generic/Typography";
import { getTranslated } from "@/lib/getTranslated";

export default async function ContactUs({ params }) {
  const { locale } = await params;

  return (
    <div className="css-container 2xl:container">
      <H2 title={getTranslated(locale, "ХОЛБОО БАРИХ", "Contact us")} />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10697.383497638712!2d106.90209694043344!3d47.910344710147285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9693bffffffff7%3A0xdb1d5da94946cd57!2sMongolian%20Express!5e0!3m2!1sfr!2sfr!4v1757700180157!5m2!1sfr!2sfr"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
