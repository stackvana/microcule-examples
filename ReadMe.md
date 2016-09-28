# microservice-examples

Open-source collection of example HTTP Microservices in 13+ programming languages

## Running examples locally

Any of these examples may be run locally by cloning this repository and navigating to the directory of the specific example and running:

For example:

```bash
git clone https://github.com/stackvana/microservice-examples
cd coin
npm start
```

Will start a local service that returns crypto-currency prices.

Running `npm start` will use the `stack` CLI tool to start the example service on it's on HTTP server.

## Installing the Stack Tool

You might also find it useful to install `stack` globally to your system.

```bash
npm install stackvana -g
```

This will allow you to run the `stack` command for any local services you write.