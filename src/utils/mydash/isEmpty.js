function isEmpty(value) {
    if (typeof value === "boolean") return true
    if (typeof value === "number") return true
    return !value
}
