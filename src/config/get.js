import fs from 'fs'
import path from 'path'

const get = (filePath = '/botconfig.json') => {
  const userConfig = fs.existsSync(`${path.resolve('./')}${filePath}`) && require(`${path.resolve('./')}${filePath}`)
  const defaultConfig = {
    port: 3000,
    apiVersion: 'v3.3',
    webhookEndpoint: '/webhook',
    messengerProfileEndpoint: '/update-profile',
    ...userConfig
  }
  return defaultConfig
}

export default get
