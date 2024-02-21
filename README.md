# Developer Tools Use Cases
Application used to show the usage of the browser developer tools on the `Browser Developer Tools - Using for everything` udemy course.

<img src="https://github.com/derickfelix/DeveloperToolsUseCases/assets/20743967/b65e7e70-82a4-45bd-b399-299bbaafed68" width="300"/>

## Project Install
1. Clone the project and install dependencies

```sh
git clone https://github.com/derickfelix/DeveloperToolsUseCases
cd DeveloperToolsUseCases/
npm install
```
2. Install Ionic CLI
```sh
npm install -g @ionic/cli
```
3. Serve
```sh
ionic serve
```
4. Sync capacitor plugins to run on android/ios apps later (Optional)
```sh
npx cap sync
```


## Running the app on android platform
1. Make sure you have `Android Studio` installed
2. Build the project
```sh
ionic build --prod
```
3. Copy the generated `www/` folder to the android app.
```sh
npx cap copy android
```
4. Open the `android/` folder with `Android Studio`
```sh
npx cap open android
```


## Running the app on ios platform
1. Make sure you are on a macos, and have `xcode` installed
2. Build the project
```sh
ionic build --prod
```
3. Copy the generated `www/` folder to the ios app.
```sh
npx cap copy ios
```
4. Open the `ios/` folder with `xcode`
```sh
npx cap open ios
```
