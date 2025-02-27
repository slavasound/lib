// Configuration file for the Firefox browser.
// Author: Bogachenko Vyacheslav

// Warning in "about:config"
// Предупреждение в "about:config"
user_pref("browser.aboutConfig.showWarning", false);

// Start page
//		0 = Blank page
//		1 = Home page
//		2 = Last page visited
//		3 = Resume previous session
// Стартовая страница
//		0 = Пустая страница
//		1 = Домашняя страница
//		2 = Последняя посещенная страница
//		3 = Возобновить предыдущую сессию
user_pref("browser.startup.page", 0);

// Opening tabs and external applications in the background
//		TRUE = Open such tabs in the background
//		FALSE = Switch to openable tabs
// Открытие вкладок и внешних приложений в фоновом режиме
//		TRUE = Открывать такие вкладки в фоне
//		FALSE = Переключаться на открываемые вкладки
user_pref("browser.tabs.loadDivertedInBackground", true);

// Search suggestions
// [NOTE] The default search engine uses geolocation-related data (your real location, determined by IP address).
// Поисковые предложения
// [ЗАМЕТКА] Поисковый механизм по умолчанию использует данные, связанные с геолокацией (вашим реальным местонахождением, определяемым по IP-адресу).
user_pref("browser.search.suggest.enabled", false);

// Preloading autocomplete URLs (when you enter in the address bar)
// Предварительная загрузка URL-адресов автозаполнения (при вводе в адресную строку)
user_pref("browser.urlbar.speculativeConnect.enabled", false);

// Suggestion types in the address bar
// Типы предложений в адресной строке
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("browser.urlbar.suggest.quicksuggest", false);
user_pref("browser.urlbar.delay", 0);

// Remember the search history and form data
// Помнить историю поиска и данные формы
user_pref("browser.formfill.enable", false);

// Remember your browsing and download history
// Помните историю посещений и загрузок
user_pref("places.history.enabled", false);

// Automatic deletion of history when closing the browser
// Автоматическое удаление истории при закрытии браузера
user_pref("privacy.sanitize.sanitizeOnShutdown", true);

// Which data items should be automatically deleted when the browser is closed
// Какие элементы данных должны быть автоматически удалены при закрытии браузера
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.cookies", false);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.history", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.sessions", true);
user_pref("privacy.clearOnShutdown.siteSettings", true);
user_pref("privacy.clearOnShutdown.openWindows", true);

// Browser cleanup wizard 
// [NOTE] This dialog window is invoked by hotkeys - Ctrl + Shift + Del.
// Мастер очистки браузера
// [ЗАМЕТКА] Это диалоговое окно вызывается горячими клавишами - Ctrl + Shift + Del.
user_pref("privacy.cpd.cache", true);
user_pref("privacy.cpd.cookies", false);
user_pref("privacy.cpd.downloads", true);
user_pref("privacy.cpd.formdata", true);
user_pref("privacy.cpd.history", true);
user_pref("privacy.cpd.offlineApps", true);
user_pref("privacy.cpd.passwords", false);
user_pref("privacy.cpd.sessions", true);
user_pref("privacy.cpd.siteSettings", true);
user_pref("privacy.cpd.openWindows", true);

// Time range to clear
//		0 = Everything
//		1 = Last hour
//		2 = Last two hours
//		3 = Last four hours
//		4 = Today
//		5 = Last five minutes
//		6 = Last twenty-four hours
// Диапазон времени для очистки
//		0 = Все
//		1 = Последний час
//		2 = Последние два часа
//		3 = Последние четыре часа
//		4 = Сегодня
//		5 = Последние пять минут
//		6 = Последние сутки
user_pref("privacy.sanitize.timeSpan", 0);

// Open bookmarks in a new tab
// Открытие закладок в новой вкладке
user_pref("browser.tabs.loadBookmarksInTabs", true);

// Opening bookmarks in background tabs
// Открытие закладок в фоновых вкладках
user_pref("browser.tabs.loadBookmarksInBackground", true);

// Maximum number of backup bookmarks
// Максимальное количество резервных закладок
user_pref("browser.bookmarks.max_backups", 3);

// "Backspace" button value
//		0 = Previous page
//		1 = Scroll page up
//		2 = Do nothing
// Значение кнопки "Backspace"
//		0 = Предыдущая страница
//		1 = Прокрутить страницу вверх
//		2 = Ничего не делать
user_pref("browser.backspace_action", 2);

// Защита от отслеживания
// Tracking protection
user_pref("privacy.trackingprotection.enabled", false);
user_pref("privacy.trackingprotection.annotate_channels", false);
user_pref("privacy.trackingprotection.cryptomining.enabled", false);
user_pref("privacy.trackingprotection.fingerprinting.enabled", false);
user_pref("privacy.trackingprotection.pbmode.enabled", false);
user_pref("privacy.trackingprotection.enabled", false);

// Automatically play sound in non-active tabs
//		TRUE = Do not play
//		FALSE = Play
// Автоматическое воспроизведение звука в неактивных вкладках
//		TRUE = Не воспроизводить
//		FALSE = Воспроизводить
user_pref("media.block-autoplay-until-in-foreground", true);

// Telemetry
// This feature sends data about usage, browser performance, user interface features, memory and hardware configurations, as well as real IP to Mozilla servers. In addition, information may be collected about the sites visited.
// [WARNING] This is a serious source of leaks and user tracking, do not turn it on.
// Телеметрия
// Эта функция отправляет данные об использовании, производительности браузера, функциях пользовательского интерфейса, конфигурации памяти и оборудования, а также реальных IP-адресах на серверы Mozilla. Кроме того, может собираться информация о посещаемых сайтах.
// [ВНИМАНИЕ] Это серьезный источник утечек и слежения за пользователем, не включайте его.
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabledFirstSession", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint", "data:,");

// Health report details
// [NOTE] This function collects advanced information about the health of the program and sends it to Mozilla servers, in particular: the number of crashes, information about slow loading. It includes data on equipment, operating system, version of this program, installed add-ons (number and type), intra-browser events, rendering, restoration of sessions, their duration, profile age, number of pages visited.
// Данные об отчета о здоровье
// [NOTE] Данная функция собирает расширенную информацию о работоспособности программы и отсылает ее на серверы Mozilla, в частности: количество падений, сведения о медленной загрузке. Она включает в себя данные об оборудовании, операционной системе, версии этой программы, установленных дополнениях (количество и тип), внутрибраузерных событиях, рендеринге, восстановлении сессий, их длительности, возрасте профиля, количестве посещенных страниц.
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);

// Crash reports
// [NOTE] This function sends information about program crashes to the Mozilla server, including technical information (memory status, etc.), time, and visited web links.
// Отчеты о сбоях
// [ЗАМЕТКА] Эта функция отсылает на сервер Mozilla сведения о сбоях программы, включая техническую информацию (состояние памяти и т.п.), время и посещаемые веб-ссылки.
user_pref("breakpad.reportURL", "");
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.tabs.crashReporting.sendReport", false);

// Promo for mobile phones
// Акция для мобильных телефонов
user_pref("identity.mobilepromo.android", "");
user_pref("identity.mobilepromo.ios", "");

// PingCentre telemetry
// Телеметрия ПингЦентра
user_pref("browser.ping-centre.telemetry", false);

// Recommended themes and extensions
// Рекомендованные темы и расширения
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.discovery.containers.enabled", false);
user_pref("extensions.getAddons.showPane", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);

// Preload a page that the browser considers to be a logical next page
// Предварительная загрузка страницы, которую браузер считает логической следующей страницей
user_pref("network.prefetch-next", false);

// Pre-query DNS for all links on the active page
// [NOTE] For HTTP and HTTPS-protected pages. This feature allows the browser in the background to determine DNS for various web content in order to speed up subsequent downloads (for links, graphics, CSS, JavaScript, etc.).
// Предварительный запрос DNS для всех ссылок на активной странице
// [ЗАМЕТКА] Для HTTP и HTTPS-защищенных страниц. Эта функция позволяет браузеру в фоновом режиме определять DNS для различного веб-контента с целью ускорения последующей загрузки (для ссылок, графики, CSS, JavaScript и т.п.).
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);

// Captive portal detection
// Обнаружение портала авторизации
user_pref("captivedetect.canonicalURL", "");
user_pref("captivedetect.canonicalContent", "");
user_pref("network.connectivity-service.IPv4.url", "");
user_pref("network.connectivity-service.IPv6.url", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);

// Synchronization of preferences
// Синхронизация предпочтений
user_pref("services.sync.engine.history", false);
user_pref("services.sync.engine.prefs", false);
user_pref("services.sync.engine.tabs", false);

// Cache API (Cache storage)
// [NOTE] It is a repository on the users computer where scripts can store information. It is part of the "Service workers" specification, but can be used without them.
// API Кэша (Хранилище кэша)
// [ЗАМЕТКА] Это хранилище на компьютере пользователя, куда скрипты могут складывать информацию. Оно является частью спецификации "Service workers", но может быть использовано и без них.
user_pref("dom.caches.enabled", false);

// Web notifications
// [NOTE] Data is sent to the site(s) not currently open in the browser.
// Веб-уведомления
// [ЗАМЕТКА] Данные отсылаются на сайт(ы) не открытые в данный момент в браузере.
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.webnotifications.serviceworker.enabled", false);
user_pref("dom.webnotifications.requireuserinteraction", false);
user_pref("dom.push.enabled", false);
user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.serverURL", "");

// Disk cache
// Кэш-диска
user_pref("browser.cache.disk.enable", false);

// Forbidding saving the settings of the permission manager
// Запрет сохранения настроек диспетчера разрешений
user_pref("permissions.memory_only", true);

// Offline cache
// Автономный кэш
user_pref("browser.cache.offline.enable", false);

// Storing extra session data
//		0 = Everywhere
//		1 = Unencrypted sites
//		2 = Nowhere
// Сохранение дополнительных данных сеанса
//		0 = Везде
//		1 = Незашифрованные сайты
//		2 = Нигде
user_pref("browser.sessionstore.privacy_level", 2);

// Restore active session in case of browser crash
// Восстановления активной сессии в случае падения браузера
user_pref("browser.sessionstore.resume_from_crash", false);

// Interval between saving sessions
// Интервал между сохранением сеансов
user_pref("browser.sessionstore.interval", 30000);

// Restoring the browser after restarting the operating system
// Восстановление браузера после перезагрузки операционной системы
user_pref("toolkit.winRegisterApplicationRestart", false);

// Cookies
// A Cookie is a piece of data (a small text file) sent by the server and stored in the browser. When the user reloads the same page, the browser sends the cookie back to the server and notifies it of the previous activity. Cookies store information such as passwords, logins, session data, credit card data, email addresses, and record various user activity and other statistics.
// [WARNING] Cookies are actively used by many web resources in the process of monitoring and tracking user activity. Theft and analysis of cookies is a potentially dangerous and serious attack, leading to global leaks of user data and use.
//		0 = Accept cookies and site data
//		1 = Block third-party cookies
//		2 = Block all cookies
//		3 = Block cookies from sites not visited
// Куки
// Cookie - фрагмент данных (небольшой текстовый файл), отправляемый сервером и сохраняющийся в браузере. Когда пользователь вновь загружает ту же самую страницу, браузер отсылает cookie назад на сервер и уведомляет его о предыдущей активности. Cookie хранят такую информацию, как пароли, логины, сеансовые данные, данные кредитных карт, электронные почтовые адреса и записывают различную пользовательскую активность и прочую статистику.
// [ВНИМАНИЕ] Cookie активно используются многими веб-ресурсами в процессе контроля и слежки за пользовательской активностью. Похищение и анализ cookie является потенциально опасной и серьезной атакой, приводящей к глобальным утечкам пользовательских данных и их использованию.
//		0 = Принимать куки и данные сайтов
//		1 = Блокировать стороннии куки
//		2 = Блокировать все куки
//		3 = Блокировать куки с не посещенных сайтов
user_pref("network.cookie.cookieBehavior", 0);

// Сookie lifetime policy
//		0 = Keep them until they expire
//		2 = Keep them until you close the browser
// Политика жизни куки
//		0 = Сохранять их до истечения срока действия
//		2 = Сохранять их до закрытия браузера
user_pref("network.cookie.lifetimePolicy", 0);

// Storage API
// [NOTE] Disables another way for sites to store their data on the users personal computer.
// API Хранилища
// [ЗАМЕТКА] Отключает еще один способ для сайтов хранить свои данные на персональном компьютере пользователя.
user_pref("dom.storageManager.enabled", false);

// Additional analytics sent to the web server
// [NOTE] HTTP-data leaking from UserAgent to the server, especially when leaving the page.
// Дополнительная аналитика, отправленная на веб-сервер
// [ЗАМЕТКА] HTTP-данные утекающих от UserAgent на сервер, особенно при покидании страницы.
user_pref("beacon.enabled", false);

// Collecting HTML video statistics
// Сбор HTML-видеостатистики
user_pref("media.video_stats.enabled", false);

// Types of content
// Типы содержимого
user_pref("gecko.handlerService.schemes.mailto.0.name", "");
user_pref("gecko.handlerService.schemes.mailto.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.mailto.1.name", "");
user_pref("gecko.handlerService.schemes.mailto.1.uriTemplate", "");
user_pref("gecko.handlerService.schemes.mailto.2.name", "");
user_pref("gecko.handlerService.schemes.mailto.2.uriTemplate", "");
user_pref("gecko.handlerService.schemes.mailto.3.name", "");
user_pref("gecko.handlerService.schemes.mailto.3.uriTemplate", "");

// Sending telemetry data and website address, about where and how the plugin failed
// Отправка телеметрических данных и адреса сайта, о том, где и как произошел сбой плагина
user_pref("dom.ipc.plugins.reportCrashURL", false);
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);

// Autocomplete user name and password
// Aвтоматическое заполнение имени пользователя и пароля
user_pref("signon.autofillForms", false);
user_pref("signon.autofillForms.http", false);

// Show password notifications for hacked sites
// Показывать уведомления о паролях для взломанных сайтов
user_pref("signon.management.page.breach-alerts.enabled", false);

// Smooth scrolling
// [NOTE] Recommended for brake applications, hardware failures, and problems with the video card.
// Плавная прокрутка
// [ЗАМЕТКА] Рекомендовано при торможениях, аппаратных сбоях и проблемах с видеокартой.
user_pref("general.smoothScroll", false);

// Path to save files
//		0 = Desktop
//		1 = Downloads
//		2 = Last used folder
// Путь для сохранения файлов
//		0 = Рабочий стол
//		1 = Загрузки
//		2 = Последняя используемая папка
user_pref("browser.download.folderList", 1);

// Adding downloads to the list of recent system documents
// Добавление загрузок в список последних документов системы
user_pref("browser.download.manager.addToRecentDocs", false);

// Show the "Open with" dialog box in the download window
// Показ диалогового окна "Открыть при помощи" в окне загрузки
user_pref("browser.download.forbid_open_with", true);

// Predictor
// [NOTE] This function creates the simplest connections to the server. When the cursor is over a certain link, the browser tries to predict the user's actions on the page in order to increase the performance and speed of content processing.
// Предсказатель
// [ЗАМЕТКА] Эта функция создает простейшие подключения к серверу. Когда курсор находится над определенной ссылкой, браузер пытается предсказать действия пользователя на странице, чтобы повысить производительность и скорость обработки контента.
user_pref("network.predictor.enabled", false);

// WebExtension restrictions for specific Mozilla domains
// Ограничения WebExtension для определенных доменов Mozilla
user_pref("extensions.webextensions.restrictedDomains", "");

// Install add-ons without signatures
// Установка дополнений без подписей
user_pref("xpinstall.signatures.required", false);

// Service Workers
// "Service workers" essentially act as proxy servers that sit between web apps, and the browser and network, are event driven, and can control the web page/site it is associated with, intercepting and modifying navigation and resource requests, and caching resources.
// [NOTE] This heavily loads the system resources and takes up most of the RAM.
// Service Workers
// "Service workers" по существу действуют как прокси-серверы, которые находятся между веб-приложениями, браузером и сетью, управляются событиями и могут управлять веб-страницей или сайтом, с которыми они связаны, перехватывать и изменять запросы навигации и ресурсов, а также кэшировать ресурсы.
// [ЗАМЕТКА] Это сильно нагружает ресурсы системы и занимает большую часть оперативной памяти.
user_pref("dom.serviceWorkers.enabled", false);

// Sketches of visited pages
// Эскизы посещенных страниц
user_pref("browser.pagethumbnails.capturing_disabled", true);

// User interface tour (UITour)
// Тур по интерфейсу пользователя
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");

// Web channel whitelist
// Белый список веб-каналов
user_pref("webchannel.allowObject.urlWhitelist", "");

// Block pop-ups
// Блокировать всплывающие окна
user_pref("dom.disable_open_during_load", true);
user_pref("dom.block_multiple_popups", true);

// Maximum number of pop-ups
// Максимальное количество всплывающих окон
user_pref("dom.popup_maximum", 3);

// Setting default permissions (resource://app/defaults/permissions) in the Permission Manager
// Установка по умолчанию разрешений (resource://app/defaults/permissions) в Менеджере Разрешений
user_pref("permissions.manager.defaultsUrl", "");

// Force punycode for internationalized domain names
// Принудительное использование Юникода для интернационализированных доменных имен
user_pref("network.IDN_show_punycode", true);

// File handle API
// [NOTE] Responsible for accessing lower-level file operations.
// API для обработки файлов
// [ЗАМЕТКА] Отвечает за доступ к более низкоуровневым файловым операциям.
user_pref("dom.fileHandle.enabled", false);

// Device storage API
// [NOTE] Responsible for access to the file system, this API allows the browser to read and/or write to the users files.
// API хранилища устройств
// [ЗАМЕТКА] Отвечает за доступ к файловой системе, данный API позволяет браузеру самостоятельно читать и/или писать в файлах пользователя.
user_pref("device.storage.enabled", false);

// Bookmark save format
//		TRUE = Save to HTML
//		FALSE = Save to SQLITE
// Формат сохранения закладок
//		TRUE = Сохранение в HTML
//		FALSE = Сохранение в SQLITE
user_pref("browser.bookmarks.autoExportHTML", false);

// Showing search results
//		TRUE = Open search result in current page
//		FALSE = Open search result in new page
// Показ результатов поиска
//		TRUE = Открывать результат поиска в текущей странице
//		FALSE = Открывать результат поиска на новой странице
user_pref("browser.search.openintab", true);

// Showing search results
//		TRUE = To wrap lines
//		FALSE = Do not wrap lines
// Показ результатов поиска
//		TRUE = Переносить строки
//		FALSE = Не переносить строки
user_pref("view_source.wrap_long_lines", true);

// CSS :visited selectors
// [ЗАМЕТКА] Disables the use of styles with the: visited selector to visited links, which prevents the user from finding out what URLs the user has in the browser history.
// CSS :visited селекторы
// [ЗАМЕТКА] Отключает применение к посещенным ссылкам стилей с селектором :visited, что предотвращает возможность выяснить, какие URL есть у пользователя в истории браузера.
user_pref("layout.css.visited_links_enabled", false);

// Closing the browser when closing the last tab
// Закрытие браузера при закрытии последней вкладки
user_pref("browser.tabs.closeWindowWithLastTab", false);

// Preloading documents or resources specified via <link rel = "preload">
// Предзагрузка документов или ресурсов, указанных через <link rel="preload">
user_pref("network.preload", false);

// Module LaterRun
// [NOTE] Displaying new users with various help information when "N" starts up the browser.
// Модуль LaterRun
// [ЗАМЕТКА] Показ новых пользователей различной справочной информация при "N" запуске браузера.
user_pref("browser.laterrun.enabled", false);

// Pocket extension
// Proprietary application Pocket (formerly known as Read It Later) allows you to save links to texts in the cloud storage for further reading, storing data about user activity and synchronizing them between all devices subscribed to the service. This can de-anonymize users and reveal their preferences.
// [NOTE] Pocket is a third-party (now owned by Mozilla) cloud service, which operates on the principle of "Save for later use".
// Расширение Pocket
// Проприетарное приложение Pocket (ранее известное как Read It Later) позволяет сохранять ссылки на тексты в облачном хранилище для их дальнейшего прочтения, храня таким образом данные о пользовательской активности и синхронизируя их между всеми устройствами, подписанным на услуги сервиса. Это может деанонимизировать пользователей и раскрыть их предпочтения.
// [ЗАМЕТКА] Pocket является сторонним (теперь принадлежит Mozilla) облачным сервисом, который работает по принципу "Сохранить для последующего использования".
user_pref("extensions.pocket.enabled", false);

// Extension Form Autofill
// Расширение Form Autofill
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.available", "off");
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.heuristics.enabled", false);
user_pref("extensions.formautofill.section.enabled", false);

// Web compatibility reporter
// Отправка отчетов о совместимости с интернетом
user_pref("extensions.webcompat-reporter.enabled", false);

// Black lists
// Черные списки
user_pref("extensions.blocklist.enabled", false);

// WebVR
user_pref("dom.vr.enabled", false);

// Gamepad control
// Управление геймпадом
user_pref("dom.gamepad.enabled", false);

// Shield
// Щит
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("app.normandy.first_run", false);

// Safe browsing
// Безопасный просмотр
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.allowOverride", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.provider.google.advisoryURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google.lists", "");
user_pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.google4.advisoryURL", "");
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "");
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.lists", "");
user_pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportURL", "");
user_pref("browser.safebrowsing.provider.google4.updateURL", "");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.lists", "");
user_pref("browser.safebrowsing.provider.mozilla.lists.base", "");
user_pref("browser.safebrowsing.provider.mozilla.lists.content", "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");

// Content blocking
// Блокировка контента
user_pref("browser.contentblocking.category", "custom");
user_pref("browser.contentblocking.cfr-milestone.enabled", false);
user_pref("browser.contentblocking.cryptomining.preferences.ui.enabled", false);
user_pref("browser.contentblocking.database.enabled", false);
user_pref("browser.contentblocking.fingerprinting.preferences.ui.enabled", false);
user_pref("browser.contentblocking.report.lockwise.enabled", false);
user_pref("browser.contentblocking.report.monitor.enabled", false);
user_pref("browser.contentblocking.report.cookie.url", "");
user_pref("browser.contentblocking.report.cryptominer.url", "");
user_pref("browser.contentblocking.report.fingerprinter.url", "");
user_pref("browser.contentblocking.report.lockwise.how_it_works.url", "");
user_pref("browser.contentblocking.report.lockwise.url", "");
user_pref("browser.contentblocking.report.monitor.how_it_works.url", "");
user_pref("browser.contentblocking.report.monitor.sign_in_url", "");
user_pref("browser.contentblocking.report.monitor.url", "");
user_pref("browser.contentblocking.report.proxy_extension.url", "");
user_pref("browser.contentblocking.report.social.url", "");
user_pref("browser.contentblocking.report.tracker.url", "");
user_pref("browser.contentblocking.reportBreakage.url", "");
user_pref("browser.contentblocking.report.lockwise.mobile-android.url", "");
user_pref("browser.contentblocking.report.lockwise.mobile-ios.url", "");
user_pref("browser.contentblocking.report.mobile-android.url", "");
user_pref("browser.contentblocking.report.mobile-ios.url", "");

// Исследования
// Studies
user_pref("app.shield.optoutstudies.enabled", false);
