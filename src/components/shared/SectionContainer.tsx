import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
}

export const SectionContainer = ({
  children,
  className = "",
  containerClassName = "max-w-7xl mx-auto",
  id,
}: SectionContainerProps) => {
  return (
    <section id={id} className={`py-20 md:py-28 px-6 md:px-10 ${className}`}>
      <div className={containerClassName}>
        {children}
      </div>
    </section>
  );
};export default SectionContainer;
