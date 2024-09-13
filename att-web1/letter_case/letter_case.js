function uppercase(string) {
    if(typeof string == "string") {
    return string.toUpperCase();
    }
    return false;
}

function lowercase(string) {
    if(typeof string == "string") {
        return string.toLowerCase();
        }
        return false;
}

module.exports = {
    uppercase,
    lowercase
}