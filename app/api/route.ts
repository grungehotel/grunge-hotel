import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, phone, date, format, comment } = await req.json();

    const text = [
      "Новая заявка с сайта Grunge Hotel",
      "",
      `Имя: ${name || "-"}`,
      `Телефон / WhatsApp: ${phone || "-"}`,
      `Дата мероприятия: ${date || "-"}`,
      `Формат мероприятия: ${format || "-"}`,
      `Комментарий: ${comment || "-"}`,
    ].join("\n");

    const response = await fetch(
      `https://api.telegram.org/bot${process.env.TG_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: process.env.TG_CHAT_ID,
          text,
        }),
      }
    );

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}