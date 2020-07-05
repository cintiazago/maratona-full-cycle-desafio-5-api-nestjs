FROM node As development

RUN npm config set cache /home/node/app/.npm-cache --global

RUN npm i -g @nestjs/cli@7.4.1

USER node

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install --only=development

COPY . .

ENV ADDR=0.0.0.0

EXPOSE 3000

# Uncomment to run the migrations before running the binary:
# CMD /bin/app migrate; /bin/app
CMD ["npm", "start"]