// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './databases/dev.sqlite3'
    },
    useNullAsDefault: true,
  },

  test: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './databases/test.sqlite3_knexfile'
    },
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
