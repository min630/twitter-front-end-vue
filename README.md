# Alphitter 專案

## 專案介紹

為前後端分離的協作專案，模擬 twitter 功能

[開發過程與心得](https://medium.com/@miki-chiang/simple-twitter-%E5%8D%94%E4%BD%9C%E5%B0%88%E6%A1%88%E8%A8%98%E9%8C%84-611e29c2f6ad)

### 專案優化Note (min630)

2022.4.11 修正未點選NewReplyModal時console出現找不到avatar的問題(預設data格式)

2022.4.25 優化個人資訊頁面推文、推文回覆、喜歡的內容、追隨者、正在追隨的alert資訊，追隨和正在追隨的人數變化顯示、大頭貼連結。

## 環境需求

本機請安裝 Node.js（v14.16） 以順利安裝專案

## 功能介紹

- 使用者註冊
- 使用者可依照註冊的帳號密碼登入
- 使用者能修改帳號資料，如帳號、名稱、Email、密碼
- 使用者能編輯個人資料，如名稱、自我介紹、個人頭像、封面
- 使用者能在首頁瀏覽所有推文
- 使用者點擊推文方塊時，能查看貼文與回覆串
- 使用者能回覆別人的推文
- 使用者點擊貼文中使用者頭像時，能瀏覽該使用者的個人資料及推文
- 使用者能新增推文
- 使用者能追蹤/取消追蹤其他使用者
- 使用者能對別人的推文按 Like/unlike
- 使用者瀏覽特定使用者的資料
- 管理者可從後台登入
- 管理者能瀏覽全站的推文及使用者的清單

## 測試用帳號

Demo網址：https://min630.github.io/twitter-front-end-vue/

1. 前台
- user1：帳號 user1、密碼 12345678
- user2：帳號 user2、密碼 12345678
- user3：帳號 user3、密碼 12345678
- user4：帳號 user4、密碼 12345678
- user5：帳號 user5、密碼 12345678
2. 後台
- Admin：帳號 root、密碼 12345678

## 安裝專案

1. Clone 專案到本地

```
git clone https://github.com/min630/twitter-front-end-vue.git
```

2. 進入專案資料夾

```
cd twitter-front-end-vue
```

3. 安裝套件

```
npm install
```

4. 啟動專案

```
npm run serve
```

5. 成功啟動後，在瀏覽器輸入終端機提供的本地端網址可瀏覽專案內容

## 團隊成員

### 前端

- [Abbie](https://github.com/ywweng)
- [Miki](https://github.com/min630)

### 後端

- [Kemal](https://github.com/Kemal-Wuzhi)
- [Rain](https://github.com/lcy101u/)
