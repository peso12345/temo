const express = require('express')
const {createServer} = require('http')
const {Server, WebSocket} = require('ws')
const jsonTo = require("../utils/node/tool");

const app = express()
const port = 3333
const server = createServer(app)
const wss = new Server({server})

const userinfo = []
let useritem = {
    username: '',
    message: '',
    timestamp: 0,
    uuid: '',
    ip: '',
    id: '',
}
wss.on('connection', (ws, req) => {
    const ip = req.socket.remoteAddress
    console.log(ip)
    useritem.ip = ip
    ws.on('message', (message, isBinary) => {
        console.log(`服务器收到消息: ${message}`)
        // 获取uuid
        // 创建一个新的 Buffer 对象，并传入 data 数组
        const bufferData = Buffer.from(JSON.parse(JSON.stringify(message)).data);
        // 根据实际编码格式将 Buffer 转换为字符串
        const stringData = bufferData.toString('utf-8'); // 这里假设是 UTF-8 编码
        // console.log(stringData); // 输出转换后的字符串内容
        useritem.uuid = jsonTo.jsonStringToObject(stringData)?.uuid.toString();
        ws.send(JSON.stringify(useritem), {binary: false})
        // console.log(useritem)
        // 保存消息
        console.log(jsonTo.jsonStringToObject(stringData))
        useritem.message = jsonTo.jsonStringToObject(stringData)?.message?.toString();
        useritem.id = jsonTo.jsonStringToObject(stringData)?.id?.toString();
        // 判断用户是否存在
        const flag = userinfo.some(item => {
            return item.uuid === useritem.uuid;
        })
        // 存储用户信息
        if (!flag) {
            userinfo.push(useritem)
        }
        console.log(userinfo)
        console.log(isBinary, ':================')
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify(useritem), {binary: isBinary});
            }
        });
    })
    console.log(useritem)
    ws.send('通信返回:正常 (0;0）!')
    // ws.send(JSON.stringify(ws))
    // ws.send(JSON.stringify(req))
})

app.get('/', (req, res) => {
    res.send('<div>Hello World!<p>rr</p></div>')
})

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})