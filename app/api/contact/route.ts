import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const { name, email, message } = (await req.json()) as Record<string, string>;
  if (!name || !email?.includes("@") || !message || message.length < 10) return NextResponse.json({ ok: false }, { status: 400 });
  console.log("Contact:", { name, email, message }); // TODO: send via an email service (Resend, Nodemailer)
  return NextResponse.json({ ok: true });
}
