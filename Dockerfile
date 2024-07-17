FROM node:18-alpine
EXPOSE 5173
WORKDIR /foodApp
COPY public/ /foodApp/public
COPY src/ /foodApp/src
COPY package*.json /foodApp/
RUN npm install
CMD ["npm", "run", "dev", "--host=0.0.0.0"]
