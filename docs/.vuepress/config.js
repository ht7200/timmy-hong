module.exports = {
    "title": "Timmy-Hong",
    "description": "Front-End Developer",
    "base": '/',
    "dest": "public",
    "head": [
        [
            "link",
            {
                "rel": "icon",
                "href": "/favicon.ico"
            }
        ],
        [
            "meta",
            {
                "name": "viewport",
                "content": "width=device-width,initial-scale=1,user-scalable=no"
            }
        ]
    ],
    "theme": "reco",
    "themeConfig": {
        "nav": [{
                "text": "Home",
                "link": "/",
                "icon": "reco-home"
            },
            {
                "text": "TimeLine",
                "link": "/timeline/",
                "icon": "reco-date"
            },
            {
                "text": "Contact",
                "icon": "reco-message",
                "items": [{
                        "text": "NPM",
                        "link": "https://www.npmjs.com/~hongtun",
                        "icon": "reco-npm"
                    },
                    {
                        "text": "GitHub",
                        "link": "https://github.com/ht7200",
                        "icon": "reco-github"
                    }
                ]
            }
        ],
        "type": "blog",
        "blogConfig": {
            "category": {
                "location": 2,
                "text": "Category"
            },
            "tag": {
                "location": 3,
                "text": "Tag"
            }
        },
        "friendLink": [{
            "title":"David Guan",
            "desc":"My dear friend David Guan",
            "link":"https://davidguan.me/"
        }],
        "logo": "/logo.png",
        "search": true,
        "searchMaxSuggestions": 10,
        "mode": "light",
        "sidebar": "light",
        "lastUpdated": "Last Updated",
        "author": "Timmy",
        "authorAvatar": "/avatar.png",
        "record": "皖ICP备20004244号",
        "startYear": "2019"
    },
    "markdown": {
        "lineNumbers": true
    }
}