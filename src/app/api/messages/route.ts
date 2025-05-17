// app/api/messages/route.ts
import { NextResponse } from 'next/server'
import dbConnect from '@/lib/db'
import Message from '@/models/Message'
import { sendEmail } from '@/lib/sendEmail';
import { contactTemplate } from '@/lib/templates/contactTemplate';

export async function POST(request: Request) {
  await dbConnect()
  
  try {
    const body = await request.json()
    
    // Basic validation
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Name, email and message are required' },
        { status: 400 }
      )
    }

    const message = await Message.create(body)

    const html = contactTemplate(body.name, body.message);
    await sendEmail({
      to: body.email,
      subject: 'Thanks for Contacting Us!',
      html,
    });
    
    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
      data: message
    }, { status: 201 })
    
  } catch (error) {
    console.error('Error saving message:', error)
    return NextResponse.json(
      { error: 'Failed to save message', details: error },
      { status: 500 }
    )
  }
}

// app/api/messages/route.ts (add GET handler)
export async function GET() {
    await dbConnect()
    
    try {
      const messages = await Message.find().sort({ createdAt: -1 })
      return NextResponse.json(messages)
    } catch (error) {
      return NextResponse.json(
        { error: 'Failed to fetch messages' },
        { status: 500 }
      )
    }
  }