# node-img-resize
nodeで画像を圧縮するモジュール  
※ node.js がインストール済みである事が前提です

## 前準備

### 1. clone
このリポジトリを任意のディレクトリに`clone`してきてください

### 2. モジュールインストール（初回時のみ）
```bash= 
npm install 
```

## 使用方法（ファイル変更検知の場合）
画像を追加すると自動で圧縮を割れるようにしたい場合

### 1. コマンドを実行
```bash= 
npm run press -w
```

### 2. リサイズしたい画像を設置
リサイズしたい画像を`/src/img/`に入れてください

`/dist/img/`にリサイズされた画像が出力されます

## 使用方法（コマンド実行の場合）
画像を設置し、コマンドを実行して圧縮する場合

### 1. リサイズしたい画像を設置
リサイズしたい画像を`/src/img/`に入れてください
`/dist/img/`にリサイズされた画像が出力されます

### 2. コマンドを実行
```bash= 
npm run press
```