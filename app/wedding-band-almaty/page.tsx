import ServiceLandingPage, { buildMetadata } from "../components/ServiceLandingPage";

export const metadata = buildMetadata({
  pathname: "/wedding-band-almaty",
  image: "/images/landing/wedding-gh8.jpg",
  title: "Группа на свадьбу в Алматы — Grunge Hotel",
  description:
    "Группа на свадьбу в Алматы: живая музыка для свадебного вечера, танцпола и сильных моментов программы. Grunge Hotel — репертуар под гостей и работа в связке с организатором.",
});

export default function WeddingBandAlmatyPage() {
  return (
    <ServiceLandingPage
      pathname="/wedding-band-almaty"
      cmsId="service-wedding"
      instagramCasesTitle="Кейсы Grunge Hotel"
      instagramCasesDescription="Реальные корпоративные, онлайн- и студийные форматы с участием Grunge Hotel. Открывайте кейс, чтобы посмотреть оригинал в Instagram."
      instagramCases={[
        { title: "Samsung", href: "https://www.instagram.com/reel/CmQsB-Mr357/" },
        { title: "Samsung · event case", href: "https://www.instagram.com/p/CmQmwgQtk3p/?img_index=4" },
        { title: "VTB · New Year", href: "https://www.instagram.com/p/DD_hr23iqgc/" },
        { title: "Nurbank · Бахчисарай", href: "https://www.instagram.com/p/DYxCzENJHG1/" },
        { title: "Bereke · Atakent", href: "https://www.instagram.com/p/DXLoiOUgm6L/" },
        { title: "Unilever · online format", href: "https://www.instagram.com/reel/CYy57gaFgMx/" },
      ]}
      eyebrow="wedding band · almaty · live music"
      title="Группа на свадьбу в Алматы, которая держит зал и не ломает темп вечера"
      description="Grunge Hotel — живая группа для свадеб в Алматы: музыкальные блоки под настроение гостей, понятная работа с организатором и живой сет, который действительно работает на танцпол."
      heroImage="/images/landing/wedding-gh8.jpg"
      heroAlt="Wedding live music by Grunge Hotel"
      intro={[
        "На свадьбе особенно важно не просто хорошо сыграть, а правильно попасть в настроение зала. У гостей разный возраст, разная музыкальная база и разная энергия в течение вечера.",
        "Поэтому мы строим программу так, чтобы музыка помогала вечеру развиваться: от первых сильных выходов до плотного танцевального блока, без ощущения случайного кавер-набора.",
      ]}
      bullets={[
        "Живая музыка для свадеб в Алматы",
        "Программа под гостей и сценарий вечера",
        "Танцевальные блоки без провалов по энергии",
        "Работа в связке с ведущим и организатором",
        "Сильный вокал и живая подача",
        "Форматы состава под задачу и бюджет",
      ]}
      audience={[
        "Свадебные агентства",
        "Частные клиенты",
        "Организаторы",
        "Площадки и банкетные залы",
      ]}
      scenarios={[
        {
          title: "Основной свадебный live-блок",
          text: "Когда группе нужно стать центральным музыкальным моментом вечера и уверенно собрать гостей на танцпол.",
        },
        {
          title: "Финальный драйвовый сет",
          text: "Когда задача — поднять энергию после основной программы и не уронить темп финала мероприятия.",
        },
        {
          title: "Свадьба с разной аудиторией",
          text: "Когда нужно удержать и молодую часть гостей, и старшее поколение, не делая программу слишком узкой.",
        },
      ]}
      faq={[
        {
          q: "Подходит ли группа для смешанной аудитории?",
          a: "Да. Это одна из ключевых задач свадебного формата — собирать программу так, чтобы она работала на гостей, а не только на музыкальные вкусы группы.",
        },
        {
          q: "Можно ли обсудить отдельные песни или ограничения?",
          a: "Да. До мероприятия обсуждаем репертуар, пожелания, нежелательные песни и общий вектор программы.",
        },
        {
          q: "Вы можете работать вместе с ведущим и шоу-программой?",
          a: "Да. Мы подстраиваемся под структуру вечера и входим в нужные точки программы без лишней суеты.",
        },
      ]}
    />
  );
}
