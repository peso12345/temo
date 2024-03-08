import Format from "@/app/api/responseFormat";
import {NextResponse} from "next/server";

export async function POST() {
    const obj = Format({obj: '登陆成功！'})
    return NextResponse.json(obj, {status: 200})
}