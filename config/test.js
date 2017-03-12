module.exports = {
    db: {
        client: 'sqlite3',
        useNullAsDefault: true,
        connection: {
            filename: './databases/test.sqlite3_testjs'
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }
};