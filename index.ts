import * as express from 'express';
import {Express, Request, Response} from 'express';
import * as path from 'path';
import * as fs from 'fs';
import {config, EnvironmentType} from './config';

const app: Express = express();
const environment: EnvironmentType = process.env.NODE_ENV as EnvironmentType || 'development';

console.log(`当前运行环境： ${environment}`);

app.get('/', (req: Request, res: Response) => {
    const view: string = fs.readFileSync(path.join(__dirname, '../public/index.html'), 'utf8');
    res.send(view);
});

// 创建监听
app.listen(config[environment].port, () => {
    console.log(`当前运行端口： ${config[environment].port}`);
});

export default app;