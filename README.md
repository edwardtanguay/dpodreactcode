# base-react-001

This is a template site that works as-is and enables you to quickly build upon it a website/app with menu and multiple pages that functions both in a browser and on mobile devices, and can be published for free to a public URL hosted at Netlify.

This is a useful base site if you are new to React and want to start with a project that already has numerous useful technologies and features working together in a functional site that can be published online for free.

**Technologies:**

- React (based on create-react-app)
- React Router
- TypeScript
- Bootstrap
- SASS
- JQuery
- ESLint
- Jest testing

**Features:**
- single page application with responsive Bootstrap/React-Router menu
	- each page has an individually configurable title for browser tabs and bookmarking
	- browser back button works
	- three sample pages
- one page reads from a JSON file and displays contents on page with graphics
- pages have internal links from one page to the next
- a customizable favicon that shows up in bookmarks and browser tabs
- helper library of useful functions (qtools)

**Notes:**
- The `/public/_redirects` file is for Netlify can process URL paths correctly, e.g. if you send someone a link to `https://base-react-001.netlify.app/flashcards`.
- The `/src/qtools` directory is a set of helpers tools organized by cateagory e.g. `qstr` = string parsing. Feel free to use any you find, or add any you don't. 
- If you are going to publish to Netlify and use this site on a mobile device, see the `/public/manifest.json` file to change `short_name` and `name` and the colors (will determine the appearance of the first-time start screen), and also change `display` to `standalone`, `minimal-ui`, or `browser` to determine the UI-feel of your site, from app-like to browser-like.

## Prerequisites

* I built and tested this on Windows 10, but it should work on Linux/Mac as well.

## How to install 

```
npm install
```
## How to use

```
npm start
```

## How to publish to a free Netlify URL

- push site to your GitHub
- create free account at [Netlify](https://netlify.com)
- click **`New site from Git`**
- click **`GitHub`**
- search the name of your site and click
- click **`Deploy site`**
- click **`Site settings`**
- click **`Change site name`**
- give site a personal name, e.g. `mysite`
- after 2 minutes, go to site in browser or mobile device, e.g. `mysite.netlify.app`

## Current Developers

* Edward Tanguay [@edwardtanguay](https://github.com/edwardtanguay)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project uses the [MIT License](https://choosealicense.com/licenses/mit). Feel free to use, change, share, and distribute freely.