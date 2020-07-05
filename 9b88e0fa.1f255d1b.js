(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(9),o=(n(0),n(179)),c={title:"Setting A React Project From Scratch Using Babel And Webpack",id:"react-setup",author:"Anshul Goyal",author_url:"https://github.com/anshulrgoyal",author_image_url:"/img/anshul.jpg",tags:["jwt","auth","nodejs","express"],image:"https://cdn-images-1.medium.com/max/2400/1*c5BkVEjwpew7yjKixdIdYQ.png"},l={permalink:"/blog/react-setup",source:"@site/blog/2019-01-15-react-setup.md",description:"There are many tools for getting a boilerplate code generated available for reactjs. The most popular tool used by many developers is create-react-app, which comes with many configuration options.",date:"2019-01-15T00:00:00.000Z",tags:[{label:"jwt",permalink:"/blog/tags/jwt"},{label:"auth",permalink:"/blog/tags/auth"},{label:"nodejs",permalink:"/blog/tags/nodejs"},{label:"express",permalink:"/blog/tags/express"}],title:"Setting A React Project From Scratch Using Babel And Webpack",readingTime:7.47,truncated:!0,prevItem:{title:"Scraping with NodeJS and Cheerio",permalink:"/blog/scrapping-nodejs"},nextItem:{title:"A Practical Guide for JWT Authentication Using Node.js and Express",permalink:"/blog/jwt-auth"}},s=[{value:"Content",id:"content",children:[]},{value:"Introduction",id:"introduction",children:[{value:"Webpack",id:"webpack",children:[]},{value:"Babel",id:"babel",children:[]}]},{value:"Requirements",id:"requirements",children:[]},{value:"Let us configure the webpacks",id:"let-us-configure-the-webpacks",children:[]},{value:"Creating Our Sample Project",id:"creating-our-sample-project",children:[]},{value:"Configuring the babel",id:"configuring-the-babel",children:[]},{value:"Configuring WebPack for Babel And Other Loaders",id:"configuring-webpack-for-babel-and-other-loaders",children:[{value:"Using JS files",id:"using-js-files",children:[]},{value:"Using CSS files",id:"using-css-files",children:[]},{value:"Using Static assets",id:"using-static-assets",children:[]}]},{value:"Running dev server",id:"running-dev-server",children:[]},{value:"Conclusion",id:"conclusion",children:[{value:"Bonus",id:"bonus",children:[]}]}],i={rightToc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"There are many tools for getting a boilerplate code generated available for reactjs. The most popular tool used by many developers is create-react-app, which comes with many configuration options."),Object(o.b)("h2",{id:"content"},"Content"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Introduction to babel and webpack")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Configuring webpack")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Using babel with webpack")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Using css and file loader with webpack")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Using webpack dev server"))),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"This guide will show how can we set up own react project using babel and webpack. We would configure webpack to use babel to compile the jsx to js and run a development server for serving the compiled files."),Object(o.b)("h3",{id:"webpack"},"Webpack"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Webpack is used to compile JavaScript modules. Once ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://webpack.js.org/guides/installation"}),"installed"),", you can interface with webpack either from its ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://webpack.js.org/api/cli"}),"CLI")," or ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://webpack.js.org/api/node"}),"API"),". If you\u2019re still new to webpack, please read through the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://webpack.js.org/concepts"}),"core concepts")," and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://webpack.js.org/comparison"}),"this comparison")," to learn why you might use it over the other tools that are out in the community.")),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/2152/1*Cw2D3JxVQQGgb_Y-GJsrzw.png",alt:"This what webpack do"})),Object(o.b)("em",{parentName:"p"},"This what webpack do")),Object(o.b)("p",null,"Webpack takes all our dependencies and converts to static resources so that it can be served to the client. The bundling is very important because most browsers limit the number of the request for resources to 6 or 7 requests. Bundling helps us to avoid sending unnecessary modules as a bonus. Webpack uses an internal cache to load the module only once and the precious bandwidth is saved resulting in faster loading time."),Object(o.b)("h3",{id:"babel"},"Babel"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backward compatible version of JavaScript in current and older browsers or environments.Babel can convert JSX syntax! Check out our ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://babeljs.io/docs/en/babel-preset-react"}),"React preset")," to get started")),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/2000/1*5PCr7PAmMvp60hLehhEcow.jpeg",alt:"Convert jsx to js"})),Object(o.b)("em",{parentName:"p"},"Convert jsx to js")),Object(o.b)("p",null,"Babbel is used to convert the jsx to js. ",Object(o.b)("strong",{parentName:"p"},"JSX "),"is short form javascript XML syntax, it provides us with an easy way for writing react code."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'import React from "react";\n\nfunction App(props){\n return(\n  <div>\n     <b>Hello world!</b>\n   </div>\n )\n}\n')),Object(o.b)("p",null,"With the use of jsx, it is easy to read and write react code. Here is the sample of code without jsx."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _react = require("react");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction App(props) {\n  return _react2.default.createElement(\n    "div",\n    null,\n    _react2.default.createElement(\n      "b",\n      null,\n      "Hello world!"\n    )\n  );\n}\n\nexports.default = App;\n')),Object(o.b)("p",null,"It is very difficult to read this code and it is more error-prone whereas jsx provides us nice HTML like syntax."),Object(o.b)("h2",{id:"requirements"},"Requirements"),Object(o.b)("p",null,"To set our project we would require these npm modules"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"react "),"the react library")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"react-dom")," this library helps us to use react in the browser")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"@babel/core")," it is used to transpile the jsx to js")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"@babel/preset-env")," it used to configure the transpiler for old browser")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"@babel/preset-react")," it is used to configure the transpiler for react.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"babel-loader")," it is used to configure the webpack for using babel")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"css-loader")," it is used to configure the webpack for compiling the css")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"webpack")," it is used to bundle all the modules")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"webpack-cli")," it is used to run webpack from cli")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"style-loader")," it loads all the css in the head of HTML")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"webpack-dev-server")," it used to serve the compiled file."))),Object(o.b)("p",null,"We can use npm or yarn to install these dependencies"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader css-loader webpack webpack-cli style-loader webpack-dev-server\n")),Object(o.b)("p",null,"The root of the project contains an src folder with index.js as entry file."),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/2000/1*VxmofL6rbNDTMuu-V2bxXg.png",alt:"Project Structure"})),Object(o.b)("em",{parentName:"p"},"Project Structure")),Object(o.b)("p",null,"The folder componentscontains all the component for the project and dist folder all the code that is compiled."),Object(o.b)("h2",{id:"let-us-configure-the-webpacks"},"Let us configure the webpacks"),Object(o.b)("p",null,"The webpacks are an extremely configurable piece of software we can pass arguments to cli command or create a configuration file named webpack.config.js . We should export an object with configuration property."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'{\nentry: "./src/index.js",\nmode: "development",\noutput: {\n    filename: "./main.js"\n  },\n}\n')),Object(o.b)("p",null,"The entry specify the root of the source code of the project. The mode specify the type of environment for the compilation tells where the compiled file should be placed."),Object(o.b)("h2",{id:"creating-our-sample-project"},"Creating Our Sample Project"),Object(o.b)("p",null,"Our project has an index.html in dist folder and the structure of the HTML is"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'<!DOCTYPE html>\n<html lang="en" dir="ltr">\n  <head>\n    <meta charset="utf-8">\n    <title>React From Scratch</title>\n  </head>\n  <body>\n    <div id="root">\n    </div>\n  </body>\n  <script type="text/javascript" src="/main.js">\n\n<\/script>\n</html>\n')),Object(o.b)("p",null,"The HTML contains the script tag pointing to our main compiled file and when the file is compiled it is included in the HTML. Then we should install react and react-dom packages."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install react react-dom\n")),Object(o.b)("p",null,"Now index.js which is standard react rendering the file."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'import React, { Component } from "react";\nimport ReactDOM from "react-dom";\nimport App from "./component/app.component";\n\nReactDOM.render(<App />, document.querySelector("#root"));\n')),Object(o.b)("p",null,"app.component.js"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'import React, { Component } from "react";\nimport s from "./app.component.css";\nclass MyComponent extends Component {\n  render() {\n    return <div className={s.intro}>Hello World</div>;\n  }\n}\n\nexport default MyComponent;\n')),Object(o.b)("p",null,"app.component.css"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),".intro {\n  background-color: yellow;\n}\n")),Object(o.b)("h2",{id:"configuring-the-babel"},"Configuring the babel"),Object(o.b)("p",null,"Babel is configured using the presets which can be used to transpile almost any web technology including less to css, jsx to js, typescript to js many more. We would only use two preset react and env . We can configure babel using cli, file or package.json file, we would use package.json for configuration. Preset are like modules which help to transpile one language to other."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'"babel": {\n    "presets": [\n      "[@babel/env](http://twitter.com/babel/env)",\n      "[@babel/react](http://twitter.com/babel/react)"\n    ]\n  }\n')),Object(o.b)("p",null,"We would add these lines to the package.json file, it would let the babel know that these preset should be used for transpile. Now we should configure webpack to use babel."),Object(o.b)("h2",{id:"configuring-webpack-for-babel-and-other-loaders"},"Configuring WebPack for Babel And Other Loaders"),Object(o.b)("p",null,"Now we would use babel-loader for using babel with webpack and webpack provide us hooks to process the files before it is processed and these are called module and are easy to configure."),Object(o.b)("h3",{id:"using-js-files"},"Using JS files"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'module: {\n    rules: [\n      {\n        test: /\\.m?js$/,\n        exclude: /(node_modules|bower_components)/,\n        use: {\n          loader: "babel-loader"\n        }\n      },\n    ]\n}\n')),Object(o.b)("p",null,"The rules are array used to specifying what should be done when this type of file is encountered. The key testspecifies the regex for the file, we use it to select all the files with extension .m and .js and exclude the folder node_module and bower_components because we don\u2019t what to transpile the node_module files then we specify the babel-loader to be used.Now our javascript files will be compiled by babel then processed by the webpack."),Object(o.b)("h3",{id:"using-css-files"},"Using CSS files"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'module: {\n    rules: [\n      {\n        test: /\\.m?js$/,\n        exclude: /(node_modules|bower_components)/,\n        use: {\n          loader: "babel-loader"\n        }\n      },\n      {\n        test: /\\.css$/,\n        use: [\n          "style-loader",\n          {\n            loader: "css-loader",\n            options: {\n              modules: true\n            }\n          }\n        ]\n      },\n   ]\n}\n')),Object(o.b)("p",null,"We would use style-loader and css-loader for this task. The use key can also take an array of the objects or string. The loaders are run from last to first, therefore our file will first go to css-loader, we have specified the option of using modules, which make our css exclusive to the only component in which it is imported. The css-loader would resolve all the import in the css files and then the style-loader would add these in the form of style tag in the head."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"<style>\n<-- your css --\x3e\n</style>\n")),Object(o.b)("h3",{id:"using-static-assets"},"Using Static assets"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'module: {\n    rules: [\n      {\n        test: /\\.m?js$/,\n        exclude: /(node_modules|bower_components)/,\n        use: {\n          loader: "babel-loader"\n        }\n      },\n      {\n        test: /\\.css$/,\n        use: [\n          "style-loader",\n          {\n            loader: "css-loader",\n            options: {\n              modules: true\n            }\n          }\n        ]\n      },\n      {\n        test: /\\.(png|svg|jpg|gif)$/,\n        use: ["file-loader"]\n      }\n    ]\n  }\n')),Object(o.b)("p",null,"If we encounter png, svg, jpg or gif file we would use file-loader for handling these files. It is very important to handle these file carefully and optimize files loading mechanism."),Object(o.b)("h2",{id:"running-dev-server"},"Running dev server"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'devServer: {\n    contentBase: path.join(__dirname, "dist"),\n    compress: true,\n    port: 9000,\n    watchContentBase: true,\n    progress: true\n  },\n')),Object(o.b)("p",null,"The module provides us with a very easy and configurable method of running our development server. contentBase the entry point for our compiled resources which is index.html port tells on which port the server is listening. watchContentBase is very interesting, it tells the server to watch for the changes in the files directory in the contentBase folder."),Object(o.b)("p",null,"Let start are server using package.json file."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'"scripts": {\n    "dev": "webpack-dev-server",\n    "start": "webpack"\n  },\n')),Object(o.b)("p",null,"We can now run npm run dev for starting our web server."),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/2730/1*CmmepdGek45hcI9HFrja8w.png",alt:"Output running at the port 9000"})),Object(o.b)("em",{parentName:"p"},"Output running at the port 9000")),Object(o.b)("h2",{id:"conclusion"},"Conclusion"),Object(o.b)("p",null,"This is just an overview of how we can configure webpack and babel for reactjs. This is just a tip of the iceberg, you can configure this to use less instead of css or typescript instead of the js, minify the css files etc."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"You have to use the loader for each type of file you use.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"We can now use any technology with webpack using loaders like less, typescript, jsx.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"When you set up your own react project it is pretty easy to customize and optimize it and upgrade dependency."))),Object(o.b)("h3",{id:"bonus"},"Bonus"),Object(o.b)("p",null,"The example from my blog. ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/anshulgoyal15/react-from-scratch"}),Object(o.b)("strong",{parentName:"a"},"anshulgoyal15/react-from-scratch"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"All the example for you ;)")))}b.isMDXComponent=!0},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),b=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return n?a.a.createElement(m,l(l({ref:t},i),{},{components:n})):a.a.createElement(m,l({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<o;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);