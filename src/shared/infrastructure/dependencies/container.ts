import { createContainer, asClass, InjectionMode } from 'awilix';

import Database from '../config/db-connect';
const globalContainer = createContainer({
  injectionMode: InjectionMode.PROXY
})

globalContainer.register({
  database: asClass(Database).singleton()

});

export const database = globalContainer.resolve<Database>("database")


export default globalContainer
