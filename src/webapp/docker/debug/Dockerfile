FROM debian:9.5-slim

RUN apt-get update -y
RUN apt-get install -y gnupg && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash - && apt-get install -y nodejs
