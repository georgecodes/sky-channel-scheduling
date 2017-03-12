module.exports = {
    db: {
        client: 'sqlite3',
        connection: {
            filename: ':memory:test:'
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }
};