# One Prompt, Multiple Answers 🧠💬

A full-stack AI application that allows users to submit a single prompt and receive responses from multiple large language models (LLMs) side by side.

This project is designed as a **proof of concept (PoC)** to demonstrate how different LLMs interpret the same prompt, and how their responses can be **evaluated**, **compared**, and even enhanced with **retrieval-based context**.

## ✨ Features

- 🧠 Compare outputs from multiple LLMs
- 💡 Send one prompt and see multiple insights
- 🎨 Clean, responsive UI with animations
- 📥 Download model responses as `.txt` or `.pdf`
- 🧩 Built using Open Source tools

---

## 🔧 Tech Stack

**Frontend:**
- React
- Axios
- Lottie-React
- jsPDF (for export)
- CSS Grid/Flexbox

**Backend:**
- Node.js
- Express.js
- Ollama (for local LLM access)
- dotenv

**Models Used:**
- LLaMA3 (via Ollama)
- Mistral (via Ollama)
- DeepSeek-R1 (via Ollama)
- LLaMA2 (or Gemini/GPT if connected)

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/one-prompt-multi-answers.git
cd one-prompt-multi-answers

## 🔧 Tech Stack

**Frontend:**
- React
- Axios
- Lottie-React
- jsPDF (for export)
- CSS Grid/Flexbox

**Backend:**
- Node.js
- Express.js
- Ollama (for local LLM access)
- dotenv

**Models Used:**
- LLaMA3 (via Ollama)
- Mistral (via Ollama)
- DeepSeek-R1 (via Ollama)
- LLaMA2 (or Gemini/GPT if connected)

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/one-prompt-multi-answers.git
cd one-prompt-multi-answers

2. Backend Setup

cd backend
npm install
node server.js
Make sure Ollama is running and models like llama3.2, mistral, deepseek-r1 are installed locally.

3. Frontend Setup

cd frontend
npm install
npm start
📂 Project Structure
pgsql
Copy
Edit
one-prompt-multi-answers/
│
├── backend/
│   └── server.js (Express API)
│
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   └── assets/
│   │       └── Multi_llm_prompt.json (Lottie animation)
│   └── public/
│       └── index.html
📦 Downloads
Export all model responses as:

📄 PDF

📃 TXT

💡 Use Cases
AI Researchers analyzing model behavior

Developers experimenting with prompts

Educators teaching prompt engineering

Curious minds exploring AI creativity

🤝 Contributing
Pull requests are welcome! If you'd like to contribute a new model, improve the UI, or add a feature — feel free to fork and submit a PR.

📃 License
MIT License

🙌 Acknowledgements
Ollama

LottieFiles

Open-source LLM communities


---

Let me know if you want to:
- Include a deployment guide
- Add badges (GitHub stars, Netlify/Vercel deployment, etc.)
- Add a hosted demo link

I'm happy to assist with any of those too!







# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
