#!/usr/bin/env sh

if [ "$MODE" == "dev" ]; then
    npm run dev
else
    npm run build
    npm start
fi