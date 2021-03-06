##### v2.2.1 (gulp+webpack)

# Среда разработки
* **node** ^6.x.x (для упрощения процесса перехода между версиями советую установить **[n](https://www.npmjs.com/package/n)**)
* **npm** ^3.x.x
* **gulp** ^3.x.x (требуется глобальная установка через npm install -g gulp@3)

# Команды
## `gulp serve`
Сервирует проект с локалхоста, смотрит в папки _.tmp/_ и _frontend/_. Основной режим разработки.

## `gulp serve:web`
Сервирует собранный проект с локалхоста, смотрит в папку _web/_.

## `gulp`
Дефолтная команда для сборки проекта в режиме markup.

## `gulp build`
Собирает проект в папку _web/_ в режиме markup. Билдит html файлы, копирует папку _pics/_, не собирает админские скрипты и стили.

## `gulp size`
Выдает общий gzip размер папки _web/_. Без учета папки _media/_.

## `gulp size:all`
Выдает общий gzip размер папки _web/_. C учетом папки _media/_.

## `gulp size:detailed`
Выдает gzip размеры папок _styles/_, _scripts/_, _images/_, _fonts/_ и размеры файлов, которые находятся внутри.   

# HTML шаблонизатор **[Nunjucks](https://mozilla.github.io/nunjucks/templating.html)** от Mozilla
Переходим на nunjucks:) Привыкаем к синтаксису а ля `{% include "_partials/header" %}`, `{% block content %}{% endblock %}`, `{% extends "_partials/variables.njk" %}`. Как обычно, стараемся все повторяющиеся блоки, такие как хэдер, футер, пагинацию, делать паршиалами, и добавлять их в нашу разметку как по мере необходимости. Эти компоненты создаем в папке _partials. Подробнее о синтаксисе и возможностях nunjucks читаем в документации. Темплейты самих сттаниц создаем в папке `layouts/`.

#### Подсветка синтаксиса в Sublime Text для nunjucks - **Jinja2 (HTML)**   

# Линтеры
Для проверки синтаксиса используются [stylelint](http://stylelint.io/user-guide/rules/) и [eslint](http://eslint.org/docs/rules/). Они запускаются каждый раз, когда мы делаем изменение в .css и в .js файлах. Конфиги линтеров находятся в файлах .stylelintrc и .eslinrc.
