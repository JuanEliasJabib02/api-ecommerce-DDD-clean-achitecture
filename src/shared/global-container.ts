import { createContainer, Lifetime, asFunction, InjectionMode } from 'awilix';
import { AwilixContainer } from 'awilix/lib/container';

const globalContainer: AwilixContainer = createContainer();

globalContainer.loadModules([
  "../api//health/*.ts"
], {
  formatName: 'camelCase',
  resolverOptions: {
    register: asFunction,
    lifetime: Lifetime.SINGLETON
  }
});

console.log(globalContainer)



export { globalContainer };
