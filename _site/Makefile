.PHONY: build deploy

build:
	JEKYLL_ENV=production bundle exec jekyll build
	cp ml-confirmation-1.html _site/
	cp ml-confirmation-2.html _site/

deploy: build
	netlify deploy --dir=_site --prod