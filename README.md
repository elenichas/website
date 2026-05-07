# Personal Website

## Overview

This project is a Vue.js application that uses D3.js to visualize data from a GitHub account. The data is fetched from GitHub's API. It features a modern portfolio website with interactive 3D graphics and data visualizations.

## Features

- Fetches data from GitHub's API using a Personal Access Token
- Visualizes repositories with D3.js
- Interactive 3D graphics with Three.js
- Modern Material Design UI with Vuetify
- Responsive and mobile-friendly design
- Animated components with Lottie

## Technologies Used

- **Vue.js 3**: Frontend framework for building the user interface
- **Vuetify 3**: Material Design component framework for Vue.js
- **Vue Router**: Client-side routing
- **D3.js**: Library for creating data visualizations
- **Three.js**: 3D graphics library
- **Axios**: HTTP client for making API requests
- **GitHub API**: To fetch repository data

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14.x or higher recommended)
- npm (comes with Node.js)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run serve
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:8080
   ```

## Available Scripts

- **`npm run serve`**: Starts the development server with hot-reload
- **`npm run build`**: Builds the app for production to the `dist` folder

## Configuration

### GitHub API Token

To fetch repository data from GitHub, you may need to configure a Personal Access Token:

1. Go to [GitHub Settings > Developer Settings > Personal Access Tokens](https://github.com/settings/tokens)
2. Generate a new token with `repo` scope
3. Configure the token in your application as needed

## Development

### Project Structure

```
├── public/          # Static files
├── src/
│   ├── assets/      # Images, styles, and other assets
│   ├── components/  # Vue components
│   ├── views/       # Page components
│   ├── router/      # Vue Router configuration
│   ├── App.vue      # Root component
│   └── main.js      # Application entry point
└── package.json     # Project dependencies and scripts
```

## Building for Production

To create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready to be deployed to a web server.

## Useful Tips

### Optimize MP4 Videos

To optimize video files for web use:

```bash
ffmpeg -i source.mp4 -c:v libvpx -b:v 1M -c:a libvorbis target.webm
```

Or for MP4 format:

```bash
ffmpeg -i source.mp4 -c:v libx264 -crf 23 -c:a aac -b:a 128k optimized.mp4
```

## License

This project is private and proprietary.

## Contact

For questions or feedback, please open an issue on GitHub.
