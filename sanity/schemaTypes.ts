import { defineField, defineType } from "sanity";

const imageField = defineField({
  name: "image",
  title: "Изображение",
  type: "image",
  options: { hotspot: true },
  fields: [defineField({ name: "alt", title: "Alt-текст для SEO", type: "string", validation: (Rule) => Rule.required() })],
});

export const schemaTypes = [
  defineType({ name: "siteSettings", title: "Настройки сайта", type: "document", fields: [
    defineField({ name: "title", title: "Название", type: "string", initialValue: "Grunge Hotel" }),
    defineField({ name: "instagram", title: "Instagram", type: "url" }),
    defineField({ name: "email", title: "Email для заявок", type: "string" }),
    defineField({ name: "phone", title: "Телефон", type: "string" }),
    defineField({ name: "whatsapp", title: "WhatsApp", type: "string" }),
  ] }),
  defineType({ name: "homepage", title: "Главная страница", type: "document", fields: [
    defineField({ name: "eyebrow", title: "Надзаголовок", type: "string" }),
    defineField({ name: "heroTitle", title: "Заголовок hero", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "heroText", title: "Текст hero", type: "text", rows: 4 }), imageField,
    defineField({ name: "ctaLabel", title: "Текст главной кнопки", type: "string" }),
    defineField({ name: "ctaLink", title: "Ссылка главной кнопки", type: "string" }),
    defineField({ name: "badges", title: "Плашки под hero", type: "array", of: [{ type: "string" }] }),
  ] }),
  defineType({ name: "artist", title: "Участник / артист", type: "document", fields: [
    defineField({ name: "name", title: "Имя", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "role", title: "Роль", type: "string" }),
    defineField({ name: "anchor", title: "Якорь раздела", type: "string" }),
    defineField({ name: "body", title: "Полный текст", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "ctaLabel", title: "Текст кнопки", type: "string" }),
    defineField({ name: "ctaLink", title: "Ссылка кнопки", type: "string" }),
    defineField({ name: "gallery", title: "Галерея", type: "array", of: [imageField] }),
    defineField({ name: "order", title: "Порядок", type: "number" }),
  ] }),
  defineType({ name: "service", title: "Услуга / посадочная страница", type: "document", fields: [
    defineField({ name: "title", title: "Название", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "URL", type: "slug", options: { source: "title", maxLength: 96 }, validation: (Rule) => Rule.required() }),
    defineField({ name: "group", title: "Группа в меню", type: "string", options: { list: ["Живая группа", "Продакшн услуги", "Другое"] } }),
    defineField({ name: "eyebrow", title: "Надзаголовок hero", type: "string" }),
    defineField({ name: "heroTitle", title: "Заголовок hero", type: "string" }),
    defineField({ name: "description", title: "Краткое описание", type: "text", rows: 3 }),
    imageField,
    defineField({ name: "heroAlt", title: "Alt-текст hero-изображения", type: "string" }),
    defineField({ name: "ctaPrimary", title: "Текст основной кнопки", type: "string" }),
    defineField({ name: "ctaSecondary", title: "Текст второй кнопки", type: "string" }),
    defineField({ name: "intro", title: "Текстовый блок «Что получает клиент»", type: "array", of: [{ type: "text" }] }),
    defineField({ name: "bullets", title: "Преимущества", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "audience", title: "Кому подходит", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "scenarios", title: "Сценарии", type: "array", of: [{ type: "object", fields: [
      defineField({ name: "title", title: "Заголовок", type: "string" }),
      defineField({ name: "text", title: "Описание", type: "text", rows: 3 }),
    ] }] }),
    defineField({ name: "faq", title: "Частые вопросы", type: "array", of: [{ type: "object", fields: [
      defineField({ name: "q", title: "Вопрос", type: "string" }),
      defineField({ name: "a", title: "Ответ", type: "text", rows: 3 }),
    ] }] }),
    defineField({ name: "pricingTitle", title: "Заголовок прайса", type: "string" }),
    defineField({ name: "pricingItems", title: "Позиции прайса", type: "array", of: [{ type: "object", fields: [
      defineField({ name: "label", title: "Услуга", type: "string" }),
      defineField({ name: "price", title: "Стоимость", type: "string" }),
      defineField({ name: "note", title: "Пояснение", type: "text", rows: 2 }),
    ] }] }),
    defineField({ name: "body", title: "Дополнительный текст страницы", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "seoTitle", title: "SEO title", type: "string", validation: (Rule) => Rule.max(60) }),
    defineField({ name: "seoDescription", title: "SEO description", type: "text", rows: 3, validation: (Rule) => Rule.max(160) }),
  ] }),
  defineType({ name: "caseStudy", title: "Кейс / видео", type: "document", fields: [
    defineField({ name: "title", title: "Название", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "description", title: "Описание", type: "text", rows: 3 }),
    defineField({ name: "mediaUrl", title: "YouTube / Instagram URL", type: "url" }), imageField,
    defineField({ name: "featured", title: "Показывать на главной", type: "boolean", initialValue: true }),
    defineField({ name: "order", title: "Порядок", type: "number" }),
  ] }),
];
