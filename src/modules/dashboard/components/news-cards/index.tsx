import Image from "next/image";
import CarouselCard from "./carousel-card";

const NewsCards = () => {
  return (
    <div className="w-full grid grid-cols-3 gap-4 relative">
      <CarouselCard carouselData={carouselData1} />
      <CarouselCard carouselData={carouselData2} />
      <CarouselCard carouselData={carouselData3} />
      <Image
        src="/dashboard/icons/chat.svg"
        alt="chat"
        width={58}
        height={58}
        className="absolute top-10 -right-2 cursor-not-allowed"
      />
    </div>
  );
};

const carouselData1 = [
  {
    id: 1,
    image: "/dashboard/images/image1.jpg",
    category: "MOST CLICKED",
    title: "Urban Prime Plaza Premiere",
  },
  {
    id: 2,
    image: "/dashboard/images/image2.jpg",
    category: "MOST WATCHLISTED",
    title: "Urban Prime Plaza Premiere",
  },
];

const carouselData2 = [
  {
    id: 1,
    image: "/dashboard/images/image2.jpg",
    category: "MOST WATCHLISTED",
    title: "Urban Prime Plaza Premiere",
  },
  {
    id: 2,
    image: "/dashboard/images/image1.jpg",
    category: "MOST CLICKED",
    title: "Urban Prime Plaza Premiere",
  },
  {
    id: 3,
    image: "/dashboard/images/image3.png",
    category: "TRENDING NOW",
    title: "Downtown Commercial Hub",
  },
  {
    id: 4,
    image: "/dashboard/images/image3.png",
    category: "TRENDING NOW",
    title: "Downtown Commercial Hub",
  },
  {
    id: 5,
    image: "/dashboard/images/image3.png",
    category: "TRENDING NOW",
    title: "Downtown Commercial Hub",
  },
];

const carouselData3 = [
  {
    id: 1,
    image: "/dashboard/images/image3.png",
    category: "TRENDING NOW",
    title: "Downtown Commercial Hub",
  },
  {
    id: 2,
    image: "/dashboard/images/image2.jpg",
    category: "MOST WATCHLISTED",
    title: "Urban Prime Plaza Premiere",
  },
  {
    id: 3,
    image: "/dashboard/images/image1.jpg",
    category: "MOST CLICKED",
    title: "Urban Prime Plaza Premiere",
  },
  {
    id: 4,
    image: "/dashboard/images/image3.png",
    category: "TRENDING NOW",
    title: "Downtown Commercial Hub",
  },
  {
    id: 5,
    image: "/dashboard/images/image3.png",
    category: "TRENDING NOW",
    title: "Downtown Commercial Hub",
  },
];

export default NewsCards;
