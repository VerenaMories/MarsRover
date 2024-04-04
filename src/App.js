import "./App.css";
import { useState } from "react";

function App() {
  // Directions values
  const directions = ["NORTH", "EAST", "SOUTH", "WEST"];

  // Moves values
  const moves = {
    NORTH: { x: 0, y: 1 },
    EAST: { x: 1, y: 0 },
    SOUTH: { x: 0, y: -1 },
    WEST: { x: -1, y: 0 },
  };

  // Initialize MarsRover with obstacles
  const obstacles = [
    [1, 4],
    [3, 5],
    [7, 4],
  ];

  // States
  const [command, setCommand] = useState("");
  const [initialDirection, setInitialDirection] = useState(directions[0]);
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
  const [roverPosition, setRoverPosition] = useState({ x: 0, y: 0 });
  const [currentCoordinates, setCurrentCoordinates] = useState("");
  const [obstaclesDetected, setObstaclesDetected] = useState("");

  // Function to check for obstacles
  const obstacleDetected = (x, y) => {
    const detected = obstacles.some(([obsX, obsY]) => obsX === x && obsY === y);
    if (detected) setObstaclesDetected(`Obstacles Detected :(${x}, ${y})`);
    return detected;
  };

  // Function to execute commands
  const handleButtonClick = (e) => {
    e.preventDefault()
    const commandActions = {
      F: () => moveForward(),
      B: () => moveBackward(),
      L: () => turnLeft(),
      R: () => turnRight(),
    };

    const moveForward = () => {
      const move = moves[direction];
      const newX = x + move.x;
      const newY = y + move.y;
      if (!obstacleDetected(newX, newY)) {
        x = normalizeCoordinate(newX);
        y = normalizeCoordinate(newY);
      }
    };

    const moveBackward = () => {
      const oppositeDirection = (directions.indexOf(direction) + 2) % 4;
      const move = moves[directions[oppositeDirection]];
      const newX = x + move.x;
      const newY = y + move.y;
      if (!obstacleDetected(newX, newY)) {
        x = normalizeCoordinate(newX);
        y = normalizeCoordinate(newY);
      }
    };

    const turnLeft = () => {
      direction = directions[(directions.indexOf(direction) + 3) % 4];
    };

    const turnRight = () => {
      direction = directions[(directions.indexOf(direction) + 1) % 4];
    };

    const normalizeCoordinate = (coord) =>
      coord < 0 ? 50 + coord : coord % 50;

    const executeCommand = (cmd) => {
      const action = commandActions[cmd];
      if (action) {
        action();
      } else {
        console.log(`Invalid command: ${cmd}`);
      }
    };

    let x = parseInt(initialPosition.x);
    let y = parseInt(initialPosition.y);
    let direction = initialDirection;

    command.trim().toUpperCase().split("").forEach(executeCommand);

    setRoverPosition({ x, y });
    setCurrentCoordinates(`Current coordinates: (${x}, ${y}) ${direction}`);
  };

  // Handle on command change
  const inputOnChange = (e) => setCommand(e.target.value);

  // Handle on coordinates change
  const coordinatesOnChange = (e) =>
    setInitialPosition((prev) => ({
      ...prev,
      [e.target.name]: parseInt(e.target.value),
    }));

  // Handle on direction change
  const directionOnChange = (e) => setInitialDirection(e.target.value);

  return (
    <div className="App container-fluid">
      <form id="controls" onSubmit={handleButtonClick}>
        <div className="row">
          <div className="col">
            {/* X Position */}
            <label htmlFor="initialX">Enter initial X position:</label>
            <div className="inputBox">
              <input
                required
                type="number"
                id="initialX"
                name="x"
                value={initialPosition.x}
                onChange={coordinatesOnChange}
              />
            </div>
          </div>
          <div className="col">
            {/* Y Position */}
            <label htmlFor="initialY">Enter initial Y position:</label>
            <div className="inputBox">
              <input
                required
                type="number"
                id="initialY"
                name="y"
                value={initialPosition.y}
                onChange={coordinatesOnChange}
              />
            </div>
          </div>
          <div className="col">
            {/* Initial Direction */}
            <label htmlFor="initialDirection">Enter initial direction:</label>
            <div className="inputBox">
              <select
                id="initialDirection"
                value={initialDirection}
                onChange={directionOnChange}
              >
                <option value="NORTH">NORTH</option>
                <option value="EAST">EAST</option>
                <option value="SOUTH">SOUTH</option>
                <option value="WEST">WEST</option>
              </select>
            </div>
          </div>
          <div className="col">
            {" "}
            {/* Command */}
            <label htmlFor="commandInput">Enter commands:</label>
            <div className="inputBox">
              <input
                type="text"
                id="commandInput"
                required
                value={command}
                onChange={inputOnChange}
              />
            </div>
          </div>
          <div className="col">
            {" "}
            {/* Start Button */}
            <div className="box">
              <button className="button" type="submit">
                START
              </button>
              <div className="space">
                <span style={{ "--i": 31 }} className="star"></span>
                <span style={{ "--i": 12 }} className="star"></span>
                <span style={{ "--i": 57 }} className="star"></span>
                <span style={{ "--i": 93 }} className="star"></span>
                <span style={{ "--i": 23 }} className="star"></span>
                <span style={{ "--i": 70 }} className="star"></span>
                <span style={{ "--i": 6 }} className="star"></span>
              </div>
            </div>
          </div>
        </div>
        <p>{currentCoordinates && currentCoordinates}</p>
        <p>{obstaclesDetected && obstaclesDetected}</p>
      </form>
      <div id="grid">
        <div
          id="rover"
          style={{
            top: `${roverPosition.y * 30}px`,
            left: `${roverPosition.x * 30}px`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
