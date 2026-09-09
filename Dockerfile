FROM python:3.11-slim
WORKDIR /app
RUN apt-get update && apt-get install -y curl git jq gnupg && rm -rf /var/lib/apt/lists/*
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && apt-get install -y nodejs && npm install
CMD ["python", "live.py"]
