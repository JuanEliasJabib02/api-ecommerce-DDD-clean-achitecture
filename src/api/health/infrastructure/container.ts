import { createContainer } from 'awilix';
import { HealthController } from './web/controller/health-controller';

const container = createContainer();


container.register({
  healthController: HealthController
});

export { container };
