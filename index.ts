import { downloadTemplate } from 'giget'
import path from 'node:path'

// get current file path using meta
const __dirname = path.dirname(new URL(import.meta.url).pathname)
console.log(path.resolve(path.join(__dirname, 'test')))

downloadTemplate('https://github.com/nuxt-themes/starter/tree/tailwind', {
    dir: path.resolve(path.join(__dirname, 'test'))
})