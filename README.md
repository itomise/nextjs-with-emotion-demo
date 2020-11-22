# Emotion Example

## -- 補足
emotionは CSS Grid の IE11 向けサポートがない。
以下の記事などで無理やり付与することはできるが、コードが重複するなどの理由がありかなり厳しいので、グリッドなどを使うときは[こちら](https://autoprefixer.github.io/)などで手動でAutoprefixerを使用することにする。

また、[こちら](https://github.com/thysultan/stylis.js/issues/119#issuecomment-463539789)のissueより、なんかプラグインで適用できるようになりそうなので、時間があるときにこれを適用できればよいかも

以下[参考](https://qiita.com/otofu-square/items/3861df1ab11860b6a4d6#postcss-%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3%E3%82%92-css-in-js-%E5%86%85%E3%81%AE%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB%E3%81%AB%E9%81%A9%E7%94%A8%E5%87%BA%E6%9D%A5%E3%82%8B)より引用
styled-components や emotion などの CSS in JS は内部的に vendor prefix を付与する仕組みを持っている（stylis という CSS プロセッサ）
しかし stylis には CSS Grid の IE11 向けサポートがない

Extract and inline critical css with
[emotion](https://github.com/emotion-js/emotion/tree/master/packages/emotion),
[emotion-server](https://github.com/emotion-js/emotion/tree/master/packages/emotion-server),
[@emotion/core](https://github.com/emotion-js/emotion/tree/master/packages/core),
and [@emotion/styled](https://github.com/emotion-js/emotion/tree/master/packages/styled).

## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/vercel/next.js/tree/canary/examples/with-emotion)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-emotion with-emotion-app
# or
yarn create next-app --example with-emotion with-emotion-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
