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

test:
	npx jest

test-coverage:
	npx jest --coverage
