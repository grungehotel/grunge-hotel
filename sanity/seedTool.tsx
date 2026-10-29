import { useState } from "react";
import { Button, Card, Stack, Text } from "@sanity/ui";
import { definePlugin, useClient } from "sanity";

const block = (text: string, key: string) => ({ _key: key, _type: "block", children: [{ _key: key + "s", _type: "span", text }], markDefs: [], style: "normal" });

const documents = [
  { _id: "siteSettings", _type: "siteSettings", title: "Grunge Hotel", instagram: "https://www.instagram.com/grungehotel.liveband", email: "grungehotels@gmail.com", phone: "+77072996264", whatsapp: "77072996264" },
  { _id: "homepage", _type: "homepage", eyebrow: "Almaty · live band · music & event production", heroTitle: "Живая группа и музыкальный подрядчик для мероприятий в Алматы", heroText: "Grunge Hotel — это группа на корпоративы, свадьбы и частные события, с которой удобно работать организатору. Сильный вокал, широкий репертуар, адаптация под аудиторию и результат без лишнего хаоса.", ctaLabel: "Связаться с менеджером", ctaLink: "https://wa.me/77072996264", badges: ["Event-агентства", "Корпоративные клиенты", "Свадьбы", "500+ песен", "3 сета по 30–40 минут"] },
  { _id: "service-live-band", _type: "service", title: "Живая группа", slug: { current: "live-band-almaty" }, group: "Живая группа", description: "Главный формат Grunge Hotel для корпоративов, свадеб и частных событий: сильный вокал, широкий репертуар, адаптация под аудиторию и понятная работа с организатором." },
  {
    _id: "service-corporate", _type: "service", title: "Группа на корпоратив", slug: { current: "corporate-band-almaty" }, group: "Живая группа",
    eyebrow: "corporate band · almaty · b2b events",
    heroTitle: "Группа на корпоратив в Алматы для компаний, которым нужен уверенный live-результат",
    description: "Grunge Hotel работает на корпоративных мероприятиях как музыкальный подрядчик: живой состав, адаптация под публику, координация с организатором и понятный рабочий процесс.",
    heroAlt: "Corporate live performance by Grunge Hotel",
    ctaPrimary: "Связаться с менеджером", ctaSecondary: "Оставить заявку",
    intro: [
      "Корпоратив — это не просто концертный выход. Здесь важны темп вечера, аудитория, внутренняя культура компании и то, насколько группа умеет встроиться в программу без лишнего шума.",
      "Мы работаем именно как подрядчик под корпоративную задачу: заранее согласовываем формат, музыкальные пики, длительность сетов и взаимодействие с организатором или event-агентством.",
    ],
    bullets: [
      "Работа с event-агентствами и прямыми корпоративными заказчиками",
      "Музыкальная программа под бренд, публику и тайминг",
      "Сильный вокал и живой драйв без перегруза",
      "Понятная коммуникация до и во время мероприятия",
      "Форматы для welcome, main block и afterparty",
      "Опыт корпоративных мероприятий для крупных компаний",
    ],
    audience: ["B2B клиенты", "HR и marketing teams", "Event-агентства", "Закрытые корпоративы"],
    scenarios: [
      { title: "Новогодний корпоратив", text: "Когда нужно дать вечернему блоку максимум энергии и собрать танцпол без затяжного раскачивания." },
      { title: "Бренд-мероприятие", text: "Когда музыкальная часть должна выглядеть дорого, собранно и поддерживать общий статус события." },
      { title: "Клиентский вечер", text: "Когда живая группа должна усиливать впечатление от бренда, а не перетягивать внимание не в ту сторону." },
    ],
    faq: [
      { q: "Вы умеете работать под строгий тайминг?", a: "Да. Для корпоративов это базовое требование. Мы заранее обсуждаем тайминг, блоки и точки входа в программу." },
      { q: "Можно ли согласовать репертуар под компанию и гостей?", a: "Да. При необходимости собираем отдельные акценты: более танцевально, более статусно, мягче на welcome или плотнее на основной блок." },
      { q: "Вы работаете с документами?", a: "Да, организационные вопросы и формат сотрудничества обсуждаются на этапе брифа и подготовки заявки." },
    ],
    seoTitle: "Группа на корпоратив в Алматы — Grunge Hotel",
    seoDescription: "Группа на корпоратив в Алматы: живое выступление для компаний, брендов и закрытых событий. Grunge Hotel — сильная программа, понятная коммуникация и работа под тайминг вечера.",
  },
  { _id: "service-wedding", _type: "service", title: "Группа на свадьбу", slug: { current: "wedding-band-almaty" }, group: "Живая группа", description: "Живая программа для свадебного вечера: сильные музыкальные блоки, танцпол и работа под гостей и тайминг мероприятия." },
  { _id: "service-duets", _type: "service", title: "Дуэты и инструменталисты", slug: { current: "duets-instrumentalists-almaty" }, group: "Живая группа", description: "Музыкальное сопровождение камерных форматов, церемоний и специальных блоков мероприятия." },
  { _id: "service-new-year", _type: "service", title: "Новогодний корпоратив", slug: { current: "new-year-corporate-band-almaty" }, group: "Живая группа", description: "Концертная программа для новогоднего корпоратива: живой звук, танцпол и работа по таймингу вечера." },
  { _id: "service-studio", _type: "service", title: "Студия звукозаписи", slug: { current: "studio-recording-almaty" }, group: "Продакшн услуги", description: "Запись вокала, барабанов, группы целиком, поканальная запись и студийные задачи как отдельное направление проекта." },
  { _id: "service-alan-audio", _type: "service", title: "Сведение / мастеринг — Alan Audio", slug: { current: "alanaudio" }, group: "Продакшн услуги", description: "Сведение, мастеринг, запись вокала, аранжировка и музыкальное производство с Аланом Салпагаровым." },
  { _id: "service-session", _type: "service", title: "Сессионные музыканты", slug: { current: "session-musicians-almaty" }, group: "Продакшн услуги", description: "Музыканты для студийных записей, концертных программ и авторских проектов." },
  { _id: "service-vocal-coaching", _type: "service", title: "Вокальный коучинг", slug: { current: "vocal-coaching-almaty" }, group: "Продакшн услуги", eyebrow: "vocal coaching · almaty · events", heroTitle: "Вокальный коучинг для мероприятий в Алматы", description: "Яна Малоземова — вокалистка с 30-летним опытом и преподаватель вокала с 11-летним опытом. Профессиональная вокальная подготовка и сопровождение мероприятий.", heroAlt: "Яна Малоземова — вокальный коуч" },
  { _id: "service-concerts", _type: "service", title: "Организация концертов", slug: { current: "concert-organization-almaty" }, group: "Другое", description: "Организация музыкальной части события: программа, артисты, координация и производство." },
  { _id: "service-cover-band", _type: "service", title: "Кавер-группа в Алматы", slug: { current: "cover-band-almaty" }, group: "Живая группа", eyebrow: "cover band · almaty · live music", heroTitle: "Кавер-группа в Алматы для событий, которым нужен живой характер", description: "Grunge Hotel — кавер-группа для корпоративов, свадеб и частных мероприятий в Алматы. Собираем программу под гостей, тайминг и задачу вечера.", heroAlt: "Grunge Hotel — кавер-группа в Алматы" },
  { _id: "service-arrangement", _type: "service", title: "Аранжировка песни", slug: { current: "arrangement-almaty" }, group: "Продакшн услуги", eyebrow: "arrangement · production · almaty", heroTitle: "Аранжировка песни в Алматы: убрать лишнее, оставить характер", description: "Алан Салпагаров помогает собрать аранжировку от идеи и демо до цельного трека: форма, инструментальные партии и фактура.", heroAlt: "Алан Салпагаров в студии" },
  { _id: "service-audio-engineer", _type: "service", title: "Аудиоинженер в Алматы", slug: { current: "audio-engineer-almaty" }, group: "Продакшн услуги", eyebrow: "audio engineer · almaty · production", heroTitle: "Аудиоинженер в Алматы для записи, продакшна и релиза", description: "Алан Салпагаров — аудиоинженер и композитор. Помогает провести трек от идеи и записи до сведения, мастеринга и релизной версии.", heroAlt: "Алан Салпагаров — аудиоинженер" },
  { _id: "service-mixing-mastering", _type: "service", title: "Сведение и мастеринг", slug: { current: "mixing-mastering-almaty" }, group: "Продакшн услуги", eyebrow: "mixing · mastering · almaty", heroTitle: "Сведение и мастеринг в Алматы: трек, который держит внимание", description: "Алан Салпагаров работает со сведением и мастерингом: от подготовки проекта до финального релизного мастера.", heroAlt: "Алан Салпагаров — аудиоинженер в Алматы" },
  { _id: "service-musicians-corporate", _type: "service", title: "Музыканты на корпоратив", slug: { current: "musicians-for-corporate-almaty" }, group: "Живая группа", eyebrow: "musicians for corporate · almaty", heroTitle: "Музыканты на корпоратив в Алматы без случайного музыкального фона", description: "Grunge Hotel — живой состав для корпоративных событий: от музыкального блока до полноценной программы, собранной под гостей и сценарий.", heroAlt: "Музыканты Grunge Hotel на корпоративе" },
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
      await Promise.all(documents.map(async (document) => {
        await client.createIfNotExists(document as any);
        const { _id, _type, ...fields } = document as any;
        await client.patch(_id).setIfMissing(fields).commit();
      }));
      setStatus("Весь текущий контент сайта загружен. Уже внесённые ручные правки сохранены.");
    } catch {
      setStatus("Не удалось загрузить содержимое. Попробуйте ещё раз.");
    } finally {
      setLoading(false);
    }
  };

  return <Card><Stack><Text>Загрузить весь текущий контент сайта</Text><Text>Создаст и дополнит документы всех текущих страниц: главной, услуг, артистов, кейсов, контактов и ссылок. Уже опубликованные ручные правки не перезаписываются.</Text><Button text={loading ? "Загружаем…" : "Загрузить текущий контент"} tone="primary" onClick={seed} disabled={loading} />{status && <Text>{status}</Text>}</Stack></Card>;
}

export const seedTool = definePlugin({
  name: "seed-tool",
  tools: (prev) => [...prev, { name: "seed-content", title: "Загрузить контент", component: SeedTool }],
});
