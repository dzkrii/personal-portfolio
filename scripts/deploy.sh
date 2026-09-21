#!/usr/bin/env bash
# ============================================================
# personal-portfolio VPS auto-deploy script
# ============================================================
set -euo pipefail

# Ensure bun and node are available in non-interactive SSH sessions
export BUN_INSTALL="$HOME/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"

export NVM_DIR="$HOME/.nvm"
# shellcheck disable=SC1091
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

REPO_DIR="/home/kyura/projects/personal/personal-portfolio"

cd "$REPO_DIR"

echo "==> Ensuring HTTPS remote for reliable pull"
git remote set-url origin https://github.com/dzkrii/personal-portfolio.git || true

echo "==> Pulling latest main"
git fetch origin main
git reset --hard origin/main

echo "==> Installing dependencies"
bun install

echo "==> Building Astro static site"
bun run build

echo "==> Deploy finished successfully: $(git rev-parse --short HEAD)"

