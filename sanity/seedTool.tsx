import { useState } from "react";
import { Button, Card, Stack, Text } from "@sanity/ui";
import { definePlugin, useClient } from "sanity";

const block = (text: string, key: string) => ({ _key: key, _type: "block", children: [{ _key: key + "s", _type: "span", text }], markDefs: [], style: "normal" });

const documents = [
  { _id: "siteSettings", _type: "siteSettings", title: "Grunge Hotel", instagram: "https://www.instagram.com/grungehotel.liveband", email: "grungehotels@gmail.com", phone: "+77072996264", whatsapp: "77072996264" },
  { _id: "homepage", _type: "homepage", eyebrow: "Almaty · live band · music & event production", heroTitle: "Живая группа и музыкальный подрядчик для мероприятий в Алматы", heroText: "Grunge Hotel — это группа на корпоративы, свадьбы и частные события, с которой удобно работать организатору. Сильный вокал, широкий репертуар, адаптация под аудиторию и результат без лишнего хаоса.", ctaLabel: "Связаться с менеджером", ctaLink: "https://wa.me/77072996264", badges: ["Event-агентства", "Корпоративные клиенты", "Свадьбы", "500+ песен", "3 сета по 30–40 минут"] },
  { _id: "service-live-band", _type: "service", title: "Живая группа", slug: { current: "live-band-almaty" }, group: "Живая группа", description: "Главный формат Grunge Hotel для корпоративов, свадеб и частных событий: сильный вокал, широкий репертуар, адаптация под аудиторию и понятная работа с организатором." },
  { _id: "service-corporate", _type: "service", title: "Группа на корпоратив", slug: { current: "corporate-band-almaty" }, group: "Живая группа", description: "Отдельная посадочная под B2B и корпоративный сегмент: работа с компаниями, event-агентствами и брендовыми мероприятиями." },
  { _id: "service-wedding", _type: "service", title: "Группа на свадьбу", slug: { current: "wedding-band-almaty" }, group: "Живая группа", description: "Живая программа для свадебного вечера: сильные музыкальные блоки, танцпол и работа под гостей и тайминг мероприятия." },
  { _id: "service-duets", _type: "service", title: "Дуэты и инструменталисты", slug: { current: "duets-instrumentalists-almaty" }, group: "Живая группа", description: "Музыкальное сопровождение камерных форматов, церемоний и специальных блоков мероприятия." },
  { _id: "service-new-year", _type: "service", title: "Новогодний корпоратив", slug: { current: "new-year-corporate-band-almaty" }, group: "Живая группа", description: "Концертная программа для новогоднего корпоратива: живой звук, танцпол и работа по таймингу вечера." },
  { _id: "service-studio", _type: "service", title: "Студия звукозаписи", slug: { current: "studio-recording-almaty" }, group: "Контент-продакшн", description: "Запись вокала, барабанов, группы целиком, поканальная запись и студийные задачи как отдельное направление проекта." },
  { _id: "service-alan-audio", _type: "service", title: "Сведение / мастеринг — Alan Audio", slug: { current: "alanaudio" }, group: "Контент-продакшн", description: "Сведение, мастеринг, запись вокала, аранжировка и музыкальное производство с Аланом Салпагаровым." },
  { _id: "service-session", _type: "service", title: "Сессионные музыканты", slug: { current: "session-musicians-almaty" }, group: "Контент-продакшн", description: "Музыканты для студийных записей, концертных программ и авторских проектов." },
  { _id: "service-concerts", _type: "service", title: "Организация концертов", slug: { current: "concert-organization-almaty" }, group: "Другое", description: "Организация музыкальной части события: программа, артисты, координация и производство." },
  { _id: "artist-alan", _type: "artist", name: "Алан Салпагаров", role: "Фронтмен проекта", anchor: "frontman", order: 1, ctaLabel: "Пригласить Алана на мероприятие", ctaLink: "#contact", body: [
    block("Шоумен и вокалист уровня звёзд первой величины.", "alan1"),
    block("За плечами Алана — многолетний международный опыт выступлений и коллаборации с известными казахстанскими музыкальными проектами. На данный момент он негласно считается одним из лучших рок-вокалистов Алматы и Казахстана.", "alan2"),
    block("Дворец Республики и Almaty Arena неоднократно аплодировали его перформансам в рамках оркестровых проектов.", "alan3"),
    block("Вы могли видеть Алана в составе вокалистов Ne prosto orchestra, Tynda music и рок-мюзикла Ильяса Аутова «Три дома окнами во двор».", "alan4"),
    block("И у вас есть возможность увидеть талант этого человека на своём мероприятии.", "alan5"),
  ] },
  { _id: "artist-karine", _type: "artist", name: "Каринэ Кеворкьян", role: "Frontwoman проекта", anchor: "frontwoman", order: 2, ctaLabel: "Пригласить Каринэ на мероприятие", ctaLink: "#contact", body: [
    block("Вокал, который выходит на космический уровень.", "karine1"),
    block("Каринэ Кеворкьян — вокалистка, чьи профессиональные навыки выходят далеко за пределы нашей планеты. Мощный тембр её голоса в драйвовых рок-композициях легко сочетается с нежной и игривой подачей в лаунджевой и лирической стилистике.", "karine2"),
    block("Осторожно: Каринэ буквально с пары нот может сделать так, чтобы все мужчины в зале начали плакать. А после лёгкого мановения её руки — танцевали до беспамятства, пока не падут ниц.", "karine3"),
    block("Опыт, мощь и харизма умещаются в изящном флаконе хрупкой на вид девушки.", "karine4"),
    block("Не упустите возможность пригласить этот алмаз исполнительского искусства на ваше мероприятие.", "karine5"),
  ] },
  { _id: "case-corporate", _type: "caseStudy", title: "Крупный корпоратив", description: "Живая программа для брендов и компаний: 3 сета, адаптация под тайминг вечера, понятная коммуникация и музыкальный результат без хаоса.", featured: true, order: 1 },
  { _id: "case-wedding", _type: "caseStudy", title: "Свадьба с плотным танцполом", description: "Репертуар и динамика вечера собираются под публику: от сильного входа до танцевального блока без провалов по энергии.", featured: true, order: 2 },
  { _id: "case-tribute", _type: "caseStudy", title: "Концертный / трибьют-формат", description: "Отдельный формат для площадок и специальных событий, где важны подача, характер и цельная программа, а не набор случайных песен.", featured: true, order: 3 },
  { _id: "case-instagram-live", _type: "caseStudy", title: "Grunge Hotel — live в Instagram", description: "Видео-кейс Grunge Hotel.", mediaUrl: "https://www.instagram.com/p/DYkDwJMNdiC/", featured: true, order: 4 },
];

function SeedTool() {
  const client = useClient({ apiVersion: "2025-02-19" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const seed = async () => {
    setLoading(true);
    try {
      await documents.reduce((transaction, document) => transaction.createOrReplace(document as any), client.transaction()).commit();
      setStatus("Текущие тексты сайта загружены. Откройте разделы слева.");
    } catch {
      setStatus("Не удалось загрузить содержимое. Попробуйте ещё раз.");
    } finally {
      setLoading(false);
    }
  };

  return <Card><Stack><Text>Загрузить текущие тексты сайта</Text><Text>Обновит главную, услуги, артистов, контакты и кейсы данными с сайта. Используйте один раз перед началом ручного редактирования.</Text><Button text={loading ? "Загружаем…" : "Загрузить текущий контент"} tone="primary" onClick={seed} disabled={loading} />{status && <Text>{status}</Text>}</Stack></Card>;
}

export const seedTool = definePlugin({
  name: "seed-tool",
  tools: (prev) => [...prev, { name: "seed-content", title: "Загрузить контент", component: SeedTool }],
});
