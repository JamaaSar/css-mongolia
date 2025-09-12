"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState, ReactNode } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

type CarouselProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
};

export function Carousel<T>({ items, renderItem }: CarouselProps<T>) {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  const updateScrollButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateScrollButtons();
    emblaApi.on("select", updateScrollButtons);
    emblaApi.on("reInit", updateScrollButtons);
  }, [emblaApi, updateScrollButtons]);

  return (
    <div className="relative">
      {canScrollPrev && (
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 
             flex items-center justify-center
             p-2 rounded-full bg-[#EDF6E0] h-12 w-12 shadow hover:bg-[#D1E8B3] transition"
        >
          <ChevronLeftIcon className="h-6 w-6 text-[#1A75BC]" />
        </button>
      )}

      {canScrollNext && (
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 
         flex items-center justify-center 
         p-2 rounded-full bg-[#EDF6E0] h-12 w-12 shadow hover:bg-[#D1E8B3] transition"
        >
          <ChevronRightIcon className="h-6 w-6 text-[#1A75BC]" />
        </button>
      )}

      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container flex gap-4">
            {items.map((item, index) => renderItem(item, index))}
          </div>
        </div>
      </div>
    </div>
  );
}
