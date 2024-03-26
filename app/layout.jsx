import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quiz App",
  description: "Quiz App built with Next.js and Next UI!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body suppressHydrationWarning={true}>
        <Providers>
          <Navbar>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
              <NavbarItem>
                <Link href="/">Start</Link>
              </NavbarItem>
              <NavbarItem isActive>
                <Link href="/home">Home</Link>
              </NavbarItem>
              <NavbarItem>
                <Link href="/about">About</Link>
              </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
              <NavbarItem className="hidden lg:flex">
                <Link href="#">Login</Link>
              </NavbarItem>
              <NavbarItem>
                <Button as={Link} color="primary" href="#" variant="flat">
                  Sign Up
                </Button>
              </NavbarItem>
            </NavbarContent>
          </Navbar>
          <div
            style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}
          >
            <main justify="center" align="center">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
