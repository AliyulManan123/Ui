//I am Lenz Do you want buy My script No Enecrypt Can you contact me at Instagram @vlntncptr
//if you got eror at code Can yiu contact Me at instagram @vlntncptr
const fs = require('fs')
const chalk = require('chalk')
global.autoTyping = false//mati //true idup
global.autoRecord = false 
global.packname = "©ShanAI"//
global.author = "©ShanAI × إحسان" //ur sticker watermark author
global.namamuu = "إحسان"
global.aliasmu = "إحسان"
global.wm = "ShanAI" 
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'Done √',
    wait: 'Sedang mengumpulkan data!',
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
