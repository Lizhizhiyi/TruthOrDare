# Git 版本管理指南

## 基本操作流程

1. **查看修改状态**
   ```bash
   git status
   ```

2. **添加修改到暂存区**
   ```bash
   # 添加所有修改
   git add .

   # 添加特定文件
   git add 文件名
   ```

3. **提交修改**
   ```bash
   git commit -m "描述你的修改内容"
   ```

4. **推送到远程仓库**
   ```bash
   git push
   ```

## 常用命令

- **查看修改内容**
  ```bash
  git diff
  ```

- **查看提交历史**
  ```bash
  git log
  ```

- **撤销修改**
  ```bash
  # 撤销工作区的修改
  git checkout -- 文件名

  # 撤销暂存区的修改
  git reset HEAD 文件名
  ```

- **创建新分支**
  ```bash
  git branch 分支名
  git checkout 分支名
  # 或者使用一条命令
  git checkout -b 分支名
  ```

- **合并分支**
  ```bash
  git merge 分支名
  ```

## 提交信息规范

提交信息应该清晰描述修改内容，例如：

- `feat: 添加新功能`
- `fix: 修复bug`
- `docs: 更新文档`
- `style: 代码格式修改`
- `refactor: 代码重构`

## 最佳实践

1. 每次提交前先查看修改状态
2. 提交信息要清晰明确
3. 定期推送代码到远程仓库
4. 重要功能开发使用新分支
5. 保持提交历史的整洁

## 常见问题解决

1. **冲突解决**
   ```bash
   # 拉取最新代码
   git pull
   # 解决冲突后
   git add .
   git commit -m "解决冲突"
   git push
   ```

2. **撤销错误提交**
   ```bash
   # 撤销最后一次提交
   git reset --soft HEAD^
   ```

3. **恢复删除的文件**
   ```bash
   git checkout -- 文件名
   ``` 