export const runtime = "edge"

export async function GET() {
    const s = await (await fetch('https://667a9ab8bd627f0dcc8fb34b.mockapi.io/athlete/1', { next: { revalidate: 30 } })).json()
    return Response.json(s)
}