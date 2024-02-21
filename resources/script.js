const fs = require('fs');

const SOURCE_ANDROID_ICON = 'resources/android/icon/';
const TARGET_ANDROID_ICON = 'android/app/src/main/res/';

const SOURCE_IOS_ICON = 'resources/ios/icon/';
const TARGET_IOS_ICON = 'ios/App/App/Assets.xcassets/AppIcon.appiconset/';
const SOURCE_IOS_SPLASH = 'resources/ios/splash/';
const TARGET_IOS_SPLASH = 'ios/App/App/Assets.xcassets/Splash.imageset/';

const ANDROID_ICONS = [
  { source: 'drawable-ldpi-icon.png', target: 'drawable-hdpi-icon.png' },
  { source: 'drawable-mdpi-icon.png', target: 'mipmap-mdpi/ic_launcher.png' },
  { source: 'drawable-mdpi-icon.png', target: 'mipmap-mdpi/ic_launcher_round.png' },
  { source: 'drawable-mdpi-icon.png', target: 'mipmap-mdpi/ic_launcher_foreground.png' },
  { source: 'drawable-hdpi-icon.png', target: 'mipmap-hdpi/ic_launcher.png' },
  { source: 'drawable-hdpi-icon.png', target: 'mipmap-hdpi/ic_launcher_round.png' },
  { source: 'drawable-hdpi-icon.png', target: 'mipmap-hdpi/ic_launcher_foreground.png' },
  { source: 'drawable-xhdpi-icon.png', target: 'mipmap-xhdpi/ic_launcher.png' },
  { source: 'drawable-xhdpi-icon.png', target: 'mipmap-xhdpi/ic_launcher_round.png' },
  { source: 'drawable-xhdpi-icon.png', target: 'mipmap-xhdpi/ic_launcher_foreground.png' },
  { source: 'drawable-xxhdpi-icon.png', target: 'mipmap-xxhdpi/ic_launcher.png' },
  { source: 'drawable-xxhdpi-icon.png', target: 'mipmap-xxhdpi/ic_launcher_round.png' },
  { source: 'drawable-xxhdpi-icon.png', target: 'mipmap-xxhdpi/ic_launcher_foreground.png' },
  { source: 'drawable-xxxhdpi-icon.png', target: 'mipmap-xxxhdpi/ic_launcher.png' },
  { source: 'drawable-xxxhdpi-icon.png', target: 'mipmap-xxxhdpi/ic_launcher_round.png' },
  { source: 'drawable-xxxhdpi-icon.png', target: 'mipmap-xxxhdpi/ic_launcher_foreground.png' }
];

const IOS_ICONS = [
  { source: 'icon-1024.png', target: 'AppIcon-512@2x.png' }
];

const IOS_SPLASHES = [
  { source: 'Default-Portrait@~ipadpro.png', target: 'splash-2732x2732.png' },
  { source: 'Default-Portrait@~ipadpro.png', target: 'splash-2732x2732-1.png' },
  { source: 'Default-Portrait@~ipadpro.png', target: 'splash-2732x2732-2.png' }
];

function copyImages(sourcePath, targetPath, images) {
  for (const icon of images) {
    let source = sourcePath + icon.source;
    let target = targetPath + icon.target;
    fs.copyFile(source, target, err => {
      if (err) throw err;
      console.log(`${source} >> ${target}`);
    });
  }
}

copyImages(SOURCE_ANDROID_ICON, TARGET_ANDROID_ICON, ANDROID_ICONS);

copyImages(SOURCE_IOS_ICON, TARGET_IOS_ICON, IOS_ICONS);
copyImages(SOURCE_IOS_SPLASH, TARGET_IOS_SPLASH, IOS_SPLASHES);