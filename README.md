📚 FreeLibrary — Modern Book Summary Platform

🔗 Live Demo: https://free-library-app.netlify.app/

🔗 GitHub Repository: https://github.com/mehanmoksh/free-library

✨ Overview:

FreeLibrary is a modern, aesthetic Angular web application designed to help readers discover powerful ideas from books through structured summaries in a calm, cozy, café-inspired interface.

The platform focuses on delivering a smooth reading experience with fast navigation, intelligent search, and beautiful UI — making learning feel effortless and enjoyable.

🚀 Key Features:

- 🔍 Real-time search with live suggestions

- 📖 Short & detailed summaries for each book

- ⭐ Developer’s Top Picks & Featured books

- 🧠 Category & Author filtering

- 💡 Popup preview without page reload

- 📱 Fully responsive across all devices

- ⚡ Fast client-side navigation using Angular Router

- 🎯 Clean UI inspired by cozy reading environments


🧱 Tech Stack:

. Angular (Standalone Components)

. TypeScript

. RxJS

. Bootstrap + Custom CSS

. Angular Router

. Netlify (Deployment)

. GitHub (Version Control)

🧠 Architecture Highlights

Project follows clean, scalable structure:

src/
 ├── components/    → reusable UI components
 ├── pages/         → routed page components
 ├── services/      → state management & business logic
 ├── models/        → type definitions
 ├── assets/        → images & static resources

Key patterns used:

. Service-based state sharing
. Component-driven architecture
. Standalone Angular components
. Reactive search using RxJS
. Clean separation of concerns

⚙️ Engineering Challenges Solved:
Angular Routing (Production 404 Fix)

Problem: Angular routes broke on refresh after deployment.

Solution:

Implemented two solutions:

In this case, using web.config file in public folder
Other solution, using hash routes in app.config.ts file



Result: All routes work correctly in production.

Static Build & Deployment

Configured Angular production build and Netlify deployment pipeline:

ng build <br>
npx serve dist/free-library/browser <br>
Advanced UI/UX Implementation <br>

Implemented modern UX features:

- Overlay popup system

- Sticky responsive header

- Real-time search suggestions

- Touch-enabled banner slider

- Highlighted search matches

🌐 Deployment

Deployed using:

1. GitHub → Version control

2. Netlify → Production hosting

3. Angular production build system

📸 UI Philosophy:

FreeLibrary is designed to feel like: Sitting in a cozy café with a cup of coffee, exploring ideas peacefully.

Focus areas:

- calm color palette
- smooth animations
- distraction-free reading
- aesthetic layout

🧪 Local Development
git clone https://github.com/mehanmoksh/free-library.git

cd free-library <br>
npm install <br>
ng serve <br>

Build production version:
ng build <br>

👨‍💻 Author: Moksh Mehan
- Associate Software Engineer
- Angular • PHP • Laravel • Full Stack Development

🎯 Why This Project Matters

- This project demonstrates:

- Strong Angular fundamentals

- Production deployment skills

- Real-world debugging ability

- UI/UX engineering capability

- Scalable frontend architecture design
