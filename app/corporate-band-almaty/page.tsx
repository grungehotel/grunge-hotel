import ServiceLandingPage, { buildMetadata } from "../components/ServiceLandingPage";
import { sanityClient, urlFor } from "../../sanity/lib/client";

export const dynamic = "force-dynamic";

const fallback = {
  pathname: "/corporate-band-almaty",
  eyebrow: "corporate band · almaty · b2b events",
  title: "Группа на корпоратив в Алматы для компаний, которым нужен уверенный live-результат",
  description: "Grunge Hotel работает на корпоративных мероприятиях как музыкальный подрядчик: живой состав, адаптация под публику, координация с организатором и понятный рабочий процесс.",
  heroImage: "/images/landing/corporate-redcat.jpg",
  heroAlt: "Corporate live performance by Grunge Hotel",
  ctaPrimary: "Связаться с менеджером",
  ctaSecondary: "Оставить заявку",
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
  instagramCases: [
    { title: "Sadea", href: "https://www.instagram.com/p/DYkDwJMNdiC/" },
    { title: "Nurbank · Бахчисарай", href: "https://www.instagram.com/p/DYxCzENJHG1/" },
    { title: "Bereke · Atakent", href: "https://www.instagram.com/p/DXLoiOUgm6L/" },
    { title: "Tinkoff", href: "https://www.instagram.com/p/DWnld7PiefV/" },
    { title: "KazAinv", href: "https://www.instagram.com/p/DTcptHxjakN/?img_index=1" },
    { title: "Total Energies", href: "https://www.instagram.com/p/DKADF7uti2j/" },
    { title: "Arma House · Atyrau", href: "https://www.instagram.com/p/DIaoPslI8BJ/" },
    { title: "VTB · New Year", href: "https://www.instagram.com/p/DD_hr23iqgc/" },
  ],
  seoTitle: "Группа на корпоратив в Алматы — Grunge Hotel",
  seoDescription: "Группа на корпоратив в Алматы: живое выступление для компаний, брендов и закрытых событий. Grunge Hotel — сильная программа, понятная коммуникация и работа под тайминг вечера.",
};

type ServiceContent = Partial<Omit<typeof fallback, "title" | "heroImage">> & {
  heroTitle?: string;
  image?: { asset?: unknown; alt?: string };
};

const serviceQuery = '*[_type == "service" && _id == "service-corporate"][0]{ eyebrow, heroTitle, description, image, heroAlt, ctaPrimary, ctaSecondary, intro, bullets, audience, scenarios, faq, seoTitle, seoDescription }';

async function getServiceContent(): Promise<ServiceContent | null> {
  try {
    return await sanityClient.fetch<ServiceContent | null>(serviceQuery, {}, { next: { revalidate: 60 } });
  } catch {
    return null;
  }
}

function resolveContent(cms: ServiceContent | null) {
  return {
    ...fallback,
    eyebrow: cms?.eyebrow || fallback.eyebrow,
    title: cms?.heroTitle || fallback.title,
    description: cms?.description || fallback.description,
    heroImage: cms?.image?.asset ? urlFor(cms.image).width(2200).quality(85).url() : fallback.heroImage,
    heroAlt: cms?.image?.alt || cms?.heroAlt || fallback.heroAlt,
    ctaPrimary: cms?.ctaPrimary || fallback.ctaPrimary,
    ctaSecondary: cms?.ctaSecondary || fallback.ctaSecondary,
    intro: cms?.intro?.length ? cms.intro : fallback.intro,
    bullets: cms?.bullets?.length ? cms.bullets : fallback.bullets,
    audience: cms?.audience?.length ? cms.audience : fallback.audience,
    scenarios: cms?.scenarios?.length ? cms.scenarios : fallback.scenarios,
    faq: cms?.faq?.length ? cms.faq : fallback.faq,
    seoTitle: cms?.seoTitle || fallback.seoTitle,
    seoDescription: cms?.seoDescription || fallback.seoDescription,
  };
}

export async function generateMetadata() {
  const content = resolveContent(await getServiceContent());
  return buildMetadata({ pathname: fallback.pathname, image: content.heroImage, title: content.seoTitle, description: content.seoDescription });
}

export default async function CorporateBandAlmatyPage() {
  const content = resolveContent(await getServiceContent());
  return <ServiceLandingPage {...content} />;
}
