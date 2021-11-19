# 个人博客
记录本人的一些技术积累

## 操作说明
### 1. 引用框架
[docsify](https://docsify.js.org/#/)

### 2. 自动生成目录
#### 步骤一
markdown文件中添加以下模块
```markdown
<!-- toc -->
此处运行命令后会被替换成目录
<!-- tocstop -->
```
#### 步骤二
运行命令
```shell
yarn toc    # 自动遍历docs下的markdown文件
```
