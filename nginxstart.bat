@echo off
SET NGINX_CONF_PATH=%~dp0/nginx_config/nginx.conf
SET LOG_PATH=%~dp0/nginx_config/log/
SET RUN_PATH=%~dp0/nginx_config/run/

echo Using NGINX config: %NGINX_CONF_PATH%
echo Log path: %LOG_PATH%
echo Run path: %RUN_PATH%

docker run -d -p 80:80 --name nginx -v %NGINX_CONF_PATH%:/etc/nginx/nginx.conf:ro -v %LOG_PATH%:/var/log/nginx/ -v %RUN_PATH%:/var/run/ nginx
