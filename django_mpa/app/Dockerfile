FROM python:3.12-slim

WORKDIR /app

# Dependencias
COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

# Código de la aplicación
COPY . .

EXPOSE 8000

# Recolectar estáticos y ejecutar Gunicorn
CMD ["sh", "-c", "python manage.py collectstatic --noinput && gunicorn blog.wsgi:application --bind 0.0.0.0:8000"]