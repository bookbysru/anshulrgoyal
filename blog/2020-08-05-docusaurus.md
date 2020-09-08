---
id: easy-documentation-docusaurus
title: "Easy Documentation using Docusaurus"
author: Anshul Goyal
author_url: https://github.com/anshulrgoyal
author_image_url: /img/anshul.jpg
tags: [reatcjs,documentation, web]
image: https://i0.wp.com/blog.logrocket.com/wp-content/uploads/2020/08/easy_documentation_using_docusaurus_web.png?w=730&ssl=1
---
## This article was originally published [here](https://blog.logrocket.com/easy-documentation-with-docusaurus/)

<!--truncate-->
# Introduction

Documentation is an integral part of the software development lifecycle. Without documentation, a project can't reach its maximum potential but writing and maintaining documentation is very tough task , Docusaurus comes into the picture. Docusaurus helps to create and maintain static documentation websites with support for blogs, versioning, and custom pages. Docusaurus generates a static React.js website using MDX for docs and blogs. MDX is a markdown variant that allows the use of JSX inside markdown. This tutorial will use version 2 of Docusaurus. Docsaurus supports both the Dark and Light theme by default.

![Post image](https://i.redd.it/dza5kr53ov951.jpg)



# Scaffold project website

Node.js and NPM are required to install and use Docusaurus. Node.js is available on the official website. `@docusaurus/init` is the easiest method to scaffold a Docusaurus website. You can execute `init` command in any directory.


    npx @docusaurus/init@next init my-website classic

This command will create a `my-website` named website in the current directory using the `classic` template. Docusaurus provides different templates. Start the project by running `npm start` in the project directory. You can now see project running on http://localhost:3000

![Home page](https://paper-attachments.dropbox.com/s_52D646A6E2A3431ECB292EB7182064D5D5D30CCBDC8D380910ADC9E860F7BB78_1593845812534_image.png)

![Docs Page](https://paper-attachments.dropbox.com/s_52D646A6E2A3431ECB292EB7182064D5D5D30CCBDC8D380910ADC9E860F7BB78_1593845907989_image.png)

## Project Structure
    ├── babel.config.js
    ├── blog
    │   ├── 2019-05-28-hola.md
    │   ├── 2019-05-29-hello-world.md
    │   └── 2019-05-30-welcome.md
    ├── docs
    │   ├── doc1.md
    │   ├── doc2.md
    │   ├── doc3.md
    │   └── mdx.md
    ├── docusaurus.config.js
    ├── package.json
    ├── README.md
    ├── sidebars.js
    ├── src
    │   ├── css
    │   │   └── custom.css
    │   └── pages
    │       ├── index.js
    │       └── styles.module.css
    ├── static
    │   └── img
    │       ├── favicon.ico
    │       ├── logo.svg
    │       ├── undraw_docusaurus_mountain.svg
    │       ├── undraw_docusaurus_react.svg
    │       └── undraw_docusaurus_tree.svg
    └── yarn.lock

All the settings related to Docusaurus plugins presets and themes reside in `docusaurus.config.js`. `sidebars.js` contains all the entries for sidebars.

## Scripts

Scaffold project has few scripts already present in `package.json` file. These scripts are used to manage the Docusaurus project. We will use two of these scripts:

1. n`pm start` it is used to start dev server on `localhost:3000`. It detects changes to the project and reloads.
2. n`pm run build` is used to create an optimized production build for the project. It will create a `build` folder that will have a compiled project.
# Customizing website

Docusaurus is very customizable. Components like navbar, footer, and title are customizable in `docusaurus.config.js`.

## Title and favicon

Title, tagline, and favicon can be customized by changing corresponding keys in `docusaurus.config.js`.

      title: 'Imdb Scrapper', // title of website
      tagline: 'Scrap Imdb Like a Pro', // used in meta data
      url: 'http://localhost:3000/', // url where websited is hosted
      baseUrl: '/', // path where website is available
      favicon: 'img/favicon.ico', // path to favicon with respect to static dir
      organizationName: 'anshulrgoyal', // github user name 
      projectName: 'imdb-scrapper',// project name i.e repo name of project

`organiztionName` and `projectName` are optional. Now you can test changes by starting the project using `npm start` command.

Go to http://localhost:3000 to see changes.


![](https://paper-attachments.dropbox.com/s_52D646A6E2A3431ECB292EB7182064D5D5D30CCBDC8D380910ADC9E860F7BB78_1593857746239_image.png)



## Home Page

`src/pages/index.js` is the homepage for the website. It exports a React.js component which is rendered between navbar and footer. You can create your component in `index.js`. `preset-classic` also includes a CSS framework built by Docusaurus team called [Infima.](https://facebookincubator.github.io/infima/)


    import React from "react";
    import clsx from "clsx";
    import Layout from "@theme/Layout"; // it is a sudo import, theme will be injected at build time
    import Link from "@docusaurus/Link"; // docusaurus exports react-router
    import useDocusaurusContext from "@docusaurus/useDocusaurusContext"; // get metadata about page
    import useBaseUrl from "@docusaurus/useBaseUrl"; // gives link after concating website url and path
    import styles from "./styles.module.css";
    const features = [
      {
        title: <>Updated Regularly</>,
        imageUrl: "img/updated.svg", // path to image with respect to staic dir
        description: (
          <>
            Scrapping links and scripts are updated on daily bases. Scripts are well
            tested and robust.
          </>
        ),
      },
      {
        title: <>Lighting Fast</>,
        imageUrl: "img/fast.svg", // path to image with respect to staic dir
        description: (
          <>Lighting fast, built with speed in mind support caching by default.</>
        ),
      },
      {
        title: <>Automated scripts</>,
        imageUrl: "img/automated.svg", // path to image with respect to staic dir
        description: (
          <>
            No manual work required just pass imdbId and get movies
            and tvs shows scrapped.
          </>
        ),
      },
    ];
    // Feature component
    function Feature({ imageUrl, title, description }) {
      const imgUrl = useBaseUrl(imageUrl);
      return (
        <div className={clsx("col col--4", styles.feature)}>
          {imgUrl && (
            <div className="text--center">
              <img className={styles.featureImage} src={imgUrl} alt={title} />
            </div>
          )}
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      );
    }
    function Home() {
      const context = useDocusaurusContext();
      const { siteConfig = {} } = context;
      return (
        <Layout
          title={`Hello from ${siteConfig.title}`}
          description="Description will go into a meta tag in <head />"
        >
          <header className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className="container">
              <h1 className="hero__title">{siteConfig.title}</h1>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
              <div className={styles.buttons}>
                <Link
                  className={clsx(
                    "button button--outline button--secondary button--lg",
                    styles.getStarted
                  )}
                  to={useBaseUrl("docs/")}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </header>
          <main>
            {features && features.length > 0 && (
              <section className={styles.features}>
                <div className="container">
                  <div className="row">
                    {features.map((props, idx) => (
                      <Feature key={idx} {...props} />
                    ))}
                  </div>
                </div>
              </section>
            )}
          </main>
        </Layout>
      );
    }
    export default Home;
## Navbar

Navbar is a part of `preset-classic`, it is not the part of `@docusaurus/core`. Configuration to the theme is passed as `themeConfig` object in `docusaurus.config.js`. `navbar` key in `themeConfig` holds the config for the navbar.

**Adding logo**

    themeConfig: {
        navbar: {
          title: "Imdb Scrapper", // title
          logo: {
            alt: "My Site Logo",
            src: "img/logo.svg", // path with respect to static dir
          },
       }
    }

We can add a logo by providing `src` and `alt`. If the logo is not provided, it wouldn't be displayed.

**Adding links**
Docusaurus supports hyperlinks to other pages on the same domain by providing a path or to another domain by providing a URL.

    navbar: {
          title: "Imdb Scrapper",
          links: [
            {
              to: "docs/", // path to page
              activeBasePath: "docs", // active it url matches regex
              label: "Docs",
              position: "left",
            },
            { to: "blog", label: "Blog", position: "right" },
            {
              href: "https://github.com/anshulrgoyal/imdb-scrapper", // to other domain
              label: "GitHub",
              position: "right",
            },
          ],

If `to` is passed to `links`, then `react-router` will be used, where as, if `href` is passed, anchor tag is used.

![](https://paper-attachments.dropbox.com/s_52D646A6E2A3431ECB292EB7182064D5D5D30CCBDC8D380910ADC9E860F7BB78_1593863446457_image.png)

## Color schema

Infima support CSS variables for customizing color schema. We can edit `src/css/custom.css` to change the color schema.

    :root {
    --ifm-color-primary: #f50057;
    --ifm-color-primary-dark: #dd004e;
    --ifm-color-primary-darker: #d0004a;
    --ifm-color-primary-darkest: #ab003d;
    --ifm-color-primary-light: #ff0f64;
    --ifm-color-primary-lighter: #ff1b6c;
    --ifm-color-primary-lightest: #ff4084;
    }

This will change the color schema for Infima defaults to match svg images.

![](https://paper-attachments.dropbox.com/s_52D646A6E2A3431ECB292EB7182064D5D5D30CCBDC8D380910ADC9E860F7BB78_1593864098960_image.png)

## Footer

Similar to Navbar. Footer can be customized using `footer` in `themeConfig` in `docusaurus.config.js`.

**Logo**
Adding a logo is simple, just provide the path to an image in the `logo` object.

    footer: {
      logo: {
        alt: 'Some logo',
        src: 'img/oss_logo.png', // with respect to static dir
        href: 'url',
      },
    },

**Copyright**
Add copyright text to `copyright` key on footer object.

    footer: {
          copyright: `Copyright © ${new Date().getFullYear()} Anshul Goyal, Inc. Built with Docusaurus.`,
        },

**Links**
We can add links to footer by providing urls in `links`.

    footer:{
      links:[
            {
              title: "Docs", //heading for links
              items: [
                {
                  label: "Style Guide",
                  to: "docs/",
                },
                {
                  label: "Second Doc",
                  to: "docs/doc2/",
                },
              ],
            },
            {
              title: "Community", // heading for links
              items: [
                {
                  label: "Stack Overflow",
                  href: "https://stackoverflow.com/questions/tagged/imdb-scrapper",
                },
              ],
            },
            {
              title: "More",
              items: [
                {
                  label: "Blog",
                  to: "blog",
                },
                {
                  label: "GitHub",
                  href: "https://github.com/anshulrgoyal/imdb-scrapper",
                },
              ],
            },
          ],
    }
![Footer](https://paper-attachments.dropbox.com/s_52D646A6E2A3431ECB292EB7182064D5D5D30CCBDC8D380910ADC9E860F7BB78_1593866288996_image.png)

# Documentation

All the documentation is added to the `docs` folder. We can change it in the `docusaurus.config.js` file. We will create `api.md` file in the `docs` folder. Docusaurus will render it automatically and create a table of content for `.md` file.


    ---
    id: api
    title: API
    ---
    # My doc

`id` is used to reference this document in Docusaurus and `/docs/{id}` will be path to access documentation. `title` will be used as the page title for documentation and `sidebar_label` will be used as the label in the sidebar. Now we need to add our `api` to a sidebar. We edit `sidebars.js` to create a new entry.


    module.exports = {
      sidebar: {
        "Imdb Scrapper": ["api"],
      },
    };



![](https://paper-attachments.dropbox.com/s_52D646A6E2A3431ECB292EB7182064D5D5D30CCBDC8D380910ADC9E860F7BB78_1593869088488_image.png)

    docs/
    └── api.md


## Sidebar

The sidebar is created recursively i.e. it can have any level of nesting. For example, I can create another category in the `IMDB Scrapper` category called `Examples` with many items.


    docs/
    ├── api.md
    └── examples
        ├── actors.md
        ├── award.md
        ├── image.md
        ├── scraping.md
        ├── search.md
        ├── trending.md
        └── tv.md

This is example project structure, we can also create nested documents. For example, `actors.md` will have `/docs/examples/actors` as URL path and `id` to refer will be `examples/actors`.


    module.exports = {
      sidebar: {
        "Imdb Scrapper": ["api",{
          Examples:[ // nested sidebar with example as sub catogery
            "examples/actor", // items
            "examples/award",
            "examples/image",
            "examples/tv",
            "examples/trending",
            "examples/scraping",
            "examples/search"
          ]
        }],
      },
    };
![](https://paper-attachments.dropbox.com/s_52D646A6E2A3431ECB292EB7182064D5D5D30CCBDC8D380910ADC9E860F7BB78_1593871247513_image.png)


If you try to access `/docs/` it will give "404 not found". To solve this, we need to update the setting of `preset-classic` to use `/docs/api` as our home doc or entry point to docs.

     presets: [
        [
          "@docusaurus/preset-classic",
          {
            docs: {
              // It is recommended to set document id as docs home page (`docs/` path).
              homePageId: "api", // documents entry point
              sidebarPath: require.resolve("./sidebars.js")
            },
            blog: {
              showReadingTime: true,
            },
            theme: {
              customCss: require.resolve("./src/css/custom.css"),
            },
          },
        ],
      ],
## Versioning

During development, there are many changes in every version. If your product supports different versions, it is difficult to maintain documentation for each version. Docusaurus supports versioning. Let's add a script in `package.json` for versioning.


        "version": "docusaurus doc:version"

Now we can use `npm run version <version>` command for creating command.


    .
    ├── babel.config.js
    ├── blog
    │   ├── 2019-05-28-hola.md
    │   ├── 2019-05-29-hello-world.md
    │   └── 2019-05-30-welcome.md
    ├── docs
    │   ├── api.md
    │   └── examples
    │       ├── actors.md
    │       ├── award.md
    │       ├── image.md
    │       ├── scraping.md
    │       ├── search.md
    │       ├── trending.md
    │       └── tv.md
    ├── docusaurus.config.js
    ├── package.json
    ├── README.md
    ├── sidebars.js
    ├── src
    │   ├── css
    │   │   └── custom.css
    │   └── pages
    │       ├── index.js
    │       └── styles.module.css
    ├── static
    │   └── img
    │       ├── automated.svg
    │       ├── fast.svg
    │       └── updated.svg
    ├── versioned_docs
    │   └── version-1.1.0
    │       ├── api.md
    │       └── examples
    │           ├── actors.md
    │           ├── award.md
    │           ├── image.md
    │           ├── scraping.md
    │           ├── search.md
    │           ├── trending.md
    │           └── tv.md
    ├── versioned_sidebars
    │   └── version-1.1.0-sidebars.json
    └── versions.json

This command will copy all the documents from `docs/` to `versioned_docs`. `sidebars.js` is copied to `versioned_sidebars`. Now there are three versions:

1. next : all the documents in `/doc` folder. This version is available as `docs/next/{id}`.
2. latest(1.1.0) : all the documents in `versioned_docs/version-1.1.0` folder are versioned latest. This version is available as `docs/{id}`
3. old documents: all the documents which are in any other folder will be versioned old. This version is available as `/docs/{version}/{id}`

`versions.json` is created which holds all the versions for documentation.

    [
      "1.1.0"
    ]

Docusaurus will be creating a snapshot of documentation for each version and saving it. Now let’s add a link to each version in the navbar for easy access. We can import `versions.json` in `docusaurus.config.js` and use it.


    const versions = require("./versions.json");

We can provide `items` to convert Link to a dropdown.


    items: [
            {
              to: "docs/",
              activeBasePath: "docs",
              label: "Docs",
              position: "left",
              items: [ // adding items will create a dropdown
                {
                  label: versions[0],
                  to: "docs/",
                  activeBaseRegex: `docs/(?!${versions.join("|")}|next)`,
                },
                ...versions.slice(1).map((version) => ({
                  label: version,
                  to: `docs/${version}/`,
                })),
                {
                  label: "Master/Unreleased",
                  to: "docs/next/",
                  activeBaseRegex: `docs/next/(?!support|team|resources)`,
                },
              ],
            },
    ]

Docusaurus has a nice feature that informs the user that the documentation belongs to an older version. If we create a new version of `1.1.1`, we can see it in action.

![](https://paper-attachments.dropbox.com/s_52D646A6E2A3431ECB292EB7182064D5D5D30CCBDC8D380910ADC9E860F7BB78_1593967297943_image.png)


It automatically adds a banner notifying the user that documentation is old. And the new version is automatically added to the navbar.

![](https://paper-attachments.dropbox.com/s_52D646A6E2A3431ECB292EB7182064D5D5D30CCBDC8D380910ADC9E860F7BB78_1593967461994_image.png)


Now if we check `versioned_docs` we can see both of the versions there.

    .
    ├── babel.config.js
    ├── blog
    │   ├── 2019-05-28-hola.md
    │   ├── 2019-05-29-hello-world.md
    │   └── 2019-05-30-welcome.md
    ├── docs // next or upcoming version
    │   ├── api.md
    │   └── examples
    │       ├── actors.md
    │       ├── award.md
    │       ├── image.md
    │       ├── scraping.md
    │       ├── search.md
    │       ├── trending.md
    │       └── tv.md
    ├── docusaurus.config.js
    ├── package.json
    ├── README.md
    ├── sidebars.js // next or upcoming version
    ├── src
    │   ├── css
    │   │   └── custom.css
    │   └── pages
    │       ├── index.js
    │       └── styles.module.css
    ├── static
    │   └── img
    │       ├── automated.svg
    │       ├── fast.svg
    │       └── updated.svg
    ├── versioned_docs
    │   ├── version-1.1.0 // old version
    │   │   ├── api.md
    │   │   └── examples
    │   │       ├── actors.md
    │   │       ├── award.md
    │   │       ├── image.md
    │   │       ├── scraping.md
    │   │       ├── search.md
    │   │       ├── trending.md
    │   │       └── tv.md
    │   └── version-1.1.1 // latest version
    │       ├── api.md
    │       └── examples
    │           ├── actors.md
    │           ├── award.md
    │           ├── image.md
    │           ├── scraping.md
    │           ├── search.md
    │           ├── trending.md
    │           └── tv.md
    ├── versioned_sidebars
    │   ├── version-1.1.0-sidebars.json // old version
    │   └── version-1.1.1-sidebars.json // latest version
    └── versions.json
# Custom Pages

Docusaurus offers the option to create custom pages, by creating files in `src/pages`. If a file exports a React component, it will be rendered between navbar and footer. If you create a new page `src/pages/team` then it will be available at `/team`.

    // file: ./src/pages/team.js
    import React, { useEffect } from "react";
    import Layout from "@theme/Layout";
    import clsx from "clsx";
    import styles from "./styles.module.css";
    const TITLE = "Team";
    const DESCRIPTION = "Awesome people working";
    
    function Team() {
      return (
        <Layout title={TITLE} description={DESCRIPTION}>
          <main className="container margin-vert--lg">
            <div className="text--center margin-bottom--xl">
              <h1>{TITLE}</h1>
              <p>{DESCRIPTION}</p>
            </div>
            <div className="row">
              <div className="col col--4 margin-bottom--lg">
                <div className={clsx("card", styles.showcaseUser)}>
                  <div className="card__image">
                    <img src="/img/fast.svg" />
                  </div>
                  <div className="card__body">
                    <div className="avatar">
                      <div className="avatar__intro margin-left--none">
                        <h4 className="avatar__name">Anshul Goyal</h4>
                        <small className="avatar__subtitle">Coder for Fun :)</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </Layout>
      );
    }
    export default Team;

If we check `/team` we can see our team's page.

![](https://paper-attachments.dropbox.com/s_52D646A6E2A3431ECB292EB7182064D5D5D30CCBDC8D380910ADC9E860F7BB78_1593969408670_image.png)


We can add a link to `/team` in the navbar.

     {
              to: "team",
              label: "Team",
              position: "right",
              activeBaseRegex:`team`
            },
![](https://paper-attachments.dropbox.com/s_52D646A6E2A3431ECB292EB7182064D5D5D30CCBDC8D380910ADC9E860F7BB78_1593969630107_image.png)

# Blog

Docusaurus allows us to create and manage blogs. You can create blogs by adding a blog as a markdown file in the `blog` folder. The file name should follow the pattern `{date}-{name}.md`.

    // file: ./blog/2020-07-06-my-blog
    
    ---
    id: intro
    title: Introducing Docusaurus // title for blog
    author: Anshul Goyal // author name
    tags: [docusaurus,tutorial] // tags for blog
    ---
    # My blog
    <!--truncate-->

`<!--truncate-->` is used to mark the summary of the blog. The content between `---` and `<!--truncate-->` will be used as a summary for the blog.


![](https://paper-attachments.dropbox.com/s_52D646A6E2A3431ECB292EB7182064D5D5D30CCBDC8D380910ADC9E860F7BB78_1594040302474_image.png)



# Deployment

Deploying the Docusaurus website is simple. Just `npm run build` and serve the `build` directory. For example, let’s deploy it to Netlify. Just connect your repo to Netlify and update settings.

![](https://paper-attachments.dropbox.com/s_52D646A6E2A3431ECB292EB7182064D5D5D30CCBDC8D380910ADC9E860F7BB78_1594042320166_image.png)



# Conclusion

We have gone through some of basics of Docusaurus. Docusaurus is great for creating a Documentation website. It is very customizable and supports a wide array of integration. Docusaurus supports different themes, search features, image optimization. We learned how to create basic documentation, manage different versions, creating custom pages, customizing the default website, and creating blogs.

