# Carta Fellowship - Schedule of Investments

#### By Skye Nguyen

## Description

The most important feature of the Carta Investor Services product is the Schedule of Investments.

The Schedule of Investments is a list of all of the investments made up to a date.

A simplified excel version looks like this:

![image](https://user-images.githubusercontent.com/7346422/48731786-e07ec580-ec0b-11e8-8c87-e7e26ee9fdf1.png)

This is an Angular application that display the information above.

Include the following features:

1. Make an API call to this URL for the data: https://gist.githubusercontent.com/cranium/d8b83184bf0750f2c834760b7c9203dc/raw/a73a70716951f77b90e84b8848ff1fee46938dd1/soi.json
2. Include a date picker to choose a date from which date to pull data for (append ?date=YYYY-MM-DD to the URL to simulate pulling data for a different day). If a new date is selected the table should reload.
3. Ability to expand/collapse the assets underneath an investment.

Bonus:
Include the ability to expand/collapse all of the investments at once.

## Setup Instructions

**To view project:**

Visit https://carta-soi.firebaseapp.com/.

**To run project locally:**

```
git clone https://github.com/sn31/carta-fellowship-SOI

npm install

ng serve

```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Contact and Support

Skye Nguyen - skye@dames.es

## Technologies

- [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.
- Firebase Hosting
- TypeScript and Javascript
- Bootstrap 4
