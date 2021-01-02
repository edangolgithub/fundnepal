# Project Title

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)

### Installing



Say what the step will be

```
Install Java
By default java is not installed on the Amazon Linux 2 AMI. You can check this by doing -
java -version
Now, to install java 8 onto the machine, go ahead and hit -
sudo yum install java-1.8.0
You will be asked to confirm the installation
EC2 Java InstallationIn just another second or two, java is installed on your EC2 Instance
java -version again would give you the java version installed
EC2 Java Version

To install Java 11 instead of 8 use the command -
sudo amazon-linux-extras install java-openjdk11
Create user and group for tomcat
Now before installing tomcat, lets create a new group and user -
sudo groupadd --system tomcat 
sudo useradd -d /usr/share/tomcat -r -s /bin/false -g tomcat tomcat
To confirm -
[ec2-user@ip-172-31-44-151 ~]$ getent passwd tomcat
tomcat:x:995:993::/usr/share/tomcat:/bin/false
[ec2-user@ip-172-31-44-151 ~]$ getent group tomcat
tomcat:x:993:
Install and Start Apache Tomcat 9
At the time of writing this post, tomcat9 is at v9.0.41. Download the latest version using wget command -
export VER="9.0.41"
wget https://archive.apache.org/dist/tomcat/tomcat-9/v${VER}/bin/apache-tomcat-${VER}.tar.gz
Now extract the file -
sudo tar xvf apache-tomcat-${VER}.tar.gz -C /usr/share/
We will create a link to the folder to make it easier -
sudo ln -s /usr/share/apache-tomcat-$VER/ /usr/share/tomcat
Now we need to provide access to the tomcat user that we created -
sudo chown -R tomcat:tomcat /usr/share/tomcat
sudo chown -R tomcat:tomcat /usr/share/apache-tomcat-$VER/ 
You can confirm what has been done by navigating to the folder and displaying the files -
cd  /usr/share
ls -lrt
EC2 Verify tomcat rights

Now create a Tomcat Systemd service -
sudo tee /etc/systemd/system/tomcat.service<<EOF
[Unit]
Description=Tomcat Server
After=syslog.target network.target

[Service]
Type=forking
User=tomcat
Group=tomcat

Environment=JAVA_HOME=/usr/lib/jvm/jre
Environment='JAVA_OPTS=-Djava.awt.headless=true'
Environment=CATALINA_HOME=/usr/share/tomcat
Environment=CATALINA_BASE=/usr/share/tomcat
Environment=CATALINA_PID=/usr/share/tomcat/temp/tomcat.pid
Environment='CATALINA_OPTS=-Xms512M -Xmx1024M'
ExecStart=/usr/share/tomcat/bin/catalina.sh start
ExecStop=/usr/share/tomcat/bin/catalina.sh stop

[Install]
WantedBy=multi-user.target
EOF
Now time to enable & start up our tomcat service -
sudo systemctl daemon-reload
sudo systemctl start tomcat
sudo systemctl enable tomcat
Check the status of your tomcat server anytime with the below command -
[ec2-user@ip-172-31-44-151 share]$ systemctl status tomcat
● tomcat.service - Tomcat Server
   Loaded: loaded (/etc/systemd/system/tomcat.service; enabled; vendor preset: disabled)
   Active: active (running) since Sun 2020-12-27 13:50:01 UTC; 16s ago
 Main PID: 5903 (java)
   CGroup: /system.slice/tomcat.service
           └─5903 /usr/lib/jvm/jre/bin/java -Djava.util.logging.config.file=/usr/share/tomcat/conf/logging.properties...

Dec 27 13:50:01 ip-172-31-44-151.ap-south-1.compute.internal systemd[1]: Starting Tomcat Server...
Dec 27 13:50:01 ip-172-31-44-151.ap-south-1.compute.internal systemd[1]: Started Tomcat Server.
Other useful commands to stop and restart tomcat are -
sudo systemctl stop tomcat
sudo systemctl restart tomcat
Confirm from the GUI that tomcat is running
Tomcat by default runs on port 8080. So now go on to your AWS EC2 Instance Summary Screen and get your Public IPv4 DNS
EC2 Public IPv4 DNSFor me it is http://ec2-13-233-111-77.ap-south-1.compute.amazonaws.com/
To access your tomcat UI add :8080 to the url
http://ec2-13-233-111-77.ap-south-1.compute.amazonaws.com:8080/
You should see it loaded successfully
Tomcat 9 Server

Create Tomcat Admin User
Now we need to configure tomcat for an admin user so we can upload our WAR File.
sudo vim /usr/share/tomcat/conf/tomcat-users.xml
This will open up tomcat-users xml file. Press the key i to enter Insert mode. After the opening tag go ahead and paste the below few lines and change the password.
<role rolename="admin-gui"/>
<role rolename="manager-gui"/>
<user username="admin" password="TomcatP@sSw0rD" fullName="Administrator" roles="admin-gui,manager-gui"/>
Tomcat Users xml Updated

Once entered press Escape to exit Insert mode and type in wq!

Update webapps manager
We additionally need to make a small change to the below file otherwise you might see a 403/401 error navigating to the tomcat webapps admin page.
sudo su
vi /usr/share/tomcat/webapps/manager/META-INF/context.xml
Press the key i to enter Insert mode. Then comment out the valve tag in the xml.
To comment it out change the below line.
<Valve className="org.apache.catalina.valves.RemoteAddrValve"
         allow="127\.\d+\.\d+\.\d+|::1|0:0:0:0:0:0:0:1" />
to
<!-- <Valve className="org.apache.catalina.valves.RemoteAddrValve"
         allow="127\.\d+\.\d+\.\d+|::1|0:0:0:0:0:0:0:1" /> -->
context xml update

Once entered press Escape to exit Insert mode and type in wq! to save and quit.

Login to webapps manager
You can navigate to the manager page by using the hyper link 'manager webapp' on your tomcat home pageTomcat Home Page
Or you can add /manager/html to the end of the :8080
In my case it would be http://ec2-13-233-111-77.ap-south-1.compute.amazonaws.com:8080/manager/html
On navigating you would be prompted for the username and password.
This would be username="admin" password="TomcatP@sSw0rD" - the same that we configured earlier.
tomcat webapp

Once entered you would see your manager page.
tomcat webapp page

Update minimum size of the WAR file (OPTIONAL)
If your WAR size is above 50 MB or you foresee it getting over 50MB, you would need to make a minor change to update the minimum size.
sudo su
vi /usr/share/tomcat/webapps/manager/WEB-INF/web.xml
Press i to get into INSERT mode and update the below section -
 <multipart-config>
      <!-- 50MB max -->
      <max-file-size>52428800</max-file-size>
      <max-request-size>52428800</max-request-size>
      <file-size-threshold>0</file-size-threshold>
    </multipart-config>
to -
 <multipart-config>
      <!-- 250MB max -->
      <max-file-size>262144000</max-file-size>
      <max-request-size>262144000</max-request-size>
      <file-size-threshold>0</file-size-threshold>
    </multipart-config>
Upload WAR File
Scroll down to the 'WAR file to deploy' section and upload your .war file. This can be found under the Target folder of your project.
tomcat WAR deploy
Select your file and click Deploy
Once deployed, you would see a new app under Applications.

tomcat updated application

Test your application
By clicking on the application loaded or appending the WAR file name to the end of the address, you would be able to
http://ec2-13-233-111-77.ap-south-1.compute.amazonaws.com:8080/hello-world-0.0.1-SNAPSHOT/

Spring production test

Hello World !!!!

There you have it, in almost no time you created your own Spring Boot web application and deployed it to your own EC2 Instance.


```

## Usage <a name = "usage"></a>

Add notes about how to use the system.
