// Update with your config settings.

module.exports = {


    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL
    },

    development: {
        client: 'pg',
        connection: {
            database: 'reddit',
            host: '127.0.0.1'
        }
    },

    test: {
        client: 'pg',
        connection: {
            database: 'reddit-test',
            host: '127.0.0.1',
        }
    }
};
