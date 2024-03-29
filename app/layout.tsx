import Nav from "@/app/components/Nav";
import CoursesProvider from "@/app/context/CoursesContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const revalidate = 0;
export const metadata: Metadata = {
  title: "Course Enrollment App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CoursesProvider>
          <Nav />
          <main className="flex flex-col items-center">{children}</main>
        </CoursesProvider>
      </body>
    </html>
  );
}
