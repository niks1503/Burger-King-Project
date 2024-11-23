# Burger King Project 🍔

A simulation of the Burger King order processing experience, leveraging JavaScript Promises to model asynchronous operations such as order processing, preparation, and delivery.

[Live Demo](https://niks1503.github.io/Burger-King-Project/)

## Features
- **Asynchronous Order Processing**: Utilizes JavaScript Promises to simulate the asynchronous nature of order processing in a real restaurant environment.
- **Random Time Delays**: Adds random time delays to mimic real-world order preparation, giving a more realistic user experience.

## Project Structure
- **Order Simulation**: Code simulates the journey of an order through various stages (received, prepared, delivered).
- **Promise-Based Workflow**: Each stage is encapsulated in a Promise, allowing for sequential and asynchronous processing.
- **Randomized Delays**: Each stage has a random delay to better simulate real-world service times.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/niks1503/Burger-King-Project.git
   ```
2. Open the project directory:
   ```bash
   cd Burger-King-Project
   ```
3. Open `index.html` in your browser to view the simulation.

## Usage
This project runs in the browser. Upon launching, it will automatically begin processing an order through the simulation pipeline.

### Example Flow
1. **Order Received**: The order enters the system.
2. **Order Preparation**: Random delay simulates preparation time.
3. **Order Delivery**: Final stage where the order is "delivered."

## Technologies Used
- **JavaScript**: Core logic, Promises, and asynchronous handling.
- **HTML & CSS**: Basic structure and styling for the user interface.

