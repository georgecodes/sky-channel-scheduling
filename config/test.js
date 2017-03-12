module.exports = {
    db: {
        client: 'sqlite3',
        useNullAsDefault: true,
        connection: {
            filename: './databases/test.sqlite3'
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }
};