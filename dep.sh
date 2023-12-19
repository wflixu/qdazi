#!/bin/bash 

git stash

git pull origin dev
echo "代码更新完成"

pnpm install
echo "依赖安装完成"

pnpm run build
echo "构建完成"


echo "构建部署完成"

