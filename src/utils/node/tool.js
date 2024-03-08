function jsonStringToObject(data) {
    if (typeof data !== 'string') {
        return new Error('data is not a string')
    }
    if (data && ((data.startsWith('{') && data.endsWith('}')) || (data.startsWith('[{') && data.endsWith('}]')))) {
        data = JSON.parse(data)
    }
    return data
}

function jsonObjectToString(data) {
    if (typeof data !== 'object') {
        return new Error('data is not a Object')
    }
    data = JSON.stringify(data)
    if (data && ((data.startsWith('{') && data.endsWith('}')) || (data.startsWith('[{') && data.endsWith('}]')))) {
        data = JSON.stringify(data)
    } else {
        return new Error('data is not a JSON')
    }
    return data
}

module.exports = {
    jsonStringToObject,
    jsonObjectToString,
}