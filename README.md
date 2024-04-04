# Mars Rover Control System

This project is a simple Mars Rover control system implemented using React. It allows you to input the initial position, direction, and a sequence of commands for the rover to navigate on a 50x50 grid. The grid wraps around, and obstacles are predefined.

## How to Use

1. Clone the repository or download the project files.
2. Install dependencies using `npm install`.
3. Test application using `npm test`.
4. Start the application using `npm start`.
5. Enter the initial X and Y positions for the rover (values between -49 and 49), select the initial direction, and input a sequence of commands.
6. Click on the "START" button to execute the commands.
7. Observe the rover's movement on the grid and any obstacles detected.

## Features

- **Input Fields**: Allows users to enter the initial position (X, Y), initial direction, and commands for the rover.
- **Grid Visualization**: Provides a visual representation of the 50x50 grid and the rover's position.
- **Command Execution**: Executes the commands provided by the user, moving the rover accordingly. The rover wraps around the grid if it reaches the edges.
- **Obstacle Detection**: Alerts the user if the rover encounters an obstacle during its movement.
  
## Explanation of Functions

1. **directions Array**:
   - This array contains the cardinal directions: "NORTH", "EAST", "SOUTH", and "WEST". It provides a reference for the possible directions the Mars Rover can face.

2. **moves Object**:
   - This object maps each direction to its corresponding movement in terms of coordinates.
   - For example, moving "NORTH" increments the Y-coordinate by 1, moving "EAST" increments the X-coordinate by 1, moving "SOUTH" decrements the Y-coordinate by 1, and moving "WEST" decrements the X-coordinate by 1.

3. **obstacles Array**:
   - This array holds the coordinates of obstacles on the grid.
   - Each obstacle is represented as an array with two elements: [x, y], indicating its position on the grid.

4. **useState Hooks**:
   - These hooks are used to manage the state variables in the React component.
   - `command`, `initialDirection`, `initialPosition`, `roverPosition`, `currentCoordinates`, and `obstaclesDetected` are all state variables that hold different pieces of information about the Mars Rover's state.

5. **obstacleDetected Function**:
   - This function takes the X and Y coordinates as arguments and checks if there is an obstacle at that position.
   - It returns `true` if an obstacle is detected at the specified coordinates and updates the `obstaclesDetected` state variable accordingly.

6. **handleButtonClick Function**:
   - This function is invoked when the user clicks the "START" button.
   - It defines the actions to be taken based on the commands entered by the user.
   - It iterates over each command, executing the corresponding action defined in `commandActions`.

7. **moveForward, moveBackward, turnLeft, and turnRight Functions**:
   - These functions define the actions to be taken for each type of command: move forward (F), move backward (B), turn left (L), and turn right (R).
   - They calculate the new position and direction of the rover based on the current state and update the state variables accordingly.

8. **normalizeCoordinate Function**:
   - This function ensures that the rover's position remains within the 50x50 grid.
   - If the rover reaches the edge of the grid and tries to move further, it wraps around to the opposite side.
   - It takes the coordinate as input and returns the normalized coordinate within the grid limits.

9. **executeCommand Function**:
   - This function executes the action corresponding to a given command.
   - It checks if the command is valid and if an action is defined for that command. If so, it executes the action; otherwise, it logs an error message.

10. **inputOnChange, coordinatesOnChange, and directionOnChange Functions**:
    - These functions handle changes in the input fields for commands, initial coordinates, and initial direction, respectively.
    - They update the corresponding state variables in response to user input.

## Dependencies

- React
- CSS for styling

## Project Structure

- **App.js**: Contains the main logic and components for the Mars Rover control system.
- **App.css**: Provides styling for the application.
- **App.test.js**: Provides test for the application.
- **README.md**: Documentation file providing information about the project and instructions for usage.

## Credits

This project was created by Verena as a demonstration of basic React application development skills. Feel free to modify and extend it according to your requirements.

For any questions or issues, please contact verenamories6@gmail.com.
