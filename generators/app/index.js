'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the solid ' + chalk.red('generator-sbiscomponent') + ' generator!'
    ));

    var prompts = [{
      type: 'value',
      name: 'componentName',
      message: 'Enter the name of the component: ',
      default: 'Component'
    },{
      type: 'value',
      name: 'componentNamespace',
      message: 'Enter the namespase of the component: SBIS3.',
      default: 'CORE.Component'
    },{
      type: 'value',
      name: 'authorName',
      message: 'Enter your name: ',
      default: 'somebody'
    },{
      type: 'confirm',
      name: 'jsonFile',
      message: 'Create json file: ',
      default: false
    },{
      type: 'confirm',
      name: 'resourceFolder',
      message: 'Create resource folder: ',
      default: false
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('component.xhtml'),
      this.destinationPath(this.props.componentName+'/'+this.props.componentName+'.xhtml'),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('component.css'),
      this.destinationPath(this.props.componentName+'/'+this.props.componentName+'.css'),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('component.module.js'),
      this.destinationPath(this.props.componentName+'/'+this.props.componentName+'.module.js'),
      this.props
    );
    if(this.props.jsonFile === true) {
      this.fs.copyTpl(
        this.templatePath('component.json'),
        this.destinationPath(this.props.componentName+'/'+this.props.componentName+'.json'),
        this.props
      )
    }
    if(this.props.resourceFolder === true) {
      this.mkdir(this.props.componentName+'/resources');
    }
  }

  //install: function () {
  //  this.installDependencies();
  //}
});
