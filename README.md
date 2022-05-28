# Terra Converter

用于生成适用于 TerraStation 的私钥导入格式。

首先运行 `yarn` 安装依赖。

使用需要修改 index.js 中的几个参数
1. `YOUR_HEX_PRIVATE_KEY` 为 Base16 编码的私钥（不带 0x）
2. `YOUR_WALLET_PASSWORD` 为任意密码，导入后这个密码就成为你 TerraStation 钱包的密码
3. `YOUR_WALLET_NAME` 任意设置，导入后这就是你的 TerraStation 钱包的名字

修改后运行 `node index.js`，得到的 Terra Key 即可以导入 TerraStation 的 key。

使用请自当风险。