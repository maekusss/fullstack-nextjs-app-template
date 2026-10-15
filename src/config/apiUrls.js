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
/**
 * Base URLs for local APIs (override when the browser cannot reach `localhost`, e.g. behind a proxied preview host)
 * - NEXT_PUBLIC_LOCAL_API_USE_BROWSER_ORIGIN=true: browser-side requests to Next.js API routes use the current page origin
 * - NEXT_PUBLIC_LOCAL_PHP_API: base URL of the PHP server (see `PHP_API_PROXY_TARGET` in `next.config.js`)
 */
const LOCAL_SITE_API = typeof window !== 'undefined' && process.env.NEXT_PUBLIC_LOCAL_API_USE_BROWSER_ORIGIN === 'true' ? window.location.origin : 'http://localhost:3000';
const LOCAL_PHP_API = process.env.NEXT_PUBLIC_LOCAL_PHP_API || 'http://localhost:4000';

const localConfig = {

	/*
	 TYPE: Site Configuration
	 ------------------------------------------
	*/
	"MENU": `${LOCAL_SITE_API}/api/navigation`,


	/*
	 TYPE: Posts
	 ------------------------------------------
	*/
	"RECEIVE_DEMO_LIST": `${LOCAL_SITE_API}/api/posts`,
	"RECEIVE_DEMO_LISTDETAIL": `${LOCAL_SITE_API}/api/post-detail?id={id}`,

	/*
	 TYPE: Posts Pagination
	 ------------------------------------------
	*/
	 "RECEIVE_PAGE_LIST": `${LOCAL_SITE_API}/api/pagination/page-{page}`,

	

	/*
	 TYPE: User (The PHP files are located at `./public/server/`)
	 ------------------------------------------
	*/
	"LOGIN_REQUEST": `${LOCAL_PHP_API}/sessions-create.php`,
	"USER_AUTHENTICATE": `${LOCAL_PHP_API}/authenticate.php`,
	"SIGNUP_REQUEST": "",

	  
	/*
	 TYPE: CRUD (The PHP files are located at `./public/server/`)
	 ------------------------------------------
	*/
	"CRUD_SERVICE": `${LOCAL_PHP_API}/curd.php`,
	"CRUD_DATA_INIT": `${LOCAL_PHP_API}/curd-data-init.php`,
	

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
    "DOWNLOAD_REMOTE_FILE": `${LOCAL_SITE_API}/api/extract-file?sourceurl={sourceurl}`,

	/*
	 TYPE: Dynamic Routes
	 ------------------------------------------
	*/
    "DYNAMIC_ROUTE_1": `${LOCAL_SITE_API}/api/dynamic-routes/page1`,
    "DYNAMIC_ROUTE_2": `${LOCAL_SITE_API}/api/dynamic-routes/page2`,

	/*
	 TYPE: Auth
	 ------------------------------------------
	*/
    "AUTH_PASSKEY": `${LOCAL_SITE_API}/api/passkey`,

    
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
