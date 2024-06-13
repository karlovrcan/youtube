import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/page";

export const metadata = {
  title: "Youtube",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <section className="main">
          <Header/>
          {children}
        </section>
      </body>
    </html>
  );
}
