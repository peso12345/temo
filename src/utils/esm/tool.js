export function jsonStringToObject(data) {
    if (typeof data !== 'string') {
        return new Error('data is not a string')
    }
    if (data && (data[0] === '{') && (data[data.length - 1] === '}')) {
        data = JSON.parse(data)
    }
    return data
}

export function jsonObjectToString(data) {
    if (typeof data !== 'object') {
        return new Error('data is not a Object')
    }
    data = JSON.stringify(data)
    if (data && (data[0] === '{') && (data[data.length - 1] === '}')) {
        data = JSON.stringify(data)
    } else {
        return new Error('data is not a JSON')
    }
    return data
}