# rails_next_tailwind_template

この２つの記事からRails+Next+Tailwindの環境が構築可能

①Next+Tailwind環境を作成
https://zenn.dev/yuki_tu/articles/01c7963eeb2876#8.-%E5%90%84%E7%A8%AE%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89%E5%AE%9F%E8%A1%8C

②RailsをAPIモードで作成
https://zenn.dev/taku1115/articles/6c9fa97ab37e38


GitClone後のコマンド順番
# クローン
$ git clone URL

# 移動
$ cd rails_next_tail

# イメージビルド
$ docker-compose build

# パッケージインストール(初回または、新たにパッケージが導入された時のみ)
$ docker-compose run --rm front yarn install --frozen-lockfile

# コンテナ起動
$ docker-compose up -d


#Rails がないよと言われたらこのURLで解決
https://31navi.com/rails-mysql
