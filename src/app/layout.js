import { Poppins, Roboto } from "next/font/google";
import "./globals.css";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  variable: "--font-poppins",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300","400","500","700"],
  variable: "--font-roboto",
});





export const metadata = {
  title: "Naveed Latif | Mern-Stack Developer",
  description:
    "Hi, I'm Naveed Latif. I build modern web applications using JavaScript, Next.js, and cloud technologies. Explore my projects and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
