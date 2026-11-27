# MR DM P.O.P CENTER — Android app

Website (PWA) ka Android wrapper. Site ke saare files `app/src/main/assets/`
mein hain aur `WebViewAssetLoader` se serve hote hain, isliye app internet ke
bina bhi chalti hai (localStorage + service worker dono kaam karte hain).

- Package: `com.mrdmpopcenter.app`
- Version: 1.1.0 (versionCode 2)
- minSdk 23, targetSdk 34
- APK build: GitHub Actions workflow `.github/workflows/build-apk.yml`
  (Actions tab -> Build APK -> Run workflow -> artifact download)

Site update karna ho to `app/src/main/assets/` ke files badal dein aur
`versionCode`/`versionName` badha dein.

Note: yeh **debug-signed** APK hai — phone par install hoti hai, par Play Store
par publish karne ke liye apna release keystore chahiye.
