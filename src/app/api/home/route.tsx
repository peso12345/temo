import {NextResponse} from "next/server";
import Format from "@/app/api/responseFormat";

export async function GET(res: Request) {
    console.log(';;;;;;;;;;;;;;;;;;;;;;;;;;;')
    console.log(res);
    console.log(';;;;;;;;;;;;;;;;;;;;;;;;;;;')
    const obj = Format({obj: {3: 3}})
    return NextResponse.json(obj, {status: 200})
    // return NextResponse.redirect(new URL('/about', res.url))
}