# Portfolio
My portfolio written on Jekyll and SCSS

[![Jekyll](https://img.shields.io/github/workflow/status/igorkowalczyk/igorkowalczyk.github.io/jekyll-deploy?style=flat-square&logo=github&color=%2334D058)](https://igorkowalczyk.github.io)
[![GitHub License](https://img.shields.io/github/license/igorkowalczyk/blog?color=%2334D058&logo=github&style=flat-square)](https://igorkowalczyk.github.io/license.txt)
[![Version](https://img.shields.io/github/v/release/igorkowalczyk/igorkowalczyk.github.io?color=%2334D058&logo=github&style=flat-square)](https://github.com/igorkowalczyk/igorkowalczyk.github.io/releases)
[![Discord](https://img.shields.io/discord/666599184844980224?color=%2334D058&logo=discord&style=flat-square&logoColor=7289da)](https://majobot.igorkowalczyk.repl.co/server)

### Image
[![Portfolio](https://raw.githubusercontent.com/IgorKowalczyk/igorkowalczyk.github.io/master/lib/pics/readme/portfolio.png)](https://igorkowalczyk.github.io)

### Features
 - ⚙️ Fully customizable
 - 🌆 Light/Dark theme
 - 📝 Build-in contact form
 - 🔍 SEO
 - 📚 Projects cards
 - 💯 Social media support

### Development
1. Fill `_config.yml` with your values
    * For form link go to [Formspree](https://formspree.io) create new site and get your endpoint link
    * For site verification token go to [Google Search Console](https://search.google.com/search-console) and get your `html tag` key.
2. Add your projects with `.yml` extension to `_data/cards` (Max `10` cards!)
     * Project file syntax:
```
id: "card id (unique, the position on the site)"
title: "Project Title"
archived: "is archived? true/false"
technology: "What technology or language did you use"
description: "Short description"
url: "url to the project site (if exists)"
git: "name of the project repo (if exists)"
background: "Card background (from /lib/pics)"
background_data: "Card background data (from /lib/pics)"
background-alt: "Card background alt"
second-background: "Secount background (from /lib/svg/)"
second-background-alt: "Secound background alt"
effect: "color"
```
5. Set-up the page by running `bundle install`.
6. Host this site locally by running `bundle exec jekyll serve`. Your site will be hosted under http://localhost:4000.

### Issues
If you have any issues with the project or you found a bug please create [new issue here](https://github.com/igorkowalczyk/igorkowalczyk.github.io/issues)


### Pull Requests
When submitting a pull request:

- Clone the repo.
- Create a branch off of master and give it a meaningful name (e.g. my-awesome-new-feature).
- Open a [pull request](https://github.com/igorkowalczyk/igorkwalczyk.github.io/pulls) on [GitHub](https://github.com) and describe the feature or fix.

### License
This project is licensed under the MIT. See the [LICENSE](https://github.com/igorkowalczyk/igorkwalczyk.github.io/blob/master/license.md) file for details
