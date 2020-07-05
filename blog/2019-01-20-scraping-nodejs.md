---
title: Scraping with NodeJS and Cheerio
id: scrapping-nodejs
author: Anshul Goyal
author_url: https://github.com/anshulrgoyal
author_image_url: /img/anshul.jpg
tags: [cheerio, nodejs, scrapping]
image: https://unsplash.com/@ayahya09?utm_source=medium&utm_medium=referral
---


Everybody says that python is best for scraping but I always wonder why we don't use NodeJs for Scraping?

The answer is clear scraping is CPU intensive task since NodeJs is single threaded so scraping blocks the main thread. I have one solution for the problem worker threads. We would scrap the IMDB website for the data.

Our goal is to extract all the data from this [page](https://www.imdb.com/title/tt2193021/?ref_=nv_sr_1). We would scrap all the details of the tv show, all awards won by the tv show, the cast of the tv show, episodes, seasons and much more.

The data provided from scraping is way more than provided by our script and would be more than provided by any third-party API.

<!--truncate-->

## What is Cheerio?

> Fast, flexible, and lean implementation of core jQuery designed specifically for the server.

    **const** cheerio **=** require('cheerio')
    **const** $ **=** cheerio.load('<h2 class="title">Hello world</h2>')

    $('h2.title').text('Hello there!')
    $('h2').addClass('welcome')
    $('.title').text()
    *//=> Hello there!*

We can use cheerio to traverse the dom created from the HTML send by the IMDB website and get the required data.

## Let's Get Started

First, we should install two dependencies cheerio and request.

    npm install cheerio request

![How To Get CSS Selector on firefox](https://cdn-images-1.medium.com/max/2724/1*nDXNx6CNMzGk7m4kh8X7lg.gif)_How To Get CSS Selector on firefox_

    const cheerio=require('cheerio')

    const htmlString=`<html><body><p class="blessMe">HI</p></body></html>`

    const $=cheerio.load(htmlString)

    // we can use $('css selector')
    const pText=$('.blessMe').text()
    //=> HI

The cheerio uses syntax very close to JQuery. First, we load or create dom tree from the HTML string using load method on the cheerio and then we can use it for traverse the dom with using CSS selector. \$('css selector') have many methods.

- text: gives the text inside the element (text children of the tree).

- html: inner HTML of the element.

- find: find children of the element using CSS selector.

- attribs : gives the attribute of the element.

  const request = require("request");
  const cheerio = require("cheerio");

  function getFull(id, callback) {
  request.get(`[https://www.imdb.com/title/${id}/?ref_=fn_al_tt_1`](https://www.imdb.com/title/${id}/?ref_=fn_al_tt_1`), function(
  error,
  response,
  data
  ) {
  const $ = cheerio.load(data);
        callback(error, {
          story: $("div.inline:nth-child(3) > p:nth-child(1) > span:nth-child(1)")
  .text()
  .trim()
  });
  });
  }

The string div.inline:nth-child(3) > p:nth-child(1) > span:nth-child(1) is found using the firefox or chrome dev tools. In a similar way, we can get data for other fields

### Getting Genre Data

The data would be an array of string, we would use find method for getting the data. The CSS selector is #titlestory > div:nth-child(10) .

    genre: $("#titleStoryLine > div:nth-child(10)")
            .find("a")
            .text()
            .trim()
            .split(" ")
    //=>[ 'Action', 'Adventure', 'Crime', 'Drama', 'Mystery', 'Sci-Fi']

First, we select the outer div of the genre line then we use find to get all the a tags and extract the text children from all the a tags. Splitting the extracted test gives us our genre.

> In the same manner, we can get most of our data.

### Getting Image URL

We want are tv show to have a poster we would use attribute for this task. IMDB website uses a technique called late-loading for images. In this technique images are loaded after the whole page is rendered completely, the img tag src the attribute contains a placeholder image. The real source of the image is on the loadlate attribute. The image URL used by IMDB contains a parameter each alters the image quality.

    poster:
    $(".poster >a:nth-child(1) >img:nth-child(1)")[0].attribs.src.split("@._")[0] + "@._V1_QL50.jpg"

The poster image is given by the src attribute accessed using attribs property. "@.\_" gives the quality of the image. The best quality is used in given example.

      "0": "@._V1_QL50.jpg",
      "1": "@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      "2": "@._V1_UX148_CR0,0,148,216_AL__QL50.jpg",
      "3": "@._V1_UX86_CR0,0,86,86_AL_.jpg",
      "4": "@._V1_UY99_CR43,0,99,99_AL_.jpg",
      "5": "@._V1_UX32_CR0,0,32,44_AL_.jpg"

The lower the number better is quality. Scraping requires an extensive study of the website. Now let us see a loadlate example, now let us try to get the related tv-shows.

    related:Array.from(
            $(".rec_poster").map(function(index, element) {
              const id = $(this)
                .find("a")[0]
                .attribs.href.split("/")[2];
              const _data = $(this).find(".rec_poster_img")[0].attribs;
              return {
                id,
                poster: _data.loadlate.trim(),
                name: _data.title.trim()
              };
            })
          )

The CSS selector is .rec_poster we get all the div in the selector using find and then mapping over the result to give us the required details. The image is taken from the laodlate attribute, not from the src . idis extracted from the link href attribute.

## Using Mobile Site For Data

Sometimes the desktop website use more JavaScript then it is not possible to use cheerio with it, we might use the mobile site as mobiles usually lack processing power. We would use it for scraping the cast of the tv show.

The sample data is

    "cast": [
            {
                "name": "Stephen Amell",
                "image": "[https://m.media-amazon.com/images/M/MV5BMTc3MTg0MDMyMV5BMl5BanBnXkFtZTcwMjc2MzQxOA@@._V1_QL50.jpg](https://m.media-amazon.com/images/M/MV5BMTc3MTg0MDMyMV5BMl5BanBnXkFtZTcwMjc2MzQxOA@@._V1_QL50.jpg)",
                "role": "Oliver Queen/Green Arrow/The Arrow/The Hood/Black Arrow/Elseworlds Flash(161 episodes, 2012-2019)"
            },
            {
                "name": "David Ramsey",
                "image": "[https://m.media-amazon.com/images/M/MV5BMTc1NDI3MDk2M15BMl5BanBnXkFtZTcwNjk4NDg4Mg@@._V1_QL50.jpg](https://m.media-amazon.com/images/M/MV5BMTc1NDI3MDk2M15BMl5BanBnXkFtZTcwNjk4NDg4Mg@@._V1_QL50.jpg)",
                "role": "John Diggle/Spartan/Green Arrow/The Hood(160 episodes, 2012-2019)"
            },
            {
                "name": "Emily Bett Rickards",
                "image": "[https://m.media-amazon.com/images/M/MV5BZTdkZjlmYTQtMGMwNS00Yzk3LTg4YWItMzVlNTY0MmNiMzM3XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_QL50.jpg](https://m.media-amazon.com/images/M/MV5BZTdkZjlmYTQtMGMwNS00Yzk3LTg4YWItMzVlNTY0MmNiMzM3XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_QL50.jpg)",
                "role": "Felicity Smoak/Overwatch(154 episodes, 2012-2019)"
            },
            {
                "name": "Katie Cassidy",
                "image": "[https://m.media-amazon.com/images/M/MV5BMjMyMzA1MTY2MV5BMl5BanBnXkFtZTgwMzIyNzQ3MDE@._V1_QL50.jpg](https://m.media-amazon.com/images/M/MV5BMjMyMzA1MTY2MV5BMl5BanBnXkFtZTgwMzIyNzQ3MDE@._V1_QL50.jpg)",
                "role": "Laurel Lance/Black Canary/Black Siren(143 episodes, 2012-2019)"
            },
            {
                "name": "Paul Blackthorne",
                "image": "[https://m.media-amazon.com/images/M/MV5BMTQ1NjcyODAxMF5BMl5BanBnXkFtZTgwMjc5MDMwNzE@._V1_QL50.jpg](https://m.media-amazon.com/images/M/MV5BMTQ1NjcyODAxMF5BMl5BanBnXkFtZTgwMjc5MDMwNzE@._V1_QL50.jpg)",
                "role": "Quentin Lance(139 episodes, 2012-2019)"
            },
            {
                "name": "Willa Holland",
                "image": "[https://m.media-amazon.com/images/M/MV5BNzgwMDk1NTUxMF5BMl5BanBnXkFtZTcwMTQxODY4Mg@@._V1_QL50.jpg](https://m.media-amazon.com/images/M/MV5BNzgwMDk1NTUxMF5BMl5BanBnXkFtZTcwMTQxODY4Mg@@._V1_QL50.jpg)",
                "role": "Thea Queen/Speedy(132 episodes, 2012-2019)"
            },
            {
                "name": "Echo Kellum",
                "image": "[https://m.media-amazon.com/images/M/MV5BMTg5MTQwMzk2OV5BMl5BanBnXkFtZTgwMzEwNjI0NjE@._V1_QL50.jpg](https://m.media-amazon.com/images/M/MV5BMTg5MTQwMzk2OV5BMl5BanBnXkFtZTgwMzEwNjI0NjE@._V1_QL50.jpg)",
                "role": "Curtis Holt/Mr. Terrific(79 episodes, 2015-2019)"
            },
        ]

### From The Ajax Calls

Often websites use ajax call for fetching data from the server.

![Ajax call for the episodes](https://cdn-images-1.medium.com/max/2724/1*x5GOERaIdLxLI5NzI_86FQ.gif)_Ajax call for the episodes_

The data from the ajax is faster since the amount of HTML received is much less and bandwidth is also saved. The URL for Ajax is

    https://www.imdb.com/title/tt2193021/episodes/_ajax?season=2

We can make the request to this URL and scrap the data.

## Using Worker Thread

Worker threads are still in the experimental phase but we can test them in NodeJS 11.x without the experimental flag.

## Observing Page Behavior

There is a good chance that the targeted page uses some sort of network call either be it HTTP, HTTPS, WebSocket or the other protocol if you are lucky it is in JSON format and you can simply format the JSON and get the required data. But in some case, the data can be XML or even worse JavaScript wrapper around the data, you can always parse the JavaScript in the sandbox. But if reverse engineer the page properly, extracting data is a piece of cake.

## Conclusion

It is just an overview of how to scrap the data from a different website. We discussed a few technique and methods. You may use many other tools like the puppeteer for scraping data from the pages which rely highly on the client side JavaScript.

## Bonus

All the Example For You ;)
[**anshulgoyal15/scrap-me**
*Example from my blog. Contribute to anshulgoyal15/scrap-me development by creating an account on GitHub.*github.com](https://github.com/anshulgoyal15/scrap-me)

All the Example are from My scraper
[**imdb-scrapper**
*scrap data from imdb web site*www.npmjs.com](https://www.npmjs.com/package/imdb-scrapper)
