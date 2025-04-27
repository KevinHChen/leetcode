/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let pack = path.split("/").filter(x=> x!="")
    
    // filter unwanted
    let filtered = pack.reduce((accu, elem) => {
        if (elem==="..") accu.pop()
        else if (elem === ".") {}
        else {accu.push(elem)}
        return accu
    }, [])
    
    // join
    return "/"+filtered.join("/")
};
