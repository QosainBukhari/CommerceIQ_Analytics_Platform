# Base Python image
FROM python:3.13-slim


# Working directory inside container
WORKDIR /app


# Copy requirements file
COPY requirements.txt .


# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt


# Copy backend code
COPY . .


# Prevent Python buffering
ENV PYTHONUNBUFFERED=1

# Prevent .pyc cache files
ENV PYTHONDONTWRITEBYTECODE=1


# Expose FastAPI port
EXPOSE 8000


# Run FastAPI server
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]