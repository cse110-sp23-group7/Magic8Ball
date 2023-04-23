# Team 404: Magic 8 Ball

## Setup
1. Install `Node.js` and `npm` (Node Package Manager):

Linux:
```bash
sudo apt install nodejs npm
```

MacOS:
```bash
brew install node
```

Windows:
```bash
winget install -e --id OpenJS.NodeJS
```

2. Clone the repository:
```bash
git clone https://github.com/cse110-sp23-group7/Magic8Ball.git
```

3. Install dependencies (only dependency is `jest`):
```bash
npm install
```

## Usage
1. Run unit tests:
```bash
npm test
```

2. Launch website by opening `index.html` in a browser.

## Project Structure
```
Magic8Ball/
|-- index.html      # Home page
|-- app.html        # Main magic 8 ball page
|-- css/
|   |-- style.css   # Main stylesheet
|-- js/
|   |-- app.js   # Main script
|-- img/
|   |-- image1.jpg
|   |-- image2.png
|-- tests/          # Unit tests, powered by Jest
|   |-- app.test.js
|-- node_modules/
|-- package.json
|-- .gitignore
|-- README.md
```