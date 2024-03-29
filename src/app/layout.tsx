import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import LeftSideBar from "@/component/SideBar/page";
import {Col, Row} from "antd";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
  return (
      <html lang="en" className={'w-screen h-screen'}>
      <body className={inter.className}>
      <Row><Col span={'4'}><LeftSideBar/></Col><Col span={'20'}>{children}</Col></Row>
      </body>
      </html>
  );
}
