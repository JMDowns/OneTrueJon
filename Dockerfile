FROM oven/bun:latest

COPY . .

CMD ["bun", "run", "dev", "--host"]

EXPOSE 5173