import Format from "@/app/api/responseFormat";
import {NextResponse} from "next/server";

export async function GET() {
    const obj = Format({obj: 'hello!'})
    return NextResponse.json(obj, {status: 200})
}