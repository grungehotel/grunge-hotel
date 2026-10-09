import ServiceLandingPage, { buildMetadata } from "../components/ServiceLandingPage";

export const metadata = buildMetadata({
  pathname: "/musicians-for-corporate-almaty",
  image: "/images/landing/corporate-redcat.jpg",
  title: "Музыканты на корпоратив в Алматы — Grunge Hotel",
  description: "Музыканты на корпоратив в Алматы: живой состав, музыкальные блоки для welcome, основной программы и afterparty.",
});

export default function MusiciansForCorporateAlmatyPage() {
  return <ServiceLandingPage
    pathname="/musicians-for-corporate-almaty"
    eyebrow="musicians for corporate · almaty"
    title="Музыканты на корпоратив в Алматы без случайного музыкального фона"
    description="Grunge Hotel — живой состав для корпоративных событий: от музыкального блока до полноценной программы, собранной под гостей и сценарий."
    heroImage="/images/landing/corporate-redcat.jpg"
    heroAlt="Музыканты Grunge Hotel на корпоративе"
    intro={["Для корпоративного формата важно не только, как звучат музыканты, но и как они работают внутри общей программы. Тайминг, входы, взаимодействие с ведущим и понятная коммуникация здесь так же важны, как репертуар.", "Мы собираем музыкальную часть под задачу: welcome, основной блок или финальный сет вечера."]}
    bullets={["Живая группа для корпоративного формата", "Welcome, main block и afterparty", "Понятная координация с организатором", "Варианты состава под формат события"]}
    audience={["Компании", "Event-агентства", "Маркетинг-команды", "HR"]}
    scenarios={[{ title: "Welcome", text: "Музыкальный акцент на входе и в момент сбора гостей." }, { title: "Основная программа", text: "Живой выход в ключевой части вечера." }, { title: "Afterparty", text: "Танцевальный блок после официальной части." }]}
    faq={[{ q: "Можно ли заказать один музыкальный блок?", a: "Да. Формат и длительность обсуждаются в брифе мероприятия." }, { q: "Вы предоставляете техническое решение?", a: "Технические условия уточняем под конкретное место проведения и задачу." }]}
  />;
}
