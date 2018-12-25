module.exports = function(content){
    if (typeof content === 'string' && !isJsonString(content)){
        return null;
    }

    var jsonFile = typeof content === 'string' ? JSON.parse(content) : content;
    return JSON.stringify(jsonFile).replace(/[0-9]/g, '');
}

function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}