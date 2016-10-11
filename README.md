# beautipic

## 获取Bing美图的Node.js小模块

### 内置方法
- beautipic.all(callback(err,obj))
> all:JSON 对象，结构如下


 ```JSON 
{
  "images": [
    {
      "startdate": "20161009",
      "fullstartdate": "201610090700",
      "enddate": "20161010",
      "url": "/az/hprichbg/rb/SiberiaFoliage_EN-US7374016693_1920x1080.jpg",
      "urlbase": "/az/hprichbg/rb/SiberiaFoliage_EN-US7374016693",
      "copyright": "Autumn in the East Siberian taiga, Russia (© Serguei Fomine/500px)",
      "copyrightlink": "/search?q=East+Siberian+taiga&form=hpcapt&filters=HpDate%3a%2220161009_0700%22",
      "wp": true,
      "hsh": "0eecfdfb3acdbba49a32f579944512aa",
      "drk": 1,
      "top": 1,
      "bot": 1,
      "hs": []
    },
    {
      "startdate": "20161008",
      "fullstartdate": "201610080700",
      "enddate": "20161009",
      "url": "/az/hprichbg/rb/LightsBerlin_EN-US8584269528_1920x1080.jpg",
      "urlbase": "/az/hprichbg/rb/LightsBerlin_EN-US8584269528",
      "copyright": "The Berlin Cathedral illuminated during the Festival of Lights in Berlin, Germany (© Paul Zinken/Alamy)",
      "copyrightlink": "/search?q=Festival+of+Lights+Berlin&form=hpcapt&filters=HpDate%3a%2220161008_0700%22",
      "wp": false,
      "hsh": "1d0a7713ca17f5a64dc2b5f12d84c99e",
      "drk": 1,
      "top": 1,
      "bot": 1,
      "hs": []
    },
    {
      "startdate": "20161007",
      "fullstartdate": "201610070700",
      "enddate": "20161008",
      "url": "/az/hprichbg/rb/ScotlandHarbourSeal_EN-US14050174296_1920x1080.jpg",
      "urlbase": "/az/hprichbg/rb/ScotlandHarbourSeal_EN-US14050174296",
      "copyright": "A harbor seal near Islay, Scotland (© Laurie Campbell/Minden Pictures)",
      "copyrightlink": "/search?q=harbor+seal&form=hpcapt&filters=HpDate%3a%2220161007_0700%22",
      "wp": true,
      "hsh": "dd4fa35f9e2b0c8789c1638ac714a124",
      "drk": 1,
      "top": 1,
      "bot": 1,
      "hs": []
    },
    {
      "startdate": "20161006",
      "fullstartdate": "201610060700",
      "enddate": "20161007",
      "url": "/az/hprichbg/rb/HongKongVideo_EN-US8807831395_1920x1080.jpg",
      "urlbase": "/az/hprichbg/rb/HongKongVideo_EN-US8807831395",
      "copyright": "Hong Kong, China (© Banana Republic Images/Shutterstock)",
      "copyrightlink": "/search?q=hong+kong&form=hpcapt&filters=HpDate%3a%2220161006_0700%22",
      "wp": false,
      "hsh": "986d915bc85086199c40f6086b75269c",
      "drk": 1,
      "top": 1,
      "bot": 1,
      "hs": [],
      "vid": {
        "sources": [
          [
            "mp4",
            "video/mp4; codecs=\"avc1.42E01E, mp4a.40.2\"",
            "//az29176.vo.msecnd.net/videocontent/HongKong_Sunset_shutterstock_17834377_768_EN-US.mp4"
          ],
          [
            "mp4hd",
            "video/mp4; codecs=\"avc1.42E01E, mp4a.40.2\"",
            "//az29176.vo.msecnd.net/videocontent/HongKong_Sunset_shutterstock_17834377_1080_HD_EN-US.mp4"
          ]
        ],
        "loop": true,
        "image": "//az29176.vo.msecnd.net/videocontent/HongKong_Sunset_FF_768_HD_EN-US950412909.jpg",
        "caption": "Time-lapse video of Hong Kong, China (© Banana Republic Images/Shutterstock)",
        "captionlink": "/search?q=hong+kong&form=hpcapt",
        "dark": true
      }
    }
  ]
}

 ```
> 就是Bing的JSON数据的images段  
> 数组长度为8

- beautipic.first(callback(err,one))
> one : JSON 对象，是上列images数组的第一数据对象

- beautipic.randomOne(callback(err,one))
> 随机返回数组中的一个对象

- beautipic.get(idx,callback(err,one))
> idx : 索引值[0,7]之间

### 其他
- 本模块基于superagent模块开发
- 如果有err，是superagent那边抛出来的
