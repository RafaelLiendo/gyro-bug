Issue https://github.com/ionic-team/ionic/issues/13466


**Current behavior:**
Last month (octorber) I used to browse to some interactive 360º content using iframe and control it using the gyroscope, but sudently it stopped working

Also I noticed in the console the following warning:

> The devicemotion event is deprecated on insecure origins, and support will be removed in the future. You should consider switching your application to a secure origin, such as HTTPS. See https://goo.gl/rStTGz for more details.

so it's possibly related to #11030

**Expected behavior:**
Expect the gyro to work with content inside in app browser and iframe

**Steps to reproduce:**
<!--  Please explain the steps required to duplicate the issue, especially if you are able to provide a sample application. -->
Given the following interactive 360º content: [floripavip.com.br](http://www.floripavip.com.br)

the gyro works fine if I browse using

```typescript
window.open("http://www.floripavip.com.br");

//or

this.inAppBrowser.create(this.url, '_system');
```

but gyro does not wor if I use
```typescript
this.inAppBrowser.create(this.url, '_blank');
```
nor
```html
<iframe width="100%" height="100%" src="http://www.floripavip.com.br" frameborder="0"></iframe>
```
**Related code:**

A sample application via GitHub (tested on android)
https://github.com/RafaelLiendo/gyro-bug

| ![System Browser](https://cdn.filestackcontent.com/2naZVLPzRsyzyhulvNLb) | ![In App Browser](https://cdn.filestackcontent.com/rdfoZM8BSEO3WN8yOyaA) | ![Iframe](https://cdn.filestackcontent.com/lem6Un97S3isE1BPoZXw) |
| :---: | :---: | :---: |
| System Browser|In App Browser|Iframe|

**Other information:**
<!-- List any other information that is relevant to your issue. Stack traces, related issues, suggestions on how to fix, Stack Overflow links, forum links, etc. -->

**Ionic info:** (run `ionic info` from a terminal/cmd prompt and paste output below):

```
cli packages: (C:\Users\_____\AppData\Roaming\npm\node_modules)

    @ionic/cli-utils  : 1.18.0
    ionic (Ionic CLI) : 3.18.0

global packages:

    cordova (Cordova CLI) : 7.1.0

local packages:

    @ionic/app-scripts : 3.1.2
    Cordova Platforms  : android 6.3.0
    Ionic Framework    : ionic-angular 3.9.2

System:

    Android SDK Tools : 26.1.1
    Node              : v6.11.2
    npm               : 3.10.10
    OS                : Windows 10

Environment Variables:

    ANDROID_HOME : C:\Users\_____\AppData\Local\Android\Sdk

Misc:

    backend : legacy
```


