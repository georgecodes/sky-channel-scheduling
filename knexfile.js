// Update with your config settings.

module.exports = {

  client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'sqlite3',
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'sqlite3',
    
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
