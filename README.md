# Bolo offline app

Everything is inside this folder, so it works with no internet.

## 1. Try it on your laptop (30 seconds)
Open a terminal in this folder and run:
    python -m http.server 8000
Open http://localhost:8000 in Edge or Chrome. Click the install icon in the address bar to install it as an app. After the first load it works offline.

## 2. Get the Android APK and Windows exe for free
1. Create a free GitHub account and a new empty repository.
2. Upload everything in this folder, including the hidden .github folder.
3. Open the Actions tab, choose "Build Bolo apps", press Run workflow.
4. After about 10 minutes, download bolo-android-apk (app-debug.apk) and bolo-windows-exe from the run page.
5. Send the APK to a phone and open it. Allow "install unknown apps" when asked.

## Known limits
- Hearing phrases (the speaker buttons) uses the phone or Windows voices. Install Hindi, Tamil, Telugu and Kannada voices in the device settings if one is silent.
- The Speak mode (microphone) works in Chrome or Edge but not inside the APK or exe yet. Tap and Write replies work everywhere.
- The APK is a "debug" build for testing and sharing directly. Putting it on the Play Store needs a signed release build and a one-time 25 dollar account.
