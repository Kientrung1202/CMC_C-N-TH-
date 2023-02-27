FROM node:16 as builder
WORKDIR /app
COPY  package.json tsconfig.json /app/
RUN yarn

FROM node:16
WORKDIR /app
COPY --from=builder /app .
COPY . .
RUN yarn build
CMD ["yarn", "start"]