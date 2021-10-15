module.exports = {
    allowBranch: ['master', 'main'],
    bumpFiles: ['package.json'],
    skip: {
        branch: true,
    },
    commitAll: true,
    hooks: {
        postpublish: 'npm run pub-only',
    },
};
