# Material Nutrition Public-Facing Repo
Public-facing repo for Material Nutrition, a responsive web app for tracking daily food, calorie, and macronutrient intake across devices.

Built with Angular and Firebase.

This repo does not contain Material Nutrition's entire internal/private commit history. All code present in this repo has simply been added with limited commits instead of publishing Material Nutrition's entire internal Git history.

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
