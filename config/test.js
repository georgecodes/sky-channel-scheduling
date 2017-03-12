module.exports = {
    db: {
        client: 'sqlite3',
        connection: {
            filename: './databases/test.sqlite3'
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }
};