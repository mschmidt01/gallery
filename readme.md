Dependencies:
 - PHP >= 7.1
 - Node.js
 - Composer 

Installation:
 - composer install
 - npm install
 
 Konfiguration:
 - .env.example in .env umbenennen und danach php artisan key:generate
 - Datenbankanmeldeinformationen in .env eintragen -> am besten eigene lokale DB nutzen oder kostenlose DB (langsam!!!) siehe db_zugang.txt
 
Für lokales Testen (localhost:8000): 
 - npm run watch
 - php artisan serve
 
Bei auftretenden Fehlern hilft oftmals:
 - composer install
 - npm install
