DOCS_DIR := docs
BUILD_DIR := _build

.PHONY: build
build:
	@make clean
	@npm run-script package
	@python setup.py build
	@rm -rf build/

.PHONY: upgrade
upgrade:
	@ncu --upgrade
	@npm update

.PHONY: clean
clean:
	@rm -rf build dist $(DOCS_DIR)/$(BUILD_DIR) .eggs/ .pytest_cache/ **/*/__pycache__/ *.egg-info/

.PHONY: docs
docs:
	@python setup.py build_sphinx --source-dir=$(DOCS_DIR)/ --build-dir=$(DOCS_DIR)/$(BUILD_DIR) --all-files

.PHONY: fmt
fmt:
	@black $(CURDIR)
	@isort --apply --recursive
	@./node_modules/.bin/prettier --tab-width 4 --print-width 100 --trailing-comma es5 --write "**/*.ts"

.PHONY: readme
readme:
	@cd $(DOCS_DIR); python make_readme.py

.PHONY: release
release:
	@python setup.py release
	@rm -rf dist/*.whl
