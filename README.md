# Simple-Twitter

這是一個使用React所開發的社群平台，主要為一般與他人互動之社群功能

## 專案畫面

![image](./public/twitter.gif)

## 專案功能
### 使用者：
使用者可以自行註冊帳號，並且登入平台

1. 首頁：
  - 在主頁面中可以點擊推文按鈕，進行推文
  - 可以查看所有使用者所發過的推文
  - 可以回覆推文、按讚，也可查看特定推文內容
  - 右側欄位可看見Top10推薦的使用者，並且可以追蹤他人
  - 左側欄位為各項頁面轉換及登出

2. 使用者頁面：
  - 使用者頁面包含個人推文、回覆及喜歡的內容
  - 點擊跟隨中及跟隨者可查看個人所跟隨中(者)的使用者
  - 點擊編輯個人資料可更改使用者名稱、自我介紹、大頭照及背景

3. 設定：
  - 使用者可更改當前帳戶資訊，若不更改密碼，可直接點擊儲存

4. 登出：
  - 點擊登出按鈕可回到登入畫面

### 管理者：
使用管理者帳戶登入後，可瀏覽所有推文、刪除推文及查看所有使用者資訊

## 執行專案
### 打開終端機執行以下程序：
```
git clone https://github.com/Tim0124/simple-twitter.git
```
### 切換至當前資料夾，安裝套件
```
npm install
```
### 啟動專案
```
npm start
```
### 退出專案
```
control + c
```

## 建置環境
  * node 14.16.0 以上

  * React: 18.2.0

  * React-dom: 18.2.0

  * react-router-dom: 6.11.2

  * react-scripts: 5.0.1

  * axios: 0.27.2

  * clsx: 1.2.1

  * gh-page: 4.0.0

  * sass: 1.62.1

## 開發人員
### 前端： Iris Lee & Tim Kao



Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
