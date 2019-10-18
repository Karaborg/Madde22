## Madde22 Challenge
RESTful API

### node_modules Setup
>Make sure you install all node modules, both in server and client, before starting.

```
$ cd Madde22/server && npm install
$ cd ..
$ cd client && npm install
```

>If you are having troubles with installing npm, try removing node_module folder and package-lock.json and try installing again. 

```
$ rm -rf package-lock.json node_modules
```

### How to Start
>If you are running on local, it should be fine. Open two terminals and:

#### Terminal-1
```
$ cd Madde22/server/bin && node www
```
>The page will be available at,
  - localhost:4000 
>and 
  - localhost:4000/graphql
>This one gets the data directly from the MongoDB.

#### Terminal-2
```
$ cd Madde22/client && npm start
```
>The page will be available at,
  - localhost:3000
>This one gets the data from API, so you have to run the server side first to get the data.

### Nunito-SemiBold
> Application uses `Nunito-SemiBold` as a font-family. If you don't have it, it is inside of the main folder too.
