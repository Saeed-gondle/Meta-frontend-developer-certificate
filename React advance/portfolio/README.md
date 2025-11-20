# Muhammad Saeed - Portfolio

A professional portfolio website built with React for the Meta Advanced React course on Coursera.

## Features

- **Responsive Header**: Fixed navigation with social media links and smooth scrolling to sections
- **Landing Section**: Welcome section with avatar and professional bio
- **Featured Projects**: Grid layout showcasing 4 featured projects with images and descriptions
- **Contact Form**: Formik-powered contact form with validation using Yup
- **Smooth Animations**: Header hide/show on scroll with smooth transitions

## Tech Stack

- React 18.2
- Chakra UI for component library
- Formik for form management
- Yup for form validation
- React Icons for iconography
- Framer Motion for animations

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Alert.js
│   │   ├── Card.js
│   │   ├── ContactMeSection.js
│   │   ├── FullScreenSection.js
│   │   ├── Header.js
│   │   ├── LandingSection.js
│   │   └── ProjectsSection.js
│   ├── context/
│   │   └── alertContext.js
│   ├── hooks/
│   │   └── useSubmit.js
│   ├── images/
│   │   ├── photo1.jpg
│   │   ├── photo2.jpg
│   │   ├── photo3.jpg
│   │   └── photo4.jpg
│   ├── App.js
│   ├── index.js
│   └── index.css
└── package.json
```

## Customization

### Update Personal Information

1. **Header.js**: Update social media links in the `socials` array
2. **LandingSection.js**: Update name, greeting, and bio text
3. **ProjectsSection.js**: Update the `projects` array with your own projects
4. **Images**: Replace placeholder images in `src/images/` with your project screenshots

### Update Avatar

Replace the avatar URL in `LandingSection.js` with your own image URL or use a local image.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm eject` - Ejects from Create React App (one-way operation)

## Features Implemented

✅ Header with social media links (GitHub, LinkedIn, Stack Overflow, Email)
✅ Smooth scroll navigation to sections
✅ Header hide/show animation on scroll
✅ Landing section with avatar and bio
✅ Featured projects in responsive grid layout
✅ Contact form with validation
✅ Alert notifications for form submission
✅ Fully responsive design
✅ Dark theme with Chakra UI

## License

This project is created for educational purposes as part of the Meta Advanced React course.

## Author

Muhammad Saeed
