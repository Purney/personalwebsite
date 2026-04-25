import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import config from "@/config";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(`https://www.${config.domainName}`),
  title: {
    default: config.appName,
    template: "%s",
  },
  description: config.appDescription,
  openGraph: {
    title: config.appName,
    description: config.appDescription,
    url: `https://www.${config.domainName}`,
    siteName: config.appName,
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: config.appName,
    description: config.appDescription,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-8KKTX6PF0E"
      />
      <Script
        id="google-analytics"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8KKTX6PF0E', {
                page_path: window.location.pathname,
              });
            `,
        }}
      />
      <body className="bg-background-dark text-slate-100 min-h-screen flex flex-col">
        <Analytics />
        <Header />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
