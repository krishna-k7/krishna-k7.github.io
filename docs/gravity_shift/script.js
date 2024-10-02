// Get the canvas element
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

// Set the canvas dimensions
canvas.width = 400;
canvas.height = 400;

// Define the game state
const gameState = {
  levels: [
    {
      layout: [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
        [0, 1, 1, 0]
      ],
      obstacles: [
        { x: 1, y: 1, type: 'wall' },
        { x: 2, y: 1, type: 'wall' }
      ],
      challenges: [
        { x: 1, y: 2, type: 'gravity' }
      ]
    },
    {
      layout: [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
        [0, 1, 1, 0]
      ],
      obstacles: [
        { x: 1, y: 1, type: 'wall' },
        { x: 2, y: 1, type: 'wall' }
      ],
      challenges: [
        { x: 1, y: 2, type: 'gravity' }
      ]
    }
  ],
  player: {
    currentLevel: 0,
    score: 0,
    progress: [false, false]
  },
  leaderboard: [
    { name: 'Player 1', score: 100 },
    { name: 'Player 2', score: 50 }
  ]
};

// Define the game logic
function updateGame() {
  // Update the player position
  const player = gameState.player;
  const level = gameState.levels[player.currentLevel];
  const layout = level.layout;
  const obstacles = level.obstacles;
  const challenges = level.challenges;

  // Check for collisions with obstacles
  for (const obstacle of obstacles) {
    if (player.x === obstacle.x && player.y === obstacle.y) {
      // Handle collision with obstacle
    }
  }

  // Check for challenges
  for (const challenge of challenges) {
    if (player.x === challenge.x && player.y === challenge.y) {
      // Handle challenge
    }
  }

  // Update the player score
  player.score += 1;
}

function renderGame() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the level layout
  const level = gameState.levels[gameState.player.currentLevel];
  const layout = level.layout;
  for (let y = 0; y < layout.length; y++) {
    for (let x = 0; x < layout[y].length; x++) {
      if (layout[y][x] === 1) {
        ctx.fillStyle = '#000';
        ctx.fillRect(x * 20, y * 20, 20, 20);
      }
    }
  }

  // Draw the player
  const player = gameState.player;
  ctx.fillStyle = '#f00';
  ctx.fillRect(player.x * 20, player.y * 20, 20, 20);

  // Draw the obstacles
  const obstacles = level.obstacles;
  for (const obstacle of obstacles) {
    ctx.fillStyle = '#0f0';
    ctx.fillRect(obstacle.x * 20, obstacle.y * 20, 20, 20);
  }

  // Draw the challenges
  const challenges = level.challenges;
  for (const challenge of challenges) {
    ctx.fillStyle = '#00f';
    ctx.fillRect(challenge.x * 20, challenge.y * 20, 20, 20);
  }
}

// Main game loop
function gameLoop() {
  updateGame();
  renderGame();
  requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();