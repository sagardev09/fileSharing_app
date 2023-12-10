export const randomstring = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let result = ""
    for (let index = 0; index < 6; index++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))

    }
    return result
}