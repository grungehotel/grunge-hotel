import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grunge Hotel — группа на мероприятия и music production в Алматы",
  description:
    "Grunge Hotel — живая группа на корпоративы, свадьбы и частные события в Алматы. Сильный вокал, широкий репертуар, понятная работа с организатором и дополнительные production-услуги.",
  keywords: [
    "кавер группа Алматы",
    "группа на корпоратив Алматы",
    "живая музыка Алматы",
    "группа на свадьбу Алматы",
    "кавер группа на мероприятие Алматы",
    "event production Алматы",
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
      <body>
        {children}

        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) return;
              }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(108573750, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
            });
          `}
        </Script>

        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/108573750"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}
