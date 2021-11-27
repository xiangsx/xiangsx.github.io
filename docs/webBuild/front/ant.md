# ant

自定义框架地址,使用此框架 [use template](https://github.com/xiangsx/WebFront/)

## 初始化框架

```shell
npm i -g yarn
yarn create umi WebFront
# 此处使用TypeScript、simple
```

详细步骤请移步至[Ant Design Pro](https://pro.ant.design/zh-CN/docs/getting-started/)

## 请求proxy 配置
开发环境，配置target为本地server的地址，http://127.0.0.1:7001
```javascript
export default {
    dev: {
        // localhost:8000/api/** -> https://preview.pro.ant.design/api/**
        '/api/': {
            // 要代理的地址
            target: 'http://127.0.0.1:7001',
            // 配置了这个可以从 http 代理到 https
            // 依赖 origin 的功能可能需要这个，比如 cookie
            changeOrigin: true,
        },
    },
}
```

## 开启csrf
`umi-request`是以`fetch`为基础的，默认没有开启 [csrf](https://tech.meituan.com/2018/10/11/fe-security-csrf.html) 的配置，此处手动写一下这里的逻辑
在 `src/app.ts`中增加运行时配置，[RequestConfig](https://umijs.org/zh-CN/plugins/plugin-request#requestconfig)

```javascript
// ...
export const request: RequestConfig = {
  timeout: 2000,// 请求超时时间
  errorConfig: {},
  middlewares: [],
  requestInterceptors: [
    (url: string, options: any) => {
      const csrfToken = getCookie('csrfToken');
      const headers = { ['x-csrf-token']: csrfToken };
      return {
        url: url,
        options: { ...options, headers: headers },
      };
    },
  ],
  responseInterceptors: [],
};
// ...
```

将crsf的head和cookie中的字段key放入配置文件中
```javascript
export default defineConfig({
    // ...
    define: {
        csrf: {
            headerName: 'x-csrf-token', // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
            cookieName: 'csrfToken', // Cookie 中的字段名，默认为 csrfToken
        },
    },
    // ...
})
```

requestConfig的配置就可以这样写，编译打包时会自动将`csrf.headerName`和`csrf.cookieName`替换成`x-csrf-token`和`csrfToken`
```javascript
// ...
export const request: RequestConfig = {
  timeout: 5000,
  errorConfig: {},
  middlewares: [],
  requestInterceptors: [
    (url: string, options: any) => {
      const csrfToken = getCookie(csrf.cookieName);
      const headers = { [csrf.headerName]: csrfToken };
      return {
        url: url,
        options: { ...options, headers: headers },
      };
    },
  ],
  responseInterceptors: [],
};
// ...
```

