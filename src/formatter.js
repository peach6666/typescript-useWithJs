//代表叫編譯器忽略這個檔案
// @ts-nocheck
//叫編譯器必須檢查此檔案
// @ts-check
export function sizeFormatter(thing,count){
    writeMessage(`The ${thing} has ${count} items`)
}

//JSDOc註解，用來註解JS中函式的參數型別
//可以注意dist目錄下的宣告檔，會吃到JSDoc的設定
//在src下建立宣告檔描述js檔案的型別，優先級會比JSDoc高
/**
 * 
 * @param {string} thing 
 * //JSDoc中可進行TS用法
 * @param {number|string} cost 
 */
export function costFormatter(thing,cost){
    if(typeof cost === "number"){
        writeMessage(`The ${thing} cost $${cost.toFixed(2)}`)
    }else{
        writeMessage(`The ${thing} cost $${cost}`)
    }
}

function writeMessage(message){
    console.log(message)
}