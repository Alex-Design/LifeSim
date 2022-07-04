#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
#cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

#git init
#git checkout -b master
#git add -A
#git commit -m 'deploy'

# Modified build script
git checkout pages
git add dist/* -f
#git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
#git push origin pages

git checkout master
