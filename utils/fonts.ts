import { Outfit } from "next/font/google";

export const outfit_init=Outfit({
    subsets:["latin"],
    variable:"--font-outfit"
  })

  export  const outfit=outfit_init.variable