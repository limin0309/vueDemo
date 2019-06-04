
Vue：应用性、灵活性、高效性
1.小而美（灵活的语法、灵活的开发方式）
2.丰富的生态（模块、插件、开发团队、开发资料）
3.广泛的应用（移动、PC端）

https://github.com/search?q=stars%3A%3E1 


。前端小白（有基础的HTML/CSS/Javascript知识）
。想学习最流行的前端框架vue，提高生产效率
。想扩展前端知识，快速入手Vue2.X  


Vue2.X框架常用知识点（模版语法、条件渲染、列表渲染等）
Vue2.X核心技术（vue-router、vuex）
集成Vue2.X   

Vue2.X框架常用知识点（第二章）
认识vue：hello vue应用
模块语法，v-bind属性绑定，事件绑定
条件渲染、列表渲染、class与style绑定 *重点*

---备注：  v-bind :    v-on:@   {{msg}}



Vue2.X框架常用知识点（第三章）
认识vue-cli工具，vue代码规范
Vue组件的调试方法
vue-router，vuex


Vue2.X框架常用知识点（第四章）
介绍workflow工作流
单页面Demo（动态表单、列表动态展示）
实用Cli工具，开发常用组件


IDE：
开发环境 vscode

Node.js:
npm node 
  nvm（nvm是node的版本管理工具 Node Version Manager）
  Nvm --version 
  Nvm help
  ....
  Nvm ls
  Nvm install v11.0.0 就下载了11.0.0 也切到了11.0.0
  nvm use 版本号
cnpm 使用淘宝镜像安装前端依赖 

调试环境：
chrome
推荐：Vue.js devtools https://chrome.google.com/webstore/search/Vue.js%20devtools?hl=zh-CN


工程环境：
npm i -g vue-cli  没有安装成功，建议用官网的方式
可以使用下列任一命令安装这个新的包：

npm install -g @vue/cli
# OR
yarn global add @vue/cli
你还可以用这个命令来检查其版本是否正确 (3.x)：

vue --version




Cdn:https://www.bootcdn.cn/vue/
不建议使用beta版本，用正规的vue.min.js


index.html:第一个vue小例子
学习：vuejs CDN使用
在线Coding快速验证


模版语法
认识vue文件结构（template，script，style）
模版语法包含插值、指令（指令缩写）
插值语法{{msg}} ,数据,js表达式
指令（指令缩写） @click v-if :href  v-bind可以缩写成:   v-on 可以缩写成@ 

计算属性与侦听器
计算属性：computed
侦听器：watch
使用场景：watch（异步场景），computed（数据联动） 
一句话总结：watch监听的是一个变量/常量。可以是一个单一的变量也可以是数组。        computed可以监听很多变量，但是一定要在这个实例里面

    本节重点 2.5
        v-0n是绑定事件的 
    条件渲染
        v-if v-else-if v-else 如果有一个成立就不会继续向下判断。如上面，app.count=-1,条件满足1，2.但是只会显示1判断的输出
        注意：v-show和v-if的区别
        v-for 和 v-if/v-show 结合是条件渲染和列表渲染的结合
    列表渲染
        v-for
    class与style绑定
        style的绑定:
        class的绑定:

    本节总结：
    模版语法
    计算属性与侦听器
    常用指令(列表、条件、class与style样式绑定)
    下一节
    如何工程化
    如何写出优雅的vue代码？
    如何调试vue


      本节总结：
    认识vue-cli工具
        npm install -g @vue/cli
        # OR
        yarn global add @vue/cli
        你还可以用这个命令来检查其版本是否正确 (3.x)：
        vue --version
    快速创建工程的两种方法
        vue create xxx
        vue ui
    工程化项目的目录

组件化思想
什么是组件化？
独立的
可复用的
整体的

为什么要组件化？
  实现功能模块的复用
  高执行效率
  开发单页面复杂应用

如果进行拆分？
  300行原则
  复用原则（如头部、尾部）
  业务复杂性原则

组件化带来的问题？
  组件状态管理（vuex）
  多组件的混合使用，多页面，复杂业务（vue-router）
  组件间的传参、消息、事件管理(props、emit/on，bus)

风格指南 vue官网里有风格指南，建议花半小时看看优先级A.B的
  好习惯，少走坑
  写出自己看得懂的代码
  写出别人看得懂的代码


vuex
多个视图依赖同一状态（例：菜单导航）
来自不同视图的行为需要变更同一状态（例：评论弹幕）
为vue开发的状态管理模式
组件状态集中管理
组件状态遵循统一的规则

如何集成vue
集成场景
    单页面、多页面引入Vue.js
    复杂单页面应用Vue cli工具
开发工作流
    需求调研（确定需求）
    交互设计、逻辑设计、接口设计
    代码实现、测试运行、线上部署
    
github地址：https://github.com/kanlidy/vue-lessons-demo