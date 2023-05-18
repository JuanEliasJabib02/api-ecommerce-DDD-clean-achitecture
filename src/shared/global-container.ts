import { createContainer, Lifetime, asFunction } from 'awilix';
import { AwilixContainer } from 'awilix/lib/container';

const globalContainer: AwilixContainer = createContainer();

globalContainer.loadModules([
  '../api/*/infrastructure/container.ts'
], {
  formatName: 'camelCase',
  resolverOptions: {
    register: asFunction,
    lifetime: Lifetime.SINGLETON
  }
});


export { globalContainer };
