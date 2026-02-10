import { NextResponse } from 'next/server'
import sql from '@/lib/db'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const numId = parseInt(id, 10)

    if (isNaN(numId)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 })
    }

    const items = await sql`
      SELECT * FROM blogposts
      WHERE id = ${numId}
    `

    if (items.length === 0) {
      return NextResponse.json(
        { error: 'BlogPost not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ data: items[0] })
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch blogpost' },
      { status: 500 }
    )
  }
}
