"use client"
import colors from '../../data/colors.json'
import Link from "next/link";
import {MetadataRoute} from "next";
import {useContext, useEffect, useState} from "react";
import {Button} from "antd";
import Head from "next/head";

// import {Metadata} from "next";

interface Color {
    name: string,
    hex: string,
}

// export async function getStaticPaths() {
//     const paths = colors.map(color => ({
//         params: {color: color.name}
//     }))
//     return {paths, fallback: false}
// }

// export const metadata = {
//     title: 'Colors!'
// }
// export function AppTitle({title: title = 'title so many'}) {
//     return <title>{title}</title>
// }

// export async function generateStaticParams() {
//     // const color = colors.find(color => color.name === decodeURIComponent(params.color))
//     return colors.map(color => ({color: encodeURIComponent(color.name?.replace(' ', '-'))}))
// }
const object = {
    title: 'Colors!',
    color: 'red',
    replaceSpace: function (col: string) {
        this.color += col.replace(' ', '-')
        return this;
    }
}

class Colord {
    public color: string;

    constructor(val?: string) {
        this.color = val || '';
    }

    replaceSpace(col?: string) {
        this.color = col ? col.replace(' ', '-') : this.color.replace(' ', '-')
        return this;
    }
}

export default function Page({params}: any) {
    // useContext()
    console.log(colors);
    console.log(params);
    // object.replaceSpace(params.color)
    const object = new Colord(params.color).replaceSpace()
    console.log(object)

    function getStaticProps(params: any) {
        const parColor = decodeURIComponent(params.color).replace(' ', '-')
        const color = colors.find(color => color.name.replace(' ', '-') === parColor)
        return {props: {color}}
    }

    let {props: {color}} = getStaticProps(params)
    console.log(color)
    if (!color) {
        color = {} as Color;
        color['name'] = params.color
        color['hex'] = ''
    }
    console.log(color)
    // useEffect(() => {
    //     console.log(params.color, ':params')
    //     document.title = decodeURIComponent(params.color)
    // })
    // const [title, setTitle] = useState(0)
    console.log('r')

    return (<>
        {/*<Head>*/}
        <title>{color.name}</title>
        {/*</Head>*/}
        <div className={'color-page'} style={{backgroundColor: color?.hex}}>
            {/*<Button onClick={() => setTitle(title + 1)}>*/}
            {/*<div>{title}</div>*/}
            {/*</Button>*/}
            {
                !color.hex ?
                    <div className={'flex'}>（&nbsp;未知颜色：
                        <Link href={`https://www.baidu.com/s?wd=${color.name?.replace(' ', '-')}`}>
                            <div className={'text-green-600'}>{color.name?.replace(' ', '-')}</div>
                        </Link>
                        &nbsp;）
                    </div> : <></>
            }
            <div>current path:</div>
            <div className={'text-blue-600'}>{params.color}</div>
            <div>;</div>
            <div>
                {colors.map(color => {
                    return <Link href={`/${color.name?.replace(' ', '-')}`} key={color.hex}>
                        <h2 className={'text-blue-600'}>{color.name?.replace(' ', '-')}</h2>
                    </Link>
                })}
            </div>
        </div>
    </>)
}
