import type { Metadata } from "next";
import { Exo_2, Cairo } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "../../public/hover-min.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import "./globals.css";

const exo = Exo_2({
 variable: "--font-exo2",
 subsets: ["latin"],
 weight: ["400", "500", "600", "700", "800", "900"]
});
const cairo = Cairo({
 subsets: ["latin"],
 weight: ["400", "500", "600", "700", "800", "900"],
 variable: "--font-cairo"
});

export const metadata: Metadata = {
 title: "Create Next App",
 description: "Generated by create next app"
};

export default async function RootLayout({
 children
}: Readonly<{
 children: React.ReactNode;
}>) {
 const locale = await getLocale();

 const messages = await getMessages();
 return (
  <html lang={locale}>
   <body style={locale === 'en' ? {direction :'ltr'} :{direction :'rtl'}} className={`${exo.variable} ${cairo.variable}`}>
    <NextIntlClientProvider locale={locale} messages={messages}>
     {children}
    </NextIntlClientProvider>
    <Toaster />
   </body>
  </html>
 );
}
