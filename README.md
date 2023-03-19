### Hexlet tests and linter status:
[![Actions Status](https://github.com/Marina093/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/Marina093/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/7a45e350fbbf53e1eaa0/maintainability)](https://codeclimate.com/github/Marina093/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/7a45e350fbbf53e1eaa0/test_coverage)](https://codeclimate.com/github/Marina093/frontend-project-46/test_coverage)
[![.github/workflows/nodejs.yml](https://github.com/Marina093/frontend-project-46/actions/workflows/nodejs.yml/badge.svg)](https://github.com/Marina093/frontend-project-46/actions/workflows/nodejs.yml)

<h1 align="center">"Вычислитель отличий"</h1>
<p>Приложение, определяющее разницу между двумя структурами данных. 
Это популярная задача, для решения которой существует множество онлайн сервисов, например http://www.jsondiff.com/.
Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменений в конфигурационных файлах.</p>
<p>Проект выполнен с использованием специальной библиотеки command.js, упрощающей создание утилит командной строки (cli).
</p>

## Возможности утилиты:
<ul>
 <li>Поддержка разных входных форматов: <b>yaml</b>, <b>json</b></li>
 <li>Генерация отчета в формате: <b>plain</b>, <b>stylish</b> и <b>json</b></li>
</ul>

## Инструкция по установке и запуску:

 <p>Приложение запускается в Ubuntu или Linux.</p>
 <p>Установите Node.js не ниже 14 версии в систему глобально.</p>
 <p>Склонируйте репозиторий проекта локально.</p>
  
  ```properties
  git clone git@github.com:Marina093/frontend-project-46.git
  ```
  
 <p>Установите зависимости одной из команд.</p>
  
  ```properties
  make install 
  or 
  npm ci
  ```

<p>Для управления модулями и зависимостями установите <code>npm link</code>.</p>
 
<p>Для запуска приложения укажите путь к первому файлу и второму файлу.</p>
 
 ```properties
  gendiff <filepath1> <filepath2>
  ```
  
<p>Для вызова справки введите <code>gendiff -h</code>.</p>

## Демонстрация работы приложения:

#### Compared flat files JSON

[![asciicast](https://asciinema.org/a/1JixaRDZGyr9vsRtNeTVVfgVk.svg)](https://asciinema.org/a/1JixaRDZGyr9vsRtNeTVVfgVk)

#### Compared flat files YAML

[![asciicast](https://asciinema.org/a/HlvBQs17HRwSUvbfbckgsX56K.svg)](https://asciinema.org/a/HlvBQs17HRwSUvbfbckgsX56K)

#### Compared nested files JSON and nested files YAML ('stylish' format)

[![asciicast](https://asciinema.org/a/J1R6c3f6knI8GisJ2cMhnNuKP.svg)](https://asciinema.org/a/J1R6c3f6knI8GisJ2cMhnNuKP) 

#### Compared files with nested structure in format 'plain'

[![asciicast](https://asciinema.org/a/ILpW0GUvhvisKIhipN24S7vnE.svg)](https://asciinema.org/a/ILpW0GUvhvisKIhipN24S7vnE)

#### Compared files with nested structure in format 'json'

[![asciicast](https://asciinema.org/a/drgBVSV9tJnceURBmFIfbcoev.svg)](https://asciinema.org/a/drgBVSV9tJnceURBmFIfbcoev)
