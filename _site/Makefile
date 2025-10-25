.PHONY: build deploy

build:
	bundle exec jekyll build
	cp ml-confirmation-1.html _site/
	cp ml-confirmation-2.html _site/

deploy:
	netlify deploy --dir=_site --prod