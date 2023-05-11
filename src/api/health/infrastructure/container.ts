import { createContainer, asClass } from 'awilix';
import { HealthController } from './web/controller/health-controller';

const container = createContainer();


container.register({
  healthController: asClass(HealthController).singleton()
});

export { container };
