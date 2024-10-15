export const runtime = "edge"

export async function GET() {
    const s = await (await fetch('https://667a9ab8bd627f0dcc8fb34b.mockapi.io/athlete/1', { next: { tags: ['cachedata'] } })).json()
    return Response.json(s, {
        headers: {
            'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120'
        }
    })
}
