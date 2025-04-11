// File khoi dong nodejs, khai bao port
// KHONG DUOC DUNG
const app = require(("./src/app"))

const PORT = 3055

const server = app.listen(3055, () => {
    console.log(`WSV eCommerce start with port ${PORT}`)
})

process.on('SIGINT', () => {
    server.close( () => console.log(`Exit Server Expresss`))
    // notify.send( ping ...)
}) // Phuong thuc quy trinh trong nodejs