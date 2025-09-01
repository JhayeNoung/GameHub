# About

This repository contains the completed GameHub Website Project!!!

## Getting Started

To get started, follow these steps:

1. Clone this repository to your local machine.
2. Run `npm install` to install the required dependencies.
3. Get a RAWG API key at https://rawg.io/apidocs. You'll have to create an account first.
4. Go to **src/services/api-client.ts** and 
```ts
const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'YOUR_API_KEY', // <== Insert your API key here!
  },
});
```
5. Run `npm run dev` to start the web server.
