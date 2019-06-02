import http from 'http';
import express from "express";
import path from "path";
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { register } from './api';

const PORT = process.env.PORT || 8080;
const STATIC_PATH = '/static';
const STATIC_DIR = path.resolve(__dirname, '../static');

async function server() {
  const app = express();

  // initialize the middleware
  console.log('Starting server ...');
  app.use(STATIC_PATH, express.static(STATIC_DIR));
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  // bind the routes
  register(app);

  // start the server
  const server = http.createServer(app);
  server.listen({port: PORT, host: 'localhost'}, () => {
    console.log('Started!', server.address());
  }).on('error', e => {
    throw e;
  });
}

server().catch((err) => {
  console.log(err);
});
