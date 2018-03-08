/* eslint-disable no-console */

import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for production. This will take a moment... '));

webpack(webpackConfig).run(function(err, stats) {
  if(err) {//so  a fatal error occurred. Stop here.
    console.log(chalk.red.err);
    return 1;
  }

  //Stats to tell us what is going on + improve our exprience
  const jsonStats = stats.toJson();

  if(jsonStats.hasErrors) {
    return jsonStats.errors.map(function(error) {
      console.log(chalk.red(error));
    });
  }

  if(jsonStats.hasWarnings) {
      console.log(chalk.yellow('Webpack generated the following warnings: '));
      return jsonStats.warnings.map(function(warning) {
        console.log(chalk.yellow(warning));
      });
  }

  console.log(`Webpack stats: ${stats}`);

  //If we got this far, the build succeeded.
  console.log(chalk.green('Your app has been built for production and written to .dist'));

  return 0;
});
