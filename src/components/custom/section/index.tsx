import clsx from "clsx";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export const Section: React.FC<SectionProps> = ({ children, className }) => {
  return (
    <section className={clsx("py-[1.3125rem] px-[30px] lg:px-[4.875rem]", className)}>
      {children}
    </section>
  );
};
