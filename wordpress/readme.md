# To prepare the LAMP server

## Connect to your instance.

To ensure that all of your software packages are up to date, perform a quick software update on your instance. This process may take a few minutes, but it is important to make sure that you have the latest security updates and bug fixes.

The -y option installs the updates without asking for confirmation. If you would like to examine the updates before installing, you can omit this option.

#### [ec2-user ~]$ sudo yum update -y
Install the lamp-mariadb10.2-php7.2 and php7.2 Amazon Linux Extras repositories to get the latest versions of the LAMP MariaDB and PHP packages for Amazon Linux 2.

#### [ec2-user ~]$ sudo amazon-linux-extras install -y lamp-mariadb10.2-php7.2 php7.2
If you receive an error stating sudo: amazon-linux-extras: command not found, then your instance was not launched with an Amazon Linux 2 AMI (perhaps you are using the Amazon Linux AMI instead). You can view your version of Amazon Linux using the following command.

#### cat /etc/system-release
To set up a LAMP web server on Amazon Linux AMI , see Tutorial: Install a LAMP web server with the Amazon Linux AMI.

Now that your instance is current, you can install the Apache web server, MariaDB, and PHP software packages.

Use the yum install command to install multiple software packages and all related dependencies at the same time.

#### [ec2-user ~]$ sudo yum install -y httpd mariadb-server
You can view the current versions of these packages using the following command:

#### yum info package_name
Start the Apache web server.

#### [ec2-user ~]$ sudo systemctl start httpd
Use the systemctl command to configure the Apache web server to start at each system boot.

#### [ec2-user ~]$ sudo systemctl enable httpd
You can verify that httpd is on by running the following command:

#### [ec2-user ~]$ sudo systemctl is-enabled httpd
Add a security rule to allow inbound HTTP (port 80) connections to your instance if you have not already done so. By default, a launch-wizard-N security group was set up for your instance during initialization. This group contains a single rule to allow SSH connections.

##Open the Amazon EC2 console at https://console.aws.amazon.com/ec2/.

##Choose Instances and select your instance.

##On the Security tab, view the inbound rules. You should see the following rule:

Port range   Protocol     Source
22           tcp          0.0.0.0/0
Choose the link for the security group. Using the procedures in Adding rules to a security group, add a new inbound security rule with the following values:

Type: HTTP

Protocol: TCP

Port Range: 80

Source: Custom

Test your web server. In a web browser, type the public DNS address (or the public IP address) of your instance. If there is no content in /var/www/html, you should see the Apache test page. You can get the public DNS for your instance using the Amazon EC2 console (check the Public DNS column; if this column is hidden, choose Show/Hide Columns (the gear-shaped icon) and choose Public DNS).

If you are unable to see the Apache test page, check that the security group you are using contains a rule to allow HTTP (port 80) traffic. For information about adding an HTTP rule to your security group, see Adding rules to a security group.

Important
If you are not using Amazon Linux, you may also need to configure the firewall on your instance to allow these connections. For more information about how to configure the firewall, see the documentation for your specific distribution.


#                        Apache test page
                    
Apache httpd serves files that are kept in a directory called the Apache document root. The Amazon Linux Apache document root is /var/www/html, which by default is owned by root.

To allow the ec2-user account to manipulate files in this directory, you must modify the ownership and permissions of the directory. There are many ways to accomplish this task. In this tutorial, you add ec2-user to the apache group, to give the apache group ownership of the /var/www directory and assign write permissions to the group.

## To set file permissions

Add your user (in this case, ec2-user) to the apache group.

### [ec2-user ~]$ sudo usermod -a -G apache ec2-user
Log out and then log back in again to pick up the new group, and then verify your membership.

Log out (use the exit command or close the terminal window):

#### [ec2-user ~]$ exit
To verify your membership in the apache group, reconnect to your instance, and then run the following command:

#### [ec2-user ~]$ groups
ec2-user adm wheel apache systemd-journal
Change the group ownership of /var/www and its contents to the apache group.

#### [ec2-user ~]$ sudo chown -R ec2-user:apache /var/www
To add group write permissions and to set the group ID on future subdirectories, change the directory permissions of /var/www and its subdirectories.

#### [ec2-user ~]$ sudo chmod 2775 /var/www && find /var/www -type d -exec sudo chmod 2775 {} \;
To add group write permissions, recursively change the file permissions of /var/www and its subdirectories:

#### [ec2-user ~]$ find /var/www -type f -exec sudo chmod 0664 {} \;
Now, ec2-user (and any future members of the apache group) can add, delete, and edit files in the Apache document root, enabling you to add content, such as a static website or a PHP application.

## To secure your web server (Optional)

A web server running the HTTP protocol provides no transport security for the data that it sends or receives. When you connect to an HTTP server using a web browser, the URLs that you visit, the content of webpages that you receive, and the contents (including passwords) of any HTML forms that you submit are all visible to eavesdroppers anywhere along the network pathway. The best practice for securing your web server is to install support for HTTPS (HTTP Secure), which protects your data with SSL/TLS encryption.

For information about enabling HTTPS on your server, see Tutorial: Configure SSL/TLS on Amazon Linux 2.

## Step 2: Test your LAMP server
If your server is installed and running, and your file permissions are set correctly, your ec2-user account should be able to create a PHP file in the /var/www/html directory that is available from the internet.

## To test your LAMP server

Create a PHP file in the Apache document root.

#### [ec2-user ~]$ echo "<?php phpinfo(); ?>" > /var/www/html/phpinfo.php
If you get a "Permission denied" error when trying to run this command, try logging out and logging back in again to pick up the proper group permissions that you configured in To set file permissions.

In a web browser, type the URL of the file that you just created. This URL is the public DNS address of your instance followed by a forward slash and the file name. For example:

http://my.public.dns.amazonaws.com/phpinfo.php
You should see the PHP information page:


If you do not see this page, verify that the /var/www/html/phpinfo.php file was created properly in the previous step. You can also verify that all of the required packages were installed with the following command.

#### [ec2-user ~]$ sudo yum list installed httpd mariadb-server php-mysqlnd
If any of the required packages are not listed in your output, install them with the sudo yum install package command. Also verify that the php7.2 and lamp-mariadb10.2-php7.2 extras are enabled in the output of the amazon-linux-extras command.

Delete the phpinfo.php file. Although this can be useful information, it should not be broadcast to the internet for security reasons.

#### [ec2-user ~]$ rm /var/www/html/phpinfo.php
You should now have a fully functional LAMP web server. If you add content to the Apache document root at /var/www/html, you should be able to view that content at the public DNS address for your instance.

Step 3: Secure the database server
The default installation of the MariaDB server has several features that are great for testing and development, but they should be disabled or removed for production servers. The mysql_secure_installation command walks you through the process of setting a root password and removing the insecure features from your installation. Even if you are not planning on using the MariaDB server, we recommend performing this procedure.

## To secure the MariaDB server

Start the MariaDB server.

#### [ec2-user ~]$ sudo systemctl start mariadb
Run mysql_secure_installation.

#### [ec2-user ~]$ sudo mysql_secure_installation
When prompted, type a password for the root account.

Type the current root password. By default, the root account does not have a password set. Press Enter.

Type Y to set a password, and type a secure password twice. For more information about creating a secure password, see https://identitysafe.norton.com/password-generator/. Make sure to store this password in a safe place.

Setting a root password for MariaDB is only the most basic measure for securing your database. When you build or install a database-driven application, you typically create a database service user for that application and avoid using the root account for anything but database administration.

Type Y to remove the anonymous user accounts.

Type Y to disable the remote root login.

Type Y to remove the test database.

Type Y to reload the privilege tables and save your changes.

(Optional) If you do not plan to use the MariaDB server right away, stop it. You can restart it when you need it again.

#### [ec2-user ~]$ sudo systemctl stop mariadb
(Optional) If you want the MariaDB server to start at every boot, type the following command.

#### [ec2-user ~]$ sudo systemctl enable mariadb
Step 4: (Optional) Install phpMyAdmin
phpMyAdmin is a web-based database management tool that you can use to view and edit the MySQL databases on your EC2 instance. Follow the steps below to install and configure phpMyAdmin on your Amazon Linux instance.

## Important
We do not recommend using phpMyAdmin to access a LAMP server unless you have enabled SSL/TLS in Apache; otherwise, your database administrator password and other data are transmitted insecurely across the internet. For security recommendations from the developers, see Securing your phpMyAdmin installation. For general information about securing a web server on an EC2 instance, see Tutorial: Configure SSL/TLS on Amazon Linux 2.

## To install phpMyAdmin

### Install the required dependencies.

#### [ec2-user ~]$ sudo yum install php-mbstring -y
Restart Apache.

#### [ec2-user ~]$ sudo systemctl restart httpd
Restart php-fpm.

#### [ec2-user ~]$ sudo systemctl restart php-fpm
Navigate to the Apache document root at /var/www/html.

#### [ec2-user ~]$ cd /var/www/html
Select a source package for the latest phpMyAdmin release from https://www.phpmyadmin.net/downloads. To download the file directly to your instance, copy the link and paste it into a wget command, as in this example:

#### [ec2-user html]$ wget https://www.phpmyadmin.net/downloads/phpMyAdmin-latest-all-languages.tar.gz
Create a phpMyAdmin folder and extract the package into it with the following command.

#### [ec2-user html]$ mkdir phpMyAdmin && tar -xvzf phpMyAdmin-latest-all-languages.tar.gz -C phpMyAdmin --strip-components 1
Delete the phpMyAdmin-latest-all-languages.tar.gz tarball.

#### [ec2-user html]$ rm phpMyAdmin-latest-all-languages.tar.gz
(Optional) If the MySQL server is not running, start it now.

#### [ec2-user ~]$ sudo systemctl start mariadb
In a web browser, type the URL of your phpMyAdmin installation. This URL is the public DNS address (or the public IP address) of your instance followed by a forward slash and the name of your installation directory. For example:

http://my.public.dns.amazonaws.com/phpMyAdmin
You should see the phpMyAdmin login page:


## Log in to your phpMyAdmin installation with the root user name and the MySQL root password you created earlier.

Your installation must still be configured before you put it into service. To configure phpMyAdmin, you can manually create a configuration file, use the setup script, or combine both approaches.

For information about using phpMyAdmin, see the phpMyAdmin User Guide.


#                       wordpress 

Install WordPress
Connect to your instance, and download the WordPress installation package.

To download and unzip the WordPress installation package

Download the latest WordPress installation package with the wget command. The following command should always download the latest release.

[ec2-user ~]$ wget https://wordpress.org/latest.tar.gz
Unzip and unarchive the installation package. The installation folder is unzipped to a folder called wordpress.

[ec2-user ~]$ tar -xzf latest.tar.gz
To create a database user and database for your WordPress installation

Your WordPress installation needs to store information, such as blog posts and user comments, in a database. This procedure helps you create your blog's database and a user that is authorized to read and save information to it.

Start the database server.

Amazon Linux 2

[ec2-user ~]$ sudo systemctl start mariadb
Amazon Linux AMI

[ec2-user ~]$ sudo service mysqld start
Log in to the database server as the root user. Enter your database root password when prompted; this may be different than your root system password, or it might even be empty if you have not secured your database server.

If you have not secured your database server yet, it is important that you do so. For more information, see To secure the MariaDB server (Amazon Linux 2) or To secure the database server (Amazon Linux AMI).

[ec2-user ~]$ mysql -u root -p
Create a user and password for your MySQL database. Your WordPress installation uses these values to communicate with your MySQL database. Enter the following command, substituting a unique user name and password.

CREATE USER 'wordpress-user'@'localhost' IDENTIFIED BY 'your_strong_password';
Make sure that you create a strong password for your user. Do not use the single quote character ( ' ) in your password, because this will break the preceding command. For more information about creating a secure password, go to http://www.pctools.com/guides/password/. Do not reuse an existing password, and make sure to store this password in a safe place.

Create your database. Give your database a descriptive, meaningful name, such as wordpress-db.

Note
The punctuation marks surrounding the database name in the command below are called backticks. The backtick (`) key is usually located above the Tab key on a standard keyboard. Backticks are not always required, but they allow you to use otherwise illegal characters, such as hyphens, in database names.

CREATE DATABASE `wordpress-db`;
Grant full privileges for your database to the WordPress user that you created earlier.

GRANT ALL PRIVILEGES ON `wordpress-db`.* TO "wordpress-user"@"localhost";
Flush the database privileges to pick up all of your changes.

FLUSH PRIVILEGES;
Exit the mysql client.

exit
To create and edit the wp-config.php file

The WordPress installation folder contains a sample configuration file called wp-config-sample.php. In this procedure, you copy this file and edit it to fit your specific configuration.

Copy the wp-config-sample.php file to a file called wp-config.php. This creates a new configuration file and keeps the original sample file intact as a backup.

[ec2-user ~]$ cp wordpress/wp-config-sample.php wordpress/wp-config.php
Edit the wp-config.php file with your favorite text editor (such as nano or vim) and enter values for your installation. If you do not have a favorite text editor, nano is suitable for beginners.

[ec2-user ~]$ nano wordpress/wp-config.php
Find the line that defines DB_NAME and change database_name_here to the database name that you created in Step 4 of To create a database user and database for your WordPress installation.

define('DB_NAME', 'wordpress-db');
Find the line that defines DB_USER and change username_here to the database user that you created in Step 3 of To create a database user and database for your WordPress installation.

define('DB_USER', 'wordpress-user');
Find the line that defines DB_PASSWORD and change password_here to the strong password that you created in Step 3 of To create a database user and database for your WordPress installation.

define('DB_PASSWORD', 'your_strong_password');
Find the section called Authentication Unique Keys and Salts. These KEY and SALT values provide a layer of encryption to the browser cookies that WordPress users store on their local machines. Basically, adding long, random values here makes your site more secure. Visit https://api.wordpress.org/secret-key/1.1/salt/ to randomly generate a set of key values that you can copy and paste into your wp-config.php file. To paste text into a PuTTY terminal, place the cursor where you want to paste the text and right-click your mouse inside the PuTTY terminal.

For more information about security keys, go to https://wordpress.org/support/article/editing-wp-config-php/#security-keys.

Note
The values below are for example purposes only; do not use these values for your installation.

define('AUTH_KEY',         ' #U$$+[RXN8:b^-L 0(WU_+ c+WFkI~c]o]-bHw+)/Aj[wTwSiZ<Qb[mghEXcRh-');
define('SECURE_AUTH_KEY',  'Zsz._P=l/|y.Lq)XjlkwS1y5NJ76E6EJ.AV0pCKZZB,*~*r ?6OP$eJT@;+(ndLg');
define('LOGGED_IN_KEY',    'ju}qwre3V*+8f_zOWf?{LlGsQ]Ye@2Jh^,8x>)Y |;(^[Iw]Pi+LG#A4R?7N`YB3');
define('NONCE_KEY',        'P(g62HeZxEes|LnI^i=H,[XwK9I&[2s|:?0N}VJM%?;v2v]v+;+^9eXUahg@::Cj');
define('AUTH_SALT',        'C$DpB4Hj[JK:?{ql`sRVa:{:7yShy(9A@5wg+`JJVb1fk%_-Bx*M4(qc[Qg%JT!h');
define('SECURE_AUTH_SALT', 'd!uRu#}+q#{f$Z?Z9uFPG.${+S{n~1M&%@~gL>U>NV<zpD-@2-Es7Q1O-bp28EKv');
define('LOGGED_IN_SALT',   ';j{00P*owZf)kVD+FVLn-~ >.|Y%Ug4#I^*LVd9QeZ^&XmK|e(76miC+&W&+^0P/');
define('NONCE_SALT',       '-97r*V/cgxLmp?Zy4zUU4r99QQ_rGs2LTd%P;|_e1tS)8_B/,.6[=UK<J_y9?JWG');
Save the file and exit your text editor.

To install your WordPress files under the Apache document root

Now that you've unzipped the installation folder, created a MySQL database and user, and customized the WordPress configuration file, you are ready to copy your installation files to your web server document root so you can run the installation script that completes your installation. The location of these files depends on whether you want your WordPress blog to be available at the actual root of your web server (for example, my.public.dns.amazonaws.com) or in a subdirectory or folder under the root (for example, my.public.dns.amazonaws.com/blog).

If you want WordPress to run at your document root, copy the contents of the wordpress installation directory (but not the directory itself) as follows:

[ec2-user ~]$ cp -r wordpress/* /var/www/html/
If you want WordPress to run in an alternative directory under the document root, first create that directory, and then copy the files to it. In this example, WordPress will run from the directory blog:

[ec2-user ~]$ mkdir /var/www/html/blog
[ec2-user ~]$ cp -r wordpress/* /var/www/html/blog/
Important
For security purposes, if you are not moving on to the next procedure immediately, stop the Apache web server (httpd) now. After you move your installation under the Apache document root, the WordPress installation script is unprotected and an attacker could gain access to your blog if the Apache web server were running. To stop the Apache web server, enter the command sudo service httpd stop. If you are moving on to the next procedure, you do not need to stop the Apache web server.

To allow WordPress to use permalinks

WordPress permalinks need to use Apache .htaccess files to work properly, but this is not enabled by default on Amazon Linux. Use this procedure to allow all overrides in the Apache document root.

Open the httpd.conf file with your favorite text editor (such as nano or vim). If you do not have a favorite text editor, nano is suitable for beginners.

[ec2-user ~]$ sudo vim /etc/httpd/conf/httpd.conf
Find the section that starts with <Directory "/var/www/html">.

<Directory "/var/www/html">
    #
    # Possible values for the Options directive are "None", "All",
    # or any combination of:
    #   Indexes Includes FollowSymLinks SymLinksifOwnerMatch ExecCGI MultiViews
    #
    # Note that "MultiViews" must be named *explicitly* --- "Options All"
    # doesn't give it to you.
    #
    # The Options directive is both complicated and important.  Please see
    # http://httpd.apache.org/docs/2.4/mod/core.html#options
    # for more information.
    #
    Options Indexes FollowSymLinks

    #
    # AllowOverride controls what directives may be placed in .htaccess files.
    # It can be "All", "None", or any combination of the keywords:
    #   Options FileInfo AuthConfig Limit
    #
    AllowOverride None

    #
    # Controls who can get stuff from this server.
    #
    Require all granted
</Directory>
Change the AllowOverride None line in the above section to read AllowOverride All.

Note
There are multiple AllowOverride lines in this file; be sure you change the line in the <Directory "/var/www/html"> section.

AllowOverride All
Save the file and exit your text editor.

To install the PHP graphics drawing library on Amazon Linux 2

The GD library for PHP enables you to modify images. Install this library if you need to crop the header image for your blog. The version of phpMyAdmin that you install might require a specific minimum version of this library (for example, version 7.2).

Use the following command to install the PHP graphics drawing library on Amazon Linux 2. For example, if you installed php7.2 from amazon-linux-extras as part of installing the LAMP stack, this command installs version 7.2 of the PHP graphics drawing library.

[ec2-user ~]$ sudo yum install php-gd
To verify the installed version, use the following command:

[ec2-user ~]$ sudo yum list installed | grep php-gd
The following is example output:

php-gd.x86_64                     7.2.30-1.amzn2             @amzn2extra-php7.2
To install the PHP graphics drawing library on the Amazon Linux AMI

The GD library for PHP enables you to modify images. Install this library if you need to crop the header image for your blog. The version of phpMyAdmin that you install might require a specific minimum version of this library (for example, version 7.2).

To verify which versions are available, use the following command:

[ec2-user ~]$ yum list | grep php-gd
The following is an example line from the output for the PHP graphics drawing library (version 7.2):

php72-gd.x86_64                   7.2.30-1.22.amzn1         amzn-updates
Use the following command to install a specific version of the PHP graphics drawing library (for example, version 7.2) on the Amazon Linux AMI:

[ec2-user ~]$ sudo yum install php72-gd
To fix file permissions for the Apache web server

Some of the available features in WordPress require write access to the Apache document root (such as uploading media though the Administration screens). If you have not already done so, apply the following group memberships and permissions (as described in greater detail in the LAMP web server tutorial).

Grant file ownership of /var/www and its contents to the apache user.

[ec2-user ~]$ sudo chown -R apache /var/www
Grant group ownership of /var/www and its contents to the apache group.

[ec2-user ~]$ sudo chgrp -R apache /var/www
Change the directory permissions of /var/www and its subdirectories to add group write permissions and to set the group ID on future subdirectories.

[ec2-user ~]$ sudo chmod 2775 /var/www
[ec2-user ~]$ find /var/www -type d -exec sudo chmod 2775 {} \;
Recursively change the file permissions of /var/www and its subdirectories to add group write permissions.

[ec2-user ~]$ find /var/www -type f -exec sudo chmod 0664 {} \;
Restart the Apache web server to pick up the new group and permissions.

Amazon Linux 2

[ec2-user ~]$ sudo systemctl restart httpd
Amazon Linux AMI

[ec2-user ~]$ sudo service httpd restart
To run the WordPress installation script with Amazon Linux 2

You are ready to install WordPress. The commands that you use depend on the operating system. The commands in this procedure are for use with Amazon Linux 2. Use the procedure that follows this one with Amazon Linux AMI.

Use the systemctl command to ensure that the httpd and database services start at every system boot.

[ec2-user ~]$ sudo systemctl enable httpd && sudo systemctl enable mariadb
Verify that the database server is running.

[ec2-user ~]$ sudo systemctl status mariadb
If the database service is not running, start it.

[ec2-user ~]$ sudo systemctl start mariadb
Verify that your Apache web server (httpd) is running.

[ec2-user ~]$ sudo systemctl status httpd
If the httpd service is not running, start it.

[ec2-user ~]$ sudo systemctl start httpd
In a web browser, type the URL of your WordPress blog (either the public DNS address for your instance, or that address followed by the blog folder). You should see the WordPress installation script. Provide the information required by the WordPress installation. Choose Install WordPress to complete the installation. For more information, see Step 5: Run the Install Script on the WordPress website.

To run the WordPress installation script with Amazon Linux AMI

Use the chkconfig command to ensure that the httpd and database services start at every system boot.

[ec2-user ~]$ sudo chkconfig httpd on && sudo chkconfig mysqld on
Verify that the database server is running.

[ec2-user ~]$ sudo service mysqld status
If the database service is not running, start it.

[ec2-user ~]$ sudo service mysqld start
Verify that your Apache web server (httpd) is running.

[ec2-user ~]$ sudo service httpd status
If the httpd service is not running, start it.

[ec2-user ~]$ sudo service httpd start
In a web browser, type the URL of your WordPress blog (either the public DNS address for your instance, or that address followed by the blog folder). You should see the WordPress installation script. Provide the information required by the WordPress installation. Choose Install WordPress to complete the installation. For more information, see Step 5: Run the Install Script on the WordPress website.

Next steps
After you have tested your WordPress blog, consider updating its configuration.

Use a custom domain name

If you have a domain name associated with your EC2 instance's EIP address, you can configure your blog to use that name instead of the EC2 public DNS address. For more information, see Changing The Site URL on the WordPress website.

Configure your blog

You can configure your blog to use different themes and plugins to offer a more personalized experience for your readers. However, sometimes the installation process can backfire, causing you to lose your entire blog. We strongly recommend that you create a backup Amazon Machine Image (AMI) of your instance before attempting to install any themes or plugins so you can restore your blog if anything goes wrong during installation. For more information, see Creating your own AMI.

Increase capacity

If your WordPress blog becomes popular and you need more compute power or storage, consider the following steps:

Expand the storage space on your instance. For more information, see Amazon EBS Elastic Volumes.

Move your MySQL database to Amazon RDS to take advantage of the service's ability to scale easily.

Migrate to a larger instance type. For more information, see Changing the instance type.

Add additional instances. For more information, see Tutorial: Increase the availability of your application on Amazon EC2.

Learn more about WordPress

For information about WordPress, see the WordPress Codex help documentation at http://codex.wordpress.org/. For more information about troubleshooting your installation, go to https://wordpress.org/support/article/how-to-install-wordpress/#common-installation-problems. For information about making your WordPress blog more secure, go to https://wordpress.org/support/article/hardening-wordpress/. For information about keeping your WordPress blog up-to-date, go to https://wordpress.org/support/article/updating-wordpress/.

Help! My public DNS name changed and now my blog is broken
Your WordPress installation is automatically configured using the public DNS address for your EC2 instance. If you stop and restart the instance, the public DNS address changes (unless it is associated with an Elastic IP address) and your blog will not work anymore because it references resources at an address that no longer exists (or is assigned to another EC2 instance). A more detailed description of the problem and several possible solutions are outlined in https://wordpress.org/support/article/changing-the-site-url/.

If this has happened to your WordPress installation, you may be able to recover your blog with the procedure below, which uses the wp-cli command line interface for WordPress.

To change your WordPress site URL with the wp-cli

Connect to your EC2 instance with SSH.

Note the old site URL and the new site URL for your instance. The old site URL is likely the public DNS name for your EC2 instance when you installed WordPress. The new site URL is the current public DNS name for your EC2 instance. If you are not sure of your old site URL, you can use curl to find it with the following command.

[ec2-user ~]$ curl localhost | grep wp-content
You should see references to your old public DNS name in the output, which will look like this (old site URL in red):

<script type='text/javascript' src='http://ec2-52-8-139-223.us-west-1.compute.amazonaws.com/wp-content/themes/twentyfifteen/js/functions.js?ver=20150330'></script>
Download the wp-cli with the following command.

[ec2-user ~]$ curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
Search and replace the old site URL in your WordPress installation with the following command. Substitute the old and new site URLs for your EC2 instance and the path to your WordPress installation (usually /var/www/html or /var/www/html/blog).

[ec2-user ~]$ php wp-cli.phar search-replace 'old_site_url' 'new_site_url' --path=/path/to/wordpress/installation --skip-columns=guid
In a web browser, enter the new site URL of your WordPress blog to verify that the site is working properly again. If it is not, see https://wordpress.org/support/article/changing-the-site-url/ and https://wordpress.org/support/article/how-to-install-wordpress/#common-installation-problems for more information.
