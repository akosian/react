export const required = value => {
    if (value) {
        return undefined
    }
    return 'Field is required!'
}

export const maxLength10 = value => {
    if (value.length > 10 && value) {
        return 'Max length is 10 symbols'
    }
    return undefined
}

export const maxLength20 = value => {
    if (value.length > 20 && value) {
        return 'Max length is 20 symbols'
    }
    return undefined
}

export const MaxLengthCreator = (maxLength) => (value) => {
    if (value.maxLength > value && value) {
        return `Max length is ${maxLength} symbols`
    }
    return undefined
}