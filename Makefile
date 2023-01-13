install:
	npm ci

gendiff -h:
	node bin/gendiff.js

lint:
	npx eslint .

link:
	sudo npm link


publish:
	npm publish --dry-run
