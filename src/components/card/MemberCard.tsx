"use client";

import { SOCIAL_URLS } from "@/lib/consts/urls";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import { SocialIcon } from "react-social-icons";

export const MemberCard = ({
  name,
  bio,
  image,
  position,
  socialMedia,
  isBoardMember,
}: {
  name: string;
  bio: string;
  image: string;
  position: string;
  socialMedia?: [];
  isBoardMember: string;
}) => {
  const isMobile = useMediaQuery({ maxWidth: 620 });

  const router = useRouter();
  const locale = useLocale();
  const socialUrls: string[] = [
    SOCIAL_URLS.FACEBOOK,
    SOCIAL_URLS.LINKEDIN,
    SOCIAL_URLS.YOUTUBE,
  ];
  const isBoardMemberBoolean = isBoardMember === "false" ? false : true;
  console.log(isBoardMember ? "board member" : "not board member");
  console.log(isBoardMember);

  return (
    <div
      className={`${
        isBoardMemberBoolean
          ? `w-full  ${
              isMobile ? "h-[270px] pt-4" : "h-[220px] content-center "
            }`
          : "h-[240px] w-[370px] min-w-[370px] p-4"
      } rounded-md overflow-hidden shadow-lg cursor-pointer bg-white `}
    >
      <div className={`flex relative`}>
        <div
          className={`${
            isBoardMemberBoolean
              ? ` ${
                  isMobile
                    ? "h-[120px] min-w-[120px] ml-4"
                    : "h-[160px] min-w-[160px] m-4"
                } `
              : "h-[90px] w-[90px]"
          } bg-cover bg-center  rounded-full`}
          style={{ backgroundImage: `url(${image})` }}
        />
        <div>
          <div className="mx-4 flex flex-col gap-1">
            <p className="text-lg uppercase font-semibold ">{name}</p>
            <span className="text-sm text-primary">{position}</span>
            <div className="flex gap-2">
              {socialUrls.map((x, idx) => {
                return (
                  <SocialIcon
                    url={x}
                    target="_blank"
                    key={idx}
                    bgColor="transparent"
                    fgColor="#1A75BC"
                    className={`hover:bg-black/10 rounded-full hidden md:block bg-[#E8F1F8] `}
                    style={{ height: 32, width: 32 }}
                  />
                );
              })}
            </div>
          </div>
          {isBoardMemberBoolean && (
            <div className="px-4">
              <p
                className={`text-m mt-1 line-clamp-5 leading-[20px] ${
                  isMobile && "absolute -bottom-26 left-6 w-[90%]"
                }`}
              >
                {bio}
              </p>
            </div>
          )}
        </div>
      </div>
      {!isBoardMemberBoolean && (
        <div className="px-4">
          <p className="text-m mt-1 line-clamp-6 leading-[20px]">{bio}</p>
        </div>
      )}
    </div>
  );
};
