import cors from 'cors';
import { config } from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import http from 'http';
import SimpleController from './controller/SimpleController';
import { createLogger } from './util/LoggerFactory';


config();
const log = createLogger('entrypoint');
const app = express();
const server = http.createServer(app);

app.use(helmet({ hidePoweredBy: true }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("port", process.env.SERVER_PORT || 3000);

app.use("/", SimpleController);

server.listen(app.get("port"), () => {
    log.info(`Application started on port ${app.get("port")}`);
});

export default app;