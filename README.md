# Cat Facts API

A simple REST API that provides user information along with random cat facts.

## Features

- Returns user profile information
- Fetches random cat facts from [catfact.ninja](https://catfact.ninja)
- Includes timestamp with each response

## Tech Stack

- Node.js
- Express.js
- Axios

## Installation

1. Clone the repository
2. Install dependencies:
```sh
npm install
```
3. Create a `.env` file in the root directory:
```sh
PORT=3000
```

## Usage

Start the server:

```sh
npm start
```

The API will be available at `http://localhost:3000`

### Endpoints

#### GET /info

Returns user information and a random cat fact.

Example response:
```json
{
    "status": "success",
    "user": {
        "email": "sitsofefeyi28@gmail.com",
        "name": "Sitsofe Feyi Kwami",
        "stack": "Node.js/Express/MongoDB/Mongoose"
    },
    "timeStamp": "2023-XX-XX:XX:XX:XXZ",
    "fact": "Random cat fact from catfact.ninja"
}
```

## Environment Variables

- `PORT`: The port number for the server (default: 3000)

## License

MIT
