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
配置target为本地server的地址，http://127.0.0.1:7001
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
`umi-request`是以`fetch`为基础的，默认没有开启csrf的配置，此处手动写一下这里的逻辑
在 `src/app.ts`中增加运行时配置，[RequestConfig](RequestConfig)

```javascript
// ...
export const request: RequestConfig = {
  timeout: 2000,// 请求超时时间
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

