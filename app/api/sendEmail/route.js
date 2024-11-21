import nodemailer from "nodemailer";
import { NextResponse,NextRequest } from "next/server";

export async function POST(req) {
  try {
    const { name, email, inquiryItem, inquiryContent } =
      await req.json();

    const transporter = nodemailer.createTransport({
      // service: "gmail",
      host: "smtp.gmail.com", // Host for Gmail
      port: 465, // Port 465 for secure SMTP, or 587 for TLS
      secure: true, // True for port 465, false for port 587
      auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.AUTH_EMAIL,
      to: process.env.MAIL_TO_SEND,
      subject: "Ishikawa Sake Brewery Inquiry",
      text: `
氏名 : ${name}
\n
メールアドレス : ${email}
\n
お問い合わせ項目 : ${inquiryItem}
\n
お問い合わせ内容 : ${inquiryContent}
`,
      // html: `
      //   <p>法人名 : ${companyName}</p>
      //   <p>氏名 : ${name}</p>
      //   <p>メールアドレス : ${email}</p>
      //   <p>電話番号 : ${phone}</p>
      //   <p>用件の種類 : ${matter}</p>
      //   <p>お問い合わせ内容 : ${content}</p>
      //   `,

      //    replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, msg: "メールが送信されました" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, msg: "問題が発生しました。" },
      { status: 400 }
    );
  }
}
