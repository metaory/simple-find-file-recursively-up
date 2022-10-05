simple find file recursively up
===============================

    const findFileRecursivelyUp = require('simple-find-file-recursively-up')

    const found = findFileRecursivelyUp('.mxflow/config.yml')
    // /home/meta/.mxflow/config.yml

    const found = findFileRecursivelyUp('config.yml')
    // /home/meta/dev/project-x/.circleci/config.yml
