import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  // Basic security: you should replace this with proper authentication
  const token = request.headers.get('authorization');
  const expectedToken = process.env.ADMIN_TOKEN || 'default-admin-token';

  if (token !== `Bearer ${expectedToken}`) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const subscriptions = await prisma.emailSubscription.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({
      total: subscriptions.length,
      subscriptions,
    });
  } catch (error) {
    console.error('Error fetching subscriptions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch subscriptions' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
