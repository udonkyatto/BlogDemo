![image](https://github.com/user-attachments/assets/f0f2ca26-1d87-4faa-a658-05cd6a5b36b9)
## 一个简洁的博客系统演示项目，使用现代Web技术栈构建。

功能特性
- 📝 文章发布与管理
- 🔍 内容分类与标签
- 🎨 响应式设计，适配各种设备
- ⚡ 高性能后端API

### 技术栈-前端
- React.js  
- Redux  
- Material-UI  
- Axios  

### 后端
- Node.js
- Express
- MongoDB
- Mongoose

### 快速开始
- Node.js (v14+)
- MongoDB (v4+)
- npm 或 yarn

### 克隆仓库：
bash   
git clone https://github.com/udonkyatto/BlogDemo.git  
cd BlogDemo
### 安装依赖：  
> bash
### 安装后端依赖
> cd server  
npm install

### 安装前端依赖
> cd ../client  
npm install  
### 配置环境变量：  
> 在server目录下创建.env文件：  
MONGO_URI=你的MongoDB连接字符串  
JWT_SECRET=你的JWT密钥  
PORT=5000  
### 启动开发服务器：  

> bash
# 启动后端
> cd server  
npm run dev

# 启动前端 (新终端窗口)
cd ../client  
npm start  
### 项目结构  
text  
BlogDemo/  
├── client/                # 前端代码  
│   ├── public/            # 静态资源  
│   └── src/               # React源代码  
├── server/                # 后端代码  
│   ├── config/            # 配置文件  
│   ├── controllers/       # 控制器  
│   ├── models/            # 数据模型  
│   ├── routes/            # 路由  
│   └── server.js          # 主服务器文件  
├── .gitignore
└── README.md
贡献指南  
欢迎贡献！请遵循以下步骤：  
  
Fork 本项目  

创建你的分支 (git checkout -b feature/AmazingFeature)  

提交你的修改 (git commit -m 'Add some AmazingFeature')  

推送到分支 (git push origin feature/AmazingFeature)  

提交 Pull Request  

许可证
本项目采用 MIT 许可证 - 详情请见 LICENSE 文件。  

联系方式
如有任何问题，请联系：  
项目维护者: udonkyatto  
感谢您对本项目的关注！🚀  