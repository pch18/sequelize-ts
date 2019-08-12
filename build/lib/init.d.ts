/// <reference types="node" />
import { Sequelize, Options } from 'sequelize';
import { SequelizeConfig } from './interface';
import { Model } from './model';
import Events from 'events';
export default class SequelizeTs extends Sequelize {
    events: Events;
    modelList: Model<any>[];
    static defaultConfig: Options;
    constructor(config: SequelizeConfig);
    loadModels(filePath: string): void;
    AfterModelsReset(func: () => Promise<void>): void;
    ModelsReset(): void;
    ModelsUpdate(): void;
}
//# sourceMappingURL=init.d.ts.map