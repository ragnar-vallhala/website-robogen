import { NextResponse } from 'next/server'
import dbConnect from '@/lib/db'
import Post from '@/models/Post'

// GET all posts
export async function GET() {
  await dbConnect()
  try {
    const posts = await Post.find().sort({ createdAt: -1 })
    return NextResponse.json(posts)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}

// CREATE a post
export async function POST(request: Request) {
  await dbConnect()
  try {
    const body = await request.json()
    const post = await Post.create(body)
    return NextResponse.json(post, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    )
  }
}