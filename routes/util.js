const valueInt = objOrg => {
    let obj = Object.assign(objOrg)
    Object.keys(obj).forEach( key => {
        if (typeof obj[key] === "object" && isArray(obj[key]) === false) {
           obj[key] = valueInt(obj[key])
        } else {
            obj[key] = isNaN(parseInt(obj[key])) ? obj[key] : parseInt(obj[key])
        }
    })
    return obj
}

const util = {valueInt: valueInt}

module.export = util