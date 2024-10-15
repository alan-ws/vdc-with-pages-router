import { revalidatePath } from "next/cache";

export const runtime = "edge"

export function GET() {
    try {
        revalidatePath("/api/static")
        return Response.json({ success: "true" })
    } catch (err) {
        return Response.json({ success: "false" })
    }
}