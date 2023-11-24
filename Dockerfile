FROM oven/bun:latest

COPY . .

RUN bun install

CMD ["bun", "run", "dev"]

EXPOSE 3000