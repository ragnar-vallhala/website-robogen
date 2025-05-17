// app/api/register/route.ts
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { name, course, date } = await req.json();
  const client = await clientPromise;
  const db = client.db();

  try {
    await db.collection("registrations").insertOne({
      userId: session.user.id,
      name,
      course, 
      date,
      createdAt: new Date()
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Registration failed" }, { status: 500 });
  }
}