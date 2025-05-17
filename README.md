## 環境
- Node.js v16以上
- Vue 3
- Vite
- SCSS

## セットアップ
1. リポジトリをクローン
```bash
git clone [リポジトリURL]
```

2. 依存関係のインストール
```bash
npm install
```

3. 開発サーバーの起動
```bash
npm run dev
```
開発サーバーは http://localhost:3333 で起動します。

4. ビルド
```bash
npm run build
```
ビルドされたファイルは `docs` ディレクトリに出力されます。

## プロジェクト構成
```
.
├── docs/           # ビルド出力ディレクトリ
├── src/
│   ├── assets/     # 画像、SCSS等の静的ファイル
│   ├── components/ # Vueコンポーネント
│   ├── router/     # ルーティング設定
│   ├── views/      # ページコンポーネント
│   ├── App.vue     # ルートコンポーネント
│   └── main.js     # エントリーポイント
└── package.json
```

## 使用している主な技術
- Vue Router - ルーティング
- SCSS - スタイリング
  - メディアクエリのミックスイン
  - 変数による共通値の管理
- Vite - ビルドツール