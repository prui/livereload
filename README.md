livereload
================

> This is a livereload demo by using gulp-livereload.
* [gulp-livereload doc] (https://www.npmjs.com/package/gulp-livereload)
* [gulp-livereload github] (https://github.com/vohof/gulp-livereload) `recommend`

#Table of contents
- [Installation](#installation)
- [Usage](#usage)
- [Tip](#tip)


##Installation
```bash
  git clone https://github.com/jarden-liu/livereload.git
  cd livereload
  npm install
```

##Usage
```bash
  gulp
```
![bash demo](https://github.com/jarden-liu/livereload/raw/master/pic/runGulp.png)
* open [http://localhost:8081] (http://localhost:8081) in your browser.Then try to change something at `index.html`,the browser page will reload after you save index.html;

##Tip
if you want to reload more file , you can use a `chrome plugin named "livereload"` replace `<script src="http://127.0.0.1:35729/livereload.js"></script>` in index.html
