import _ from 'lodash';
import fs from 'fs';

const db = require('./db.json');
const messages = db.messages.reverse();

fs.writeFile('./messages.json', JSON.stringify(messages), () => {});
