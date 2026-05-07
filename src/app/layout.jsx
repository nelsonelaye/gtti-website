import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";

export const metadata = {
  metadataBase: new URL("https://gtti.netlify.app"),
  title: "Green Transformation Trailblazers Initiative",
  description: "Green Transformation Trailblazers Initiative",
  icons: {
    icon: "/images/circle.png",
  },
  openGraph: {
    type: "website",
    url: "https://gtti.netlify.app",
    title: "Green Transformation Trailblazers Initiative",
    description: "Green Transformation Trailblazers Initiative",
    siteName: "GTTI",
    images: [
      {
        url: "/images/circle.png",
        width: 1200,
        height: 630,
        alt: "Green Transformation Trailblazers Initiative",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Transformation Trailblazers Initiative",
    description: "Green Transformation Trailblazers Initiative",
    images: ["/images/circle.png"],
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
