import shell from 'shelljs'
import fse from 'fs-extra'

/**
 * @typedef {Object} Config
 * @property {string} ffmpegPath
 * @property {string} inputDir
 * @property {string} outputDir
 * @property {string[]} inputType
 * @property {number} maxWidth
 * @property {number} maxHeight
 * @property {number} outType
 * @property {string} outName
 * @property {number} quality
 */

/** @type {Config} */
const config = fse.readJsonSync('./config.json')

fse.ensureDirSync(config.inputDir)
fse.ensureDirSync(config.outputDir)

const fileList = shell.ls(`${config.inputDir}/*.+(${config.inputType.join('|')})`)

fileList.forEach((e, i) => {
    const fileName = e.split('/').pop() // image.jpg
    const liteLame = fileName.split('.').shift() // image
    const outName = config.outName.replace('{name}', liteLame) // {name}.[config.outType]
    const output = `${config.outputDir}/${outName}.${config.outType}`
    shell.exec(
        `${config.ffmpegPath} -y -i "${e}" -q "${config.quality}" -vf "scale=${config.maxWidth}:${config.maxHeight}" "${output}"`,
        { silent: true }
    )
    console.log(
        `处理第${i + 1}个文件(${fileName} => ${outName}.${config.outType})，共${
            fileList.length
        }个文件`
    )
})
