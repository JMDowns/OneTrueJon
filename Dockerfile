ARG NODE_VERSION=20

FROM node:${NODE_VERSION}

COPY . .

RUN curl -fsSL https://bun.sh/install | BUN_INSTALL=/usr bash

RUN /usr/bin/bun install

RUN /usr/bin/bun run build

CMD ["/usr/bin/bun", "run", "start"]

EXPOSE 3000