module.exports = {
  "servers": {
    "online": {
      "domain": "//static.online.com"
    },
    "beta": {
      "domain": "//static.beta.com"
    },
    "dev1": {
      "host": "1.1.1.1",
      "domain": "//static.dev1.com",
      "port": 22,
      "local": "./",
      "path": "/usr/local/nginx/{{ name }}",
      "sudo": false,
      "include": [
        "dev"
      ]
    }
  }
}
