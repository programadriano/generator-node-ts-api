'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the ${chalk.red('generator-node-ts-api')}!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'What name would you like to use for this project?',
        default: this.appname
      },
      {
        type: 'list',
        name: 'versonES',
        message: 'What EcmaScript version would you like to use ?',
        choices: ['es5', 'es6', 'es7']
      },
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.projectFolder;
      this.props = props;
    });
  }

  writing() {


    //.gitignore    
    this.fs.copy(
      this.templatePath('.gitignore'),
      this.destinationPath(`.gitignore`)
    );

    //Dockerfile
    this.fs.copy(
      this.templatePath('Dockerfile'),
      this.destinationPath('Dockerfile')
    );

    //package.json
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      {
        name: this.props.name
      }
    );

    //program.ts
    this.fs.copy(
      this.templatePath('program.ts'),
      this.destinationPath('program.ts')
    );

    //startUp.ts
    this.fs.copy(
      this.templatePath('startUp.ts'),
      this.destinationPath('startUp.ts')
    );

    //tsconfig.json
    this.fs.copyTpl(
      this.templatePath('_tsconfig.json'),
      this.destinationPath('tsconfig.json'),
      {
        versonES: this.props.versonES
      }
    );

    //Controller
    this.fs.copy(
      this.templatePath('controller/valuesController.ts'),
      this.destinationPath('controller/valuesController.ts')
    );

    //infra
    this.fs.copy(
      this.templatePath('infra/helper.ts'),
      this.destinationPath('infra/helper.ts')
    );

    //router
    this.fs.copy(
      this.templatePath('router/newsRouter.ts'),
      this.destinationPath('router/newsRouter.ts')
    );

    //router
    this.fs.copy(
      this.templatePath('router/newsRouter.ts'),
      this.destinationPath('router/newsRouter.ts')
    );
  }

  install() {
    this.installDependencies();
  }
};
