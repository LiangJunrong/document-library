Promise
===

> Create by **jsliang** on **2020-09-17 18:14:12**  
> Recently revised in **2020-09-17 18:14:12**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

* [x] [BAT 前端经典面试问题：史上最最最详细的手写 Promise 教程](https://juejin.im/post/6844903625769091079)【阅读建议：30min】
* [x] [100 行代码实现 Promises/A+ 规范](https://mp.weixin.qq.com/s/qdJ0Xd8zTgtetFdlJL3P1g)【阅读建议：30min】

```js
const isFunction = obj => typeof obj === 'function'
const isObject = obj => !!(obj && typeof obj === 'object')
const isThenable = obj => (isFunction(obj) || isObject(obj)) && 'then' in obj
const isPromise = promise => promise instanceof Promise

const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function Promise(f) {
  this.result = null
  this.state = PENDING
  this.callbacks = []

  let onFulfilled = value => transition(this, FULFILLED, value)
  let onRejected = reason => transition(this, REJECTED, reason)

  let ignore = false
  let resolve = value => {
    if (ignore) return
    ignore = true
    resolvePromise(this, value, onFulfilled, onRejected)
  }
  let reject = reason => {
    if (ignore) return
    ignore = true
    onRejected(reason)
  }

  try {
    f(resolve, reject)
  } catch (error) {
    reject(error)
  }
}

Promise.prototype.then = function(onFulfilled, onRejected) {
  return new Promise((resolve, reject) => {
    let callback = { onFulfilled, onRejected, resolve, reject }

    if (this.state === PENDING) {
      this.callbacks.push(callback)
    } else {
      setTimeout(() => handleCallback(callback, this.state, this.result), 0)
    }
  })
}

const handleCallback = (callback, state, result) => {
  let { onFulfilled, onRejected, resolve, reject } = callback
  try {
    if (state === FULFILLED) {
      isFunction(onFulfilled) ? resolve(onFulfilled(result)) : resolve(result)
    } else if (state === REJECTED) {
      isFunction(onRejected) ? resolve(onRejected(result)) : reject(result)
    }
  } catch (error) {
    reject(error)
  }
}

const handleCallbacks = (callbacks, state, result) => {
  while (callbacks.length) handleCallback(callbacks.shift(), state, result)
}

const transition = (promise, state, result) => {
  if (promise.state !== PENDING) return
  promise.state = state
  promise.result = result
  setTimeout(() => handleCallbacks(promise.callbacks, state, result), 0)
}

const resolvePromise = (promise, result, resolve, reject) => {
  if (result === promise) {
    let reason = new TypeError('Can not fufill promise with itself')
    return reject(reason)
  }

  if (isPromise(result)) {
    return result.then(resolve, reject)
  }

  if (isThenable(result)) {
    try {
      let then = result.then
      if (isFunction(then)) {
        return new Promise(then.bind(result)).then(resolve, reject)
      }
    } catch (error) {
      return reject(error)
    }
  }

  resolve(result)
}

module.exports = Promise
```

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。