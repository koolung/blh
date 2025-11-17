import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Create or update email subscription
    const subscription = await prisma.emailSubscription.upsert({
      where: { email },
      update: { updatedAt: new Date() },
      create: { email },
    });

    return NextResponse.json(
      { message: 'Successfully subscribed!', subscription },
      { status: 201 }
    );
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'An error occurred while subscribing' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
