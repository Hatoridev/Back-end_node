# Back-end_node

This repository contains examples of how to integrate Node.js, Node-RED, and SQLite3, creating simple and interactive flows, as well as manipulating data with an SQLite3 database, with a focus on Back-end development. It is divided into two parts:

- **Lessons 01 to 07**: Using **Node.js**.
- **Lessons 08 to 20**: Using **Node-RED**.

## How to Run

### Install Dependencies

To run the projects in this repository, you will need to install some dependencies. Below are the instructions for each operating system, separated by the **Node.js** and **Node-RED** sections.

## Lessons 01 to 07 - Using Node.js

In this part of the course, **Node.js** will be used to create the server and interact with the SQLite3 database.

### Install Dependencies for Node.js (Lessons 01 to 07)

#### On Termux (Android)

1. **Install the necessary packages**:
    ```bash
    pkg update && pkg upgrade
    pkg install nodejs
    pkg install git
    npm install express sqlite3
    ```

2. **Clone the repository**:
    ```bash
    git clone https://github.com/Hatoridev/Back-end_node.git
    cd Back-end_node
    ```

3. **Install the Node.js dependencies**:
    ```bash
    npm install
    ```

4. **Start the Node.js server**:
    ```bash
    node server.js
    ```

5. **Access the project**:
    Access the server at [http://localhost:3000](http://localhost:3000) in your browser.

#### On Windows

1. **Install Node.js**:  
   Download and install Node.js from [here](https://nodejs.org/).

2. **Clone the repository**:
    ```bash
    git clone https://github.com/Hatoridev/Back-end_node.git
    cd Back-end_node
    ```

3. **Install the Node.js dependencies**:
    ```bash
    npm install
    ```

4. **Start the server**:
    ```bash
    node server.js
    ```

5. **Access the project**:
    Access the server at [http://localhost:3000](http://localhost:3000).

#### On Debian/Linux

1. **Install the necessary packages**:
    ```bash
    sudo apt update && sudo apt upgrade
    sudo apt install nodejs
    sudo apt install git
    npm install express sqlite3
    ```

2. **Clone the repository**:
    ```bash
    git clone https://github.com/Hatoridev/Back-end_node.git
    cd Back-end_node
    ```

3. **Install the Node.js dependencies**:
    ```bash
    npm install
    ```

4. **Start the server**:
    ```bash
    node server.js
    ```

5. **Access the project**:
    Access the server at [http://localhost:3000](http://localhost:3000).

## Lessons 08 to 20 - Using Node-RED

In this part of the course, **Node-RED** will be used to create interactive flows, manipulate data, and interact with the SQLite3 database.

### Install Dependencies for Node-RED (Lessons 08 to 20)

#### On Termux (Android)

1. **Install the necessary packages**:
    ```bash
    pkg update && pkg upgrade
    pkg install nodejs
    pkg install git
    npm install -g --unsafe-perm node-red
    npm install sqlite3
    ```

2. **Clone the repository**:
    ```bash
    git clone https://github.com/Hatoridev/Back-end_node.git
    cd Back-end_node
    ```

3. **Install the Node-RED dependencies**:
    ```bash
    npm install
    ```

4. **Start Node-RED**:
    ```bash
    node-red
    ```

5. **Open Node-RED**:
    Access Node-RED at [http://localhost:1880](http://localhost:1880).

#### On Windows

1. **Install Node.js**:  
   Download and install Node.js from [here](https://nodejs.org/).

2. **Install Node-RED globally**:
    ```bash
    npm install -g --unsafe-perm node-red
    ```

3. **Clone the repository**:
    ```bash
    git clone https://github.com/Hatoridev/Back-end_node.git
    cd Back-end_node
    ```

4. **Install the Node-RED dependencies**:
    ```bash
    npm install
    ```

5. **Start Node-RED**:
    ```bash
    node-red
    ```

6. **Open Node-RED**:
    Access Node-RED at [http://localhost:1880](http://localhost:1880).

#### On Debian/Linux

1. **Install the necessary packages**:
    ```bash
    sudo apt update && sudo apt upgrade
    sudo apt install nodejs
    sudo apt install git
    npm install -g --unsafe-perm node-red
    npm install sqlite3
    ```

2. **Clone the repository**:
    ```bash
    git clone https://github.com/Hatoridev/Back-end_node.git
    cd Back-end_node
    ```

3. **Install the Node-RED dependencies**:
    ```bash
    npm install
    ```

4. **Start Node-RED**:
    ```bash
    node-red
    ```

5. **Open Node-RED**:
    Access Node-RED at [http://localhost:1880](http://localhost:1880).

## Project Structure

- **Lessons 01 to 07**: **Node.js** files will be in the root of the repository and will interact with the **SQLite3** database.
- **Lessons 08 to 20**: **Node-RED** flows will be defined in the **`flows.json`** file and other configuration files.


## Conclusion

This repository provides practical examples of integrating **Node.js**, **Node-RED**, and **SQLite3**, using servers and flows for data manipulation, as well as interacting with a local database for storage and queries.


## Languages

<div align="left">  
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="60" alt="HTML logo" />  
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="60" alt="CSS logo" />  
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="60" alt="JavaScript logo" />  
</div>  

## Library

<div align="left">  
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" height="60" alt="SQLite logo" />  
</div>  

## Softwares

<div align="left">  
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" height="60" alt="Node.js logo" />  
</div>  
