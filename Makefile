PACKAGE := ghscard
DOCS_DIR := docs
DOCS_BUILD_DIR := $(DOCS_DIR)/_build


.PHONY: build
build:
	@make clean
	@npm run-script package
	@python setup.py sdist bdist_wheel
	@twine check dist/*.whl
	@twine check dist/*.tar.gz
	@python setup.py clean --all
	ls -lh dist/*
	@cp dist/ghscard.js test/html/

.PHONY: upgrade
upgrade:
	@ncu --upgrade
	@npm update

.PHONY: clean
clean:
	@rm -rf $(PACKAGE)-*.*.*/ \
		$(BUILD_WORK_DIR) \
		$(DOCS_BUILD_DIR) \
		dist/*.{whl,tar.gz} \
		pip-wheel-metadata/ \
		.eggs/ \
		.pytest_cache/ \
		.tox/ \
		**/*/__pycache__/ \
		*.egg-info/
	@python setup.py clean --all
	@find . -not -path '*/\.*' -type f | grep -E .+\.py\.[a-z0-9]{32,}\.py$ | xargs -r rm

.PHONY: docs
docs:
	@python setup.py build_sphinx --source-dir=$(DOCS_DIR)/ --build-dir=$(DOCS_BUILD_DIR) --all-files

.PHONY: fmt
fmt:
	black
	autoflake --in-place --recursive --remove-all-unused-imports --ignore-init-module-imports .
	isort --apply --recursive
	npx prettier --tab-width 4 --print-width 100 --trailing-comma es5 --write "**/*.ts" --ignore-path "$(CURDIR)/node_modules/*"

.PHONY: readme
readme:
	@cd $(DOCS_DIR); python make_readme.py

.PHONY: release
release:
	@python setup.py release --sign
	@make clean
