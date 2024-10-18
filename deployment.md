# portal

> If you want to deploy the application cloud please follow the below instructions:

###### Install the Packages from the Ubuntu Repositories
```bash
sudo apt-get update
sudo apt-get install python3-pip python3-dev libpq-dev postgresql postgresql-contrib nginx
```

> Create the PostgresSQL Database and User
```bash
sudo -u postgres psql
```

```postgresql
CREATE DATABASE portal;
CREATE USER dev WITH PASSWORD '12345';
ALTER ROLE dev SET client_encoding TO 'utf8';
ALTER ROLE dev SET default_transaction_isolation TO 'read committed';
ALTER ROLE dev SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE portal TO dev;
\q
```

> Create a Python Virtual Environment & run project
```bash
git clone https://github.com/mbrsagor/portal
cd portal
git checkout develop
sudo apt install python3-virtualenv
virtualenv venv --python=python3.12
source venv/bin/activate
pip install django gunicorn
pip install -r requirements.txt
```

> Create .env file and paste info from `.sample_env` file.
```.dotenv
SECRET_KEY="django-insecure-pd0p!1mz&@st!t08rkolpav5b!n0%p4&mr4kdy#v2pmlp9m2or"
DEBUG=True
ALLOWED_HOSTS=*

# Database config
DB_HOST=localhost
DB_PORT=5432
DB_NAME=portal
DB_USERNAME=dev
DB_PASSWORD=12345
```

> Migrations and create superuser.
```bash
python manage.py makemigrations user
python manage.py migrate
```

> Create a Gunicorn systemd Service File
````bash
sudo vim /etc/systemd/system/gunicorn.socket
````

```bash
[Unit]
Description=gunicorn socket

[Socket]
ListenStream=/run/gunicorn.sock

[Install]
WantedBy=sockets.target
```

> Next, we will create a service file for gunicorn
```bash
sudo vim /etc/systemd/system/gunicorn.service
```
```bash
[Unit]
Description=gunicorn daemon
Requires=gunicorn.socket
After=network.target

[Service]
User=ubuntu
Group=www-data
WorkingDirectory=/home/ubuntu/portal
ExecStart=/home/ubuntu/portal/venv/bin/gunicorn \
          --access-logfile - \
          --workers 3 \
          --bind unix:/run/gunicorn.sock \
          portal.wsgi:application
[Install]
WantedBy=multi-user.target
```

> With this command, you can check if already a file exists.

```bash
cd /etc/nginx/sites-enabled
rm -rf defualt
```
> Configuring Nginx as a reverse proxy
```bash
sudo vim /etc/nginx/sites-available/portal
```
```bash
server {
    listen 80;
     client_max_body_size 200M;
    server_name 18.214.100.68;
    location = /favicon.ico { access_log off; log_not_found off; }
    location /static/ {
        root /home/ubuntu/portal;
    }
    location /staticfiles/ {
        root /home/ubuntu/portal;
    }
    location /media/ {
        root /home/ubuntu/portal;
    }
    location / {
        include proxy_params;
        proxy_pass http://unix:/run/gunicorn.sock;
    }
}
```
> Activate the configuration using the following command:
```bash
sudo ln -s /etc/nginx/sites-available/portal /etc/nginx/sites-enabled/
```
> Run this command to load a static file
```bash
sudo gpasswd -a www-data ubuntu
```
```bash
sudo systemctl restart nginx
sudo service gunicorn restart
sudo service nginx restart
```

[source](https://www.codewithmuh.com/blog/deploy-django-application-on-ec2-with-postgresql-s3-domain-and-ssl-setup)
