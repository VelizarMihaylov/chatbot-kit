const app = require('./lib/app').default

const PORT = process.env.PORT || 3000

app.listen(PORT)

console.log(`bot is listening on PORT ${PORT}`)
