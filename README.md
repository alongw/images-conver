# Image-Conver

一个基于 ffmpeg 的简单批量图像转换的实现

配置文件 `config.json`

```json
{
    "ffmpegPath": "ffmpeg",
    "inputDir": "./input",
    "outputDir": "./output",
    "inputType": ["jpg", "jpeg", "png", "webp"],
    "maxWidth": 1920,
    "maxHeight": -1,
    "quality": 2,
    "outType": "webp",
    "outName": "{name}_cover"
}
```

ffmpegPath：ffmpeg 程序的路径或环境变量

inputDir：输入文件夹

outputDir：输出文件夹（输入输出文件夹可一致）

inputType：输入文件类型

maxWidth：最大宽度（ `-1` 为自适应）

maxHeight：最大高度（ `-1` 为自适应）

quality：图片质量（百分比）

outType：输出文件类型

outName：输出文件名

#### 输出文件名可用变量

`{name}` ：原文件名（不含后缀名）

`{index}` ：本次工程的图片序号（就是控制台打印那个张数）
