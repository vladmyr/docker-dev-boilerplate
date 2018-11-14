FROM debian:9.5-slim

RUN apt-get update -y
RUN apt-get install -y gnupg && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash - && apt-get install -y nodejs

# See https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#running-puppeteer-in-docker
# Skip chromium download when installing puppeteer
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

RUN apt-get -y install xvfb gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 \
      libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 \
      libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 \
      libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 \
      libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget && \
    rm -rf /var/lib/apt/lists/*

# Install latest chrome package and fonts to support major charsets (Chinese, Japanese, Arabic, Hebrew, Thai and a few others)
# Note: this installs the necessary libs to make the bundled version of Chromium that Puppeteer
# installs, work.
RUN apt-get update && apt-get install -y wget --no-install-recommends \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install -y google-chrome-stable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst ttf-freefont \
      --no-install-recommends \
    && rm -rf /var/lib/apt/lists/* \
    && apt-get purge --auto-remove -y curl \
    && rm -rf /src/*.deb
