<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">Dot Net Branch</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>


# to install dontnet sdk
```
sudo rpm -Uvh https://packages.microsoft.com/config/centos/7/packages-microsoft-prod.rpm
sudo yum install dotnet-sdk-3.1
```
# to run sample fundnepal website

```
cd fundnepal/dotnetmain/fundnepalweb

dotnet run
```
# to install nginx reverse proxy server
```
sudo amazon-linux-extras install nginx1
```

#### create a file called kestrel-Webnix.service in etc/systemd/system
#### paste following code
```
[Unit]
Description=Example My ASP.NET Core Application running on Linux

[Service]
WorkingDirectory=/home/ec2-user/fundnepal/dotnetmain/fundnepalweb/published
ExecStart=/usr/bin/dotnet /home/ec2-user/fundnepal/dotnetmain/fundnepalweb/published/fundnepalweb.dll
Restart=always
# Restart service after 10 seconds if the dotnet service crashes:
RestartSec=10
KillSignal=SIGINT
SyslogIdentifier=dotnet-example
User=nginx
Environment=ASPNETCORE_ENVIRONMENT=Production
Environment=DOTNET_PRINT_TELEMETRY_MESSAGE=false

[Install]
WantedBy=multi-user.target
```
#### run following commands
```
sudo systemctl enable kestrel-Webnix.service
sudo systemctl start kestrel-Webnix.service
sudo systemctl status kestrel-Webnix.service
```
#### open nginx.conf file located in etc/nginx/
##### replace everything with
```
# For more information on configuration, see:
#   * Official English Documentation: http://nginx.org/en/docs/
#   * Official Russian Documentation: http://nginx.org/ru/docs/

user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /run/nginx.pid;

# Load dynamic modules. See /usr/share/doc/nginx/README.dynamic.
include /usr/share/nginx/modules/*.conf;

events {
    worker_connections 1024;
}

http {
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile            on;
    tcp_nopush          on;
    tcp_nodelay         on;
    keepalive_timeout   65;
    types_hash_max_size 4096;

    include             /etc/nginx/mime.types;
    default_type        application/octet-stream;

    # Load modular configuration files from the /etc/nginx/conf.d directory.
    # See http://nginx.org/en/docs/ngx_core_module.html#include
    # for more information.
    include /etc/nginx/conf.d/*.conf;

    server {
        listen       80;
        listen       [::]:80;
        server_name  fundnepal.tk,www.fundnepal.tk;
 #added
        location / {
        proxy_pass         http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
        }
 # addedend
      #  root         /usr/share/nginx/html;

        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;

        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
    }

# Settings for a TLS enabled server.
#
#    server {
#        listen       443 ssl http2;
#        listen       [::]:443 ssl http2;
#        server_name  _;
#        root         /usr/share/nginx/html;
#
#        ssl_certificate "/etc/pki/nginx/server.crt";
#        ssl_certificate_key "/etc/pki/nginx/private/server.key";
#        ssl_session_cache shared:SSL:1m;
#        ssl_session_timeout  10m;
#        ssl_ciphers PROFILE=SYSTEM;
#        ssl_prefer_server_ciphers on;
#
#        # Load configuration files for the default server block.
#        include /etc/nginx/default.d/*.conf;
#
#        error_page 404 /404.html;
#            location = /40x.html {
#        }
#
#        error_page 500 502 503 504 /50x.html;
#            location = /50x.html {
#        }
#    }

}

```
#### sudo service nginx start or sudo service nginx reststart
#### navigate to fundnepal/dotnetmain/fundnepalweb/
#### run following command
```
dotnet run
```
## all done type www.fundnepal.tk on browser

















-
### Prerequisites

What things you need to install the software and how to install them.

```
sudo yum install libunwind libicu  
curl -sSL -o dotnet.tar.gz https://go.microsoft.com/fwlink/?LinkID=835019  
sudo mkdir -p /opt/dotnet && sudo tar zxf dotnet.tar.gz -C /opt/dotnet  
sudo ln -s /opt/dotnet/dotnet /usr/local/bin 
```
# to install brew 
```
git clone https://github.com/Homebrew/brew ~/.linuxbrew/Homebrew
mkdir ~/.linuxbrew/bin
ln -s ~/.linuxbrew/Homebrew/bin/brew ~/.linuxbrew/bin
eval $(~/.linuxbrew/bin/brew shellenv)
```
# to install AWS SAM CLI
```
brew tap aws/tap
brew install aws-sam-cli
sam --version
```
==> Next steps:
- Run `brew help` to get started
- Further documentation: 
    https://docs.brew.sh
- Install the Homebrew dependencies if you have sudo access:
    sudo yum groupinstall 'Development Tools'
    See https://docs.brew.sh/linux for more information
- Add Homebrew to your PATH in /home/ec2-user/.bash_profile:
    echo 'eval $(/home/ec2-user/.linuxbrew/bin/brew shellenv)' >> /home/ec2-user/.bash_profile
    eval $(/home/ec2-user/.linuxbrew/bin/brew shellenv)
- We recommend that you install GCC:
    brew install gcc

brew tap aws/tap
brew install aws-sam-cli
brew upgrade aws-sam-cli
```


==> isl@0.18
isl@0.18 is keg-only, which means it was not symlinked into /home/ec2-user/.linuxbrew,
because this is an alternate version of another formula.

For compilers to find isl@0.18 you may need to set:
  export LDFLAGS="-L/home/ec2-user/.linuxbrew/opt/isl@0.18/lib"
  export CPPFLAGS="-I/home/ec2-user/.linuxbrew/opt/isl@0.18/include"

For pkg-config to find isl@0.18 you may need to set:
  export PKG_CONFIG_PATH="/home/ec2-user/.linuxbrew/opt/isl@0.18/lib/pkgconfig"
