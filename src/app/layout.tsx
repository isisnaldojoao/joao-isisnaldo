
import { Header } from "@/components/header";
import "./globals.css";

const metadata = {
  title: "João Isisnaldo",
  description: "FullStack developer!",
  keywords: "Next.js, SEO, React, Programação",
  author: "João Isisnaldo",
  openGraph: {
    title: "João Isisnaldo",
    description: "FullStack developer!",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header/> 
        {children}
      </body>
    </html>
  );
}
