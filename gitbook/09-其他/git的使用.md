# 项目开发中，你是怎么使用Git的？

### 发现问题

前段时间发现了一个小公司乱用Git的情况，这里剖析一下问题，然后说一个我常用的解决方案。

这家公司有两位前端开发，在coding上创建了一个项目（仓库），两个人用Git管理代码。但是管理方式很有问题。

整个项目只有一个master分支，两人都在master上修改，改动和冲突基本都是口头交流。

虽然只有两个人协作，但是这样仍然有很大的弊端。

首先，master上存在大量的commit，不利于管理和版本追溯。

其次，冲突相对较多，口头交流严重提升沟通成本。

最后，产品发布后，功能迭代很难管理。

### 解决方案

再说说我在项目开发中比较常用的Git管理方法：

首先，创建一个develop分支，开发中的代码都存放在这个分支之上，只有正式发布一个版本才会合并到master分支。

其次，多人协同开发，每个人都创建一个自己名字的分支，自己的所有代码都存放在自己分支之上，自己测试没有问题，再合并到develop分支。

（如果有专门的测试人员，可以添加一个test分支，在test分支上测试通过之后在合并到develop分支）

最后，功能完成，测试通过，项目部署之前，把功能合并到master分支之上。

以上就是我常用的Git使用方法。

### Git常用命令

最后在写一个常用的Git命令列表，熟练使用这些命令，基本就能解决95%的Git问题了。

1. 编辑区添加到暂存区：git add .
2. 暂存区提交到分支：git commit -m "备注"
3. 创建远程主机名：git remote
4. 同步远程仓库：git push -u origin <分支名>
5. 克隆项目：git clone url
6. 拉取项目代码: git pull origin <分支名>
7.  查看分支:git branch
8.  创建分支 git branch <分支名>
9.  切换分支：git checkout <分支名>
10. 合并分支：git merge <分支名>
11. 本地分支推送至远程分支:git push origin feature-branch:feature-branch
12. 远程分支拉倒本地：git checkout -b feature-branch origin/feature-branch
13. 查看历史记录：git log
14. 恢复版本：git reset --hard <版本号>，版本号写前几位就可以
15. 查看命令记录：git reflog