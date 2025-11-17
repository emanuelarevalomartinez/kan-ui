# 🌍 Taskflow API – LibreTranslate Integration (Flask)

Taskflow API es una aplicación desarrollada con **Flask** que actúa como intermediario entre clientes y el servicio de traducción **LibreTranslate**, una API de traducción open-source.  
Este proyecto expone endpoints propios para traducir textos y obtener información sobre idiomas soportados, brindando una integración flexible y sin depender de servicios comerciales.

---

## ✨ ¿Qué es LibreTranslate?

LibreTranslate es una API de traducción completamente **open source** con licencia **AGPL-3.0**.  
Puede utilizarse de manera pública o **auto-hostearse**, sin restricciones comerciales y con control total del servicio.  

Endpoints principales utilizados:
- `POST /translate` → Traducción de texto  
- `GET /languages` → Obtener idiomas disponibles  
- `POST /detect` → Detección de idioma  

Ejemplo de request de traducción:
```json
{
  "q": "Hello World",
  "source": "en",
  "target": "es"
}
```

---

## 🚀 Requisitos

Asegúrate de tener instalado:

- Python 3.8+
- pip

---

## 📦 Instalación

Clona el repositorio:

```bash
git clone https://github.com/usuario/Taskflow-Api.git
cd Taskflow-Api/flask-api
```

---

## 📦 Crea y activa el entorno virtual:

```bash
python3 -m venv venv
source venv/bin/activate  # Linux/Mac
# o
venv\Scripts\activate     # Windows
```

---

## 📦 Instala las dependencias:

```bash
pip install -r requirements.txt
```

---

## 📦 Ejecutar la aplicación:

```bash
python run.py
```

La API estará disponible en:

```bash
http://127.0.0.1:5000/
```