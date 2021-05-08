export declare type EnvironmentType = 'development' | 'production';

export interface ConfigBase {
    host: string;
    port: string;
}

export interface Config {
    development: ConfigBase;
    production: ConfigBase;
}


export const config: Config = {
    development: {
        host: '127.0.0.1',
        port: '3000',
    },
    production: {
        host: '127.0.0.1',
        port: '3000',
    },
}