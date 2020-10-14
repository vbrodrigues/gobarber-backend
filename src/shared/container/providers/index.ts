import { container } from 'tsyringe';
import IMailProvider from './MailProvider/models/IMailProvider';
import IStorageProvider from './StorageProvider/models/IStorageProvider';
import FakeMailProvider from './MailProvider/fakes/FakeMailProvider';
import DiskStorageProvider from './StorageProvider/Implementations/DiskStorageProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);

container.registerSingleton<IMailProvider>('MailProvider', FakeMailProvider);
