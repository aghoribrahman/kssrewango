import { motion, HTMLMotionProps, Variants } from "framer-motion";
import { ReactNode } from "react";

interface AnimateInProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  once?: boolean;
  as?: any;
}

const AnimateIn = ({
  children,
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance = 20,
  once = true,
  className,
  as = "div",
  ...props
}: AnimateInProps) => {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...directions[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  const MotionComponent = motion(as);

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

export default AnimateIn;
