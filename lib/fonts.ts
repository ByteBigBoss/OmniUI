import { Bebas_Neue, Grand_Hotel, Gugi, Poppins, Rajdhani, Righteous } from "next/font/google";

export const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "700", "800", "900"],variable: '--font-poppins' });
export const grandHotel = Grand_Hotel({subsets:["latin"], weight:["400"]});
export const gugi = Gugi({ weight: ['400'], subsets: ['latin'] });
export const bebas = Bebas_Neue({weight:["400"], subsets:['latin']});
export const rajdhani = Rajdhani({weight:["300","400","500","600","700"], subsets:['latin']});
export const righteous = Righteous({weight:["400"], subsets:['latin']});