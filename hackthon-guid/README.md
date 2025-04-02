# Hackathon Guide

ハッカソンガイド用のReactアプリケーション

## 開発環境のセットアップ

### 必要な環境
- Node.js >= 16.0.0
- npm >= 8.0.0

### インストール
```bash
npm install
```

### 開発サーバーの起動
```bash
npm start
```
開発サーバーが http://localhost:3000 で起動します。

### ビルド
```bash
npm run build
```
ビルドされたファイルは`build`ディレクトリに出力されます。

## デプロイ方法（Netlify）

### 手動デプロイ
1. Netlifyアカウントにログイン
2. 「Add new site」→「Import an existing project」を選択
3. GitHubからプロジェクトを選択
4. 以下のビルド設定を確認：
   - Build command: `npm run build`
   - Publish directory: `build`
   - Environment variables: `CI=false`

### 自動デプロイ
1. mainブランチへのプッシュで自動的にデプロイされます
2. プルリクエスト作成時にプレビューデプロイが作成されます

### 注意事項
- デプロイ時の警告はエラーとして扱われないよう、`CI=false`が設定されています
- SPAのルーティングのため、全てのリクエストは`index.html`にリダイレクトされます
- 環境変数の追加が必要な場合は、Netlifyのサイト設定から追加してください

## プロジェクト構成
- `src/` - ソースコード
  - `components/` - Reactコンポーネント
  - `App.jsx` - メインアプリケーション
- `public/` - 静的ファイル
- `netlify.toml` - Netlifyデプロイ設定
