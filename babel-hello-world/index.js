// A simple hello world microservice 
// Click "Deploy Service" to deploy this code
// Service will respond to HTTP requests with a string
import sleep from 'then-sleep';
export default async function (hook) {
  await sleep(500);
  hook.res.end("Hello world!");
}