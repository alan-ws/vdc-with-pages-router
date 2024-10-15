import { revalidateTag } from "next/cache";

export const runtime = "edge"

export function GET() {
    try {
        revalidateTag("cachedata")
        return Response.json({ success: "true" })
    } catch (err) {
        return Response.json({ success: "false" })
    }
}
