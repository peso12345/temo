"use client"
import Link from "next/link";
import {useRouter} from "next/navigation";

export default function Page(params: any) {
    console.log(params)
    const router = useRouter()
    console.log(router)
    return <>
        <div className={'color-page'}><Link className={'text-3xl text-blue-500 hover:underline'}
                                            href={'/home'}>404!</Link></div>
    </>
}