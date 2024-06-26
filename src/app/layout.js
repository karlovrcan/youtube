// import "./globals.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "./components/Header/page";
// import AppContext from "@/AppContext/context";

// export const metadata = {
//   title: "Youtube",
//   description: "",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <section className="main">
//           <AppContext>
//             <Header />
//             {children}
//           </AppContext>
//         </section>
//       </body>
//     </html>
//   );
// }

import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/page";
import AppContext from "@/AppContext/context";
import Sidebar from "./components/Sidebar/page";

export const metadata = {
  title: "Youtube",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <section className="main">
          <AppContext>
            <Header />
            <div className="wrapper d-flex">
              <Sidebar />
              {children}
            </div>
          </AppContext>
        </section>
      </body>
    </html>
  );
}
