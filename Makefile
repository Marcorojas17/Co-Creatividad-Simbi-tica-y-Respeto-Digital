.PHONY: help install test audit build deploy clean
help:
	@echo "KRONOS-28-ITZA Makefile"
	@echo "  install   - Instalar dependencias"
	@echo "  test      - Ejecutar pruebas"
	@echo "  audit     - Ejecutar auditoría"
	@echo "  build     - Generar assets"
	@echo "  deploy    - Desplegar a GitHub Pages"
install:
	pip install -r requirements.txt
	npm install
test:
	pytest tests/ -v
	node tests/benchmarking_gpu.js
audit:
	python audit.py
build:
	node scripts/generate-icons.js
	python chladni_plate.py
deploy:
	git push origin main
clean:
	rm -rf __pycache__ .pytest_cache coverage/
