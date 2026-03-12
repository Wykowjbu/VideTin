import { NextRequest, NextResponse } from 'next/server';
import { signToken } from '@/lib/auth';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  // Here: Verify user from DB, compare password hash
  const token = await signToken({ email });
  return NextResponse.json({ token, message: 'Login successful' }, { status: 200 });
}
