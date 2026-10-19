import { NextResponse } from "next/server"
import { z } from "zod"
import { db } from "@/lib/db"

const contatoSchema = z.object({
  nome: z
    .string()
    .trim()
    .min(2, { message: "Conte para nós o seu nome." })
    .max(120),
  email: z
    .string()
    .trim()
    .email({ message: "Parece que o e-mail veio com um dedo errado." })
    .max(160),
  whatsapp: z.string().trim().max(30).optional().or(z.literal("")),
  servico: z
    .string()
    .trim()
    .min(2, { message: "Escolha o momento que deseja eternizar." })
    .max(80),
  data: z.string().trim().max(20).optional().or(z.literal("")),
  mensagem: z
    .string()
    .trim()
    .min(10, { message: "Conte um pouquinho mais da sua história." })
    .max(2000),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const parsed = contatoSchema.safeParse(body)

    if (!parsed.success) {
      const primeiroErro =
        parsed.error.issues[0]?.message ?? "Dados inválidos no formulário."
      return NextResponse.json(
        { ok: false, erro: primeiroErro },
        { status: 400 }
      )
    }

    const { nome, email, whatsapp, servico, data, mensagem } = parsed.data

    await db.contato.create({
      data: {
        nome,
        email,
        whatsapp: whatsapp || null,
        servico,
        data: data || null,
        mensagem,
      },
    })

    return NextResponse.json({
      ok: true,
      mensagem: `Obrigada, ${nome.split(" ")[0]}! Sua história chegou até a gente.`,
    })
  } catch (error) {
    console.error("[CONTATO] Erro ao salvar:", error)
    return NextResponse.json(
      {
        ok: false,
        erro: "Não conseguimos registrar sua mensagem agora. Tente de novo em instantes ou chame no WhatsApp.",
      },
      { status: 500 }
    )
  }
}
