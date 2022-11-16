const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      // filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', 'database/migrations/data.db')),
    },
    useNullAsDefault: true,
  },
});
