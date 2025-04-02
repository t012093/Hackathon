# React Guide

React開発ガイド用のViteアプリケーション

## 開発環境のセットアップ

### 必要な環境
- Node.js >= 18.0.0
- npm >= 9.0.0

### インストール
```bash
npm install
```

### 開発サーバーの起動
```bash
npm run dev
```
開発サーバーが http://localhost:5173 で起動します。

### ビルド
```bash
npm run build
```
ビルドされたファイルは`dist`ディレクトリに出力されます。

### プレビュー
```bash
npm run preview
```
ビルドしたアプリケーションをローカルでプレビューできます。

## デプロイ方法（Netlify）

### 手動デプロイ
1. Netlifyアカウントにログイン
2. 「Add new site」→「Import an existing project」を選択
3. GitHubからプロジェクトを選択
4. 以下のビルド設定を確認：
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18
   - Install command: デフォルト（`npm install`）

### 自動デプロイ
1. mainブランチへのプッシュで自動的にデプロイされます
2. プルリクエスト作成時にプレビューデプロイが作成されます

### 注意事項
- Viteプロジェクトの場合、出力ディレクトリは`dist`です
- SPAのルーティングのため、全てのリクエストは`index.html`にリダイレクトされます
- Node.jsバージョン18以上が必要です

## プロジェクト構成
- `src/` - ソースコード
  - `components/` - Reactコンポーネント
  - `assets/` - 画像などの静的アセット
  - `App.tsx` - メインアプリケーション
- `public/` - 静的ファイル
- `netlify.toml` - Netlifyデプロイ設定
