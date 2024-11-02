import localFont from "next/font/local";
import "../globals.css";

export default function DashboardLayout({children}) {
    return(
        <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
    )
}