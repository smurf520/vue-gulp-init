npm 安装依赖 以及 dependencies 和 devDependencies 的区别
npm install 依赖 （已经安装上了 ， 但在 package.json 中没有，不能通过 npm i 安装）

npm install 依赖 --save （已安装，依赖包的名称在 package.json 的 dependencies 中, 可通过 npm i 安装）

npm install 依赖 --save-dev （已安装，依赖包的名称在 package.json 的 devDependencies 中, 可通过 npm i 安装）

dependencies 和 devDependencies 区别

devDependencies 里面的插件只用于开发环境，不用于生产环境，而 dependencies 是需要发布到生产环境的。

vue 项目中

若文件中 import 引入 devDependencies 中插件 依然会把当前引入的插件打包到文件中， 不引入 ，则不打包。

而 dependencies 中的插件不管你引不引入都会打包到文件中去。
网上统一的观念是

devDependencies 用于本地环境开发时候。
dependencies 用户发布环境
其实看名字我也知道是这个意思，我觉得没解释情况。
devDependencies 是只会在开发环境下依赖的模块，生产环境不会被打入包内。通过 NODE_ENV=developement 或 NODE_ENV=production 指定开发还是生产环境。
而 dependencies 依赖的包不仅开发环境能使用，生产环境也能使用。其实这句话是重点，按照这个观念很容易决定安装模块时是使用--save 还是--save-dev

---
"server": "gulp clean && npm run build && gulp && node _server/index.js" // 先去掉server里面原有的dist,再打包,再把打包的移到server下面,运行在服务器
gulp.task('move:dist', moveFiles('dist/**/*', './_server/dist'))   moveFiles一定要写成函数,不然报错

整个vue init大致流程如我上图所示，应该还是比较好理解的。这里我大致阐述一下大致的流程。

vue-cli会先判断你的模板在远程github仓库上还是在你的本地某个文件里面，若是本地文件夹则会立即跳到第3步，反之则走第2步。
第2步会判断是否为官方模板，官方模板则会从官方github仓库中下载模板到本地的默认仓库下，即根目录下.vue-templates文件夹下。
第3步则读取模板目录下meta.js或者meta.json文件，根据里面的内容会询问开发者，根据开发者的回答，确定一些修改。
根据模板内容以及开发者的回答，渲染出项目结构并生成到指定目录。