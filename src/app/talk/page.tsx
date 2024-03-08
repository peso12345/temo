"use client"
import TextArea from "antd/es/input/TextArea";
import {Button, Flex} from "antd";
import {useEffect, useRef, useState} from "react";
import {ClientJS} from 'clientjs';
import {jsonStringToObject, useStringToJSON} from "@/utils/esm/tool";
import {nanoid} from "nanoid";

export default function Page() {
    const ws = new WebSocket("ws://127.0.0.1:3333");
    const [message, setMessage] = useState('')
    const [fingerprint, setFingerprint] = useState('')
    const [allData, setAllData] = useState([])
    const textRef = useRef(null)

    useEffect(() => {
        ws.onerror = () => {
            console.log("WebSocket:连接失败!")
        };
        ws.onopen = () => {
            console.log("WebSocket:连接成功!");
            const client = new ClientJS();
            console.log(client)
            const fgp = client.getFingerprint()
            setFingerprint(fgp); // 异步操作
            console.log('指纹：' + fgp);

            ws.send(JSON.stringify({uuid: fingerprint}))
        };
        ws.onmessage = (event) => {
            console.log(event);
            let data = event.data
            data = jsonStringToObject(data)
            console.log('--------- start --------')
            console.log(data)
            console.log('---------- end ---------')
            if (data['uuid'] && data['message']) {
                setAllData((prevState: any) => prevState.concat(data))
            }
        };
        ws.onclose = () => {
            console.log("WebSocket:连接关闭！")
        };
    }, [])
    // const data = [
    //     {
    //         "id": 1,
    //         "username": "Alice",
    //         "message": "大家好，很高兴加入这次讨论！",
    //         "timestamp": "2023-03-01T10:00:00Z"
    //     },
    //     {
    //         "id": 2,
    //         "username": "Bob",
    //         "message": "欢迎Alice，我们今天要讨论的是关于新的项目计划。",
    //         "timestamp": "2023-03-01T10:02:00Z"
    //     },
    //     {
    //         "id": 3,
    //         "username": "Charlie",
    //         "message": "是啊，Alice，你对此有什么初步的想法吗？",
    //         "timestamp": "2023-03-01T10:05:00Z"
    //     },
    //     {
    //         "id": 4,
    //         "username": "Alice",
    //         "message": "我觉得我们可以从优化现有架构入手，逐步引入新功能...",
    //         "timestamp": "2023-03-01T10:07:00Z"
    //     },
    //     {
    //         "id": 5,
    //         "username": "David",
    //         "message": "赞同Alice的观点，同时我认为我们也需要考虑性能优化的问题。",
    //         "timestamp": "2023-03-01T10:10:00Z"
    //     }
    // ]
    return <div>
        <div>
            {
                allData.map((item) => {
                    return <div key={item.id}>
                        <div>{item.username}</div>
                        <div>{item.message}</div>
                        <div>{item.timestamp}</div>
                    </div>
                })
            }
        </div>
        <TextArea ref={textRef} placeholder={'请输入要发送的消息：'} value={message} onChange={(e) => {
            setMessage(e.target.value)
        }}></TextArea>
        <Flex gap={'middle'} justify={'center'}>
            <Button type={'primary'} className={'bg-blue-500'} onClick={() => {
                console.log(message)
                console.log(typeof fingerprint)
                console.log(fingerprint)
                ws.send(JSON.stringify({
                    message,
                    uuid: fingerprint.toString(),
                    id: nanoid()
                }))
                setMessage('')
            }}>send</Button>
            <Button className={'bg-gradient-to-b'} onClick={() => {
                console.log(allData)
            }}>close</Button>
        </Flex>
    </div>
}