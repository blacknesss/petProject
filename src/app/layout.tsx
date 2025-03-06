import type { Metadata } from "next";
import "@/styles/reset.css";
import "@/styles/globals.css";
import { openSans } from "@/shared/config/fonts";
import { kanit } from "@/shared/config/fonts";
import StoreProvider from "./StoreProvider";

export const metadata: Metadata = {
  title: "TodoApp",
  description: "The application can be used to add a task list, change them and sorted. If you don't need that list anymore you can delete it",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kanit.className || openSans.className}`}>
        <StoreProvider>
        {children}
        </StoreProvider>
      </body>
    </html>
  );
}
