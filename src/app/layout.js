
import "./globals.css";



export const metadata = {
  title: "Sharesito",
  description: "Home of your main links",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
