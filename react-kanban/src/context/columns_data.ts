import { v4 as uuidv4 } from "uuid";
import type { Column } from "../interfaces";

export let columns_data: Column[] = [
  {
    id: uuidv4(),
    name: "Por hacer 🧠",
    cards: [
      {
        id: uuidv4(),
        title: "Definir la idea 💡",
        description: "Seguimos inventando... ¿una app para gatos programadores? 🐱‍💻"
      },
      {
        id: uuidv4(),
        title: "Hacer el pitch 🎤",
        description: "Prometeremos features que aún nadie sabe cómo hacer."
      },
      {
        id: uuidv4(),
        title: "Buscar café ☕",
        description: "Sin café no hay hackatón. Punto final."
      },
      {
        id: uuidv4(),
        title: "Crear el logo 🎨",
        description: "Si se ve bonito, el MVP pasa por arte de magia."
      },
      {
        id: uuidv4(),
        title: "Nombrar el proyecto 🤔",
        description: "¿Y si lo llamamos AvanGenioGPT? Nah, muy obvio..."
      }
    ],
  },
  {
    id: uuidv4(),
    name: "Haciendo 💻",
    cards: [
      {
        id: uuidv4(),
        title: "Frontend en construcción 🚧",
        description: "Todo va bien hasta que React dice: ERROR."
      },
      {
        id: uuidv4(),
        title: "Integrar la API 🤝",
        description: "La API no responde, pero la esperanza nunca muere."
      },
      {
        id: uuidv4(),
        title: "Controlar el estado global 🧩",
        description: "Context, Redux, o post-its pegados en el monitor?"
      },
      {
        id: uuidv4(),
        title: "Diseño responsivo 📱",
        description: "Se ve hermoso en mi monitor 4K. En el celular... lloro."
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Bloqueadas 🚧",
    cards: [
      {
        id: uuidv4(),
        title: "Esperando al diseñador 🎨",
        description: "Dice que viene en camino... desde hace 3 días 😐"
      },
      {
        id: uuidv4(),
        title: "Dominio en proceso 🌐",
        description: "avanquelo.com ya estaba ocupado 😫"
      },
      {
        id: uuidv4(),
        title: "API del futuro",
        description: "Aún no existe, pero confíen, funcionará (algún día)."
      }
    ],
  },
  {
    id: uuidv4(),
    name: "Hechas 🚀",
    cards: [
      {
        id: uuidv4(),
        title: "Nombre del equipo listo ⚡",
        description: "Team SuperAvanGenios 😎"
      },
      {
        id: uuidv4(),
        title: "Sticker del equipo ✨",
        description: "No sabemos programar, pero los stickers están hermosos."
      },
      {
        id: uuidv4(),
        title: "Un README épico 📚",
        description: "Llena de promesas que algún día cumpliremos."
      },
      {
        id: uuidv4(),
        title: "Cámara lista 🎥",
        description: "Selfies para documentar nuestro estrés."
      }
    ],
  }
]