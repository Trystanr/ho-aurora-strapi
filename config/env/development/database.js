module.exports =  ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', 'postgres'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'hot-octopuss-aurora-postgres'),
			user: env('DATABASE_USERNAME', 'strapi'),
			password: env('DATABASE_PASSWORD', 'strapi'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
