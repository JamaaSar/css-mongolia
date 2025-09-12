"use client";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { HomePageSettingBanners } from "graphql/generated";

type Banner = {
  banners?: HomePageSettingBanners[];
  bottomText?: {
    left?: string;
    right?: string;
  };
  options?: EmblaOptionsType;
};
export const Banner = ({ banners, bottomText, options }: Banner) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <div className="embla-banner">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {banners?.map((banner, idx: number) => (
            <img
              key={idx}
              src={banner.bannerImage.node.mediaItemUrl}
              alt=""
              className="embla__slide"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
