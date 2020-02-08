# 使用するGolangのイメージを指定する
FROM golang:latest

WORKDIR /go

# 直下のディレクトリをコンテナ上に載せる
ADD . /go

#RUN go get -u github.com/go-sql-driver/mysql \
#&& go get -u github.com/gin-gonic/gin \
#&& go get -u github.com/jinzhu/gorm
# プロジェクトをビルド
RUN go build