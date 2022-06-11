---
title: fnm node版本管理工具
description: Fast Node Manager
date: 	2022-05-03 19:47
lastmod: 	2022-05-03 19:47
tags:
  - 软件记录
  - wsl
head:
  - - meta
    - name: keywords
      content: wsl fnm node版本管理工具
---



> [Fast and simple Node.js version manager, built in Rust](https://github.com/Schniz/fnm)  

## 安装

```bash
# 初始安装
curl -fsSL https://fnm.vercel.app/install | bash

# 后续升级
curl -fsSL https://fnm.vercel.app/install | bash -s -- --skip-shell

# ~/.zshrc 修改
# 支持自动根据项目 .nvmrc 文件自动切换版本，使用镜像避免可能存在的 fnm install 问题
- eval "$(fnm env)"
+ eval "$(fnm env --use-on-cd --node-dist-mirror=https://repo.huaweicloud.com/nodejs/)"
```

## 常用命令

> [docs](https://github.com/Schniz/fnm/blob/master/docs/commands.md)

```bash
# 命令帮助
fnm --help

# node 已安装列表
fnm list

# node 安装
fnm install 版本号(支持模糊/lts)

# node 卸载
fnm uninstall 版本号

# node 切换
fnm use 版本号

# node 设置默认
fnm default 版本号
```
