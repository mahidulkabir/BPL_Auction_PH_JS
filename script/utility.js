function getConvertedValue(id){
    const idName = document.getElementById(id).innerText;
    const convertedIdName = parseInt(idName);
    return convertedIdName;
}