import EmailIcon from "@/components/EmailIcon";
import { H2 } from "@/components/generic/Typography";
import LocationIcon from "@/components/LocationIcon";
import PhoneIcon from "@/components/PhoneIcon";
import { getTranslated } from "@/lib/getTranslated";

export default async function ContactUs({ params }) {
  const { locale } = await params;

  return (
    <div className="css-home-container m-auto 2xl:container">
      <H2 title={getTranslated(locale, "ХОЛБОО БАРИХ", "Contact us")} />
      <div className="grid grid-rows-1 md:grid-cols-2 gap-4 my-10">
        <iframe
          className="w-full h-[300px] md:h-[400px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10697.383497638712!2d106.90209694043344!3d47.910344710147285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9693bffffffff7%3A0xdb1d5da94946cd57!2sMongolian%20Express!5e0!3m2!1sfr!2sfr!4v1757700180157!5m2!1sfr!2sfr"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div>
          <div className="flex gap-4 m-4 items-center">
            <span className="w-10 h-10">
              <LocationIcon />
            </span>
            <p className="text-m leading-[20px]">
              {getTranslated(
                locale,
                "Улаанбаатар хот, Сүхбаатар дүүрэг, 1-р хороо, Жуковын гудамж-6, Монгол Экспресс төв, 3 давхар, 312 тоот",
                "Ulaanbaatar city, Sukhbaatar district, 1st khoroo, Zhukov street-6, Mongolian Express center, 3rd floor, room 312"
              )}
            </p>
          </div>
          <div className="flex gap-4 m-4 items-center">
            <EmailIcon />
            <p className="text-m leading-[20px]">info@cssmongolia.org</p>
          </div>
          <div className="flex gap-4 m-4 items-center">
            <PhoneIcon />
            <p className="text-m leading-[20px]">info@cssmongolia.org</p>
          </div>
        </div>
      </div>
    </div>
  );
}
