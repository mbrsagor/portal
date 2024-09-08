# Portal

> This web application use for online portal for manage your business.

If you want to run this application in your local or developer server environment please follow the instructions.

### Setup:
- Python 3.12
- PostgreSQL

> Open your terminal and follow the instructions.

```bash
git clone https://github.com/mbrsagor/portal.git
cd portal
virtualenv venv --python=python3.12
source venv/bin/activate
pip install -r requirements.txt
./manage.py migrate
./manage.py runserver
```
