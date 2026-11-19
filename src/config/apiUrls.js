const prodUrl = (myProtocol, myHostname, myPort, specifiedPort = '') => {
    if (typeof window !== 'undefined') {
        return window.location.hostname === 'localhost' ? (typeof myPort !== 'undefined' ? `${myProtocol}://${myHostname}:${myPort}` : `${myProtocol}://${myHostname}`) : typeof myPort !== 'undefined' ? (`${window.location.protocol}//${window.location.hostname}:${specifiedPort === '' ? window.location.port : specifiedPort}`) : (`${window.location.protocol}//${window.location.hostname}`);
    } else {
        return typeof myPort !== 'undefined' ? (specifiedPort === '' ? '{reqUrl}' : `{reqUrl}:${specifiedPort}`) : (specifiedPort === '' ? '{reqUrl}' : `{reqUrl}`);
    }
};

/*
+++ Warning: +++
When using `npm run export` of `npm run build` command, the request URL in the server-side components
cannot be "http://localhost:3000/api/xxx"
*/

/**
 * Same-origin API routes are called from both the browser (where an absolute
 * `localhost` URL would point at the visitor's own machine behind a remote preview
 * proxy) and from Node during SSR (where a relative URL has no base to resolve
 * against). Use a relative path in the browser and the app's own loopback address
 * on the server.
 */
const sameOriginUrl = (path) => (typeof window !== 'undefined' ? path : `http://127.0.0.1:3000${path}`);

const config = {

	/*
	 TYPE: Site Configuration
	 ------------------------------------------
	*/
	"MENU": `https://raw.githubusercontent.com/xizon/fullstack-nextjs-app-template/refs/heads/main/public/server-json/navigation.json`,

	/*
	 TYPE: Posts
	 ------------------------------------------
	*/
	"RECEIVE_DEMO_LIST": `https://raw.githubusercontent.com/xizon/fullstack-nextjs-app-template/refs/heads/main/public/server-json/posts/list.json`,
	"RECEIVE_DEMO_LISTDETAIL": `https://raw.githubusercontent.com/xizon/fullstack-nextjs-app-template/refs/heads/main/public/server-json/posts/detail.json`,


	/*
	 TYPE: Posts Pagination
	 ------------------------------------------
	*/
	 "RECEIVE_PAGE_LIST": `https://raw.githubusercontent.com/xizon/fullstack-nextjs-app-template/refs/heads/main/public/server-json/posts-pagination/page-{page}/index.json`,

	/*
	 TYPE: User (The PHP files are located at `./public/server/`)
	 ------------------------------------------
	*/
	"LOGIN_REQUEST": `https://raw.githubusercontent.com/xizon/fullstack-nextjs-app-template/refs/heads/main/public/server-json/sessions-create.json`,
	"USER_AUTHENTICATE": `https://raw.githubusercontent.com/xizon/fullstack-nextjs-app-template/refs/heads/main/public/server-json/authenticate.json`,
	"SIGNUP_REQUEST": "",
	
	  
	/*
	 TYPE: CRUD (The PHP files are located at `./public/server/`)
	 ------------------------------------------
	*/
	"CRUD_SERVICE": `https://raw.githubusercontent.com/xizon/fullstack-nextjs-app-template/refs/heads/main/public/server-json/curd.json`,
	"CRUD_DATA_INIT": `https://raw.githubusercontent.com/xizon/fullstack-nextjs-app-template/refs/heads/main/public/server-json/curd-data-init.json`,
	
	/*
	 TYPE: Video
	 ------------------------------------------
	*/
	"VIDEO_URL": `http://localhost:3000/core/video-stream`,
    "HLS_VIDEO_URL":  `http://localhost:3000/core/hls/{id}/{slug}`,
    "HLS_VIDEO_KEY": `/api/video-key`,  // Please don't write domain

    
	/*
	 TYPE: Downlaod remote file
	 ------------------------------------------
	*/
    "DOWNLOAD_REMOTE_FILE": `http://localhost:3000/api/extract-file?sourceurl={sourceurl}`,

	/*
	 TYPE: Dynamic Routes
	 ------------------------------------------
	*/
    "DYNAMIC_ROUTE_1": `http://localhost:3000/api/dynamic-routes/page1`,
    "DYNAMIC_ROUTE_2": `http://localhost:3000/api/dynamic-routes/page2`,


	/*
	 TYPE: Auth
	 ------------------------------------------
	*/
    "AUTH_PASSKEY": `http://localhost:3000/api/passkey`,

	/*
	 TYPE: Nodejs Services (fixed port:45000 - remote port)
     !!! Compatible with Docker
	 ------------------------------------------
	*/  
    // Test API
    "TEST_API": `${prodUrl('http','192.168.xxx.xxx','45000','45000')}/api/xxxxxx`,

    // generate microservices token
    "MS_GENERATE_TOKEN": `${prodUrl('http','192.168.xxx.xxx','45000','45000')}/create-token`

};


/**
 * API for Test on Localhost
 * 
 * (Please use a PHP server environment with a local port of 4000, check the file at `./backend/server-php.js`)
 */
const localConfig = {

	/*
	 TYPE: Site Configuration
	 ------------------------------------------
	*/
	"MENU": sameOriginUrl('/api/navigation'),


	/*
	 TYPE: Posts
	 ------------------------------------------
	*/
	"RECEIVE_DEMO_LIST": sameOriginUrl('/api/posts'),
	"RECEIVE_DEMO_LISTDETAIL": sameOriginUrl('/api/post-detail?id={id}'),

	/*
	 TYPE: Posts Pagination
	 ------------------------------------------
	*/
	 "RECEIVE_PAGE_LIST": sameOriginUrl('/api/pagination/page-{page}'),



	/*
	 TYPE: User
	 (Originally the PHP files at `./public/server/`; the preview serves same-origin
	 Next.js stand-ins at `./app/api/login` and `./app/api/authenticate` instead, so no
	 PHP runtime is required.)
	 ------------------------------------------
	*/
	"LOGIN_REQUEST": "/api/login",
	"USER_AUTHENTICATE": "/api/authenticate",
	"SIGNUP_REQUEST": "",


	/*
	 TYPE: CRUD
	 (Originally the PHP files at `./public/server/`; the preview serves same-origin
	 Next.js stand-ins at `./app/api/curd` and `./app/api/curd-data-init` instead, so no
	 PHP runtime is required.)
	 ------------------------------------------
	*/
	"CRUD_SERVICE": `/api/curd`,
	"CRUD_DATA_INIT": `/api/curd-data-init`,


	/*
	 TYPE: Video
	 ------------------------------------------
	*/
	"VIDEO_URL": `http://localhost:3000/core/video-stream`,
    "HLS_VIDEO_URL":  `http://localhost:3000/core/hls/{id}/{slug}`,
    "HLS_VIDEO_KEY": `/api/video-key`,  // Please don't write domain

	  
	/*
	 TYPE: Downlaod remote file
	 ------------------------------------------
	*/
    "DOWNLOAD_REMOTE_FILE": `http://localhost:3000/api/extract-file?sourceurl={sourceurl}`,

	/*
	 TYPE: Dynamic Routes
	 ------------------------------------------
	*/
    "DYNAMIC_ROUTE_1": `http://localhost:3000/api/dynamic-routes/page1`,
    "DYNAMIC_ROUTE_2": `http://localhost:3000/api/dynamic-routes/page2`,

	/*
	 TYPE: Auth
	 ------------------------------------------
	*/
    "AUTH_PASSKEY": `http://localhost:3000/api/passkey`,

    
	/*
	 TYPE: Nodejs Services (fixed port:4001)
	 ------------------------------------------
	*/  
    // Test API
    "TEST_API": "http://localhost:4001/api/xxxxxx",

    // generate microservices token
    "MS_GENERATE_TOKEN":  "http://localhost:4001/create-token"

};


const urls = process.env.NODE_ENV === "production" 
? config 
: localConfig;


export default urls;
