import { NextResponse } from 'next/server'
import sql from '@/lib/db'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '50', 10)
    const offset = parseInt(searchParams.get('offset') || '0', 10)

    const items = await sql`
      SELECT * FROM neighborhoods
      ORDER BY created_at DESC
      LIMIT ${limit}
      OFFSET ${offset}
    `

    const countResult = await sql`
      SELECT COUNT(*) as total FROM neighborhoods
    `

    return NextResponse.json({
      data: items,
      total: parseInt(countResult[0].total, 10),
      limit,
      offset,
    })
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch neighborhoods' },
      { status: 500 }
    )
  }
}
