import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grunge Hotel — кавер-группа и event production в Алматы",
  description:
    "Живая группа, трибьют-шоу, свет, звук и организация мероприятий под ключ в Алматы. Grunge Hotel — музыкальный подрядчик для событий.",
  keywords: [
    "кавер группа Алматы",
    "живая музыка Алматы",
    "event production Алматы",
    "трибьют шоу Алматы",
    "группа на корпоратив Алматы",
    "музыкальное сопровождение мероприятий",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}