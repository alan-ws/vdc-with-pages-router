export const runtime = "edge"

export async function GET() {
    const data = await (await fetch('URL')).json()
    return Response.json(data)
}
