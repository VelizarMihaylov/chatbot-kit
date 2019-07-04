import app from '../app'
import { getConfig } from 'src/config'

const { port } = getConfig()

app.listen(port)

console.log(`bot is listening on PORT ${port}`)
