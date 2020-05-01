### Setting up the app locally
- clone the project : `git clone #{github-project}`
- build the docker image `make build-image`
- start it : `make start`


### Tests

```
make test
```
or
```
make test --PARAMS="components/layout/Tabs --watch"
```


### Typescript type checking

```
make tsc
```

### Linting

```
make sasslint
make tslint
make lint // run sasslint & tslint
```

