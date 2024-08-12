import { Button } from "@mantine/core";
import React from "react";

interface ButtonType {
  className?: string;
  title: React.ReactNode;
  titleItems: 1 | 2;
  outline?: boolean;
  onClick?: () => void;
}
export default function ButtonComp({
  className,
  title,
  onClick,
  titleItems = 1,
  outline = false,
}: ButtonType) {
  return (
    <Button
      onClick={onClick}
      className={`${className} flex items-center  ${
        titleItems == 1 ? "justify-center" : "justify-between"
      }  h-8 px-7 ${
        outline
          ? "border border-purple text-purple bg-white hover:bg-purple"
          : "bg-purple"
      } rounded-md mt-5 xl:h-10`}
    >
      {title}
    </Button>
  );
}
