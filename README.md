# 🎨 Cartoonify Image - Web App by Raj Singh

[![Live Demo](https://img.shields.io/badge/Demo-Live%20Site-brightgreen?style=for-the-badge&logo=vercel)](https://image-psi-steel.vercel.app/)
[![GitHub Stars](https://img.shields.io/github/stars/Raj-Singh-3/Cartoonify-Image?style=for-the-badge)](https://github.com/Raj-Singh-3/Image/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

A full-stack web application that transforms photos into cartoon-style images using **computer vision** and **machine learning** techniques.

👉 **Try it now:** [Live Demo](https://image-psi-steel.vercel.app/)


## ✨ Key Features

- 🖼️ **Instant Image Upload** - Drag & drop or file selection
- 🎭 **Multiple Cartoon Styles** - Choose different artistic effects
- ⚡ **Real-time Processing** - Fast transformation using OpenCV
- 📥 **Download Results** - Save your cartoonified images
- 🌙 **Dark/Light Mode** - Comfortable viewing in any lighting

## 🛠 Tech Stack

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)

### Backend
![Flask](https://img.shields.io/badge/Flask-000000?style=flat&logo=flask&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)
![OpenCV](https://img.shields.io/badge/OpenCV-27338e?style=flat&logo=opencv&logoColor=white)

### API Communication
![REST API](https://img.shields.io/badge/REST_API-FF6C37?style=flat&logo=postman&logoColor=white)

## 🚀 Live Deployment

The application is deployed on **Vercel** for frontend and **PythonAnywhere** for backend API:

🔗 **Live Site:** [https://image-psi-steel.vercel.app/](https://image-psi-steel.vercel.app/)

## 🖥️ How It Works

1. **User Uploads Image** via drag-and-drop or file selector
2. **Frontend Sends Image** to Flask backend via API
3. **Backend Processes Image** using OpenCV algorithms:
   - Edge detection
   - Color quantization
   - Bilateral filtering
4. **Cartoonified Image** is returned to frontend
5. **User Downloads** or shares the result
