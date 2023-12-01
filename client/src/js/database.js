import { openDB } from 'idb';

const DB_NAME = 'jate'



const initdb = async () =>
  openDB(DB_NAME, 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains(DB_NAME)) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore(DN_NAME, { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

export const putDb = async (content) => {
  
  //variable for replacing database with uppercase


  const OPEN_DB = await openDB(DB_NAME, 1);
  const YOUR_TX = OPEN_DB.transaction(DB_NAME, 'readwrite');
  const YOUR_STORE = YOUR_TX.objectStore(DB_NAME);


  const request = YOUR_STORE.put({ id: 1, value: content});
  const result = await request;
  console.log(('🚀 - data saved to the database', result.value));
}


// TODO: Add logic for a method that gets all the content from the database


export const getDb = async () => {
  console.error('getDb not implemented');
const OPEN_DB = await openDB(DB_NAME, 1);
const YOUR_TX = OPEN_DB.transaction(DB_NAME, 'readonly');
const YOUR_STORE = YOUR_TX.objectStore(DB_NAME);
const request = store.get(1);
const result = await request;
result
  ? console.log('🚀 - data retrieved from the database', result.value)
  : console.log('🚀 - data not found in the database');

return result?.value;
};



initdb();
