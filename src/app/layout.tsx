import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import { ClientOnly } from "./components/ClientOnly";
import { Model } from "./components/models/Model";

export const metadata = {
  title: "Airbnb-clone",
  description: "airbnb clone app",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Model />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
