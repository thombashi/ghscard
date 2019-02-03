PACKAGE := ghscard
BUILD_DIR := build
DOCS_DIR := docs
DOCS_BUILD_DIR := $(DOCS_DIR)/_build


.PHONY: build
build:
	@make clean
	@npm run-script package
	@python setup.py build
	@twine check dist/*.whl
	@twine check dist/*.tar.gz
	@rm -rf build/

.PHONY: upgrade
upgrade:
	@ncu --upgrade
	@npm update

.PHONY: clean
clean:
	@rm -rf $(PACKAGE)-*.*.*/ \
		$(BUILD_DIR) \
		$(BUILD_WORK_DIR) \
		$(DOCS_BUILD_DIR) \
		dist/*.{whl,tar.gz} \
		.eggs/ \
		.pytest_cache/ \
		.tox/ \
		**/*/__pycache__/ \
		*.egg-info/

.PHONY: docs
docs:
	@python setup.py build_sphinx --source-dir=$(DOCS_DIR)/ --build-dir=$(DOCS_BUILD_DIR) --all-files

.PHONY: fmt
fmt:
	@black $(CURDIR)/$(PACKAGE)
	@isort --apply --recursive $(PACKAGE)
	@./node_modules/.bin/prettier --tab-width 4 --print-width 100 --trailing-comma es5 --write "**/*.ts" --ignore-path "$(CURDIR)/node_modules/*"

.PHONY: readme
readme:
	@cd $(DOCS_DIR); python make_readme.py

.PHONY: release
release:
	@python setup.py release
	@rm -rf dist/*.whl
