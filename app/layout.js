import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "William Purnell - Software Developer from Bournemouth",
  description:
    "Will is a software developer with 5 years experience based in Bournemouth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
