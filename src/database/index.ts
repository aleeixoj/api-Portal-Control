import {createConnections} from 'typeorm';


async function conn() {
  await createConnections();
}
conn();