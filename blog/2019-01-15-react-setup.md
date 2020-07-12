---
title: Setting A React Project From Scratch Using Babel And Webpack
id: react-setup
author: Anshul Goyal
author_url: https://github.com/anshulrgoyal
author_image_url: /img/anshul.jpg
tags: [react,webpack,babel]
image: https://cdn-images-1.medium.com/max/2400/1*c5BkVEjwpew7yjKixdIdYQ.png
---

There are many tools for getting a boilerplate code generated available for reactjs. The most popular tool used by many developers is create-react-app, which comes with many configuration options.

## Content

- Introduction to babel and webpack

- Configuring webpack

- Using babel with webpack

- Using css and file loader with webpack

- Using webpack dev server

<!--truncate-->

## Introduction

This guide will show how can we set up own react project using babel and webpack. We would configure webpack to use babel to compile the jsx to js and run a development server for serving the compiled files.

### Webpack

> Webpack is used to compile JavaScript modules. Once [installed](https://webpack.js.org/guides/installation), you can interface with webpack either from its [CLI](https://webpack.js.org/api/cli) or [API](https://webpack.js.org/api/node). If you’re still new to webpack, please read through the [core concepts](https://webpack.js.org/concepts) and [this comparison](https://webpack.js.org/comparison) to learn why you might use it over the other tools that are out in the community.

![This what webpack do](https://cdn-images-1.medium.com/max/2152/1*Cw2D3JxVQQGgb_Y-GJsrzw.png)_This what webpack do_

Webpack takes all our dependencies and converts to static resources so that it can be served to the client. The bundling is very important because most browsers limit the number of the request for resources to 6 or 7 requests. Bundling helps us to avoid sending unnecessary modules as a bonus. Webpack uses an internal cache to load the module only once and the precious bandwidth is saved resulting in faster loading time.

### Babel

> Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backward compatible version of JavaScript in current and older browsers or environments.Babel can convert JSX syntax! Check out our [React preset](https://babeljs.io/docs/en/babel-preset-react) to get started

![Convert jsx to js](https://cdn-images-1.medium.com/max/2000/1*5PCr7PAmMvp60hLehhEcow.jpeg)_Convert jsx to js_

Babbel is used to convert the jsx to js. **JSX **is short form javascript XML syntax, it provides us with an easy way for writing react code.

    import React from "react";

    function App(props){
     return(
      <div>
         <b>Hello world!</b>
       </div>
     )
    }

With the use of jsx, it is easy to read and write react code. Here is the sample of code without jsx.

    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _react = require("react");

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function App(props) {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "b",
          null,
          "Hello world!"
        )
      );
    }

    exports.default = App;

It is very difficult to read this code and it is more error-prone whereas jsx provides us nice HTML like syntax.

## Requirements

To set our project we would require these npm modules

- **react **the react library

- **react-dom** this library helps us to use react in the browser

- **@babel/core** it is used to transpile the jsx to js

- **@babel/preset-env** it used to configure the transpiler for old browser

- **@babel/preset-react** it is used to configure the transpiler for react.

- **babel-loader** it is used to configure the webpack for using babel

- **css-loader** it is used to configure the webpack for compiling the css

- **webpack** it is used to bundle all the modules

- **webpack-cli** it is used to run webpack from cli

- **style-loader** it loads all the css in the head of HTML

- **webpack-dev-server** it used to serve the compiled file.

We can use npm or yarn to install these dependencies

    npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader css-loader webpack webpack-cli style-loader webpack-dev-server

The root of the project contains an src folder with index.js as entry file.

![Project Structure](https://cdn-images-1.medium.com/max/2000/1*VxmofL6rbNDTMuu-V2bxXg.png)_Project Structure_

The folder componentscontains all the component for the project and dist folder all the code that is compiled.

## Let us configure the webpacks

The webpacks are an extremely configurable piece of software we can pass arguments to cli command or create a configuration file named webpack.config.js . We should export an object with configuration property.

    {
    entry: "./src/index.js",
    mode: "development",
    output: {
        filename: "./main.js"
      },
    }

The entry specify the root of the source code of the project. The mode specify the type of environment for the compilation tells where the compiled file should be placed.

## Creating Our Sample Project

Our project has an index.html in dist folder and the structure of the HTML is

    <!DOCTYPE html>
    <html lang="en" dir="ltr">
      <head>
        <meta charset="utf-8">
        <title>React From Scratch</title>
      </head>
      <body>
        <div id="root">
        </div>
      </body>
      <script type="text/javascript" src="/main.js">

    </script>
    </html>

The HTML contains the script tag pointing to our main compiled file and when the file is compiled it is included in the HTML. Then we should install react and react-dom packages.

    npm install react react-dom

Now index.js which is standard react rendering the file.

    import React, { Component } from "react";
    import ReactDOM from "react-dom";
    import App from "./component/app.component";

    ReactDOM.render(<App />, document.querySelector("#root"));

app.component.js

    import React, { Component } from "react";
    import s from "./app.component.css";
    class MyComponent extends Component {
      render() {
        return <div className={s.intro}>Hello World</div>;
      }
    }

    export default MyComponent;

app.component.css

    .intro {
      background-color: yellow;
    }

## Configuring the babel

Babel is configured using the presets which can be used to transpile almost any web technology including less to css, jsx to js, typescript to js many more. We would only use two preset react and env . We can configure babel using cli, file or package.json file, we would use package.json for configuration. Preset are like modules which help to transpile one language to other.

    "babel": {
        "presets": [
          "[@babel/env](http://twitter.com/babel/env)",
          "[@babel/react](http://twitter.com/babel/react)"
        ]
      }

We would add these lines to the package.json file, it would let the babel know that these preset should be used for transpile. Now we should configure webpack to use babel.

## Configuring WebPack for Babel And Other Loaders

Now we would use babel-loader for using babel with webpack and webpack provide us hooks to process the files before it is processed and these are called module and are easy to configure.

### Using JS files

    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: "babel-loader"
            }
          },
        ]
    }

The rules are array used to specifying what should be done when this type of file is encountered. The key testspecifies the regex for the file, we use it to select all the files with extension .m and .js and exclude the folder node_module and bower_components because we don’t what to transpile the node_module files then we specify the babel-loader to be used.Now our javascript files will be compiled by babel then processed by the webpack.

### Using CSS files

    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.css$/,
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: {
                  modules: true
                }
              }
            ]
          },
       ]
    }

We would use style-loader and css-loader for this task. The use key can also take an array of the objects or string. The loaders are run from last to first, therefore our file will first go to css-loader, we have specified the option of using modules, which make our css exclusive to the only component in which it is imported. The css-loader would resolve all the import in the css files and then the style-loader would add these in the form of style tag in the head.

    <style>
    <-- your css -->
    </style>

### Using Static assets

    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.css$/,
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: {
                  modules: true
                }
              }
            ]
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: ["file-loader"]
          }
        ]
      }

If we encounter png, svg, jpg or gif file we would use file-loader for handling these files. It is very important to handle these file carefully and optimize files loading mechanism.

## Running dev server

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        watchContentBase: true,
        progress: true
      },

The module provides us with a very easy and configurable method of running our development server. contentBase the entry point for our compiled resources which is index.html port tells on which port the server is listening. watchContentBase is very interesting, it tells the server to watch for the changes in the files directory in the contentBase folder.

Let start are server using package.json file.

    "scripts": {
        "dev": "webpack-dev-server",
        "start": "webpack"
      },

We can now run npm run dev for starting our web server.

![Output running at the port 9000](https://cdn-images-1.medium.com/max/2730/1*CmmepdGek45hcI9HFrja8w.png)_Output running at the port 9000_

## Conclusion

This is just an overview of how we can configure webpack and babel for reactjs. This is just a tip of the iceberg, you can configure this to use less instead of css or typescript instead of the js, minify the css files etc.

- You have to use the loader for each type of file you use.

- We can now use any technology with webpack using loaders like less, typescript, jsx.

- When you set up your own react project it is pretty easy to customize and optimize it and upgrade dependency.

### Bonus

The example from my blog. [**anshulgoyal15/react-from-scratch**](https://github.com/anshulgoyal15/react-from-scratch)

**All the example for you ;)**
