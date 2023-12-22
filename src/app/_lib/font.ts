import {Montserrat , Roboto} from "next/font/google"
export const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["300","700","800","900"]
})

export const roboto = Roboto({
    weight: ['300','400','500', '700','900'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})