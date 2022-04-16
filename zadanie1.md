CZĘŚĆ OBOWIĄZKOWA, PUNKT 1
Patrz plik index.js

CZĘŚĆ OBOWIĄZKOWA, PUNKT 2
Patrz plik Dockerfile

CZĘŚĆ OBOWIĄZKOWA, PUNKT 3
1. sudo docker build -t test .
2. docker run -it -p 3000:3000 --name test-container test
3. docker logs test-container
4. docker history test

CZĘŚĆ OBOWIĄZKOWA, PUNKT 4
- sudo apt-get install -y qemu-user-static
- docker buildx create --name testbuilder
- docker buildx use testbuilder
- docker buildx inspect --bootstrap
- docker buildx build -t djkrnl/zad1:serwer --platform linux/arm/v7,linux/arm64/v8,linux/amd64 --push .

DODATEK 1
Patrz plik frontend.yml znajdujący się w folderze .github/workflows