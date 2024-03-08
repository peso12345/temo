import {valueOf} from "postcss";

interface Value {
    code: number,
    obj: object | number | string,
    success: boolean,
}

export default function Format(val: Partial<Value> | string = {}) {
    return {
        code: val.code ?? 200,
        obj: val.obj ?? null,
        success: val.success ?? true,
    }
}