// Returns first element of array
function last(list) {
    if(!Array.isArray(list)) return undefined
    if(list.length < 1) return undefined
    return list[0]
}