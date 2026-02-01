# Rock Paper Scissors

A modern, interactive Rock Paper Scissors game built with vanilla JavaScript, featuring animations and sound effects.

## 🎮 Features

- **Interactive Gameplay**: Play against the computer with instant feedback.
- **Score Tracking**: Keeps track of player and computer scores during the session.
- **Visual Feedback**:
  - Animated hand movements during the "thinking" phase.
  - Font Awesome icons for Rock, Paper, and Scissors.
  - Dynamic result messages and color coding (Green for win, Red for loss, Gold for draw).
- **Audio Effects**: Sound effects for selection, winning, losing, drawing, and resetting the game.
- **Reset Functionality**: Easily reset the score and game state.

## 🛠️ Technologies Used

- **HTML5**: Structure and layout.
- **CSS3**: Styling and animations (assumed `style.css`).
- **JavaScript (ES6+)**: Game logic, DOM manipulation, and event handling.
- **Font Awesome**: Icons for the game elements.

## 🚀 How to Run

1. Ensure the project files are in the same directory.
2. Make sure you have a `sounds/` folder containing the following audio files (or update the paths in `script.js`):
   - `select.mp3`
   - `win.mp3`
   - `lose.mp3`
   - `draw.mp3`
   - `reset.mp3`
3. Open `index.html` in any modern web browser.

## 📂 Project Structure

```text
├── index.html      # Main game interface
├── script.js       # Game logic and DOM manipulation
├── style.css       # Stylesheet
├── sounds/         # Audio files directory
│   ├── select.mp3
│   ├── win.mp3
│   ├── lose.mp3
│   ├── draw.mp3
│   └── reset.mp3
└── README.md       # Project documentation
```

## 📝 Notes

- The game uses `Audio` objects in JavaScript. Ensure your browser allows audio playback.
- The logic handles the classic rules: Rock beats Scissors, Scissors beats Paper, and Paper beats Rock.
