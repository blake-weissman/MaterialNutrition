# Material Nutrition
A responsive and easy-to-use calorie and nutrition tracker that syncs user data across browsers. Easily set and follow caloric and macronutrient goals, track daily nutritional intake, and plan out future meals. 

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

