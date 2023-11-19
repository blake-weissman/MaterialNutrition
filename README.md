# Material Nutrition
A responsive web app for tracking daily food, calorie, and macronutrient intake across devices.

Built with Angular and Firebase.

https://material-nutrition.web.app/

## Development

Add environment consts to `src/environments` 

Then run:
```bash
$ npm install
$ ng serve
```

## Deployment

### Beta

Build with:
```bash
$ ng build --aot
```

Deploy with:
```bash
$ firebase use beta
$ firebase deploy --only hosting:beta
```

### Prod

Build with:
```bash
$ ng build --prod
```

Deploy with:
```bash
$ firebase deploy --only hosting:prod
```
