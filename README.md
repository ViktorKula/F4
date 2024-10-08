Создайте фуллстек-приложение с рецептами блюд, которое будет использовать Django Rest Framework, автодокументацию OpenAPI+Swagger и react-router.
Давать пользователю возможность создавать рецепты не нужно: достаточно распределить их по категориям и отображать в клиенте и в API.
Где отображать документацию API — решать вам.
У каждого блюда и каждой категории должна быть своя страница: с главной страницы можно перейти на любую из категорий, а из категории — на любой рецепт этой категории.

## cd backend/kitchen 
В бэкенде устанавливаем зависимости:
### `pip install -r requirements.txt`

##  cd frontend/kitchen
Во фронте устанавлиеваем node_modules:
### `npm install`

## Запускаем в directory backend/kitchen 

### `python manage.py runserver`
Открывается на [http://localhost:8000](http://localhost:8000).

## Скрипты в directory frontend/kitchen 

В каталоге проекта вы можете запустить:

### `npm start`

Приложение запускается в режиме разработки.\
Открывается на [http://localhost:3000](http://localhost:3000).

### `npm test`

Запускает программу тестирования в режиме интерактивного просмотра.

### `npm run build`

Создает приложение для рабочей среды в папке "build".\
Это корректно объединяет React в рабочем режиме и оптимизирует сборку для достижения наилучшей производительности.

### `npm run eject`

** Примечание: это односторонняя операция. Выполнив `npm run eject`, вы не сможете вернуться назад!**

Если вас не устраивает инструмент сборки и выбранная конфигурация, вы можете "eject" ее в любое время. Эта команда удалит зависимость от одиночной сборки из вашего проекта.

Вместо этого он скопирует все файлы конфигурации и переходные зависимости (webpack, Babel, ESLint и т.д.) прямо в ваш проект, чтобы вы имели полный контроль над ними. Все команды, кроме "eject", по-прежнему будут работать, но они будут указывать на скопированные скрипты, чтобы вы могли их настроить. 

