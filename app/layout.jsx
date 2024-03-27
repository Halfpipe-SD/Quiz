import "./globals.css";
import { Inter } from "next/font/google";

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quiz App",
  description: "Quiz App built with Next.js and Next UI!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <AppRouterCacheProvider options={{ key: 'css' }}>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
