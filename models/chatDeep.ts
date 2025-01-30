import dotenv from 'dotenv';
import OpenAI from 'openai';
dotenv.config();
const client = new OpenAI({
  baseURL: "http://127.0.0.1:11434/v1",
  apiKey: "ollama" // Ollama no requiere clave real, pero se necesita un valor cualquiera
});
console.log(client);
async function chatDeep(topic: string): Promise<any> {
  try {

    console.log("Entro a chatGPT,prompt", topic);
    const response = await client.chat.completions.create({
      model: "deepseek-r1:latest", // Reemplaza con la versión deseada
      messages: [{ role: "user", content: topic }],
      temperature: 0.7
    });

    console.log(response.choices[0].message.content);

    console.log(response.choices[0].message.content);
    return response.choices[0].message.content;
  } catch (error: any) {
    console.error(error);
    return 'Error al generar el texto :'+ error.message;
  }
}


export default chatDeep;
