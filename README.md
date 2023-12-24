
我们在本项目中利用到next.js框架中的isr+csr模式，就是对于时间或用户不敏感的资料（例如菜单资料、产品资料等），想用isr模式产生一个带有一定内容的html，并将html文件缓存到cdn（我们使用nginx模拟），然后再使用csr模式请求时间或用户敏感的资料，以减少用户对next.js服务器的压力。

本项目用于展示如何使用nginx与next.js应用集成。

install         安装应用依赖包
dev.bat         启动应用的开发环境（端口7002）
build.bat       应用打包
nginxstart.bat  启动nginx（docker中的nginx，前提已安装docker及对应的nginx镜像）

