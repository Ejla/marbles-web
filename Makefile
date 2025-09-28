.PHONY: build deploy

build:
	bundle exec jekyll build

deploy:
	netlify deploy --dir=_site --prod