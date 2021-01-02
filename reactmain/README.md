# fundnepal
## To install node on linux 2 Amazon
#### sudo yum install -y gcc-c++ make
#### curl -sL https://rpm.nodesource.com/setup_14.x | sudo -E bash -
#### sudo yum install -y nodejs

## After installation check the installed version of Node.js. You can find
## more details about current version on node.js official website.

#### node -v 

## create react app

#### npx create-react-app reactmain

# if you clone nodemain repo from git
##### you dont need to create-react-app. you need to install node_modules by typing #### npm install

# install nginx

#### sudo yum install nginx1 -y
#### modify /etc/nginx/nginx.conf file as
'''
 server {
        listen       80;
        listen       [::]:80;
        server_name  _;
        # root         /usr/share/nginx/html;
        root         /path/to/reactbuild/folder;


        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;

        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
    }
'''
```

# Test NGINX config
#### sudo nginx -t

# Restart Nginx Server
#### sudo systemctl restart nginx