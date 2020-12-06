FROM node:12
WORKDIR /app

# Copy distributable code
COPY ./dist ./
COPY .env ./

# Install ejs
RUN npm i ejs

#Expose the right port
EXPOSE 8080

# Run our app
CMD ["node", "index.js"]