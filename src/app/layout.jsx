import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";

export const metadata = {
  title: "Green Transformation Trailblazers Initiative",
  description: "Green Transformation Trailblazers Initiative",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/circle.png" />
      </head>
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
