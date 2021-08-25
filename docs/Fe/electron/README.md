---
title: Electron
---

#### 安装
`npm install --arch=ia32 --platform=win32 electron`
> 指定 arch=ia32 来安装32位的electron，在 windows 平台打包都应该基于 32位 来打。
> 这样打出来的包在32位和64位都可以用，维护一套代码就行

#### 常用
IPC通信方式
* 主进程通知渲染进程
```javascript
webContents.send
ipcRenderer.on
```
* 渲染进程通知主进程
```js
// 方式一：
ipcRenderer.invoke
ipcMain.handle
// 方式二：
ipcRenderer.send
ipcMain.on
```
> invoke和send的区别是，invoke可以等待handle的返回结果，而send方法没有返回值


#### 坑
1. 当开启notification的时候，触发后没有提示

解：如果设置了交互，需要在macOS对应的通知模块上打开交互的展示

2. Electron 使用 require 报错问题: Uncaught ReferenceError: require is not definend
::: details 解:
```js{5,6}
    mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
      }
    });
```
:::

3. 在 electron 中使用 robotjs，浏览器无法直接 require('robotjs')

解：因为robotjs是基于C++写的，根据不同的node版本环境需要重新编译。

![](./robotjs.png)

比如：`npm rebuild --runtime=electron --disturl=https://atom.io/download/atom-shell --target=13.0.1 --abi=83`
其中`target`表示electron的版本，`abi`是根据 [映射表](https://github.com/mapbox/node-pre-gyp/blob/master/lib/util/abi_crosswalk.json)得出，比如当前的 node版本 是 14.16.0，可以看到对应的abi是83


#### 其他
1. 生成 icns

准备一张PNG 图片 icon.png，创建空文件夹 icons.iconset

2. 执行以下命令 
```sh
sips -z 16 16 icon.png --out icons.iconset/icon_16x16.pn
sips -z 32 32 icon.png --out icons.iconset/icon_16x16@2x.png
sips -z 32 32 icon.png --out icons.iconset/icon_32x32.png
sips -z 64 64 icon.png --out icons.iconset/32x32@2x.png
sips -z 64 64 icon.png --out icons.iconset/icon_64x64.png
sips -z 128 128 icon.png --out icons.iconset/64x64@2x.png
sips -z 128 128 icon.png --out icons.iconset/icon_128x128.png
sips -z 256 256 icon.png --out icons.iconset/icon_128x128@2x.png
sips -z 256 256 icon.png --out icons.iconset/icon_256x256.png
sips -z 512 512 icon.png --out icons.iconset/icon_256x256@2x.png
sips -z 512 512 icon.png --out icons.iconset/icon_512x512.png
sips -z 1024 1024 icon.png --out icons.iconset/icon_512x512@2x.png
sips -z 1024 1024 icon.png --out icons.iconset/icon_1024x1024.png
sips -z 2048 2048 icon.png --out icons.iconset/icon_1024x1024@2x.png
```
3. 执行 `iconutil -c icns icons.iconset -a icon.icns`


