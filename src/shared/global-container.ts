import { createContainer, Lifetime, asFunction } from 'awilix';

const globalContainer = createContainer();

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
