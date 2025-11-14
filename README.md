# AI/ML Club - University of Toledo

A modern, responsive website for the AI/ML Club at the University of Toledo. Built with React and Vite for fast development and optimal performance.

## 🚀 Features

- **Modern UI**: Clean and responsive design with animated network background
- **Component-Based Architecture**: Modular React components for easy maintenance
- **Interactive Sections**:
  - **Home Screen**: Hero section with animated network background visualization
  - **About Us**: Information about the club and its mission
  - **Events Showcase**: 
    - Upcoming events with registration links
    - Past events with photo galleries
    - Interactive event cards with detailed information
    - Image carousel for event photos
  - **Members Directory**: 
    - Executive board member profiles
    - LinkedIn integration
    - Fun facts about each member
  - **Contact**: Contact information and social links
- **Dynamic Image Loading**: Automatic image imports using Vite's glob feature
- **Responsive Design**: Mobile-friendly layout that works on all devices

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **React Icons** - Icon library for social media and UI elements
- **CSS3** - Custom styling with animations
- **ESLint** - Code linting and quality assurance
- **Canvas API** - Animated network background visualization

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/AI-ML-Club-UToledo/ai-ml-club-website.git
cd ai-ml-club-website
```

2. Install dependencies:
```bash
npm install
```

## 🎯 Getting Started

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

3. Build for production:
```bash
npm run build
```

4. Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── assets/
│   ├── events/         # Event photos organized by event
│   │   ├── aws/        # AWS DeepRacer Workshop photos
│   │   └── halloweengineering/  # HalloweEngineering event photos
│   └── team/           # Team member profile photos
├── components/
│   ├── About/          # About Us section
│   ├── Contact/        # Contact information
│   ├── Events/         # Events showcase with photo galleries
│   ├── Header/         # Navigation header
│   ├── Homescreen/     # Hero/home section
│   ├── Members/        # Members directory with profiles
│   └── NetworkBackground/  # Animated canvas network background
├── App.jsx             # Main app component
├── App.css             # Global app styles
├── main.jsx            # Application entry point
└── index.css           # Base styles
```

## 📜 Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production (outputs to `dist/` directory)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎨 Key Components

### NetworkBackground
An animated canvas component that creates a dynamic network visualization with connected nodes. Used as a background element in various sections.

### Events
Interactive events section featuring:
- Tabbed interface for upcoming and past events
- Event cards with detailed information
- Photo galleries with navigation for past events
- Registration links for upcoming events
- Automatic image loading using Vite's glob imports

### Members
Team member showcase with:
- Executive board member profiles
- Profile photos with fallback placeholders
- LinkedIn integration
- Fun facts about each member

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

- **Email**: aiml@utoledo.edu
- **Organization**: [AI-ML-Club-UToledo](https://github.com/AI-ML-Club-UToledo)

## 📄 License

This project is private and maintained by the AI/ML Club at the University of Toledo.

---

Made with ❤️ by the AI/ML Club - University of Toledo
