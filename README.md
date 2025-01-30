Aquí tienes el `README.md` para tu proyecto:

```markdown
# Ollama DeepSeek-R1 REST API

API REST con TypeScript que integra el modelo DeepSeek-R1 a través de Ollama para generación de código y texto.

## Requisitos Previos

- Node.js v18+
- Ollama instalado en Windows
- 8GB+ de RAM recomendado
- Postman o similar para probar endpoints

## Instalación

1. **Instalar Ollama en Windows:**
   ```powershell
   winget install Ollama.Ollama
   ```

2. **Descargar modelo DeepSeek-R1:**
   ```powershell
   ollama run deepseek-r1
   ```

3. **Clonar repositorio e instalar dependencias:**
   ```bash
   git clone [tu-repositorio]
   cd [directorio-proyecto]
   npm install
   ```

4. **Configurar variables de entorno** (crear `.env`):
   ```env
   PORT=3000
   OLLAMA_API_KEY=ollama # Valor simbólico
   ```

## Uso

### Iniciar servidor
```bash
npm run dev
```

### Endpoints

**1. Prueba básica (GET):**
```bash
GET http://localhost:3000/api/data
```

**2. Generación de código/texto (POST):**
```bash
POST http://localhost:3000/api/ask
Content-Type: application/json

{
  "prompt": "Make a Fibonacci function in Python"
}
```

### Ejemplo con curl
```bash
curl -X POST http://localhost:3000/api/ask \
  -H "Content-Type: application/json" \
  -d '{"prompt":"Write hello world in Go"}'
```

## Estructura del Proyecto
```
├── src/
│   ├── models/
│   │   └── chatGPT.ts    # Integración con Ollama
│   ├── index.ts          # Servidor Express
├── .env                  # Variables de entorno
├── tsconfig.json         # Config TypeScript
└── package.json
```

## Configuración de Postman
1. Importar colección:
   ```json
   {
     "info": {
       "name": "Ollama API",
       "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
     },
     "item": [
       {
         "name": "Ask Prompt",
         "request": {
           "method": "POST",
           "header": [
             {
               "key": "Content-Type",
               "value": "application/json"
             }
           ],
           "body": {
             "mode": "raw",
             "raw": "{\n  \"prompt\": \"Your query here\"\n}"
           },
           "url": {
             "raw": "http://localhost:3000/api/ask",
             "protocol": "http",
             "host": ["localhost"],
             "port": "3000",
             "path": ["api","ask"]
           }
         }
       }
     ]
   }
   ```

## Solución de Problemas Comunes

**Error de conexión ECONNREFUSED:**
```bash
# Verificar servicio Ollama
ollama serve

# Probar modelo directamente
ollama run deepseek-r1 "Hello world"
```

**Modelo no responde:**
- Verificar instalación del modelo:
  ```bash
  ollama list
  ```
- Actualizar Ollama:
  ```bash
  ollama update
  ```

**Altos tiempos de respuesta:**
- Reducir tamaño del prompt
- Usar modelo más pequeño:
  ```typescript
  model: "deepseek-r1:4b" // Si disponible
  ```

## Licencia
MIT License

---

**Nota:** Asegúrate de tener Ollama corriendo en segundo plano (`ollama serve`) antes de iniciar el servidor Node.js.
```

Este README incluye:
1. Instrucciones detalladas de instalación
2. Ejemplos de uso con diferentes métodos
3. Configuración para Postman
4. Solución de problemas comunes
5. Estructura del proyecto
6. Requisitos del sistema

Puedes personalizar las secciones de licencia y créditos según tus necesidades.