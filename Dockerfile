FROM oven/bun:latest

COPY . .

RUN bun install

CMD ["bun", "run", "dev", "--host"]

EXPOSE 5173