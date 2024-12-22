import { openai } from '@ai-sdk/openai'
import { streamText } from 'ai'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function POST(req: NextRequest) {
  const { messages } = await req.json()
  const result = streamText({
    model: openai('gpt-4-turbo'),
    messages,
    system: "You are a helpful AI assistant. Provide concise and friendly responses.",
})
  return result.toDataStreamResponse()
}

