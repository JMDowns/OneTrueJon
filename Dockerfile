FROM oven/bun:latest

COPY bun.lockb .
COPY bunfig.toml .
COPY happydom.ts .
COPY next-env.d.ts .
COPY next.config.js .
COPY package.json .

COPY public/ .
COPY src/ .

ENV NODE_ENV 'production'
RUN bun install

CMD ["bun", "run", "dev"]

EXPOSE 3000