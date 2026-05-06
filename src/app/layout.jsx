import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";

export const metadata = {
  title: "Green Transformation Trailblazers Initiative",
  description: "Green Transformation Trailblazers Initiative",
  icons: {
    icon: "/images/circle.png",
  },
  openGraph: {
    title: "Green Transformation Trailblazers Initiative",
    description: "Green Transformation Trailblazers Initiative",
    images: [
      {
        url: "/images/circle.png",
        width: 200,
        height: 200,
        alt: "GTTI Logo",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <ReactQueryProvider>
          <Header />
          {children}
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
