"use client";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { HomePageSettingBanners } from "graphql/generated";
import { useEffect } from "react";

type Banner = {
  banners?: HomePageSettingBanners[];

  options?: EmblaOptionsType;
};
export const Banner = ({ banners, options }: Banner) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  useEffect(() => {
    if (!emblaApi) return;

    const autoScroll = () => {
      if (!emblaApi) return;

      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    };

    const interval = setInterval(autoScroll, 10000);

    return () => clearInterval(interval);
  }, [emblaApi]);
  return (
    <div className="embla-banner">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {banners?.map((banner, idx: number) => (
            <div
              key={idx}
              className="min-w-full flex-shrink-0 relative z-10 overflow-hidden"
            >
              {/* Banner image */}
              <img
                src={banner.bannerImage.node.mediaItemUrl}
                alt={`Banner ${idx + 1}`}
                className="w-full h-[500px] object-cover animate-zoomIn"
              />

              {/* Bottom text inside the image */}
              {banner.bannerText && (
                <div>
                  <div className="absolute inset-0 bg-primary/40" />

                  <div
                    className="absolute left-1/2 top-2/3 transform -translate-x-1/2 -translate-y-1/2 z-10 px-4 w-[70%]"
                    style={{ animation: "fadeSlideUp 1s ease forwards" }}
                  >
                    {" "}
                    <span className="block text-white rubik font-bold text-[30px] text-center">
                      {banner.bannerText}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
