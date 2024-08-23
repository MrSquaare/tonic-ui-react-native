FROM node:20-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV APP_DIRECTORY="/usr/src/app"

ENV PATH="${PATH}:${PNPM_HOME}"
ENV PATH="${PATH}:${APP_DIRECTORY}/node_modules/.bin/"
ENV PATH="${PATH}:${APP_DIRECTORY}/storybook-web/node_modules/.bin/"

RUN corepack enable pnpm

WORKDIR ${APP_DIRECTORY}

COPY ./package.json ./pnpm-lock.yaml ./pnpm-workspace.yaml ./
COPY ./tonic-ui/package.json ./tonic-ui/
COPY ./storybook-web/package.json ./storybook-web/

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile


FROM base AS build

COPY ./.eslintrc.js ./.eslintrc.js
COPY ./turbo.json ./turbo.json
COPY ./tonic-ui ./tonic-ui
COPY ./storybook-web ./storybook-web
RUN pnpm build


FROM base

COPY --from=build ${APP_DIRECTORY}/storybook-web/storybook-static/ ./storybook-web/storybook-static/

ENV NODE_ENV="production"

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

RUN apk add --no-cache dumb-init

EXPOSE 4173

ENTRYPOINT ["dumb-init", "--"]

CMD ["pnpm", "-F", "@tonic-ui/storybook-web", "preview", "--host"]
