/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type Prop = {
  carouselData: {
    id: number;
    image: string;
    category: string;
    title: string;
  }[];
};

const CarouselCard: React.FC<Prop> = ({ carouselData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<any>(null);

  const goToSlide = (index: number) => {
    if (carouselApi && typeof carouselApi.scrollTo === "function") {
      carouselApi.scrollTo(index);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto relative">
      <Carousel
        opts={{
          loop: true,
          align: "start",
        }}
        setApi={(api) => {
          setCarouselApi(api);
          if (api) {
            api.on("select", () => {
              setActiveIndex(api.selectedScrollSnap());
            });
          }
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {carouselData.map((item) => (
            <CarouselItem key={item.id} className="pl-2 md:pl-4 ">
              <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-4 left-0 right-0 p-6 text-white font-dm-sans">
                  <div className="mb-1">
                    <span className="text-sm/[100%] font-medium uppercase">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-lg/[100%] font-semibold">{item.title}</h3>
                </div>

                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 absolute bottom-4 left-1/2 transform -translate-x-1/2">
        {carouselData.map((_, idx) => (
          <button
            key={idx}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              idx === activeIndex
                ? "bg-white"
                : "bg-[#737373] hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => goToSlide(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselCard;
