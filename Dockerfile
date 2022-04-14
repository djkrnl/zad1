#obraz Alpine Linux z zainstalowanym Node.js jako baza
FROM node:alpine

#etykiety informujące o autorze i nazwie zadania
LABEL maintainer="Kornel Szarapajew"
LABEL description="Zadanie 1"

#ustawienie katalogu roboczego
WORKDIR '/app'

#komendy - inicjalizacja projektu i instalacja pakietu moment-timezone
RUN npm init -y && \
npm install --save moment-timezone

#skopiowanie pliku z kodem źródłowym serwera do obrazu
COPY index.js .

#skonfigurowanie nasłuchiwania na porcie 3000
EXPOSE 3000

#polecenie - uruchomienie serwera Node.js bazującego na pliku index.js
ENTRYPOINT ["node"]
CMD ["index.js"]