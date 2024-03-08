import { Button,ColorPicker, Input, Switch} from "antd";

export default function Page(){
    const random = ()=> Math.floor(Math.random()*10+10)
    const msg = 'Login Page'
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div  style={{width:'50%',height:'50%'}} className='text-center'>
                <div className='text-blue-500 h-[85px] text-3xl'>{msg}</div>
                <Input></Input>
                <Input></Input>
                <Button type='primary' className={`bg-yellow-600 text-[${random()}px]`}>login</Button>
                {/*<ColorPicker/>*/}
                {/*<Switch/>*/}
            </div>
        </div>
    )
}