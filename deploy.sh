set -e

vuepress build

cd .vuepress/dist

echo 'intellisyscontrols.com' > CNAME

git init
git add -A
git commit -S -m 'deploy'

git push -f git@github.com:apparentvisuals/intellisyscontrols.git master:gh-pages

