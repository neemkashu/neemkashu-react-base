import { Footer } from "./Layouts/Footer/Footer";
import { Header } from "./Layouts/Header/Header";
import { Wrapper } from "./components/containers/Wrapper/Wrapper";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["500", "700"], subsets: ["cyrillic"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <Wrapper>{children}</Wrapper>
        <Footer />
      </body>
    </html>
  );
}
