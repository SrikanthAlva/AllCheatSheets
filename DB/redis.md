# Redis

- a NoSQL DB
- all the data in redis is stored as key value pairs
- run inside the RAM, thus its highly performant
- its also highly volatile as its running on RAM.
- redis is primarly used for cacheing
- redis is almost always along with a full scale DB.

## Installation on Windows

- Use WSL
- Run the following command to Install and Start Redis ```sudo apt-get install redis```
- Start Redis `redis-server`
- Stop Redis Server`sudo service redis-server stop`
- Open Redis CLI `redis-cli`
- Close Redis CLI `quit`
- Set and Get Values
```
set name Srikanth

get name
```
- Delete key-value pair `del age`
- Check if key exists `exists age`
- Key and Values are Case-Sensitive
- List all Keys `keys *`
- Delete all Keys `flushall`
- ttl => Time to Live - expiration of the key value pair on redis db
- By default all key-value pairs have ttl of `-1`; indicate it has no expiration
- Set Expiry for a key-value pair `expire name 10` => 10 indicates 10 seconds
- ttl value of `-2` indicates the key-value pair doesnt exists anymore.
- Set Expiry during creation `setex name 10 Srikanth`

# Lists

Redis support Arrays in the Form of Lists and Json Objects can be stored as Hashes

- Create an Array and Push an element to the left `lpush friends john`
- Get all Array Elements `lrange friends 0 -1` 
- Add Element to the Begining of the Array `lpush friends sally`
- Add Element to the end of the Array `rpush friends bob`
- Remove element from the to Begining of the Array `lpop friends`
- Remove element from the to End of the Array `rpop friends`

# Sets

- `sadd hobbies "weight lifting"` - Add Elements to a Set
- `smembers hobbies` - View all memebers in a Set
- `sremove hobbies cricket` - remove element from a Set

## Hashes

- `hset person name alice`
- `hgetall person`
- `hget person name`
- `hdel person age`
- `hexists persion name`








