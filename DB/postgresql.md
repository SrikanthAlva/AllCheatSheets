# PostGre SQL

## Basic

Install PostgreSql from the Official Site.

## Commands

```
\? => help
\q => exit
\l => list database
CREATE DATABASE <DB_NAME>; => to create new DB
DROP DATABASE <DB_NAME>; => to delete a DB
\c <DB_NAME> => to connect to DB
 \conninfo => to get host info

```

goldsky secret create --name PS_ADMIN_SECRET --value '{
"type": "jdbc",
"protocol": "postgresql",
"host": "dextr-rep.postgres.database.azure.com",
"port": 5432,
"databaseName": "postgres",
"user": "ps_admin",
"password": "1qaz@@wsx"
}'

goldsky secret create --name PS_ADMIN_SECRET --value '{
"type": "sql",
"protocol": "postgresql",
"host": "dextr-rep.postgres.database.azure.com",
"port": 5432,
"databaseName": "postgres",
"user": "ps_admin",
"password": "1qaz@@wsx"
}'


goldsky secret create --name PS_ADMIN_SECRET --value '{
"protocol": "postgresql",
"host": "dextr-rep.postgres.database.azure.com",
"port": 5432,
"databaseName": "postgres",
"user": "ps_admin",
"password": "1qaz@@wsx"
}'



must only contain lowercase letters, numbers, underscores, has single period, not begin/end with period and should be less than 100 characters.
Invalid pipeline definition. 
Errors: 
- definition.sources[0].referenceName , 
- definition.sources[1].referenceName , 
- definition.sources[2].referenceName , 
- definition.sources[3].referenceName , 
- definition.sources[4].referenceName , 
- definition.sources[5].referenceName , 
- definition.sources[6].referenceName , 
- definition.sources[7].referenceName , 
- definition.sources[8].referenceName , 
- definition.sources[9].referenceName , 
- definition.sources[10].referenceName , 
- definition.sources[11].referenceName , 
- definition.sinks[0].referenceName , 
- definition.sinks[1].referenceName , 
- definition.sinks[2].referenceName , 
- definition.sinks[3].referenceName , 
- definition.sinks[4].referenceName , 
- definition.sinks[5].referenceName , 
- definition.sinks[6].referenceName , 
- definition.sinks[7].referenceName , 
- definition.sinks[8].referenceName , 
- definition.sinks[9].referenceName , 
- definition.sinks[10].referenceName , 
- definition.sinks[11].referenceName 