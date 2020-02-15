PACKAGE := ghscard
DOCS_DIR := docs
DOCS_BUILD_DIR := $(DOCS_DIR)/_build


.PHONY: build
build:
	@make clean
	@npm run-script build
	@python setup.py sdist bdist_wheel
	@twine check dist/*.whl
	@twine check dist/*.tar.gz
	@python setup.py clean --all
	ls -lh dist/*
	@cp dist/ghscard.js test/html/

.PHONY: check
check:
	npm run-script lint
	@tox -e lint
	travis lint

.PHONY: upgrade
upgrade:
	@ncu --upgrade
	@npm install

.PHONY: clean
clean:
	@npm run-script clean
	@tox -e clean

.PHONY: docs
docs:
	@python setup.py build_sphinx --source-dir=$(DOCS_DIR)/ --build-dir=$(DOCS_BUILD_DIR) --all-files

.PHONY: fmt
fmt:
	@tox -e fmt
	npx prettier --tab-width 4 --print-width 100 --trailing-comma es5 --write "**/*.ts" --ignore-path "$(CURDIR)/node_modules/*"

.PHONY: readme
readme:
	@cd $(DOCS_DIR); python make_readme.py

.PHONY: release
release:
	@python setup.py release --sign
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
	@pip install --upgrade --upgrade-strategy eager .[dev]
	npm install


.PHONY: install
install:
	cp dist/ghscard.js ../thombashi.github.io/js/
	cp dist/ghscard.js.map ../thombashi.github.io/js/
	cp dist/ghscard.min.js ../thombashi.github.io/js/
