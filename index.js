console.log(`application is in ${process.env.NODE_ENV} mode`);
let packageName = process.env.PACKAGE_NAME;
for (let i = 0; i < process.argv.length; i++) {
    if (process.argv[i] === '-p' || process.argv[i] === '--package') {
        packageName = process.argv[i + 1];
    }
}
if (!packageName)
    throw new Error('You must specify an entry point using "--package <name>" or setting "process.env.PACKAGE_NAME"');
console.log(`starting \`${packageName}\``);
require(`./packages/${packageName}`);