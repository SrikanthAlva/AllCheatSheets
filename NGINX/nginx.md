# NGINX

NGINX is commonly referred to as Server. However its actually a reverse proxy service.

NGINX can also act as a load balancer.

In case of High Traffic Websites, there will be multiple servers procured to manage the traffice.

NGINX can act as Load Balancer in distributing the load between multiple servers.

In case of HTTPS Requests, all the requests are encrypted and decrpted at the servers.

In case of High Traffice Applications, the encryption and decryption process might have to handled by indivual servers.

Using NGINX, we can offload the task of encryption and decryption to NGINX for better performance.

## Directives

Key Value pairs found inside nginx.conf are called as directives

```
worker_processes 1;
OR
include mime.types;
```

## Contexts

code blocks in the nginx.conf are called as contexts.

```
events {
    worker_connections  1024;
}

http {
    include mime.types;
    .
    .
    .
}

```

## MIME.TYPES

```
http{
        include mime.types;
}

```

## LOCATION CONTEXT

```
        location /fruits {
            root C:\Users\Alva\Desktop\StaticNginxSite;
        }
```

```
        location /carbs {
            alias C:\Users\Alva\Desktop\StaticNginxSite\fruits;
        }
```

```
        location /vegetables {
            root C:\Users\Alva\Desktop\StaticNginxSite;
            try_files /vegetables/veggies.html /index.html =404;
        }
```

## REGEX

```
        location ~* /count/[0-9]{
            root C:\Users\Alva\Desktop\StaticNginxSite\count;
            try_files /index.html =404;
        }
```

## REDIRECTS AND REWRITES

```
    location /crops {
        return 307 /fruits;
    }
```

```
   rewrite ^/number/(\w+) /count/$1;
```

## LOAD BALANCING

-   Create an Express Application
-   Create a Docker File for the Application
-   Create a Docker Image of the Application
    ```
    docker build . -t myserver
    ```
-   Create 4 Containers for the Image
    ```
    docker run -p 1111:7777 -d myserver
    docker run -p 2222:7777 -d myserver
    docker run -p 3333:7777 -d myserver
    docker run -p 4444:7777 -d myserver
    ```
-   Set Up Load Balancing as per the Container Ports.

### Nginx Config Update

```
http {
    upstream backendserver {
        server 127.0.0.1:1111;
        server 127.0.0.1:2222;
        server 127.0.0.1:3333;
        server 127.0.0.1:4444;
    }

    server {
        location / {
            proxy_pass http://backendserver/;
        }
    }
}

```
