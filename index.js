// const puppeteer = require('puppeteer')
// const cheerio = require('cheerio')

// class Browser {
//   constructor () {
//     this.BASEURL = ''
//     this.PAGES = []
//     this.BROWSER
//   }

//   setBaseURL (baseUrl) {
//     this.BASEURL = baseUrl
//     console.log('Base url as:', baseUrl)
//   }

//   get getBaseURL () {
//     return this.BASEURL
//   }

//   async openBrowser () {
//     this.BROWSER = await puppeteer.launch({
//       headless: true
//     })
//     console.log('Browser initialized')
//   }

//   async openPage ({ name, js, goToBase = false }) {
//     this.PAGES[name] = await this.BROWSER.newPage()
//     await this.PAGES[name].setJavaScriptEnabled(true)
//     console.log('New page created named as', name)
//     if (goToBase) {
//       await this.goTo(name, this.BASEURL)
//       console.log('Page going to: ', this.BASEURL)
//     }
//   }

//   getPage (pageName) {
//     console.log(`Getting ${pageName} page`)
//     return this.PAGES[pageName]
//   }

//   async goTo ({ name, url = this.BASEURL }, options) {
//     console.log(`Page ${name} going to: ${url}`)
//     await this.PAGES[name].goto(url, options)
//     console.log(`Page ${name} on: ${url}`)
//   }

//   async screenShot (pageName, fullPage) {
//     const path = `./screenshots/${new Date().valueOf()}-${pageName}.png`
//     await this.PAGES[pageName].screenshot({ path, fullPage })
//     console.log(`Taking a screenshot of ${pageName} using '${path}' as name`)
//   }

//   async closeBrowser () {
//     console.log('Closing browser')
//     await this.BROWSER.close()
//     console.log('Browser closed')
//   }
// }

// async function getMacbooksInfo (browser, config) {
//   const view = `macbooks${new Date().valueOf()}`
//   const { url, description, threadName } = config;
//   if(!config.alreadyRun){
//     console.log('------------------------------------------------------')
//     console.log('Running crawler to:', threadName)
//     console.log('description:', description)
//     console.log('------------------------------------------------------')
//   }

//   const options = {
//     waitUntils: 'networkidle0',
//     timeout: 60000,
//     networkIdleTimeout: 1000 * 3
//   }

//   await browser.openPage({
//     name: view,
//     js: true,
//     goToBase: false
//   })

//   await browser.goTo({
//     name: view,
//     url,
//     options
//   })

//   // get page/view after its loaded
//   const statement = browser.getPage(view)
//   const content = await statement.content()
//   const $ = await cheerio.load(content)
//   await statement.setViewport({width: 100, height: 50});
  
//   const quantityResults = $('.quantity-results')
//     .text()
//     .split('')
//     .filter(letter => /[0-9]/g.test(letter))
//     .join('')

//   const nextPagination = $(content).find('.prefetch').attr('href');

//   const itemsToSell = await $('.item__info-link')
//     .map((i, item) => {
//       return {
//         href: $(item).attr('href'),
//         price: $(item)
//           .find('.price__fraction')
//           .text(),
//         description: $(item)
//           .find('.main-title')
//           .text()
//       }
//     })
//     .get()
//   await browser.screenShot(view, true);
//   if(nextPagination){
//     return getMacbooksInfo(browser, {
//       ...config,
//       alreadyRun: true,
//       url: nextPagination
//     })
//   }
// }

// ;(async () => {
//   try {
//     const newBrowser = new Browser()
//     await newBrowser.openBrowser()
//     await newBrowser.setBaseURL('https://www.mercadolivre.com.br/')
//     await getMacbooksInfo(newBrowser, { 
//       url: 'https://lista.mercadolivre.com.br/macbooks-pro-2017#D[A:macbooks%20pro%202017]',
//       threadName: 'Macbook pro 2017 em geral',
//       description: ''
//     })
//     await getMacbooksInfo(newBrowser, {
//       url: 'https://lista.mercadolivre.com.br/macbooks-pro-2017-256gb#D[A:macbooks%20pro%202017%20256gb]',
//       threadName: 'Macbook pro 2017 com 256 gigas no titulo',
//       description: ''
//     });

//     await getMacbooksInfo(newBrowser, {
//       url: 'https://informatica.mercadolivre.com.br/portateis-e-acessorios-notebook/apple/macbook-pro/mais-de-16-GB/macbooks-pro-2017',
//       threadName: 'Macbook pro 2017 com 256 gigas nas specs',
//       description: ''
//     });

//     await newBrowser.closeBrowser()
//   } catch (error) {
//     console.error(error)
//     process.exit(1)
//   }
// })()
