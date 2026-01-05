.PHONY: build deploy

build:
	JEKYLL_ENV=production bundle exec jekyll build

deploy: build
	netlify deploy --dir=_site --prod
