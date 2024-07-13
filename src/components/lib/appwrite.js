import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('669244cd00205111adc6'); // 669244cd00205111adc6

export const account = new Account(client);
export { ID } from 'appwrite';
