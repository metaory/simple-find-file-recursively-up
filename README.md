simple find file recursively up
===============================

Installation
============
    npm i simple-find-file-recursively-up


Usage
=====

```javascript
const findFileRecursivelyUp = require('simple-find-file-recursively-up')

// Pass filename
const found = findFileRecursivelyUp('config.yml')
// /home/meta/dev/project-x/.circleci/config.yml

// pass file path suffix
const found = findFileRecursivelyUp('.mxflow/config.yml')
// /home/meta/.mxflow/config.yml
```
