module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/aviatorsapp'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
