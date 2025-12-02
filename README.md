# Kan-UI

**Reusable React component library for building flexible & dynamic Kanban boards.**

Kan-UI provides a set of UI-ready components that simplify the creation of customizable Kanban boards in any React application. It includes draggable columns/cards through @dnd-kit and enhanced UX features such as voice navigation and password-strength evaluation via external integrations.

## 📌 Description

This project serves as both:

✔ A component library for developers
✔ A showcasing website with built-in documentation and an interactive demo

The website includes:

A documentation section for components

An interactive Kanban demo

A password validator demo using an external security library

Voice-command actions to navigate throughout the app

## ✨ Main Features

* 🎯 Reusable Kanban UI components

* 🧩 Interactive drag-&-drop support (@dnd-kit)

* 🗣 Voice-activated navigation using Devosaurus

* 🔐 Additional security demo using UniPass Validator

* 🌍 Multi-language support: English & Spanish

* ⚙️ Full React + TypeScript + Vite environment

* 🎨 Styled using TailwindCSS

* ⚡ Fast development experience

## 🚀 Installation & Usage

```bash
npm install
npm run dev
```

📌 Once the development server is running, open your browser and navigate to:

🔗 http://localhost:5173

➡️ This will open the Kan-UI application, where you can access the documentation and demos directly from the home screen.

Build the project:

```bash
npm run build
```

## 🧩 Architecture & Routing

All main documentation and demos are accessible directly from the UI navigation.

| Route                    | Section                | Description                      |
| ------------------------ | ---------------------- | -------------------------------- |
| `/`                      | Home                   | Entry point                      |
| `/catalog`               | Components             | 🌟 Main documentation            |
| `/catalog/requirements`  | Requirements           | First section displayed to users |
| `/catalog/kanban-board`  | Kanban Board Docs      | Component usage & examples       |
| `/catalog/kanban-column` | Kanban Column Docs     | Props and integration samples    |
| `/catalog/kanban-card`   | Kanban Card Docs       | UI behavior & configurations     |
| `/catalog/about-us`      | Credits                | Team info                        |
| `/demo`                  | Kanban Demo            | Fully interactive sandbox        |
| `/unipass-validator`     | UniPass Validator Demo | Password strength analyzer       |
| `*`                      | NotFoundPage           | Error handling                   |


##### 📌 When accessing Components, the app automatically redirects to Requirements first.
##### 📌 The Demo page also showcases access to additional tools.

## 🧠 Integrated Libraries
| Library               | Purpose                      | UI Presence                                  |
| --------------------- | ---------------------------- | -------------------------------------------- |
| **Devosaurus**        | Voice-navigation             | Appears as a floating button in the UI       |
| **UniPass Validator** | Password security evaluation | Accessible from the Kanban demo via a button |

### 🔐 Additional Demo Access
A button below the Kanban board in the /demo page allows users to jump directly to the UniPass Validator Demo.

## 📚 Internal Component Library

The following components are included and documented inside the app:

✔ KanbanBoard
✔ KanbanColumn
✔ KanbanCard

Each component includes:

* Prop documentation

* Usage examples

* UI previews

##### 👉 Documentation is located inside the web UI, not only in this README.

## 🌐 Multilingual Support

The entire site supports:

* 🇺🇸 English

* 🇪🇸 Spanish

Language switching is available directly from the UI header.

## 🛠 Tech Stack

| Technology       | Usage                  |
| ---------------- | ---------------------- |
| React 19         | UI                     |
| TypeScript       | Safety & DX            |
| Vite             | Build system           |
| @dnd-kit         | Drag & Drop            |
| TailwindCSS      | Styling                |
| React Router DOM | Client-side navigation |
| React Icons      | UI enhancements        |


## 🤝 Contributing

1. Fork
2. New branch
3. Commit (Conventional Commits preferred)
4. Pull Request

Feedback, features & issues welcome! 🚀

## 📝 License

Apache License 2.0 — free for personal and commercial use.

## 🔗 Repository

[GitHub - Kan-UI](https://github.com/emanuelarevalomartinez/kan-ui)
