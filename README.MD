# Reinstall existing packages

If you want to reinstall packages (e.g. after deleting the `nodue_module`), you should use `yarn`

# Install a new packages:

`expo install ${namePackage}`

# React Native Debugger

You can use the React Native Debugger that works out of the box with expo, or you can download the React Native Debugger app. As of the date this written, the app has some advantages, such as the ability to see your network requests. See article below for more info.

https://medium.com/@tetsuyahasegawa/how-to-integrate-react-native-debugger-to-your-expo-react-native-project-db1d631fad02

# Deploy the test flight

1. Update the version in app.json
2. Build through `expo build:ios`
   Note: if you use the free deployment functionality for deploying it can take a while before it is finished.
   The cli will provide a link to see the status of this build.
3. Follow the instruction and download the ipa file
4. Open the Transporter desktop app
5. Drag and drop the the .ipa file in the Transport er app
6. Send file to App Store
7. Go to https://appstoreconnect.apple.com/login
8. Go to the MyApp app and click on the tab "Testflight" and deploy.
9. Open the Testflight app on your mobile and download/update the app

https://docs.expo.io/submit/ios/

# Deploy and test on the simulator

Testing it in the simulator, instead of directly in testflight might give you more information on what is going wrong, whenever there is a bug in the build file.

1. Run `expo build:ios -t simulator`
   Note: if you use the free deployment functionality for deploying it can take a while before it is finished. The cli will provde a link to see the status of this build.
2. Download the build file
3. Open the `home` screen of the simulator.
4. Drag and drop the build file in the simulator

# Usefull commands

- Checkout expo cli version: `expo --version`
- To update global packages: `yarn global upgrade <package name>`
