## HeadsUp

HeadsUp is a minimal, fast, clean API for request header parsing

PS: built for freecodecamp backend challenge series

## Guide

### Getting Started
Clone the repo and self-host it somewhere, preferrably in the cloud.

### Endpoints 
Following are the exposed api endpoints


| Endpoint | Usage 
| :---:   | :---: 
| /api/whoami | returns json with a default configured request header information


### Configuration
The default configuration for the api/whoami
only has very few header information.
User can update the configuration to make it work according to his own needs

### Custom Configuration

Go to /api/routes.js file and edit the following parameters for custom header results



    const ipaddrs = req.headers.host;
    const lang = req.headers['accept-language'];
    const sw = req.headers['user-agent'];


    res.json({
        "ipaddress" : ipaddrs,
        "language":lang,
        "software":sw
    })

#### Complete list of available headers
| Endpoint | Usage 
| :---:   | :---: 
| req.header.host | ip address of client
| req.header.connection | connection type
| req.header['user-agent'] | UserAgent of the client
| req.header['accept-language'] | client language


<!-- 
{
  host: 'localhost:3000',
  connection: 'keep-alive',
  'sec-ch-ua': '"Brave";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"Linux"',
  'upgrade-insecure-requests': '1',
  'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
  accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
  'sec-gpc': '1',
  'accept-language': 'en-GB,en',
  'sec-fetch-site': 'none',
  'sec-fetch-mode': 'navigate',
  'sec-fetch-user': '?1',
  'sec-fetch-dest': 'document',
  'accept-encoding': 'gzip, deflate, br',
  'if-none-match': 'W/"a7-2oJ/JfOqiBW5+6g5PpUyTichQnA"'
} -->
