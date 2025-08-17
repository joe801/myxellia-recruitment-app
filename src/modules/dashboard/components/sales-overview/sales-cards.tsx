import clsx from "clsx";
import Image from "next/image";

const SalesCard = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-white shadow-sm border border-light-grey rounded-xl p-4 space-y-2 font-dm-sans"
        >
          <h3 className={`text-[19px]/[130%] font-semibold ${card.color}`}>
            {card.price}
          </h3>
          <div className="flex items-center gap-2">
            <p className="text-deep-grey text-[10px]/[100%] font-medium">
              {card?.label}
            </p>
            <div className="flex items-center gap-1 text-[10px]/[100%]">
              <Image
                src={
                  card?.increase
                    ? "/dashboard/icons/increase.svg"
                    : "/dashboard/icons/decrease.svg"
                }
                alt="increase"
                width={14}
                height={14}
              />
              <span
                className={clsx(
                  card?.increase ? "text-[#12B76A]" : " text-error-main",
                )}
              >
                {card?.percentage}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const cardData = [
  {
    price: "₦120,000,000.00",
    label: "Total Inflow",
    increase: true,
    color: "text-[#4545FE]",
    percentage: "2.5%",
  },
  {
    price: "₦50,000,000.00",
    label: "MRR",
    increase: true,
    color: "text-teal-500",
    percentage: "2.5%",
  },
  {
    price: "₦200,000,000.00",
    label: "Commission Revenue",
    increase: true,
    color: "text-teal-500",
    percentage: "0.5%",
  },
  {
    price: "₦100,000,000.00",
    label: "GMV",
    increase: false,
    color: "text-error-main",
    percentage: "0.5%",
  },
];
export default SalesCard;
