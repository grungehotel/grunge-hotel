import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Grunge Hotel — структура сайта")
    .items([
      S.listItem()
        .title("Главная страница")
        .icon(() => "⌂")
        .child(S.document().schemaType("homepage").documentId("homepage")),
      S.divider(),
      S.listItem()
        .title("Живая группа")
        .child(
          S.documentTypeList("service")
            .title("Живая группа")
            .filter('_type == "service" && group == "Живая группа"')
        ),
      S.listItem()
        .title("Контент-продакшн")
        .child(
          S.documentTypeList("service")
            .title("Контент-продакшн")
            .filter('_type == "service" && group == "Контент-продакшн"')
        ),
      S.listItem()
        .title("Организация концертов")
        .child(
          S.documentTypeList("service")
            .title("Организация концертов")
            .filter('_type == "service" && group == "Другое"')
        ),
      S.divider(),
      S.listItem().title("Артисты: Frontman / Frontwoman").child(S.documentTypeList("artist").title("Артисты")),
      S.listItem().title("Кейсы и видео").child(S.documentTypeList("caseStudy").title("Кейсы и видео")),
      S.divider(),
      S.listItem()
        .title("Контакты и ссылки")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
    ]);
