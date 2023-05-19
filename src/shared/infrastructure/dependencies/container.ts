import { createContainer, asClass, InjectionMode } from 'awilix';
import PrismaClientProvider from '../../../database/db.connect';

const globalContainer = createContainer({
  injectionMode: InjectionMode.PROXY
})

globalContainer.register({
  prismaClient: asClass(PrismaClientProvider).singleton()

});

export const prismaClient = globalContainer.resolve<PrismaClientProvider>("prismaClient")


export default globalContainer
