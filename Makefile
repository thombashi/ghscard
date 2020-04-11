PACKAGE := ghscard
DOCS_DIR := docs
DOCS_BUILD_DIR := $(DOCS_DIR)/_build


.PHONY: build
build:
	@make clean
	@npm run-script build
	@tox -e build
	ls -lh dist/*
	@cp dist/ghscard.js test/html/

.PHONY: check
check:
	npm run-script lint
	@tox -e lint
	travis lint
	pip check

.PHONY: upgrade
upgrade:
	@ncu --upgrade
	@npm install

.PHONY: clean
clean:
	@npm run-script clean
	@tox -e clean
	@rm $(PACKAGE)-*.tgz

.PHONY: docs
docs:
	@tox -e docs

.PHONY: fmt
fmt:
	@tox -e fmt
	npx prettier --tab-width 4 --print-width 100 --trailing-comma es5 --write "**/*.ts" --ignore-path "$(CURDIR)/node_modules/*"

.PHONY: readme
readme:
	@tox -e readme

.PHONY: release
release:
	@tox -e release
	@make clean

.PHONY: pack
pack:
	@pandoc -f rst -t markdown -o README.md README.rst
	npm pack

.PHONY: publish
publish:
	pandoc -f rst -t markdown -o README.md README.rst
	npm publish

.PHONY: setup
setup:
	@pip install --upgrade -e .[test]
	npm install
	pip check


.PHONY: install
install:
	cp dist/ghscard.js ../thombashi.github.io/js/
	cp dist/ghscard.js.map ../thombashi.github.io/js/
	cp dist/ghscard.min.js ../thombashi.github.io/js/
