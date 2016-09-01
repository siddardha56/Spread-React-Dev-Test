# Spread-React-Dev-Test

## Setup Requirements

###Nginx Setup:

- Download NGINX for Windows [here](http://nginx.org/en/download.html)
- Configuration: Navigate to folder location in conf folder open nginx.conf file. Paste the following code:

```
server {
    listen 8003;

    location / {
        proxy_pass http://localhost:8010/;
    }

    location /api/ {
        proxy_pass http://139.162.42.11:3010/api/;
    } 
}
```
- Navigate to nginx folder location(in terminal) and run:
  * nginx


- Download node (node version : 5.0 (older versions are not supported))
- Navigate to client folder location(in terminal) and run:
- npm install
- npm start

You can Listen at

> http://localhost:8003/
