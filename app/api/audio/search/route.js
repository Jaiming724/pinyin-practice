import first_audio from "../../../util/first_audio.json"
import {NextResponse} from "next/server";

export async function GET(request) {
    const {searchParams} = new URL(request.url)
    const group = searchParams.get("group")
    const id = searchParams.get("id")
    return NextResponse.json(first_audio[id])
}
