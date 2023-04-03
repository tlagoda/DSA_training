/* 
    HASH TABLE
*/

// hash function
const hash = (key, size) => {
    let hashedKey = 0
    for(let i = 0; i < key.length ; i ++) {
        hashedKey = key.charCodeAt(i)
    }
    return hashedKey % size
}

