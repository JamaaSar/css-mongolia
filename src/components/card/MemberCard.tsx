"use client";

import { useMediaQuery } from "react-responsive";
import { SocialIcon } from "react-social-icons";

export const MemberCard = ({
  name,
  bio,
  image,
  position,
  linkedin,
  twitter,
  facebook,
  isBoardMember,
}: {
  name: string;
  bio: string;
  image: string;
  position: string;
  linkedin: string;
  twitter: string;
  facebook: string;
  isBoardMember: string;
}) => {
  const isMobile = useMediaQuery({ maxWidth: 620 });

  const isBoardMemberBoolean = isBoardMember === "false" ? false : true;

  return (
    <div
      className={`${
        isBoardMemberBoolean
          ? `w-full  ${isMobile ? "h-full py-4" : "min-h-[400px] pt-4"}`
          : "h-[520px] w-[370px] min-w-[370px] p-4"
      } rounded-md overflow-hidden shadow-lg cursor-pointer bg-white `}
    >
      <div className="flex relative ">
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
              {linkedin && (
                <SocialIcon
                  network="linkedin"
                  url={linkedin}
                  target="_blank"
                  bgColor="transparent"
                  fgColor="#1A75BC"
                  className={`hover:bg-black/10 rounded-full hidden md:block bg-[#E8F1F8] `}
                  style={{ height: 32, width: 32 }}
                />
              )}
              {twitter && (
                <SocialIcon
                  network="x"
                  url={twitter}
                  target="_blank"
                  bgColor="transparent"
                  fgColor="#1A75BC"
                  className={`hover:bg-black/10 rounded-full hidden md:block bg-[#E8F1F8] `}
                  style={{ height: 32, width: 32 }}
                />
              )}
              {facebook && (
                <SocialIcon
                  network="facebook"
                  url={facebook}
                  target="_blank"
                  bgColor="transparent"
                  fgColor="#1A75BC"
                  className={`hover:bg-black/10 rounded-full hidden md:block bg-[#E8F1F8] `}
                  style={{ height: 32, width: 32 }}
                />
              )}
            </div>
          </div>
          {isBoardMemberBoolean && !isMobile && (
            <div className="px-4">
              <p
                className={`text-m mt-1 leading-[20px] 
                }`}
              >
                {bio}
              </p>
            </div>
          )}
        </div>
      </div>
      {isBoardMemberBoolean && isMobile && (
        <div className="px-4">
          <p className={`text-m mt-1 leading-[20px] w-[90%]`}>{bio}</p>
        </div>
      )}
      {!isBoardMemberBoolean && (
        <div className="px-4">
          <p className="text-m mt-1  leading-[20px]">{bio}</p>
        </div>
      )}
    </div>
  );
};
