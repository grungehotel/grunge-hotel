import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const tgToken = process.env.TG_TOKEN;
    const tgChatId = process.env.TG_CHAT_ID;

    if (!tgToken || !tgChatId) {
      return NextResponse.json(
        {
          ok: false,
          error: "TG_TOKEN or TG_CHAT_ID is missing",
        },
        { status: 500 }
      );
    }

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
      `https://api.telegram.org/bot${tgToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: tgChatId,
          text,
        }),
      }
    );

    const result = await response.json();

    if (!response.ok || !result.ok) {
      return NextResponse.json(
        {
          ok: false,
          error: result.description || "Telegram API request failed",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}