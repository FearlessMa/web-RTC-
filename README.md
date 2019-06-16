# Web RTC

[MDN文档](https://developer.mozilla.org/zh-CN/search?q=web+rtc&topic=apps&topic=html&topic=css&topic=js&topic=api&topic=canvas&topic=svg&topic=webgl&topic=mobile&topic=webdev&topic=http&topic=webext&topic=standards)

[学习网站](https://webrtc.org.cn/)

## WebRTC (Web Real-Time Communication) 是一个可以用在视频聊天，音频聊天或P2P文件分享等Web App中的 API。

* WebRTC主要由以下几个部分组成：

``` js
getUserMedia
为一个RTC连接获取设备的摄像头与(或)麦克风权限，并为此RTC连接接入设备的摄像头与(或)麦克风的信号。
RTCPeerConnection
用于配置音频或视频聊天。
RTCDataChannel
用于设置两个浏览器之间的端到端 数据连接。

```

### getUserMedia

* 不同浏览器厂商实现的不一样

    * 谷歌 webkitGetUserMedia

    * 火狐 mozGetUserMedia

* 实现： 

```js

const getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia ;

```

* [谷歌开源adapter.js](https://github.com/Temasys/AdapterJS)


## 获取设备

* navigator.mediaDevices 获得本地设备

* navigator.mediaDevices.enumerateDevices 获得设备枚举，返回值为 Promise

```js
   console.log(navigator.mediaDevices);
    //判断是否有设备
    if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
        console.log('enumerateDevices is not supported');
    } else {
        // 获取设备枚举
        navigator.mediaDevices.enumerateDevices().then((res) => {
            console.log('res: ', res);
            res.map((item) => {
                const option = document.createElement('option');
                option.text = item.label;
                option.value = item.deviceId;
                if (item.kind == 'audioinput') {
                    audioinput.appendChild(option);

                } else if (item.kind == 'audiooutput') {
                    audiooutput.appendChild(option);
                } else if (item.kind == 'videoinput') {
                    videoinput.appendChild(option);
                }
            })
        }).catch((err) => {
            console.log('err', err);
        })
    }
```

## 音视频采集API

* navigator.mediaDevices.getUserMedia(constraints)

    * MediaStreamConstraints

        ```js
            /*
                video,audio 音视频可以是boolean 或者 复杂媒体类型(可以控制清晰度，音量大小，帧频等)
                video : boolean or MediaTrackConstraints
                audio : boolean or MediaTrackConstraints
            */
            MediaStreamConstraints ={
                video :false , 
                audio :false 
            }
        ```