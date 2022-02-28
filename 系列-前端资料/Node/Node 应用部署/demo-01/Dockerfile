# Nginx 镜像
FROM nginx

# 将当前目录的 index.html 挪到 Nginx 的 html 目录中
COPY ./index.html /usr/share/nginx/html/index.html

# 对外暴露 80 端口
EXPOSE 80