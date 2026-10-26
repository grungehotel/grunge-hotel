import { useState } from "react";
import { Button, Card, Stack, Text } from "@sanity/ui";
import { definePlugin, useClient } from "sanity";

const documents = [
  { _id: "siteSettings", _type: "siteSettings", title: "Grunge Hotel", instagram: "https://www.instagram.com/grungehotel.liveband", email: "grungehotels@gmail.com", phone: "+77072996264", whatsapp: "77072996264" },
  { _id: "homepage", _type: "homepage", eyebrow: "Almaty · live band · music & event production", heroTitle: "Живая группа и музыкальный подрядчик для мероприятий в Алматы", heroText: "Grunge Hotel — это группа на корпоративы, свадьбы и частные события, с которой удобно работать организатору. Сильный вокал, широкий репертуар, адаптация под аудиторию и результат без лишнего хаоса.", ctaLabel: "Связаться с менеджером", ctaLink: "https://wa.me/77072996264", badges: ["Event-агентства", "Корпоративные клиенты", "Свадьбы", "500+ песен", "3 сета по 30–40 минут"] },
  { _id: "service-corporate", _type: "service", title: "Группа на корпоратив", slug: { current: "corporate-band-almaty" }, group: "Живая группа" },
  { _id: "service-wedding", _type: "service", title: "Группа на свадьбу", slug: { current: "wedding-band-almaty" }, group: "Живая группа" },
  { _id: "service-duets", _type: "service", title: "Дуэты и инструменталисты", slug: { current: "duets-instrumentalists-almaty" }, group: "Живая группа" },
  { _id: "service-new-year", _type: "service", title: "Новогодний корпоратив", slug: { current: "new-year-corporate-band-almaty" }, group: "Живая группа" },
  { _id: "service-studio", _type: "service", title: "Студия звукозаписи", slug: { current: "studio-recording-almaty" }, group: "Контент-продакшн" },
  { _id: "service-alan-audio", _type: "service", title: "Сведение / мастеринг — Alan Audio", slug: { current: "alanaudio" }, group: "Контент-продакшн" },
  { _id: "service-session", _type: "service", title: "Сессионные музыканты", slug: { current: "session-musicians-almaty" }, group: "Контент-продакшн" },
  { _id: "service-concerts", _type: "service", title: "Организация концертов", slug: { current: "concert-organization-almaty" }, group: "Другое" },
  { _id: "artist-alan", _type: "artist", name: "Алан Салпагаров", role: "Frontman проекта", anchor: "frontman", order: 1, ctaLabel: "Пригласить Алана на мероприятие", ctaLink: "#contact" },
  { _id: "artist-karine", _type: "artist", name: "Каринэ Кеворкьян", role: "Frontwoman проекта", anchor: "frontwoman", order: 2, ctaLabel: "Пригласить Каринэ на мероприятие", ctaLink: "#contact" },
];

function SeedTool() {
  const client = useClient({ apiVersion: "2025-02-19" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const seed = async () => {
    setLoading(true);
    try {
      await documents.reduce((transaction, document) => transaction.createIfNotExists(document as any), client.transaction()).commit();
      setStatus("Структура сайта загружена. Откройте разделы слева.");
    } catch {
      setStatus("Не удалось загрузить структуру. Попробуйте ещё раз.");
    } finally {
      setLoading(false);
    }
  };

  return <Card><Stack><Text>Загрузить текущую структуру сайта</Text><Text>Создаст главную, пункты меню, услуги и артистов. Существующие правки не будут перезаписаны.</Text><Button text={loading ? "Загружаем…" : "Загрузить структуру"} tone="primary" onClick={seed} disabled={loading} />{status && <Text>{status}</Text>}</Stack></Card>;
}

export const seedTool = definePlugin({
  name: "seed-tool",
  tools: (prev) => [...prev, { name: "seed-content", title: "Загрузить структуру", component: SeedTool }],
});
