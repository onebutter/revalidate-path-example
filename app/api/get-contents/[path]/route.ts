import type { NextRequest } from 'next/server'

export async function GET(
  request: NextRequest,
  params: { params: { path: string } }
) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  const data = await response.json()
  
  return Response.json({
    data,
    path: params.params.path,
    timestamp: Date.now()
  })
}
