import { NextRequest, NextResponse } from 'next/server';
import { signToken } from '@/lib/auth';

export async function POST(req: NextRequest) {
  const { email, password, name } = await req.json();
  // Here: Hash password, save user to DB, generate token
  const token = await signToken({ email, name });
  return NextResponse.json({ token, message: 'User registered' }, { status: 201 });
}
