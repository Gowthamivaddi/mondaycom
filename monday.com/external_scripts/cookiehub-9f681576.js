! function() {
    "use strict";

    function e() {
        this.mySettings = {
            enabled: true,
            container: null,
            domainId: 2978,
            revision: 1,
            encode: true,
            style: 'ch2-style-light',
            stylesheet: 'https://cookiehub.net/c2/css/9f681576.css',
            color: '#595AD4',
            accentTextColor: '#FFFFFF',
            showToken: false,
            learnMore: 'https://monday.com/terms/cookie-policy/',
            learnMoreTarget: '',
            enhancedAccessibility: 'false',
            cookie: {
                name: 'cookiehub',
                path: '/',
                domain: 'monday.com',
                expiryDays: 365,
                sameSite: 'Lax',
                secure: false,
            },
            features: {
                log: true,
                translate: true,
                blockCookies: false,
                hideBranding: true,
                gcm: true,
                gtm: true,
                optional: false
            },
            regions: [{
                "title": "Default",
                "region": ["G0"],
                "framework": "default",
                "bannerType": "notice",
                "consentType": "implicit",
                "banner": {
                    "theme": "bar",
                    "position": "bottom",
                    "actions": ["allow", "settings"],
                    "blockUI": false
                },
                "preferences": {
                    "theme": "default",
                    "actions": ["allow", "deny"],
                    "features": {
                        "categories": true,
                        "personalData": false,
                        "declaration": true,
                        "vendor": false,
                        "purposes": false
                    },
                    "consentMethod": "categories",
                    "displayType": "cookie-categories"
                },
                "icon": {
                    "theme": "none",
                    "position": "left",
                    "dark": false
                },
                "categories": {
                    "necessary": {
                        "type": "inherit",
                        "default": "inherit",
                        "tracking": "inherit"
                    },
                    "preferences": {
                        "type": "inherit",
                        "default": "inherit",
                        "tracking": "inherit"
                    },
                    "analytics": {
                        "type": "inherit",
                        "default": "inherit",
                        "tracking": "inherit"
                    },
                    "marketing": {
                        "type": "inherit",
                        "default": "inherit",
                        "tracking": "inherit"
                    },
                    "uncategorized": {
                        "type": "inherit",
                        "default": "inherit",
                        "tracking": "inherit"
                    }
                }
            }, {
                "title": "Cookie laws",
                "region": ["C1"],
                "framework": "default",
                "bannerType": "notice",
                "consentType": "explicit",
                "banner": {
                    "theme": "bar",
                    "position": "bottom",
                    "actions": ["allow", "settings"],
                    "blockUI": false
                },
                "preferences": {
                    "theme": "default",
                    "actions": ["allow", "deny"],
                    "features": {
                        "categories": true,
                        "personalData": false,
                        "declaration": true,
                        "vendor": false,
                        "purposes": false
                    },
                    "consentMethod": "categories",
                    "displayType": "cookie-categories"
                },
                "icon": {
                    "theme": "none",
                    "position": "left",
                    "dark": false
                },
                "categories": {
                    "necessary": {
                        "type": "inherit",
                        "default": "inherit",
                        "tracking": "inherit"
                    },
                    "preferences": {
                        "type": "inherit",
                        "default": "inherit",
                        "tracking": "inherit"
                    },
                    "analytics": {
                        "type": "inherit",
                        "default": "inherit",
                        "tracking": "inherit"
                    },
                    "marketing": {
                        "type": "inherit",
                        "default": "inherit",
                        "tracking": "inherit"
                    },
                    "uncategorized": {
                        "type": "inherit",
                        "default": "inherit",
                        "tracking": "inherit"
                    }
                }
            }, {
                "title": "Germany",
                "region": ["DE"],
                "framework": "default",
                "bannerType": "notice",
                "consentType": "explicit",
                "banner": {
                    "theme": "bar",
                    "position": "bottom",
                    "actions": ["allow", "settings"],
                    "blockUI": false
                },
                "preferences": {
                    "theme": "default",
                    "actions": ["allow", "deny"],
                    "features": {
                        "categories": true,
                        "personalData": false,
                        "declaration": true,
                        "vendor": false,
                        "purposes": false
                    },
                    "consentMethod": "categories",
                    "displayType": "cookie-categories"
                },
                "icon": {
                    "theme": "none",
                    "position": "left",
                    "dark": false,
                    "svg": "",
                    "brand": false
                },
                "categories": {
                    "necessary": {
                        "type": "inherit",
                        "default": "inherit",
                        "tracking": "inherit"
                    },
                    "preferences": {
                        "type": "inherit",
                        "default": "inherit",
                        "tracking": "inherit"
                    },
                    "analytics": {
                        "type": "explicit",
                        "default": "0",
                        "tracking": "inherit"
                    },
                    "marketing": {
                        "type": "explicit",
                        "default": "0",
                        "tracking": "inherit"
                    },
                    "uncategorized": {
                        "type": "inherit",
                        "default": "inherit",
                        "tracking": "inherit"
                    }
                }
            }, {
                "title": "United Kingdom",
                "region": ["GB"],
                "framework": "default",
                "bannerType": "notice",
                "consentType": "explicit",
                "banner": {
                    "theme": "bar",
                    "position": "bottom",
                    "actions": ["allow", "settings"],
                    "blockUI": false
                },
                "preferences": {
                    "theme": "default",
                    "actions": ["allow", "deny"],
                    "features": {
                        "categories": true,
                        "personalData": false,
                        "declaration": true,
                        "vendor": false,
                        "purposes": false
                    },
                    "consentMethod": "categories",
                    "displayType": "cookie-categories"
                },
                "icon": {
                    "theme": "none",
                    "position": "left",
                    "dark": false,
                    "svg": "",
                    "brand": false
                },
                "categories": {
                    "necessary": {
                        "type": "inherit",
                        "default": "inherit",
                        "tracking": "inherit"
                    },
                    "preferences": {
                        "type": "inherit",
                        "default": "inherit",
                        "tracking": "inherit"
                    },
                    "analytics": {
                        "type": "explicit",
                        "default": "0",
                        "tracking": "inherit"
                    },
                    "marketing": {
                        "type": "explicit",
                        "default": "0",
                        "tracking": "inherit"
                    },
                    "uncategorized": {
                        "type": "inherit",
                        "default": "inherit",
                        "tracking": "inherit"
                    }
                }
            }],
            gtm: {
                "enabled": true,
                "dataLayer": "dataLayer",
                "prefix": "cookiehub_",
                "delay": 200
            },
            gcm: {
                "enabled": true,
                "dataLayer": "dataLayer",
                "delay": 700
            },
            displayLanguage: 2,
            labels: [{
                language_id: 1,
                code: 'en',
                default: true,
                general_learn_more: 'Learn more',
                general_close: 'Close',
                general_session: 'Session',
                general_year: 'year',
                general_years: 'years',
                general_month: 'month',
                general_months: 'months',
                general_week: 'week',
                general_weeks: 'weeks',
                general_day: 'day',
                general_days: 'days',
                general_hour: 'hour',
                general_hours: 'hours',
                cookie_name: 'Name',
                cookie_hostname: 'Hostname',
                cookie_path: 'Path',
                cookie_expiry: 'Expiry',
                cookie_3rd_party: '3rd party',
                cookie_http_only: 'HTTP only',
                cookie_secure: 'Secure',
                widget_title: 'About cookies on this site',
                widget_message: 'We use cookies to ensure you have the best experience on our site, to analyze traffic, and enhance our marketing activities.',
                widget_btn_allow_all: 'Accept all cookies',
                widget_btn_settings: 'Cookie settings',
                settings_title: 'About cookies on this site',
                settings_tab: 'Cookie settings',
                settings_message: 'Cookies used on the site are categorized and below you can read about each category and allow or deny some or all of them. When categories than have been previously allowed are disabled, all cookies assigned to that category will be removed from your browser.\nAdditionally you can see a list of cookies assigned to each category and detailed information in the cookie declaration.',
                settings_btn_save: 'Save settings',
                settings_close: 'Close',
                declaration_tab: 'Cookie declaration',
                declaration_message: 'Cookies used on the site are categorized and below you can read about each category and allow or deny some or all of them. When categories than have been previously allowed are disabled, all cookies assigned to that category will be removed from your browser.\nAdditionally you can see a list of cookies assigned to each category and detailed information in the cookie declaration.',
                icon_btn: 'Cookie settings',
                necessary_title: 'Necessary cookies',
                necessary_description: 'These cookies enable essential website functions such as saving your login data and ensuring good performance on our site as you browse through it.',
                preferences_title: 'Functional Cookies',
                preferences_description: 'These cookies are set to support website functionality and features, as well as your preferences - such as selected currency, region, and language.',
                analytics_title: 'Performance & analytics cookies',
                analytics_description: 'These cookies help us understand and improve the use and performance of our services including what links visitors clicked on the most, and how they interact with the various areas and features on our website and apps.',
                marketing_title: 'Targeting cookies',
                marketing_description: 'These cookies assist us in providing advertising relevant to your interests on platforms such as Facebook, Google, and Twitter.',
                uncategorized_title: 'Other cookies',
                uncategorized_description: 'These cookies have not yet been categorized yet and will be soon.',
                general_learn_more_link: '',
                widget_btn_deny_all: 'Deny all',
                cookie_tags: 'Tags',
                widget_btn_ok: 'OK',
                widget_btn_donotsell: 'Do not sell or share my personal information',
                personal_data_tab: 'Personal data',
                personal_data_message: 'Under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA), California residents have the right to opt-out of the &bdquo;sale&ldquo; and &bdquo;sharing&ldquo; of their personal information (i.e., disclosures to other businesses or third parties for monetary or other valuable consideration).\nUse the toggle below to opt-out of sale and sharing of personal data.',
                donotsell_title: 'Allow sale and sharing of personal information',
                donotsell_description: '',
                token_title: 'Your choices',
                token_text: 'Below you will see your current consent state',
                token_categories: 'Consented categories',
                token_token: 'Your ID',
                token_datetime: 'Date and time of consent',
                general_categories: 'Categories',
                general_vendor: 'Vendor',
                general_vendors: 'Vendors',
                general_service: 'Service',
                general_services: 'Services',
                service_tab: 'Services',
                service_message: 'Services collecting data and/or setting cookies on this website are listed below. You can expand each service to view further details.',
                vendor_tab: 'Vendors',
                vendor_message: 'Our vendors are listed below. You can expand each vendor to view further details and modify consent for services.',
                vendor_privacy_policy: 'Privacy Policy',
                vendor_cookie_policy: 'Cookie Policy',
                tcf_notice_title: 'Your Privacy Matters',
                tcf_notice_message: 'It\'s your legal right to choose which information a website may store and have access to. With your permission, we and [vendors]our third-party partners[/vendors] store and/or access information on a device, such as unique identifiers in cookies and browsing data to collect and process personal data.\n<strong>We and our partners do the following data processing:</strong>[br][purposesfeatures]\nIf you accept any or all of these, you will have agreed to this website\'s use of cookies for these purposes. You may also choose to refuse consent, but certain personalized features of the site won\'t be available to you. Your consent choices will apply to this website only, and you can change your settings and withdraw consent at any time from the [privacypolicy]Privacy Policy[/privacypolicy] page or by clicking the <strong>Manage Consent</strong> button in the bottom left corner.',
                tcf_settings_title: 'Privacy Preference Center',
                tcf_vendor_tab: 'Partners',
                tcf_vendor_message: 'Our partners are listed below. Expand each partner to view and modify consent for purposes and features. Additionally, you can object to purposes on the basis of legitimate interest.',
                tcf_legitimate_interest_tab: 'Legitimate Interest',
                tcf_legitimate_interest_message: 'Some of our partners process personal data without your consent on the basis of a legitimate interest. You can review purposes below and by expanding, see a list of each partner claiming legitimate interest for the purpose. To object to the processing on the basis of legitimate interest for any of the purposes below, switch off the toggle beside it.',
                tcf_btn_allow_all: 'Accept All',
                tcf_btn_deny_all: 'Reject All',
                tcf_btn_settings: 'More Options',
                tcf_btn_save: 'Save & Close',
                tcf_btn_manage: 'Manage Consent',
                tcf_lifespan: 'Lifespan',
                tcf_storage_disclosure: 'Device Storage Disclosure',
                tcf_identifier: 'Identifier',
                tcf_type: 'Type',
                tcf_search: 'Search',
                tcf_filter: 'Filter',
                tcf_clear_filters: 'Clear filters',
                tcf_type_tf: 'Features',
                tcf_type_tsf: 'Special Features',
                tcf_type_tp: 'Purposes',
                tcf_type_tsp: 'Special Purposes',
                tcf_type_tlp: 'Legitimate Interest Purposes',
                tcf_vendor_cookies_and_other: 'In addition to using cookies, this vendor uses other methods to store and access data and information.',
                tcf_vendor_no_cookies: 'This vendor doesn\'t use cookies but he uses other methods to store and access data and information.',
                purpose_tab: 'Purposes & Features',
                purpose_message: 'You can accept or reject data collection and processing all at once by using the buttons below, or you can tailor individual consents by switching the toggles on and off beside each purpose or feature. We share this information with our partners on the basis of consent and legitimate interest. In the Vendors tab, you will find a list of our partners and have the option to customize your consent for each of them and object to data processing for those who claim a legitimate interest to process your data.\nThe choices you make are only relevant to this particular website and you can change your settings and withdraw consent at any time from the [privacypolicy]Privacy Policy[/privacypolicy] page or by clicking the Manage Consent button in the bottom left corner.',
                purpose_footer: 'By giving consent to the purposes and features listed here, you give us and our partners the ability to',
                descriptions: [{
                    key: 'wpml_browser_redirect_test',
                    value: 'WPML makes it easy to build multilingual sites and run them. It&rsquo;s powerful enough for corporate sites, yet simple for blogs.'
                }, {
                    key: 'oribili_user_guid',
                    value: 'Used to count unique visitors to a website'
                }, {
                    key: 'tvid',
                    value: 'Presents the user with relevant content and advertisement. The service is provided by third-party advertisement hubs, which facilitate real-time bidding for advertisers.'
                }, {
                    key: 'tv_UIDM',
                    value: 'Presents the user with relevant content and advertisement. The service is provided by third-party advertisement hubs, which facilitate real-time bidding for advertisers.'
                }, {
                    key: 'wfivefivec',
                    value: 'Set by Roku and is used for advertising purposes.'
                }]
            }, {
                language_id: 3,
                code: 'es',
                default: false,
                general_learn_more: 'M&aacute;s informaci&oacute;n',
                general_close: 'Cerrar',
                general_session: 'Sesi&oacute;n',
                general_year: 'a&ntilde;o',
                general_years: 'a&ntilde;os',
                general_month: 'mes',
                general_months: 'meses',
                general_week: 'semana',
                general_weeks: 'semanas',
                general_day: 'd&iacute;a',
                general_days: 'd&iacute;as',
                general_hour: 'hora',
                general_hours: 'horas',
                cookie_name: 'Nombre',
                cookie_hostname: 'Nombre de usuario',
                cookie_path: 'Ruta',
                cookie_expiry: 'Expiraci&oacute;n',
                cookie_3rd_party: 'Tercero',
                cookie_http_only: '&Uacute;nicamente HTTP',
                cookie_secure: 'Segura',
                widget_title: 'Acerca de las cookies de este sitio',
                widget_message: 'Usamos cookies para asegurarnos de que tengas la mejor experiencia en el sitio, analizar el tr&aacute;fico y mejorar las actividades de marketing.',
                widget_btn_allow_all: 'Permitir todas las cookies',
                widget_btn_settings: 'Configuraci&oacute;n de cookies',
                settings_title: 'Acerca de las cookies de este sitio',
                settings_tab: 'Configuraci&oacute;n de cookies',
                settings_message: 'Las cookies utilizadas en este sitio web est&aacute;n categorizadas, y m&aacute;s adelante usted podr&aacute; leer sobre cada categor&iacute;a y as&iacute; habilitar o bloquear algunas o todas las respectivas cookies. Cuando se deshabilitan categor&iacute;as que previamente estaban habilitadas, todas las cookies asignadas a esa categor&iacute;a ser&aacute;n eliminadas de su navegador web.\nAdicionalmente, usted podr&aacute; ver una lista de cookies asignadas a cada categor&iacute;a, e informaci&oacute;n detallada al respecto, en la declaraci&oacute;n de cookies.',
                settings_btn_save: 'Guardar configuraci&oacute;n',
                settings_close: 'Cerrar',
                declaration_tab: 'Declaraci&oacute;n de cookies',
                declaration_message: 'Las cookies utilizadas en este sitio web est&aacute;n categorizadas, y m&aacute;s adelante usted podr&aacute; leer sobre cada categor&iacute;a y as&iacute; habilitar o bloquear algunas o todas las respectivas cookies. Cuando se deshabilitan categor&iacute;as que previamente estaban habilitadas, todas las cookies asignadas a esa categor&iacute;a ser&aacute;n eliminadas de su navegador web.\nAdicionalmente, usted podr&aacute; ver una lista de cookies asignadas a cada categor&iacute;a, e informaci&oacute;n detallada al respecto, en la declaraci&oacute;n de cookies.',
                icon_btn: 'Configuraci&oacute;n de cookies',
                necessary_title: 'Cookies necesarias',
                necessary_description: 'Estas cookies permiten funciones esenciales del sitio web, como guardar tus datos de inicio de sesi&oacute;n y garantizar el buen rendimiento del sitio mientras navegas en &eacute;l.',
                preferences_title: 'Cookies funcionales',
                preferences_description: 'Estas cookies se configuran para respaldar la funcionalidad y las funciones del sitio web, as&iacute; como tus preferencias, como la moneda, la regi&oacute;n y el idioma seleccionados.',
                analytics_title: 'Cookies de rendimiento y an&aacute;lisis',
                analytics_description: 'Estas cookies nos ayudan a entender y mejorar el uso y el rendimiento de nuestros servicios, incluidos los enlaces en los que los visitantes hicieron m&aacute;s clic y c&oacute;mo interact&uacute;an con las diversas &aacute;reas y funciones del sitio web y las aplicaciones.',
                marketing_title: 'Cookies de segmentaci&oacute;n',
                marketing_description: 'Estas cookies nos ayudan a ofrecer publicidad relevante en funci&oacute;n de tus intereses en plataformas como Facebook, Google y Twitter.',
                uncategorized_title: 'Otras cookies',
                uncategorized_description: 'Estas cookies a&uacute;n no se clasificaron, pero lo haremos pronto.',
                general_learn_more_link: '',
                widget_btn_deny_all: 'Denegar todo',
                cookie_tags: 'Etiquetas',
                widget_btn_ok: 'OK',
                widget_btn_donotsell: 'No vender mi informaci&oacute;n personal',
                personal_data_tab: 'Informaci&oacute;n personal',
                personal_data_message: 'De acuerdo con la Ley de Privacidad del Consumidor de California (CCPA), los residentes de California tienen derecho a oponerse a la "venta" de sus datos personales (es decir, la divulgaci&oacute;n a otras empresas o terceros a cambio de una contraprestaci&oacute;n econ&oacute;mica o de otro tipo).\nUse el siguiente bot&oacute;n para oponerse a la venta de datos personales.',
                donotsell_title: 'Permitir la venta de informaci&oacute;n personal',
                donotsell_description: '',
                token_title: 'Tus elecciones',
                token_text: 'A continuaci&oacute;n ver&aacute; su estado de consentimiento actual',
                token_categories: 'Categor&iacute;as consensuadas',
                token_token: 'Tu identificaci&oacute;n',
                token_datetime: 'Fecha y hora del consentimiento',
                general_categories: 'Categor&iacute;as',
                general_vendor: 'Proveedor',
                general_vendors: 'Proveedores',
                general_service: 'Servicio',
                general_services: 'Servicios',
                service_tab: 'Servicios',
                service_message: 'A continuaci&oacute;n se relacionan los servicios que recopilan datos y/o establecen cookies en este sitio web. Ampl&iacute;e cada servicio para m&aacute;s informaci&oacute;n.',
                vendor_tab: 'Proveedores',
                vendor_message: 'Nuestros proveedores se relacionan a continuaci&oacute;n. Ampl&iacute;e cada proveedor para m&aacute;s informaci&oacute;n y modificar el consentimiento de los servicios.',
                vendor_privacy_policy: 'Pol&iacute;tica de privacidad',
                vendor_cookie_policy: 'Pol&iacute;tica de cookies',
                tcf_notice_title: 'Su privacidad es importante',
                tcf_notice_message: 'Es su derecho legal elegir la informaci&oacute;n que un sitio web puede almacenar y a la que puede tener acceso. Con su permiso, nosotros y [vendors]nuestros socios externos[/vendors] almacenamos y/o accedemos a la informaci&oacute;n en un dispositivo, como los identificadores &uacute;nicos en las cookies y los datos de navegaci&oacute;n para recopilar y procesar datos personales.\n<strong> Nosotros y nuestros socios realizamos el siguiente tratamiento de datos:</strong>[br][purposesfeatures]\nSi acepta alguno o todos, habr&aacute; aceptado el uso de cookies de este sitio web para estos fines. Tambi&eacute;n puede rechazar el consentimiento, pero algunas funciones personalizadas del sitio no estar&aacute;n disponibles para usted. Sus opciones de consentimiento se aplicar&aacute;n solo a este sitio web, y puede cambiar su configuraci&oacute;n y retirar el consentimiento en cualquier momento desde la p&aacute;gina [privacypolicy]Pol&iacute;tica de privacidad[/privacypolicy] o dando clic en el bot&oacute;n <strong>Gestionar consentimiento</strong> en el esquina inferior izquierda.',
                tcf_settings_title: 'Centro de preferencias de privacidad',
                tcf_vendor_tab: 'Socios',
                tcf_vendor_message: 'A continuaci&oacute;n se enumeran nuestros socios. Despliegue cada socio para ver y modificar el consentimiento para los fines y las funciones. Adem&aacute;s, puede oponerse a los fines sobre la base del inter&eacute;s leg&iacute;timo.',
                tcf_legitimate_interest_tab: 'Inter&eacute;s leg&iacute;timo',
                tcf_legitimate_interest_message: 'Algunos de nuestros socios procesan datos personales sin su consentimiento alegando un inter&eacute;s leg&iacute;timo. Puede revisar los fines a continuaci&oacute;n y, al ampliar, consultar la lista de cada socio que alega un inter&eacute;s leg&iacute;timo para el fin. Para objetar el tratamiento basado en un inter&eacute;s leg&iacute;timo para cualquiera de las finalidades que se indican a continuaci&oacute;n, desactive el interruptor que aparece al lado.',
                tcf_btn_allow_all: 'Aceptar todo',
                tcf_btn_deny_all: 'Rechazar todo',
                tcf_btn_settings: 'M&aacute;s opciones',
                tcf_btn_save: 'Guardar y cerrar',
                tcf_btn_manage: 'Gestionar consentimiento',
                tcf_lifespan: 'Vida &uacute;til',
                tcf_storage_disclosure: 'Divulgaci&oacute;n del almacenamiento de dispositivos',
                tcf_identifier: 'Identificador',
                tcf_type: 'Tipo',
                tcf_search: 'B&uacute;squeda',
                tcf_filter: 'Filtrar',
                tcf_clear_filters: 'Borrar filtros',
                tcf_type_tf: 'Caracter&iacute;sticas',
                tcf_type_tsf: 'Caracter&iacute;sticas especiales',
                tcf_type_tp: 'Fines',
                tcf_type_tsp: 'Fines especiales',
                tcf_type_tlp: 'Fines de inter&eacute;s leg&iacute;timo',
                tcf_vendor_cookies_and_other: 'Adem&aacute;s de las cookies, este proveedor usa otros m&eacute;todos para almacenar y acceder a datos e informaci&oacute;n.',
                tcf_vendor_no_cookies: 'Este proveedor no utiliza cookies pero s&iacute; otros m&eacute;todos para almacenar y acceder a datos e informaci&oacute;n.',
                purpose_tab: 'Fines y funciones',
                purpose_message: 'Puede aceptar o rechazar la recopilaci&oacute;n y el procesamiento de datos usando los botones que aparecen a continuaci&oacute;n, o puede ajustar los consentimientos individuales activando y desactivando los interruptores que aparecen junto a cada finalidad o funci&oacute;n. Compartimos esta informaci&oacute;n con nuestros socios con base en el consentimiento e inter&eacute;s leg&iacute;timo. En la pesta&ntilde;a Proveedores, encontrar&aacute; una lista de nuestros socios y podr&aacute; personalizar su consentimiento para cada uno de ellos y oponerse al tratamiento de datos para aquellos que aleguen un inter&eacute;s leg&iacute;timo para tratar sus datos.\nLas opciones que elija s&oacute;lo son relevantes para este sitio web en particular y puede cambiar su configuraci&oacute;n y retirar el consentimiento en cualquier momento desde la p&aacute;gina [privacypolicy]Pol&iacute;tica de privacidad[/privacypolicy] o dando clic en el bot&oacute;n Gestionar consentimiento en la esquina inferior izquierda.',
                purpose_footer: 'Al dar su consentimiento a los fines y funciones que se especifican aqu&iacute;, nos da a nosotros y a nuestros socios la capacidad de',
                descriptions: []
            }, {
                language_id: 4,
                code: 'fr',
                default: false,
                general_learn_more: 'En savoir plus',
                general_close: 'Fermer',
                general_session: 'Session',
                general_year: 'ann&eacute;e',
                general_years: 'ann&eacute;es',
                general_month: 'mois',
                general_months: 'mois',
                general_week: 'semaine',
                general_weeks: 'semaines',
                general_day: 'jour',
                general_days: 'jours',
                general_hour: 'heure',
                general_hours: 'heures',
                cookie_name: 'Nom',
                cookie_hostname: 'Nom d\'h&ocirc;te',
                cookie_path: 'Chemin',
                cookie_expiry: 'Chemin',
                cookie_3rd_party: 'Tierce partie',
                cookie_http_only: 'HTTP uniquement',
                cookie_secure: 'En s&eacute;curit&eacute;',
                widget_title: 'A propos des cookies sur ce site',
                widget_message: 'Nous utilisons les cookies pour collecter et analyser des informations sur les performances et l\'utilisation du site, pour fournir des fonctionnalit&eacute;s de m&eacute;dias sociaux et pour am&eacute;liorer et personnaliser le contenu et les publicit&eacute;s.',
                widget_btn_allow_all: 'Autoriser tous les cookies',
                widget_btn_settings: 'Param&egrave;tres des cookies',
                settings_title: 'A propos des cookies sur ce site',
                settings_tab: 'Param&egrave;tres des cookies',
                settings_message: 'Les cookies utilis&eacute;s sur le site sont cat&eacute;goris&eacute;s et ci-dessous, vous pouvez consulter chaque cat&eacute;gorie et autoriser ou refuser tout ou partie d\'entre elles. Lorsque les cat&eacute;gories qui n\'ont pas &eacute;t&eacute; autoris&eacute;es auparavant sont d&eacute;sactiv&eacute;es, tous les cookies assign&eacute;s &agrave; cette cat&eacute;gorie seront supprim&eacute;s de votre navigateur.\nDe plus, vous pouvez voir une liste des cookies assign&eacute;s &agrave; chaque cat&eacute;gorie et des informations d&eacute;taill&eacute;es dans la d&eacute;claration des cookies.',
                settings_btn_save: 'Sauvegarder les r&eacute;glages',
                settings_close: 'Fermer',
                declaration_tab: 'D&eacute;claration de cookie',
                declaration_message: 'Les cookies utilis&eacute;s sur le site sont cat&eacute;goris&eacute;s et ci-dessous, vous pouvez consulter chaque cat&eacute;gorie et autoriser ou refuser tout ou partie d\'entre elles. Lorsque les cat&eacute;gories qui n\'ont pas &eacute;t&eacute; autoris&eacute;es auparavant sont d&eacute;sactiv&eacute;es, tous les cookies assign&eacute;s &agrave; cette cat&eacute;gorie seront supprim&eacute;s de votre navigateur.\nDe plus, vous pouvez voir une liste des cookies assign&eacute;s &agrave; chaque cat&eacute;gorie et des informations d&eacute;taill&eacute;es dans la d&eacute;claration des cookies.',
                icon_btn: 'Param&egrave;tres des cookies',
                necessary_title: 'Cookies n&eacute;cessaires',
                necessary_description: 'Certains cookies sont n&eacute;cessaires pour fournir des fonctionnalit&eacute;s de base. Le site ne fonctionnera pas correctement sans ces cookies et ils sont activ&eacute;s par d&eacute;faut et ne peuvent pas &ecirc;tre d&eacute;sactiv&eacute;s.',
                preferences_title: 'Pr&eacute;f&eacute;rences',
                preferences_description: 'Les cookies de pr&eacute;f&eacute;rence permettent au site Web de m&eacute;moriser des informations afin de personnaliser la pr&eacute;sentation ou le comportement du site Web pour chaque utilisateur. Cela peut inclure le stockage de la devise, de la r&eacute;gion, de la langue ou du th&egrave;me de couleur s&eacute;lectionn&eacute;.',
                analytics_title: 'Cookies analytiques',
                analytics_description: 'Les cookies analytiques nous aident &agrave; am&eacute;liorer notre site Web en collectant et en rapportant des informations sur son utilisation.',
                marketing_title: 'Cookies marketing',
                marketing_description: 'Les cookies marketing sont utilis&eacute;s pour suivre les visiteurs sur les sites Web afin de permettre aux &eacute;diteurs d\'afficher des publicit&eacute;s pertinentes et attrayantes.',
                uncategorized_title: 'Autres cookies',
                uncategorized_description: 'Les cookies de cette cat&eacute;gorie n\'ont pas encore &eacute;t&eacute; cat&eacute;goris&eacute;s et le but peut &ecirc;tre inconnu pour le moment.',
                general_learn_more_link: '',
                widget_btn_deny_all: 'Tout refuser',
                cookie_tags: '&Eacute;tiquettes',
                widget_btn_ok: 'OK',
                widget_btn_donotsell: 'Ne pas vendre mes informations personnelles',
                personal_data_tab: 'Informations personnelles',
                personal_data_message: 'En vertu de la loi californienne sur la protection de la vie priv&eacute;e des consommateurs (CCPA), les r&eacute;sidents de Californie ont le droit de refuser la "vente" de leurs informations personnelles (c\'est-&agrave;-dire la divulgation &agrave; d\'autres entreprises ou &agrave; des tiers en &eacute;change d\'une contrepartie mon&eacute;taire ou d\'une autre valeur).\nUtilisez le bouton ci-dessous pour vous retirer de la vente de vos donn&eacute;es personnelles.',
                donotsell_title: 'Autoriser la vente d\'informations personnelles',
                donotsell_description: '',
                token_title: 'Vos choix',
                token_text: 'Ci-dessous, vous verrez l\'&eacute;tat actuel de votre consentement',
                token_categories: 'Cat&eacute;gories consenties',
                token_token: 'Votre pi&egrave;ce d\'identit&eacute;',
                token_datetime: 'Date et heure du consentement',
                general_categories: 'Cat&eacute;gories',
                general_vendor: 'Fournisseur',
                general_vendors: 'Fournisseurs',
                general_service: 'Service',
                general_services: 'Services',
                service_tab: 'Services',
                service_message: 'Les services qui collectent des donn&eacute;es et/ou installent des cookies sur ce site web sont &eacute;num&eacute;r&eacute;s ci-dessous. Vous pouvez d&eacute;velopper chaque service pour afficher plus de d&eacute;tails.',
                vendor_tab: 'Fournisseurs',
                vendor_message: 'Nos fournisseurs sont &eacute;num&eacute;r&eacute;s ci-dessous. Vous pouvez d&eacute;velopper chaque fournisseur pour voir plus de d&eacute;tails et modifier le consentement pour des services.',
                vendor_privacy_policy: 'Politique de Confidentialit&eacute;',
                vendor_cookie_policy: 'R&egrave;gles Relatives aux Cookies',
                tcf_notice_title: 'Votre Vie Priv&eacute;e est Primordiale',
                tcf_notice_message: 'Il est de votre droit de choisir les informations qu\'un site web peut stocker et auxquelles il peut avoir acc&egrave;s. Avec votre autorisation, nous et [vendors]nos partenaires tiers[/vendors] stockons et/ou acc&eacute;dons &agrave; des informations sur un appareil, telles que des identifiants uniques dans les cookies et les donn&eacute;es de navigation pour collecter et traiter des donn&eacute;es personnelles. [Nouvelle ligne]<strong>Nous et nos partenaires effectuons le traitement de donn&eacute;es suivant:</strong>.[br][purposesfeatures]\nSi vous acceptez l\'un ou l\'ensemble de ces &eacute;l&eacute;ments, vous aurez accept&eacute; que ce site Web utilise des cookies &agrave; ces fins. Vous pouvez &eacute;galement choisir de refuser tout consentement, mais certaines fonctions personnalis&eacute;es du site ne vous seront pas accessibles. Vos choix de consentement s\'appliqueront uniquement &agrave; ce site web, et vous pourrez modifier vos param&egrave;tres et renoncer &agrave; votre consentement &agrave; tout moment &agrave; partir de la page [privacypolicy]Politique de confidentialit&eacute;[/privacypolicy] ou en cliquant sur le bouton <strong>G&eacute;rer le consentement</strong> dans le coin inf&eacute;rieur gauche.',
                tcf_settings_title: 'Centre de Pr&eacute;f&eacute;rence en Mati&egrave;re de Confidentialit&eacute;',
                tcf_vendor_tab: 'Partenaires',
                tcf_vendor_message: 'Nos partenaires sont &eacute;num&eacute;r&eacute;s ci-dessous. D&eacute;veloppez chaque partenaire pour visualiser et modifier le consentement pour des objectifs et des fonctionnalit&eacute;s. De plus, vous pouvez objecter aux objectifs sur la base de l\'int&eacute;r&ecirc;t l&eacute;gitime.',
                tcf_legitimate_interest_tab: 'Int&eacute;r&ecirc;t L&eacute;gitime',
                tcf_legitimate_interest_message: 'Certains de nos partenaires traitent les donn&eacute;es personnelles sans votre consentement sur la base d\'un int&eacute;r&ecirc;t l&eacute;gitime. Vous pouvez examiner les finalit&eacute;s ci-dessous et, en les d&eacute;veloppant, voir une liste de chaque partenaire revendiquant un int&eacute;r&ecirc;t l&eacute;gitime pour la finalit&eacute;. Pour vous opposer au traitement sur la base de l\'int&eacute;r&ecirc;t l&eacute;gitime pour n\'importe laquelle des finalit&eacute;s ci-dessous, d&eacute;sactivez le commutateur qui se trouve &agrave; c&ocirc;t&eacute;.',
                tcf_btn_allow_all: 'Tout Accepter',
                tcf_btn_deny_all: 'Tout Rejeter',
                tcf_btn_settings: 'Plus d\'Options',
                tcf_btn_save: 'Enregistrer et Fermer',
                tcf_btn_manage: 'G&eacute;rer le Consentement',
                tcf_lifespan: 'Dur&eacute;e de Vie',
                tcf_storage_disclosure: 'Publication du Stockage de l\'Appareil',
                tcf_identifier: 'Identifiant',
                tcf_type: 'Saisir',
                tcf_search: 'Recherche',
                tcf_filter: 'Filtre',
                tcf_clear_filters: 'Supprimer les filtres',
                tcf_type_tf: 'Fonctionnalit&eacute;s',
                tcf_type_tsf: 'Fonctionnalit&eacute;s Sp&eacute;ciales',
                tcf_type_tp: 'Finalit&eacute;s',
                tcf_type_tsp: 'Finalit&eacute;s Sp&eacute;ciales',
                tcf_type_tlp: 'Finalit&eacute;s d\'Int&eacute;r&ecirc;t L&eacute;gitime',
                tcf_vendor_cookies_and_other: 'Outre l\'utilisation de cookies, ce fournisseur utilise d\'autres m&eacute;thodes pour stocker et acc&eacute;der aux donn&eacute;es et informations.',
                tcf_vendor_no_cookies: 'Ce fournisseur n\'utilise pas de cookies mais il utilise d\'autres m&eacute;thodes pour stocker et acc&eacute;der aux donn&eacute;es et informations.',
                purpose_tab: 'Finalit&eacute;s et Fonctionnalit&eacute;s',
                purpose_message: 'Vous pouvez accepter ou refuser la collecte et le traitement des donn&eacute;es d\'un seul coup en utilisant les boutons ci-dessous, ou vous pouvez personnaliser les consentements individuels en activant ou d&eacute;sactivant les boutons &agrave; c&ocirc;t&eacute; de chaque finalit&eacute; ou fonctionnalit&eacute;. Nous partageons ces informations avec nos partenaires sur la base du consentement et de l\'int&eacute;r&ecirc;t l&eacute;gitime. Dans l\'onglet Fournisseurs, vous trouverez une liste de nos partenaires et aurez la possibilit&eacute; de personnaliser votre consentement pour chacun d\'entre eux et de vous opposer au traitement de donn&eacute;es pour ceux qui pr&eacute;tendent avoir un int&eacute;r&ecirc;t l&eacute;gitime &agrave; traiter vos donn&eacute;es.\nLes choix que vous faites ne sont valables que pour ce site web particulier et vous pouvez modifier vos param&egrave;tres et retirer votre consentement &agrave; tout moment &agrave; partir de la page [privacypolicy]Politique de Confidentialit&eacute;[/privacypolicy] ou en cliquant sur le bouton G&eacute;rer le consentement dans le coin inf&eacute;rieur gauche.',
                purpose_footer: 'En donnant votre consentement aux finalit&eacute;s et fonctionnalit&eacute;s &eacute;num&eacute;r&eacute;es ici, vous nous donnez, ainsi qu\'&agrave; nos partenaires, la possibilit&eacute; de',
                descriptions: []
            }, {
                language_id: 5,
                code: 'de',
                default: false,
                general_learn_more: 'Lernen Sie mehr',
                general_close: 'Schlie&szlig;en',
                general_session: 'Browsersitzung',
                general_year: 'jahr',
                general_years: 'jahre',
                general_month: 'monat',
                general_months: 'monate',
                general_week: 'woche',
                general_weeks: 'wochen',
                general_day: 'tag',
                general_days: 'tage',
                general_hour: 'stunde',
                general_hours: 'stunden',
                cookie_name: 'Name',
                cookie_hostname: 'Hostname',
                cookie_path: 'Pfad',
                cookie_expiry: 'Ablauf',
                cookie_3rd_party: 'Drittanbieter',
                cookie_http_only: 'HTTP nur',
                cookie_secure: 'Sicher',
                widget_title: 'Wir verwenden Cookies ',
                widget_message: 'Wir setzen Cookies ein, um die Nutzung unserer Webseiten zu analysieren, einschlie&szlig;lich des Such und Surfverlaufs, Suchbegriffen und Ihnen auf Ihr Nutzungsverhalten angepasste Informationen anbieten zu k&ouml;nnen.',
                widget_btn_allow_all: 'Alle Cookies erlauben',
                widget_btn_settings: 'Einstellungen',
                settings_title: 'Wir verwenden Cookies ',
                settings_tab: 'Cookie Einstellungen',
                settings_message: 'Die auf der Website verwendeten Cookies sind kategorisiert. Nachfolgend k&ouml;nnen Sie Informationen zu den einzelnen Kategorien lesen und einige oder alle zulassen oder ablehnen. Wenn Kategorien deaktiviert sind, die zuvor zugelassen wurden, werden alle dieser Kategorie zugewiesenen Cookies aus Ihrem Browser entfernt.\nZus&auml;tzlich sehen Sie eine Cookies-Liste und jede zugeordnete Kategorie und weitere Informationen in der Cookie-Erkl&auml;rung.',
                settings_btn_save: 'Einstellungen speichern',
                settings_close: 'Schlie&szlig;en',
                declaration_tab: 'Cookie-Erkl&auml;rung',
                declaration_message: 'Die auf der Website verwendeten Cookies sind kategorisiert. Nachfolgend k&ouml;nnen Sie Informationen zu den einzelnen Kategorien lesen und einige oder alle zulassen oder ablehnen. Wenn Kategorien deaktiviert sind, die zuvor zugelassen wurden, werden alle dieser Kategorie zugewiesenen Cookies aus Ihrem Browser entfernt.\nZus&auml;tzlich sehen Sie eine Cookies-Liste und jede zugeordnete Kategorie und weitere Informationen in der Cookie-Erkl&auml;rung.',
                icon_btn: 'Cookie Einstellungen',
                necessary_title: 'Notwendige Cookies',
                necessary_description: 'Notwendige Cookies stellen die Kernfunktionalit&auml;ten dieser Webseite zur Verf&uuml;gung. Ohne diese Cookies kann die Website nicht richtig funktionieren. Sie sind normalerweise aktiviert und k&ouml;nnen nicht deaktiviert werden.',
                preferences_title: 'Benutzereinstellungen',
                preferences_description: 'Cookies erm&ouml;glichen es uns dar&uuml;ber hinaus, Informationen &uuml;ber die Benutzung zu erhalten und unsere website den Anforderungen unserer Besucher anzupassen und zu optimieren. Dies kann das Speichern ausgew&auml;hlter W&auml;hrungen, Regionen, Sprachen oder Farbthemen beinhalten.',
                analytics_title: 'Analytische Cookies',
                analytics_description: 'Analytische Cookies helfen uns, unsere Website zu verbessern, indem sie Informationen &uuml;ber ihre Nutzung sammeln und melden.',
                marketing_title: 'Marketing Cookies',
                marketing_description: 'Mithilfe von Marketing-Cookies werden Besucher &uuml;ber Websites hinweg verfolgt, um relevante und ansprechende Werbung anzuzeigen.',
                uncategorized_title: 'Andere Cookies',
                uncategorized_description: 'Die Cookies in dieser Kategorie wurden noch nicht kategorisiert und der Zweck ist derzeit m&ouml;glicherweise nicht bekannt.',
                general_learn_more_link: '',
                widget_btn_deny_all: 'Alle ablehnen',
                cookie_tags: 'Etiketten',
                widget_btn_ok: 'OK',
                widget_btn_donotsell: 'Verkaufen Sie nicht meine pers&ouml;nlichen Daten',
                personal_data_tab: 'Pers&ouml;nliche Informationen',
                personal_data_message: 'Nach dem kalifornischen Verbraucherschutzgesetz (CCPA) haben die Einwohner Kaliforniens das Recht, dem "Verkauf" ihrer pers&ouml;nlichen Daten zu widersprechen (d. h. der Weitergabe an andere Unternehmen oder Dritte gegen Geld oder andere wertvolle Gegenleistungen).\nBenutzen Sie den Schalter unten, um den Verkauf von pers&ouml;nlichen Daten abzulehnen.',
                donotsell_title: '',
                donotsell_description: 'Verkauf von pers&ouml;nlichen Informationen zulassen',
                token_title: 'Deine Wahlen',
                token_text: 'Unten sehen Sie Ihren aktuellen Zustimmungsstatus',
                token_categories: 'Eingewilligte Kategorien',
                token_token: 'Ihre ID',
                token_datetime: 'Datum und Uhrzeit der Einwilligung',
                general_categories: 'Kategorien',
                general_vendor: 'Verk&auml;ufer',
                general_vendors: 'Verk&auml;ufer',
                general_service: 'Dienst',
                general_services: 'Dienste',
                service_tab: 'Dienste',
                service_message: 'Die Dienste, die auf dieser Website Daten sammeln und/oder Cookies setzen, sind unten aufgef&uuml;hrt. Sie k&ouml;nnen jeden Dienst erweitern, um weitere Details zu sehen.',
                vendor_tab: 'Verk&auml;ufer',
                vendor_message: 'Unsere Anbieter sind unten aufgef&uuml;hrt. Sie k&ouml;nnen jeden Anbieter erweitern, um weitere Details anzuzeigen und die Zustimmung zu den Dienstleistungen zu &auml;ndern.',
                vendor_privacy_policy: 'Datenschutzbestimmungen',
                vendor_cookie_policy: 'Datenschutzbestimmungen',
                tcf_notice_title: 'Ihr Datenschutz ist wichtig',
                tcf_notice_message: 'Sie haben das Recht zu w&auml;hlen, welche Informationen eine Website speichern darf und auf welche sie zugreifen kann. Mit Ihrer Erlaubnis speichern und [vendors] unsere Drittanbieter[/vendors]  Informationen auf einem Ger&auml;t und/oder greifen darauf zu, wie z. B. eindeutige Identifikatoren in Cookies und Browsing-Daten, um personenbezogene Daten zu sammeln und zu verarbeiten.\n<strong>Wir und unsere Partner f&uuml;hren folgende Datenverarbeitung durch:</strong>[br][purposesfeatures]\nWenn Sie eine oder alle dieser Optionen akzeptieren, stimmen Sie der Verwendung von Cookies durch diese Website f&uuml;r diese Zwecke zu. Sie k&ouml;nnen Ihre Zustimmung auch verweigern, aber dann stehen Ihnen bestimmte personalisierte Funktionen der Website nicht zur Verf&uuml;gung. Sie k&ouml;nnen Ihre Einstellungen jederzeit auf der Seite mit den [privacypolicy]Datenschutzrichtlinien[/privacypolicy] oder durch Klicken auf die Schaltfl&auml;che <strong>Zustimmung verwalten</strong> in der linken unteren Ecke &auml;ndern und Ihre Zustimmung widerrufen.',
                tcf_settings_title: 'Zentrum f&uuml;r Datenschutzpr&auml;ferenzen',
                tcf_vendor_tab: 'Partner',
                tcf_vendor_message: 'Unsere Partner sind unten aufgef&uuml;hrt. Erweitern Sie jeden Partner, um die Zustimmung f&uuml;r Zwecke und Funktionen anzuzeigen und zu &auml;ndern. Au&szlig;erdem k&ouml;nnen Sie den Zwecken auf der Grundlage eines berechtigten Interesses widersprechen.',
                tcf_legitimate_interest_tab: 'Rechtm&auml;&szlig;iges Interesse',
                tcf_legitimate_interest_message: 'Einige unserer Partner verarbeiten personenbezogene Daten ohne Ihre Zustimmung auf der Grundlage eines berechtigten Interesses. Sie k&ouml;nnen die nachstehenden Zwecke &uuml;berpr&uuml;fen und durch Erweitern eine Liste der einzelnen Partner anzeigen, die ein berechtigtes Interesse f&uuml;r den jeweiligen Zweck geltend machen. Um der Verarbeitung auf der Grundlage eines berechtigten Interesses f&uuml;r einen der unten aufgef&uuml;hrten Zwecke zu widersprechen, schalten Sie das K&auml;stchen daneben aus.',
                tcf_btn_allow_all: 'Alle akzeptieren',
                tcf_btn_deny_all: 'Alle ablehnen',
                tcf_btn_settings: 'Mehr Optionen',
                tcf_btn_save: 'Speichern & schlie&szlig;en',
                tcf_btn_manage: 'Zustimmungen verwalten',
                tcf_lifespan: 'Laufzeit',
                tcf_storage_disclosure: 'Offenlegung der Ger&auml;tespeicherung',
                tcf_identifier: 'Bezeichnung',
                tcf_type: 'Art',
                tcf_search: 'Suche',
                tcf_filter: 'Filter',
                tcf_clear_filters: 'Filter l&ouml;schen',
                tcf_type_tf: 'Eigenschaften',
                tcf_type_tsf: 'Besondere Eigenschaften',
                tcf_type_tp: 'Zwecke',
                tcf_type_tsp: 'Besondere Zwecke',
                tcf_type_tlp: 'Legitimes Interesse Zwecke',
                tcf_vendor_cookies_and_other: 'Neben der Verwendung von Cookies verwendet dieser Anbieter auch andere Methoden zur Speicherung und zum Zugriff auf Daten und Informationen.',
                tcf_vendor_no_cookies: 'Dieser Anbieter verwendet keine Cookies, sondern andere Methoden zur Speicherung und zum Zugriff auf Daten und Informationen.',
                purpose_tab: 'Zwecke & Merkmale',
                purpose_message: 'Sie k&ouml;nnen der Datenerfassung und -verarbeitung auf einmal zustimmen oder sie ablehnen, indem Sie die Schaltfl&auml;chen unten verwenden, oder Sie k&ouml;nnen Ihre Zustimmung individuell anpassen, indem Sie die Kippschalter neben den einzelnen Zwecken oder Funktionen ein- und ausschalten. Wir teilen diese Informationen mit unseren Partnern auf der Grundlage der Zustimmung und des berechtigten Interesses. Auf der Registerkarte "Anbieter" finden Sie eine Liste unserer Partner und haben die M&ouml;glichkeit, Ihre Zustimmung f&uuml;r jeden einzelnen von ihnen anzupassen und der Datenverarbeitung f&uuml;r diejenigen zu widersprechen, die ein berechtigtes Interesse an der Verarbeitung Ihrer Daten geltend machen.\nDie von Ihnen getroffenen Entscheidungen sind nur f&uuml;r diese spezielle Website relevant, und Sie k&ouml;nnen Ihre Einstellungen jederzeit auf der[privacypolicy]Datenschutzbestimmungen [/privacypolicy] Seite &auml;ndern und Ihre Zustimmung zur&uuml;ckziehen, indem Sie auf die Schaltfl&auml;che Zustimmung verwalten in der linken unteren Ecke klicken.',
                purpose_footer: 'Indem Sie den hier aufgef&uuml;hrten Zwecken und Funktionen zustimmen, geben Sie uns und unseren Partnern die M&ouml;glichkeit',
                descriptions: []
            }, {
                language_id: 6,
                code: 'it',
                default: false,
                general_learn_more: 'Per saperne di pi&ugrave;',
                general_close: 'Chiudi',
                general_session: 'Sessione',
                general_year: 'anno',
                general_years: 'anni',
                general_month: 'mese',
                general_months: 'mesi',
                general_week: 'settimana',
                general_weeks: 'settimane',
                general_day: 'giorno',
                general_days: 'giorni',
                general_hour: 'ora',
                general_hours: 'ore',
                cookie_name: 'Nome',
                cookie_hostname: 'Dominio',
                cookie_path: 'Percorso',
                cookie_expiry: 'Scadenza',
                cookie_3rd_party: '3&deg; Parte',
                cookie_http_only: 'HTTP solo',
                cookie_secure: 'Sicuro',
                widget_title: 'Informazioni sui cookie presenti in questo sito',
                widget_message: 'Utilizziamo i cookie per raccogliere e analizzare informazioni sulle prestazioni e sull\'utilizzo del sito, per fornire funzionalit&agrave; di social media e per migliorare e personalizzare contenuti e pubblicit&agrave; presenti.',
                widget_btn_allow_all: 'Consenti tutti i cookie',
                widget_btn_settings: 'Impostazioni dei cookie',
                settings_title: 'Informazioni sui cookie presenti in questo sito',
                settings_tab: 'Impostazioni dei cookie',
                settings_message: 'Abbiamo classificato i cookie presenti sul sito, di seguito potrai leggerne lo scopo per ogni categoria, con la facolt&agrave; di bloccare i cookie parzialmente oppure totalmente. Quando categorie precedentemente autorizzate vengono disabilitate, tutti i cookie assegnati a tale categoria vengono rimossi dal browser dell\'utente.\n&Egrave; inoltre possibile visualizzare un elenco di cookie assegnati per ciascuna categoria, con ulteriori informazioni nella dichiarazione dei cookie.',
                settings_btn_save: 'Salva impostazioni',
                settings_close: 'Chiudi',
                declaration_tab: 'Dichiarazione dei cookie',
                declaration_message: 'Abbiamo classificato i cookie presenti sul sito, di seguito potrai leggerne lo scopo per ogni categoria, con la facolt&agrave; di bloccare i cookie parzialmente oppure totalmente. Quando categorie precedentemente autorizzate vengono disabilitate, tutti i cookie assegnati a tale categoria vengono rimossi dal browser dell\'utente.\n&Egrave; inoltre possibile visualizzare un elenco di cookie assegnati per ciascuna categoria, con ulteriori informazioni nella dichiarazione dei cookie.',
                icon_btn: 'Impostazioni dei cookie',
                necessary_title: 'Cookie necessari',
                necessary_description: 'Alcuni cookie sono necessari per fornire funzionalit&agrave; di base. Il sito web non funzioner&agrave; correttamente senza questi cookie ed essi sono abilitati per impostazione predefinita e non possono essere disabilitati al fine di poter navigare sul sito.',
                preferences_title: 'Preferenze',
                preferences_description: 'I cookie di preferenze consentono al sito web di ricordare alcune informazioni utili per personalizzare il modo in cui il sito web appare o si comporta per ogni utente. Ci&ograve; pu&ograve; includere la memorizzazione di valuta, regione, lingua o tema e colori selezionati.',
                analytics_title: 'Cookie analitici',
                analytics_description: 'I cookie analitici ci aiutano a migliorare il nostro sito web raccogliendo e segnalando informazioni sull&rsquo;utilizzo dello stesso da parte dell&rsquo;utente.',
                marketing_title: 'Cookie di marketing',
                marketing_description: 'I cookie di marketing vengono utilizzati per tracciare i visitatori sui siti web e consentire agli inserzionisti di visualizzare annunci pubblicitari pertinenti e coinvolgenti.',
                uncategorized_title: 'Altri cookie',
                uncategorized_description: 'I cookie di questa categoria non sono ancora stati classificati e il loro scopo potrebbe essere sconosciuto al momento.',
                general_learn_more_link: '',
                widget_btn_deny_all: 'Nega tutto',
                cookie_tags: 'Etichette',
                widget_btn_ok: 'OK',
                widget_btn_donotsell: 'Non vendere le mie informazioni personali',
                personal_data_tab: 'Informazioni personali',
                personal_data_message: 'Ai sensi del California Consumer Privacy Act (CCPA), i residenti della California hanno il diritto di rinunciare alla "vendita" delle proprie informazioni personali (ad esempio, alla divulgazione ad altre aziende o a terzi a titolo oneroso o di altro tipo).\nUtilizzare il tasto di seguito per annullare la vendita dei dati personali.',
                donotsell_title: 'Consenti la vendita di informazioni personali',
                donotsell_description: '',
                token_title: 'Le tue scelte',
                token_text: 'Di seguito vedrai lo stato del tuo consenso attuale',
                token_categories: 'Categorie consentite',
                token_token: 'Il tuo ID',
                token_datetime: 'Data e ora del consenso',
                general_categories: 'Categorie',
                general_vendor: 'Fornitore',
                general_vendors: 'Fornitori',
                general_service: 'Servizio',
                general_services: 'Servizi',
                service_tab: 'Servizi',
                service_message: 'Di seguito sono elencati i servizi di raccolta dati e/o impostazione cookie su questo sito web. &Egrave; possibile espandere ciascun servizio per visualizzare ulteriori dettagli.',
                vendor_tab: 'Fornitori',
                vendor_message: 'I nostri fornitori sono elencati di seguito. Puoi espandere ciascun fornitore per visualizzare ulteriori dettagli e modificare il consenso per i servizi.',
                vendor_privacy_policy: 'Politica sulla Riservatezza',
                vendor_cookie_policy: 'Gestione dei Cookie',
                tcf_notice_title: 'La tua Privacy &egrave; Importante',
                tcf_notice_message: '&Egrave; un tuo diritto legale scegliere quali informazioni un sito Web pu&ograve; archiviare e a cui avere accesso. Con la tua autorizzazione, noi e [vendors]i nostri partner di terze parti[/vendors] memorizziamo e/o accediamo alle informazioni su un dispositivo, come identificatori univoci nei cookie e dati di navigazione per raccogliere ed elaborare dati personali.\n<strong> Noi e i nostri partner eseguiamo il seguente trattamento dei dati:</strong>[br][purposesfeatures]\nSe accetti uno o tutti questi, avrai acconsentito all\'uso dei cookie da parte di questo sito Web per questi scopi. Puoi anche scegliere di negare il consenso, ma alcune funzionalit&agrave; personalizzate del sito non saranno disponibili per te. Le tue scelte di consenso si applicheranno solo a questo sito Web e puoi modificare le tue impostazioni e revocare il consenso in qualsiasi momento dalla pagina [privacypolicy]Informativa sulla privacy[/privacypolicy] o facendo clic sul pulsante <strong>Gestisci il consenso</strong> nella angolo in basso a sinistra.',
                tcf_settings_title: 'Centro Preferenze Privacy',
                tcf_vendor_tab: 'Partner',
                tcf_vendor_message: 'I nostri partner sono elencati di seguito. Espandi ciascun partner per visualizzare e modificare il consenso per scopi e funzionalit&agrave;. Inoltre, puoi opporti alle finalit&agrave; sulla base del legittimo interesse.',
                tcf_legitimate_interest_tab: 'Legittimo Interesse',
                tcf_legitimate_interest_message: 'Alcuni dei nostri partner trattano i dati personali senza il tuo consenso sulla base di un interesse legittimo. Puoi esaminare gli scopi di seguito e, espandendo, vedere un elenco di ciascun partner che rivendica un interesse legittimo per lo scopo. Per opporsi al trattamento sulla base di un legittimo interesse per una qualsiasi delle finalit&agrave; sotto riportate, disattivare l\'interruttore accanto ad esso.',
                tcf_btn_allow_all: 'Accetta tutti',
                tcf_btn_deny_all: 'Rifiuta tutti',
                tcf_btn_settings: 'Pi&ugrave; opzioni',
                tcf_btn_save: 'Salva e Chiudi',
                tcf_btn_manage: 'Gestisci Consenso',
                tcf_lifespan: 'Vita Utile',
                tcf_storage_disclosure: 'Divulgazione dell\'Archiviazione del Dispositivo',
                tcf_identifier: 'Identificatore',
                tcf_type: 'Tipo',
                tcf_search: 'Cerca',
                tcf_filter: 'Filtro',
                tcf_clear_filters: 'Cerca filtri',
                tcf_type_tf: 'Caratteristiche',
                tcf_type_tsf: 'Caratteristiche Speciali',
                tcf_type_tp: 'Scopi',
                tcf_type_tsp: 'Scopi Speciali',
                tcf_type_tlp: 'Finalit&agrave; di interesse legittimo',
                tcf_vendor_cookies_and_other: 'Oltre a utilizzare i cookie, questo fornitore utilizza altri metodi per archiviare e accedere a dati e informazioni.',
                tcf_vendor_no_cookies: 'Questo venditore non utilizza i cookie ma utilizza altri metodi per memorizzare e accedere a dati e informazioni.',
                purpose_tab: 'Finalit&agrave; e Caratteristiche',
                purpose_message: 'Puoi accettare o rifiutare la raccolta e l\'elaborazione dei dati in una sola volta utilizzando i pulsanti sottostanti, oppure puoi personalizzare i consensi individuali attivando e disattivando i pulsanti accanto a ciascuna finalit&agrave; o funzione. Condividiamo queste informazioni con i nostri partner sulla base del consenso e del legittimo interesse. Nella scheda Fornitori, troverai un elenco dei nostri partner e avrai la possibilit&agrave; di personalizzare il tuo consenso per ciascuno di essi e opporti al trattamento dei dati per coloro che rivendicano un legittimo interesse al trattamento dei tuoi dati.\nLe scelte che fai sono rilevanti solo per questo particolare sito web e puoi modificare le tue impostazioni e revocare il consenso in qualsiasi momento dalla pagina [privacypolicy]Privacy Policy[/privacypolicy] o facendo clic sul pulsante Gestisci Consenso nell\'angolo in basso a sinistra.',
                purpose_footer: 'Dando il consenso alle finalit&agrave; e alle funzionalit&agrave; elencate qui, dai a noi e ai nostri partner la possibilit&agrave; di',
                descriptions: []
            }, {
                language_id: 7,
                code: 'ru',
                default: false,
                general_learn_more: '&#1059;&#1079;&#1085;&#1072;&#1090;&#1100; &#1073;&#1086;&#1083;&#1100;&#1096;&#1077;',
                general_close: '&#1047;&#1072;&#1082;&#1088;&#1099;&#1090;&#1100;',
                general_session: '&#1057;&#1077;&#1089;&#1089;&#1080;&#1103;',
                general_year: '&#1043;&#1086;&#1076;',
                general_years: '&#1051;&#1077;&#1090;',
                general_month: '&#1052;&#1077;&#1089;&#1103;&#1094;',
                general_months: '&#1052;&#1077;&#1089;&#1103;&#1094;&#1077;&#1074;',
                general_week: '&#1053;&#1077;&#1076;&#1077;&#1083;&#1103;',
                general_weeks: '&#1053;&#1077;&#1076;&#1077;&#1083;&#1100;',
                general_day: '&#1044;&#1077;&#1085;&#1100;',
                general_days: '&#1044;&#1085;&#1077;&#1081;',
                general_hour: '&#1063;&#1072;&#1089;',
                general_hours: '&#1063;&#1072;&#1089;&#1086;&#1074;',
                cookie_name: '&#1053;&#1072;&#1079;&#1074;&#1072;&#1085;&#1080;&#1077;',
                cookie_hostname: '&#1044;&#1086;&#1084;&#1077;&#1085;',
                cookie_path: '&#1055;&#1091;&#1090;&#1100;',
                cookie_expiry: '&#1048;&#1089;&#1090;&#1077;&#1095;&#1077;&#1085;&#1080;&#1077; &#1089;&#1088;&#1086;&#1082;&#1072;',
                cookie_3rd_party: '&#1058;&#1088;&#1077;&#1090;&#1100;&#1103; &#1089;&#1090;&#1086;&#1088;&#1086;&#1085;&#1072;',
                cookie_http_only: 'HTTP &#1090;&#1086;&#1083;&#1100;&#1082;&#1086;',
                cookie_secure: '&#1073;&#1077;&#1079;&#1086;&#1087;&#1072;&#1089;&#1085;&#1099;',
                widget_title: '&#1054; &#1092;&#1072;&#1081;&#1083;&#1072;&#1093; cookie &#1085;&#1072; &#1101;&#1090;&#1086;&#1084; &#1089;&#1072;&#1081;&#1090;&#1077;',
                widget_message: '&#1057; &#1087;&#1086;&#1084;&#1086;&#1097;&#1100;&#1102; &#1092;&#1072;&#1081;&#1083;&#1086;&#1074; cookie &#1084;&#1099; &#1076;&#1077;&#1083;&#1072;&#1077;&#1084; &#1089;&#1072;&#1081;&#1090; &#1091;&#1076;&#1086;&#1073;&#1085;&#1077;&#1077; &#1076;&#1083;&#1103; &#1087;&#1086;&#1083;&#1100;&#1079;&#1086;&#1074;&#1072;&#1090;&#1077;&#1083;&#1103;, &#1072;&#1085;&#1072;&#1083;&#1080;&#1079;&#1080;&#1088;&#1091;&#1077;&#1084; &#1090;&#1088;&#1072;&#1092;&#1080;&#1082; &#1080; &#1089;&#1086;&#1074;&#1077;&#1088;&#1096;&#1077;&#1085;&#1089;&#1090;&#1074;&#1091;&#1077;&#1084; &#1084;&#1072;&#1088;&#1082;&#1077;&#1090;&#1080;&#1085;&#1075;&#1086;&#1074;&#1099;&#1077; &#1072;&#1082;&#1090;&#1080;&#1074;&#1085;&#1086;&#1089;&#1090;&#1080;.',
                widget_btn_allow_all: '&#1056;&#1072;&#1079;&#1088;&#1077;&#1096;&#1080;&#1090;&#1100; cookie',
                widget_btn_settings: '&#1053;&#1072;&#1089;&#1090;&#1088;&#1086;&#1081;&#1082;&#1080;',
                settings_title: '&#1054; &#1092;&#1072;&#1081;&#1083;&#1072;&#1093; cookie &#1085;&#1072; &#1101;&#1090;&#1086;&#1084; &#1089;&#1072;&#1081;&#1090;&#1077;',
                settings_tab: '&#1053;&#1072;&#1089;&#1090;&#1088;&#1086;&#1081;&#1082;&#1080; &#1092;&#1072;&#1081;&#1083;&#1086;&#1074; cookie',
                settings_message: '&#1060;&#1072;&#1081;&#1083;&#1099; cookie, &#1080;&#1089;&#1087;&#1086;&#1083;&#1100;&#1079;&#1091;&#1077;&#1084;&#1099;&#1077; &#1085;&#1072; &#1076;&#1072;&#1085;&#1085;&#1086;&#1084; &#1089;&#1072;&#1081;&#1090;&#1077;, &#1088;&#1072;&#1079;&#1076;&#1077;&#1083;&#1077;&#1085;&#1099; &#1085;&#1072; &#1082;&#1072;&#1090;&#1077;&#1075;&#1086;&#1088;&#1080;&#1080;, &#1080; &#1085;&#1080;&#1078;&#1077; &#1074;&#1099; &#1084;&#1086;&#1078;&#1077;&#1090;&#1077; &#1087;&#1088;&#1086;&#1095;&#1080;&#1090;&#1072;&#1090;&#1100; &#1086; &#1082;&#1072;&#1078;&#1076;&#1086;&#1081; &#1082;&#1072;&#1090;&#1077;&#1075;&#1086;&#1088;&#1080;&#1080; &#1080; &#1088;&#1072;&#1079;&#1088;&#1077;&#1096;&#1080;&#1090;&#1100; &#1080;&#1083;&#1080; &#1079;&#1072;&#1087;&#1088;&#1077;&#1090;&#1080;&#1090;&#1100; &#1085;&#1077;&#1082;&#1086;&#1090;&#1086;&#1088;&#1099;&#1077; &#1080;&#1079; &#1085;&#1080;&#1093; &#1080;&#1083;&#1080; &#1078;&#1077; &#1074;&#1089;&#1077;. &#1045;&#1089;&#1083;&#1080; &#1082;&#1072;&#1090;&#1077;&#1075;&#1086;&#1088;&#1080;&#1080;, &#1082;&#1086;&#1090;&#1086;&#1088;&#1099;&#1077; &#1088;&#1072;&#1085;&#1077;&#1077; &#1073;&#1099;&#1083;&#1080; &#1088;&#1072;&#1079;&#1088;&#1077;&#1096;&#1077;&#1085;&#1099;, &#1086;&#1090;&#1082;&#1083;&#1102;&#1095;&#1077;&#1085;&#1099;, &#1074;&#1089;&#1077; &#1092;&#1072;&#1081;&#1083;&#1099; cookie, &#1085;&#1072;&#1079;&#1085;&#1072;&#1095;&#1077;&#1085;&#1085;&#1099;&#1077; &#1101;&#1090;&#1086;&#1081; &#1082;&#1072;&#1090;&#1077;&#1075;&#1086;&#1088;&#1080;&#1080;, &#1073;&#1091;&#1076;&#1091;&#1090; &#1091;&#1076;&#1072;&#1083;&#1077;&#1085;&#1099; &#1080;&#1079; &#1074;&#1072;&#1096;&#1077;&#1075;&#1086; &#1073;&#1088;&#1072;&#1091;&#1079;&#1077;&#1088;&#1072;.\n&#1050;&#1088;&#1086;&#1084;&#1077; &#1090;&#1086;&#1075;&#1086;, &#1074;&#1099; &#1084;&#1086;&#1078;&#1077;&#1090;&#1077; &#1091;&#1074;&#1080;&#1076;&#1077;&#1090;&#1100; &#1074;&#1077;&#1089;&#1100; &#1089;&#1087;&#1080;&#1089;&#1086;&#1082; &#1092;&#1072;&#1081;&#1083;&#1086;&#1074; cookie, &#1085;&#1072;&#1079;&#1085;&#1072;&#1095;&#1077;&#1085;&#1085;&#1099;&#1093; &#1076;&#1083;&#1103; &#1082;&#1072;&#1078;&#1076;&#1086;&#1081; &#1082;&#1072;&#1090;&#1077;&#1075;&#1086;&#1088;&#1080;&#1080;, &#1080; &#1087;&#1086;&#1076;&#1088;&#1086;&#1073;&#1085;&#1091;&#1102; &#1080;&#1085;&#1092;&#1086;&#1088;&#1084;&#1072;&#1094;&#1080;&#1102; &#1074; &#1076;&#1077;&#1082;&#1083;&#1072;&#1088;&#1072;&#1094;&#1080;&#1080; &#1092;&#1072;&#1081;&#1083;&#1086;&#1074; cookie.',
                settings_btn_save: '&#1057;&#1086;&#1093;&#1088;&#1072;&#1085;&#1080;&#1090;&#1100; &#1085;&#1072;&#1089;&#1090;&#1088;&#1086;&#1081;&#1082;&#1080;',
                settings_close: '&#1047;&#1072;&#1082;&#1088;&#1099;&#1090;&#1100;',
                declaration_tab: '&#1044;&#1077;&#1082;&#1083;&#1072;&#1088;&#1072;&#1094;&#1080;&#1103; cookie',
                declaration_message: '&#1060;&#1072;&#1081;&#1083;&#1099; cookie, &#1080;&#1089;&#1087;&#1086;&#1083;&#1100;&#1079;&#1091;&#1077;&#1084;&#1099;&#1077; &#1085;&#1072; &#1076;&#1072;&#1085;&#1085;&#1086;&#1084; &#1089;&#1072;&#1081;&#1090;&#1077;, &#1088;&#1072;&#1079;&#1076;&#1077;&#1083;&#1077;&#1085;&#1099; &#1085;&#1072; &#1082;&#1072;&#1090;&#1077;&#1075;&#1086;&#1088;&#1080;&#1080;, &#1080; &#1085;&#1080;&#1078;&#1077; &#1074;&#1099; &#1084;&#1086;&#1078;&#1077;&#1090;&#1077; &#1087;&#1088;&#1086;&#1095;&#1080;&#1090;&#1072;&#1090;&#1100; &#1086; &#1082;&#1072;&#1078;&#1076;&#1086;&#1081; &#1082;&#1072;&#1090;&#1077;&#1075;&#1086;&#1088;&#1080;&#1080; &#1080; &#1088;&#1072;&#1079;&#1088;&#1077;&#1096;&#1080;&#1090;&#1100; &#1080;&#1083;&#1080; &#1079;&#1072;&#1087;&#1088;&#1077;&#1090;&#1080;&#1090;&#1100; &#1085;&#1077;&#1082;&#1086;&#1090;&#1086;&#1088;&#1099;&#1077; &#1080;&#1079; &#1085;&#1080;&#1093; &#1080;&#1083;&#1080; &#1078;&#1077; &#1074;&#1089;&#1077;. &#1045;&#1089;&#1083;&#1080; &#1082;&#1072;&#1090;&#1077;&#1075;&#1086;&#1088;&#1080;&#1080;, &#1082;&#1086;&#1090;&#1086;&#1088;&#1099;&#1077; &#1088;&#1072;&#1085;&#1077;&#1077; &#1073;&#1099;&#1083;&#1080; &#1088;&#1072;&#1079;&#1088;&#1077;&#1096;&#1077;&#1085;&#1099;, &#1086;&#1090;&#1082;&#1083;&#1102;&#1095;&#1077;&#1085;&#1099;, &#1074;&#1089;&#1077; &#1092;&#1072;&#1081;&#1083;&#1099; cookie, &#1085;&#1072;&#1079;&#1085;&#1072;&#1095;&#1077;&#1085;&#1085;&#1099;&#1077; &#1101;&#1090;&#1086;&#1081; &#1082;&#1072;&#1090;&#1077;&#1075;&#1086;&#1088;&#1080;&#1080;, &#1073;&#1091;&#1076;&#1091;&#1090; &#1091;&#1076;&#1072;&#1083;&#1077;&#1085;&#1099; &#1080;&#1079; &#1074;&#1072;&#1096;&#1077;&#1075;&#1086; &#1073;&#1088;&#1072;&#1091;&#1079;&#1077;&#1088;&#1072;.\n&#1050;&#1088;&#1086;&#1084;&#1077; &#1090;&#1086;&#1075;&#1086;, &#1074;&#1099; &#1084;&#1086;&#1078;&#1077;&#1090;&#1077; &#1091;&#1074;&#1080;&#1076;&#1077;&#1090;&#1100; &#1074;&#1077;&#1089;&#1100; &#1089;&#1087;&#1080;&#1089;&#1086;&#1082; &#1092;&#1072;&#1081;&#1083;&#1086;&#1074; cookie, &#1085;&#1072;&#1079;&#1085;&#1072;&#1095;&#1077;&#1085;&#1085;&#1099;&#1093; &#1076;&#1083;&#1103; &#1082;&#1072;&#1078;&#1076;&#1086;&#1081; &#1082;&#1072;&#1090;&#1077;&#1075;&#1086;&#1088;&#1080;&#1080;, &#1080; &#1087;&#1086;&#1076;&#1088;&#1086;&#1073;&#1085;&#1091;&#1102; &#1080;&#1085;&#1092;&#1086;&#1088;&#1084;&#1072;&#1094;&#1080;&#1102; &#1074; &#1076;&#1077;&#1082;&#1083;&#1072;&#1088;&#1072;&#1094;&#1080;&#1080; &#1092;&#1072;&#1081;&#1083;&#1086;&#1074; cookie.',
                icon_btn: '&#1053;&#1072;&#1089;&#1090;&#1088;&#1086;&#1081;&#1082;&#1080; &#1092;&#1072;&#1081;&#1083;&#1086;&#1074; cookie',
                necessary_title: '&#1053;&#1077;&#1086;&#1073;&#1093;&#1086;&#1076;&#1080;&#1084;&#1099;&#1077; &#1092;&#1072;&#1081;&#1083;&#1099; cookie',
                necessary_description: '&#1069;&#1090;&#1080; &#1092;&#1072;&#1081;&#1083;&#1099; cookie &#1079;&#1072;&#1076;&#1077;&#1081;&#1089;&#1090;&#1074;&#1091;&#1102;&#1090;&#1089;&#1103; &#1074; &#1088;&#1072;&#1073;&#1086;&#1090;&#1077; &#1086;&#1089;&#1085;&#1086;&#1074;&#1085;&#1099;&#1093; &#1092;&#1091;&#1085;&#1082;&#1094;&#1080;&#1081; &#1089;&#1072;&#1081;&#1090;&#1072;, &#1090;&#1072;&#1082;&#1080;&#1093; &#1082;&#1072;&#1082; &#1089;&#1086;&#1093;&#1088;&#1072;&#1085;&#1077;&#1085;&#1080;&#1077; &#1076;&#1072;&#1085;&#1085;&#1099;&#1093; &#1076;&#1083;&#1103; &#1074;&#1093;&#1086;&#1076;&#1072; &#1074; &#1072;&#1082;&#1082;&#1072;&#1091;&#1085;&#1090;, &#1072; &#1090;&#1072;&#1082;&#1078;&#1077; &#1086;&#1073;&#1077;&#1089;&#1087;&#1077;&#1095;&#1080;&#1074;&#1072;&#1102;&#1090; &#1073;&#1099;&#1089;&#1090;&#1088;&#1086;&#1076;&#1077;&#1081;&#1089;&#1090;&#1074;&#1080;&#1077; &#1089;&#1072;&#1081;&#1090;&#1072; &#1087;&#1088;&#1080; &#1077;&#1075;&#1086; &#1087;&#1088;&#1086;&#1089;&#1084;&#1086;&#1090;&#1088;&#1077;.',
                preferences_title: '&#1060;&#1091;&#1085;&#1082;&#1094;&#1080;&#1086;&#1085;&#1072;&#1083;&#1100;&#1085;&#1099;&#1077; &#1092;&#1072;&#1081;&#1083;&#1099; cookie',
                preferences_description: '&#1069;&#1090;&#1080; &#1092;&#1072;&#1081;&#1083;&#1099; cookie &#1085;&#1091;&#1078;&#1085;&#1099; &#1076;&#1083;&#1103; &#1087;&#1086;&#1076;&#1076;&#1077;&#1088;&#1078;&#1082;&#1080; &#1088;&#1072;&#1073;&#1086;&#1090;&#1099; &#1089;&#1072;&#1081;&#1090;&#1072; &#1080; &#1077;&#1075;&#1086; &#1092;&#1091;&#1085;&#1082;&#1094;&#1080;&#1081;, &#1072; &#1090;&#1072;&#1082;&#1078;&#1077; &#1076;&#1083;&#1103; &#1089;&#1086;&#1093;&#1088;&#1072;&#1085;&#1077;&#1085;&#1080;&#1103; &#1074;&#1072;&#1096;&#1080;&#1093; &#1087;&#1088;&#1077;&#1076;&#1087;&#1086;&#1095;&#1090;&#1077;&#1085;&#1080;&#1081;, &#1090;&#1072;&#1082;&#1080;&#1093; &#1082;&#1072;&#1082; &#1074;&#1072;&#1083;&#1102;&#1090;&#1072;, &#1088;&#1077;&#1075;&#1080;&#1086;&#1085; &#1080; &#1103;&#1079;&#1099;&#1082;.',
                analytics_title: '&#1060;&#1072;&#1081;&#1083;&#1099; cookie &#1076;&#1083;&#1103; &#1072;&#1085;&#1072;&#1083;&#1080;&#1090;&#1080;&#1082;&#1080; &#1080; &#1086;&#1073;&#1077;&#1089;&#1087;&#1077;&#1095;&#1077;&#1085;&#1080;&#1103; &#1087;&#1088;&#1086;&#1080;&#1079;&#1074;&#1086;&#1076;&#1080;&#1090;&#1077;&#1083;&#1100;&#1085;&#1086;&#1089;&#1090;&#1080;',
                analytics_description: '&#1069;&#1090;&#1080; &#1092;&#1072;&#1081;&#1083;&#1099; cookie &#1087;&#1086;&#1084;&#1086;&#1075;&#1072;&#1102;&#1090; &#1085;&#1072;&#1084; &#1087;&#1086;&#1085;&#1103;&#1090;&#1100;, &#1082;&#1072;&#1082; &#1074;&#1099; &#1087;&#1086;&#1083;&#1100;&#1079;&#1091;&#1077;&#1090;&#1077;&#1089;&#1100; &#1089;&#1072;&#1081;&#1090;&#1086;&#1084;, &#1080; &#1086;&#1087;&#1090;&#1080;&#1084;&#1080;&#1079;&#1080;&#1088;&#1086;&#1074;&#1072;&#1090;&#1100; &#1087;&#1088;&#1086;&#1080;&#1079;&#1074;&#1086;&#1076;&#1080;&#1090;&#1077;&#1083;&#1100;&#1085;&#1086;&#1089;&#1090;&#1100; &#1085;&#1072;&#1096;&#1080;&#1093; &#1089;&#1077;&#1088;&#1074;&#1080;&#1089;&#1086;&#1074;. &#1053;&#1072;&#1087;&#1088;&#1080;&#1084;&#1077;&#1088;, &#1089; &#1087;&#1086;&#1084;&#1086;&#1097;&#1100;&#1102; &#1101;&#1090;&#1080;&#1093; cookie &#1084;&#1099; &#1086;&#1087;&#1088;&#1077;&#1076;&#1077;&#1083;&#1103;&#1077;&#1084;, &#1087;&#1086; &#1082;&#1072;&#1082;&#1080;&#1084; &#1089;&#1089;&#1099;&#1083;&#1082;&#1072;&#1084; &#1087;&#1086;&#1083;&#1100;&#1079;&#1086;&#1074;&#1072;&#1090;&#1077;&#1083;&#1080; &#1087;&#1077;&#1088;&#1077;&#1093;&#1086;&#1076;&#1103;&#1090; &#1095;&#1072;&#1097;&#1077; &#1074;&#1089;&#1077;&#1075;&#1086;, &#1082;&#1072;&#1082; &#1086;&#1085;&#1080; &#1074;&#1079;&#1072;&#1080;&#1084;&#1086;&#1076;&#1077;&#1081;&#1089;&#1090;&#1074;&#1091;&#1102;&#1090; &#1089; &#1088;&#1072;&#1079;&#1083;&#1080;&#1095;&#1085;&#1099;&#1084;&#1080; &#1086;&#1073;&#1083;&#1072;&#1089;&#1090;&#1103;&#1084;&#1080; &#1080; &#1092;&#1091;&#1085;&#1082;&#1094;&#1080;&#1103;&#1084;&#1080; &#1085;&#1072;&#1096;&#1077;&#1075;&#1086; &#1089;&#1072;&#1081;&#1090;&#1072; &#1080; &#1087;&#1088;&#1080;&#1083;&#1086;&#1078;&#1077;&#1085;&#1080;&#1081;.',
                marketing_title: '&#1060;&#1072;&#1081;&#1083;&#1099; cookie &#1076;&#1083;&#1103; &#1090;&#1072;&#1088;&#1075;&#1077;&#1090;&#1080;&#1088;&#1086;&#1074;&#1072;&#1085;&#1080;&#1103;',
                marketing_description: '&#1069;&#1090;&#1080; &#1092;&#1072;&#1081;&#1083;&#1099; cookie &#1085;&#1091;&#1078;&#1085;&#1099;, &#1095;&#1090;&#1086;&#1073;&#1099; &#1087;&#1086;&#1082;&#1072;&#1079;&#1099;&#1074;&#1072;&#1090;&#1100; &#1088;&#1077;&#1082;&#1083;&#1072;&#1084;&#1091;, &#1089;&#1086;&#1086;&#1090;&#1074;&#1077;&#1090;&#1089;&#1090;&#1074;&#1091;&#1102;&#1097;&#1091;&#1102; &#1074;&#1072;&#1096;&#1080;&#1084; &#1080;&#1085;&#1090;&#1077;&#1088;&#1077;&#1089;&#1072;&#1084;, &#1085;&#1072; &#1090;&#1072;&#1082;&#1080;&#1093; &#1087;&#1083;&#1072;&#1090;&#1092;&#1086;&#1088;&#1084;&#1072;&#1093;, &#1082;&#1072;&#1082; Facebook, Google &#1080; Twitter.',
                uncategorized_title: '&#1055;&#1088;&#1086;&#1095;&#1080;&#1077; cookies',
                uncategorized_description: '&#1069;&#1090;&#1080; &#1092;&#1072;&#1081;&#1083;&#1099; cookie &#1087;&#1086;&#1082;&#1072; &#1085;&#1077; &#1086;&#1090;&#1085;&#1077;&#1089;&#1077;&#1085;&#1099; &#1082; &#1082;&#1072;&#1082;&#1086;&#1081;-&#1083;&#1080;&#1073;&#1086; &#1082;&#1072;&#1090;&#1077;&#1075;&#1086;&#1088;&#1080;&#1080;.',
                general_learn_more_link: '',
                widget_btn_deny_all: '&#1047;&#1072;&#1087;&#1088;&#1077;&#1090;&#1080;&#1090;&#1100; &#1074;&#1089;&#1077;',
                cookie_tags: '&#1101;&#1090;&#1080;&#1082;&#1077;&#1090;&#1082;&#1080;',
                widget_btn_ok: 'OK',
                widget_btn_donotsell: '&#1047;&#1072;&#1087;&#1088;&#1077;&#1090;&#1080;&#1090;&#1100; &#1087;&#1088;&#1086;&#1076;&#1072;&#1078;&#1091; &#1087;&#1077;&#1088;&#1089;&#1086;&#1085;&#1072;&#1083;&#1100;&#1085;&#1099;&#1093; &#1076;&#1072;&#1085;&#1085;&#1099;&#1093;',
                personal_data_tab: '&#1055;&#1077;&#1088;&#1089;&#1086;&#1085;&#1072;&#1083;&#1100;&#1085;&#1099;&#1077; &#1076;&#1072;&#1085;&#1085;&#1099;&#1077;',
                personal_data_message: '&#1057;&#1086;&#1075;&#1083;&#1072;&#1089;&#1085;&#1086; &#1047;&#1072;&#1082;&#1086;&#1085;&#1091; &#1050;&#1072;&#1083;&#1080;&#1092;&#1086;&#1088;&#1085;&#1080;&#1080; &#1086; &#1082;&#1086;&#1085;&#1092;&#1080;&#1076;&#1077;&#1085;&#1094;&#1080;&#1072;&#1083;&#1100;&#1085;&#1086;&#1089;&#1090;&#1080; &#1087;&#1086;&#1090;&#1088;&#1077;&#1073;&#1080;&#1090;&#1077;&#1083;&#1077;&#1081; (CCPA), &#1078;&#1080;&#1090;&#1077;&#1083;&#1080; &#1050;&#1072;&#1083;&#1080;&#1092;&#1086;&#1088;&#1085;&#1080;&#1080; &#1080;&#1084;&#1077;&#1102;&#1090; &#1087;&#1088;&#1072;&#1074;&#1086; &#1079;&#1072;&#1087;&#1088;&#1077;&#1090;&#1080;&#1090;&#1100; &laquo;&#1087;&#1088;&#1086;&#1076;&#1072;&#1078;&#1091;&raquo; &#1089;&#1074;&#1086;&#1080;&#1093; &#1087;&#1077;&#1088;&#1089;&#1086;&#1085;&#1072;&#1083;&#1100;&#1085;&#1099;&#1093; &#1076;&#1072;&#1085;&#1085;&#1099;&#1093; (&#1090;. &#1077;. &#1087;&#1088;&#1077;&#1076;&#1086;&#1089;&#1090;&#1072;&#1074;&#1083;&#1077;&#1085;&#1080;&#1077; &#1076;&#1086;&#1089;&#1090;&#1091;&#1087;&#1072; &#1082; &#1085;&#1080;&#1084; &#1076;&#1088;&#1091;&#1075;&#1080;&#1084; &#1082;&#1086;&#1084;&#1087;&#1072;&#1085;&#1080;&#1103;&#1084; &#1080;&#1083;&#1080; &#1090;&#1088;&#1077;&#1090;&#1100;&#1080;&#1084; &#1083;&#1080;&#1094;&#1072;&#1084; &#1074; &#1086;&#1073;&#1084;&#1077;&#1085; &#1085;&#1072; &#1076;&#1077;&#1085;&#1077;&#1078;&#1085;&#1086;&#1077; &#1080;&#1083;&#1080; &#1083;&#1102;&#1073;&#1086;&#1077; &#1076;&#1088;&#1091;&#1075;&#1086;&#1077; &#1074;&#1086;&#1079;&#1085;&#1072;&#1075;&#1088;&#1072;&#1078;&#1076;&#1077;&#1085;&#1080;&#1077;).\n&#1048;&#1089;&#1087;&#1086;&#1083;&#1100;&#1079;&#1091;&#1081;&#1090;&#1077; &#1087;&#1077;&#1088;&#1077;&#1082;&#1083;&#1102;&#1095;&#1072;&#1090;&#1077;&#1083;&#1100; &#1085;&#1080;&#1078;&#1077;, &#1095;&#1090;&#1086;&#1073;&#1099; &#1079;&#1072;&#1087;&#1088;&#1077;&#1090;&#1080;&#1090;&#1100; &#1087;&#1088;&#1086;&#1076;&#1072;&#1078;&#1091; &#1083;&#1080;&#1095;&#1085;&#1099;&#1093; &#1076;&#1072;&#1085;&#1085;&#1099;&#1093;.',
                donotsell_title: '&#1055;&#1086;&#1079;&#1074;&#1086;&#1083;&#1080;&#1090;&#1100; &#1087;&#1088;&#1086;&#1076;&#1072;&#1078;&#1091; &#1087;&#1077;&#1088;&#1089;&#1086;&#1085;&#1072;&#1083;&#1100;&#1085;&#1099;&#1093; &#1076;&#1072;&#1085;&#1085;&#1099;&#1093;',
                donotsell_description: '',
                token_title: '&#1042;&#1072;&#1096; &#1074;&#1099;&#1073;&#1086;&#1088;',
                token_text: '&#1053;&#1080;&#1078;&#1077; &#1074;&#1099; &#1091;&#1074;&#1080;&#1076;&#1080;&#1090;&#1077; &#1090;&#1077;&#1082;&#1091;&#1097;&#1077;&#1077; &#1089;&#1086;&#1089;&#1090;&#1086;&#1103;&#1085;&#1080;&#1077; &#1089;&#1086;&#1075;&#1083;&#1072;&#1089;&#1080;&#1103;',
                token_categories: '&#1057;&#1086;&#1075;&#1083;&#1072;&#1089;&#1086;&#1074;&#1072;&#1085;&#1085;&#1099;&#1077; &#1082;&#1072;&#1090;&#1077;&#1075;&#1086;&#1088;&#1080;&#1080;',
                token_token: '&#1042;&#1072;&#1096; ID',
                token_datetime: '&#1044;&#1072;&#1090;&#1072; &#1080; &#1074;&#1088;&#1077;&#1084;&#1103; &#1089;&#1086;&#1075;&#1083;&#1072;&#1089;&#1080;&#1103;',
                general_categories: '&#1050;&#1072;&#1090;&#1077;&#1075;&#1086;&#1088;&#1080;&#1080;',
                general_vendor: '&#1055;&#1072;&#1088;&#1090;&#1085;&#1077;&#1088;',
                general_vendors: '&#1055;&#1072;&#1088;&#1090;&#1085;&#1077;&#1088;&#1099;',
                general_service: '&#1057;&#1077;&#1088;&#1074;&#1080;&#1089;',
                general_services: '&#1057;&#1077;&#1088;&#1074;&#1080;&#1089;&#1099;',
                service_tab: '&#1057;&#1077;&#1088;&#1074;&#1080;&#1089;&#1099;',
                service_message: '&#1057;&#1087;&#1080;&#1089;&#1086;&#1082; &#1089;&#1077;&#1088;&#1074;&#1080;&#1089;&#1086;&#1074;, &#1089;&#1086;&#1073;&#1080;&#1088;&#1072;&#1102;&#1097;&#1080;&#1093; &#1076;&#1072;&#1085;&#1085;&#1099;&#1077; &#1080;/&#1080;&#1083;&#1080; &#1091;&#1089;&#1090;&#1072;&#1085;&#1072;&#1074;&#1083;&#1080;&#1074;&#1072;&#1102;&#1097;&#1080;&#1093; &#1092;&#1072;&#1081;&#1083;&#1099; cookie &#1085;&#1072; &#1101;&#1090;&#1086;&#1084; &#1089;&#1072;&#1081;&#1090;&#1077;, &#1074;&#1099; &#1085;&#1072;&#1081;&#1076;&#1077;&#1090;&#1077; &#1085;&#1080;&#1078;&#1077;. &#1056;&#1072;&#1079;&#1074;&#1077;&#1088;&#1085;&#1080;&#1090;&#1077; &#1080;&#1085;&#1092;&#1086;&#1088;&#1084;&#1072;&#1094;&#1080;&#1102; &#1086; &#1089;&#1077;&#1088;&#1074;&#1080;&#1089;&#1077;, &#1095;&#1090;&#1086;&#1073;&#1099; &#1087;&#1086;&#1083;&#1091;&#1095;&#1080;&#1090;&#1100; &#1073;&#1086;&#1083;&#1077;&#1077; &#1087;&#1086;&#1076;&#1088;&#1086;&#1073;&#1085;&#1091;&#1102; &#1080;&#1085;&#1092;&#1086;&#1088;&#1084;&#1072;&#1094;&#1080;&#1102;.',
                vendor_tab: '&#1055;&#1072;&#1088;&#1090;&#1085;&#1077;&#1088;&#1099;',
                vendor_message: '&#1053;&#1080;&#1078;&#1077; &#1087;&#1088;&#1077;&#1076;&#1089;&#1090;&#1072;&#1074;&#1083;&#1077;&#1085; &#1089;&#1087;&#1080;&#1089;&#1086;&#1082; &#1085;&#1072;&#1096;&#1080;&#1093; &#1087;&#1072;&#1088;&#1090;&#1085;&#1077;&#1088;&#1086;&#1074;. &#1042;&#1099; &#1084;&#1086;&#1078;&#1077;&#1090;&#1077; &#1088;&#1072;&#1079;&#1074;&#1077;&#1088;&#1085;&#1091;&#1090;&#1100; &#1080;&#1085;&#1092;&#1086;&#1088;&#1084;&#1072;&#1094;&#1080;&#1102; &#1086; &#1082;&#1072;&#1078;&#1076;&#1086;&#1084; &#1080;&#1079; &#1085;&#1080;&#1093;, &#1095;&#1090;&#1086;&#1073;&#1099; &#1087;&#1086;&#1083;&#1091;&#1095;&#1080;&#1090;&#1100; &#1073;&#1086;&#1083;&#1077;&#1077; &#1087;&#1086;&#1076;&#1088;&#1086;&#1073;&#1085;&#1099;&#1077; &#1089;&#1074;&#1077;&#1076;&#1077;&#1085;&#1080;&#1103; &#1080; &#1088;&#1077;&#1096;&#1080;&#1090;&#1100;, &#1087;&#1088;&#1080;&#1085;&#1103;&#1090;&#1100; &#1080;&#1083;&#1080; &#1086;&#1090;&#1082;&#1083;&#1086;&#1085;&#1080;&#1090;&#1100; &#1089;&#1077;&#1088;&#1074;&#1080;&#1089;.',
                vendor_privacy_policy: '&#1055;&#1086;&#1083;&#1080;&#1090;&#1080;&#1082;&#1072; &#1082;&#1086;&#1085;&#1092;&#1080;&#1076;&#1077;&#1085;&#1094;&#1080;&#1072;&#1083;&#1100;&#1085;&#1086;&#1089;&#1090;&#1080;',
                vendor_cookie_policy: '&#1055;&#1086;&#1083;&#1080;&#1090;&#1080;&#1082;&#1072; &#1080;&#1089;&#1087;&#1086;&#1083;&#1100;&#1079;&#1086;&#1074;&#1072;&#1085;&#1080;&#1103; &#1092;&#1072;&#1081;&#1083;&#1086;&#1074; cookie',
                tcf_notice_title: '&#1042;&#1072;&#1096;&#1072; &#1082;&#1086;&#1085;&#1092;&#1080;&#1076;&#1077;&#1085;&#1094;&#1080;&#1072;&#1083;&#1100;&#1085;&#1086;&#1089;&#1090;&#1100; &#1074;&#1072;&#1078;&#1085;&#1072;',
                tcf_notice_message: '&#1042;&#1099; &#1080;&#1084;&#1077;&#1077;&#1090;&#1077; &#1079;&#1072;&#1082;&#1086;&#1085;&#1085;&#1086;&#1077; &#1087;&#1088;&#1072;&#1074;&#1086; &#1088;&#1077;&#1096;&#1072;&#1090;&#1100;, &#1082; &#1082;&#1072;&#1082;&#1086;&#1081; &#1074;&#1072;&#1096;&#1077;&#1081; &#1080;&#1085;&#1092;&#1086;&#1088;&#1084;&#1072;&#1094;&#1080;&#1080; &#1074;&#1077;&#1073;-&#1089;&#1072;&#1081;&#1090; &#1084;&#1086;&#1078;&#1077;&#1090; &#1087;&#1086;&#1083;&#1091;&#1095;&#1080;&#1090;&#1100; &#1076;&#1086;&#1089;&#1090;&#1091;&#1087; &#1080; &#1082;&#1072;&#1082;&#1091;&#1102; &#1080;&#1085;&#1092;&#1086;&#1088;&#1084;&#1072;&#1094;&#1080;&#1102; &#1086;&#1085; &#1084;&#1086;&#1078;&#1077;&#1090; &#1093;&#1088;&#1072;&#1085;&#1080;&#1090;&#1100;. &#1057; &#1074;&#1072;&#1096;&#1077;&#1075;&#1086; &#1088;&#1072;&#1079;&#1088;&#1077;&#1096;&#1077;&#1085;&#1080;&#1103; &#1084;&#1099; &#1080; [vendors]&#1085;&#1072;&#1096;&#1080; &#1087;&#1072;&#1088;&#1090;&#1085;&#1077;&#1088;&#1099;[/vendors] &#1087;&#1086;&#1083;&#1091;&#1095;&#1072;&#1077;&#1084; &#1076;&#1086;&#1089;&#1090;&#1091;&#1087; &#1082; &#1080;&#1085;&#1092;&#1086;&#1088;&#1084;&#1072;&#1094;&#1080;&#1080; &#1085;&#1072; &#1091;&#1089;&#1090;&#1088;&#1086;&#1081;&#1089;&#1090;&#1074;&#1077; &#1080; &#1093;&#1088;&#1072;&#1085;&#1080;&#1084; &#1077;&#1077;, &#1072; &#1080;&#1084;&#1077;&#1085;&#1085;&#1086; &#1091;&#1085;&#1080;&#1082;&#1072;&#1083;&#1100;&#1085;&#1099;&#1077; &#1080;&#1076;&#1077;&#1085;&#1090;&#1080;&#1092;&#1080;&#1082;&#1072;&#1090;&#1086;&#1088;&#1099; &#1074; &#1092;&#1072;&#1081;&#1083;&#1072;&#1093; cookie &#1080; &#1076;&#1072;&#1085;&#1085;&#1099;&#1093; &#1087;&#1088;&#1086;&#1089;&#1084;&#1086;&#1090;&#1088;&#1072;, &#1076;&#1083;&#1103; &#1089;&#1073;&#1086;&#1088;&#1072; &#1080; &#1086;&#1073;&#1088;&#1072;&#1073;&#1086;&#1090;&#1082;&#1080; &#1083;&#1080;&#1095;&#1085;&#1099;&#1093; &#1076;&#1072;&#1085;&#1085;&#1099;&#1093;.\n<strong> &#1052;&#1099; &#1080; &#1085;&#1072;&#1096;&#1080; &#1087;&#1072;&#1088;&#1090;&#1085;&#1077;&#1088;&#1099; &#1087;&#1088;&#1086;&#1074;&#1086;&#1076;&#1080;&#1084; &#1086;&#1073;&#1088;&#1072;&#1073;&#1086;&#1090;&#1082;&#1091; &#1089;&#1083;&#1077;&#1076;&#1091;&#1102;&#1097;&#1080;&#1093; &#1076;&#1072;&#1085;&#1085;&#1099;&#1093;:</strong>[br][purposesfeatures]\n&#1055;&#1088;&#1080;&#1085;&#1080;&#1084;&#1072;&#1103; &#1074;&#1089;&#1077; &#1101;&#1090;&#1080; &#1080;&#1083;&#1080; &#1086;&#1090;&#1076;&#1077;&#1083;&#1100;&#1085;&#1099;&#1077; &#1091;&#1089;&#1083;&#1086;&#1074;&#1080;&#1103;, &#1074;&#1099; &#1089;&#1086;&#1075;&#1083;&#1072;&#1096;&#1072;&#1077;&#1090;&#1077;&#1089;&#1100; &#1085;&#1072; &#1080;&#1089;&#1087;&#1086;&#1083;&#1100;&#1079;&#1086;&#1074;&#1072;&#1085;&#1080;&#1077; &#1092;&#1072;&#1081;&#1083;&#1086;&#1074; cookie &#1085;&#1072; &#1101;&#1090;&#1086;&#1084; &#1074;&#1077;&#1073;-&#1089;&#1072;&#1081;&#1090;&#1077; &#1089; &#1091;&#1082;&#1072;&#1079;&#1072;&#1085;&#1085;&#1086;&#1081; &#1094;&#1077;&#1083;&#1100;&#1102;. &#1042;&#1099; &#1084;&#1086;&#1078;&#1077;&#1090;&#1077; &#1080; &#1086;&#1090;&#1082;&#1072;&#1079;&#1072;&#1090;&#1100;&#1089;&#1103;, &#1085;&#1086; &#1090;&#1086;&#1075;&#1076;&#1072; &#1085;&#1077;&#1082;&#1086;&#1090;&#1086;&#1088;&#1099;&#1077; &#1087;&#1077;&#1088;&#1089;&#1086;&#1085;&#1072;&#1083;&#1080;&#1079;&#1080;&#1088;&#1086;&#1074;&#1072;&#1085;&#1085;&#1099;&#1077; &#1092;&#1091;&#1085;&#1082;&#1094;&#1080;&#1080; &#1089;&#1072;&#1081;&#1090;&#1072; &#1073;&#1091;&#1076;&#1091;&#1090; &#1076;&#1083;&#1103; &#1074;&#1072;&#1089; &#1085;&#1077;&#1076;&#1086;&#1089;&#1090;&#1091;&#1087;&#1085;&#1099;. &#1042;&#1072;&#1096;&#1077; &#1089;&#1086;&#1075;&#1083;&#1072;&#1089;&#1080;&#1077; &#1080;&#1083;&#1080; &#1086;&#1090;&#1082;&#1072;&#1079; &#1086;&#1090;&#1085;&#1086;&#1089;&#1103;&#1090;&#1089;&#1103; &#1080;&#1089;&#1082;&#1083;&#1102;&#1095;&#1080;&#1090;&#1077;&#1083;&#1100;&#1085;&#1086; &#1082; &#1101;&#1090;&#1086;&#1084;&#1091; &#1074;&#1077;&#1073;-&#1089;&#1072;&#1081;&#1090;&#1091;, &#1072; &#1080;&#1079;&#1084;&#1077;&#1085;&#1080;&#1090;&#1100; &#1085;&#1072;&#1089;&#1090;&#1088;&#1086;&#1081;&#1082;&#1080; &#1080; &#1086;&#1090;&#1086;&#1079;&#1074;&#1072;&#1090;&#1100; &#1089;&#1086;&#1075;&#1083;&#1072;&#1089;&#1080;&#1077; &#1084;&#1086;&#1078;&#1085;&#1086; &#1074; &#1083;&#1102;&#1073;&#1086;&#1081; &#1084;&#1086;&#1084;&#1077;&#1085;&#1090; &#1085;&#1072; &#1089;&#1090;&#1088;&#1072;&#1085;&#1080;&#1094;&#1077; [privacypolicy]&#1055;&#1086;&#1083;&#1080;&#1090;&#1080;&#1082;&#1072; &#1082;&#1086;&#1085;&#1092;&#1080;&#1076;&#1077;&#1085;&#1094;&#1080;&#1072;&#1083;&#1100;&#1085;&#1086;&#1089;&#1090;&#1080;[/privacypolicy] &#1080;&#1083;&#1080; &#1085;&#1072;&#1078;&#1072;&#1074; &#1082;&#1085;&#1086;&#1087;&#1082;&#1091; <strong>&#1059;&#1087;&#1088;&#1072;&#1074;&#1083;&#1077;&#1085;&#1080;&#1077; &#1089;&#1086;&#1075;&#1083;&#1072;&#1089;&#1080;&#1077;&#1084;</strong> &#1074; &#1083;&#1077;&#1074;&#1086;&#1084; &#1085;&#1080;&#1078;&#1085;&#1077;&#1084; &#1091;&#1075;&#1083;&#1091;.',
                tcf_settings_title: '&#1062;&#1077;&#1085;&#1090;&#1088; &#1085;&#1072;&#1089;&#1090;&#1088;&#1086;&#1077;&#1082; &#1082;&#1086;&#1085;&#1092;&#1080;&#1076;&#1077;&#1085;&#1094;&#1080;&#1072;&#1083;&#1100;&#1085;&#1086;&#1089;&#1090;&#1080;',
                tcf_vendor_tab: '&#1055;&#1072;&#1088;&#1090;&#1085;&#1077;&#1088;&#1099;',
                tcf_vendor_message: '&#1057;&#1087;&#1080;&#1089;&#1086;&#1082; &#1085;&#1072;&#1096;&#1080;&#1093; &#1087;&#1072;&#1088;&#1090;&#1085;&#1077;&#1088;&#1086;&#1074; &#1074;&#1099; &#1085;&#1072;&#1081;&#1076;&#1077;&#1090;&#1077; &#1085;&#1080;&#1078;&#1077;. &#1056;&#1072;&#1079;&#1074;&#1077;&#1088;&#1085;&#1080;&#1090;&#1077; &#1080;&#1085;&#1092;&#1086;&#1088;&#1084;&#1072;&#1094;&#1080;&#1102; &#1086; &#1082;&#1072;&#1078;&#1076;&#1086;&#1084; &#1087;&#1072;&#1088;&#1090;&#1085;&#1077;&#1088;&#1077;, &#1095;&#1090;&#1086;&#1073;&#1099; &#1086;&#1087;&#1088;&#1077;&#1076;&#1077;&#1083;&#1080;&#1090;&#1100;&#1089;&#1103;, &#1089;&#1086;&#1075;&#1083;&#1072;&#1089;&#1085;&#1099; &#1083;&#1080; &#1074;&#1099; &#1089; &#1091;&#1082;&#1072;&#1079;&#1072;&#1085;&#1085;&#1099;&#1084;&#1080; &#1094;&#1077;&#1083;&#1103;&#1084;&#1080; &#1080; &#1092;&#1091;&#1085;&#1082;&#1094;&#1080;&#1103;&#1084;&#1080;. &#1058;&#1072;&#1082;&#1078;&#1077; &#1074;&#1099; &#1084;&#1086;&#1078;&#1077;&#1090;&#1077; &#1074;&#1086;&#1079;&#1088;&#1072;&#1078;&#1072;&#1090;&#1100; &#1087;&#1088;&#1086;&#1090;&#1080;&#1074; &#1094;&#1077;&#1083;&#1077;&#1081;, &#1086;&#1089;&#1085;&#1086;&#1074;&#1072;&#1085;&#1085;&#1099;&#1093; &#1085;&#1072; &#1079;&#1072;&#1082;&#1086;&#1085;&#1085;&#1099;&#1093; &#1080;&#1085;&#1090;&#1077;&#1088;&#1077;&#1089;&#1072;&#1093;.',
                tcf_legitimate_interest_tab: '&#1047;&#1072;&#1082;&#1086;&#1085;&#1085;&#1099;&#1077; &#1080;&#1085;&#1090;&#1077;&#1088;&#1077;&#1089;&#1099;',
                tcf_legitimate_interest_message: '&#1053;&#1077;&#1082;&#1086;&#1090;&#1086;&#1088;&#1099;&#1077; &#1085;&#1072;&#1096;&#1080; &#1087;&#1072;&#1088;&#1090;&#1085;&#1077;&#1088;&#1099; &#1086;&#1073;&#1088;&#1072;&#1073;&#1072;&#1090;&#1099;&#1074;&#1072;&#1102;&#1090; &#1087;&#1077;&#1088;&#1089;&#1086;&#1085;&#1072;&#1083;&#1100;&#1085;&#1099;&#1077; &#1076;&#1072;&#1085;&#1085;&#1099;&#1077; &#1073;&#1077;&#1079; &#1074;&#1072;&#1096;&#1077;&#1075;&#1086; &#1089;&#1086;&#1075;&#1083;&#1072;&#1089;&#1080;&#1103; &#1085;&#1072; &#1086;&#1089;&#1085;&#1086;&#1074;&#1072;&#1085;&#1080;&#1080; &#1079;&#1072;&#1082;&#1086;&#1085;&#1085;&#1099;&#1093; &#1080;&#1085;&#1090;&#1077;&#1088;&#1077;&#1089;&#1086;&#1074;. &#1057;&#1087;&#1080;&#1089;&#1086;&#1082; &#1094;&#1077;&#1083;&#1077;&#1081; &#1084;&#1086;&#1078;&#1085;&#1086; &#1087;&#1088;&#1086;&#1089;&#1084;&#1086;&#1090;&#1088;&#1077;&#1090;&#1100; &#1085;&#1080;&#1078;&#1077;, &#1072; &#1088;&#1072;&#1079;&#1074;&#1077;&#1088;&#1085;&#1091;&#1074; &#1080;&#1085;&#1092;&#1086;&#1088;&#1084;&#1072;&#1094;&#1080;&#1102; &#1086; &#1083;&#1102;&#1073;&#1086;&#1081; &#1094;&#1077;&#1083;&#1080;, &#1074;&#1099; &#1091;&#1074;&#1080;&#1076;&#1080;&#1090;&#1077; &#1089;&#1087;&#1080;&#1089;&#1086;&#1082; &#1082;&#1072;&#1078;&#1076;&#1086;&#1075;&#1086; &#1087;&#1072;&#1088;&#1090;&#1085;&#1077;&#1088;&#1072;, &#1091;&#1090;&#1074;&#1077;&#1088;&#1078;&#1076;&#1072;&#1102;&#1097;&#1077;&#1075;&#1086;, &#1095;&#1090;&#1086; &#1086;&#1085; &#1080;&#1084;&#1077;&#1077;&#1090; &#1079;&#1072;&#1082;&#1086;&#1085;&#1085;&#1099;&#1081; &#1080;&#1085;&#1090;&#1077;&#1088;&#1077;&#1089; &#1086;&#1090;&#1085;&#1086;&#1089;&#1080;&#1090;&#1077;&#1083;&#1100;&#1085;&#1086; &#1076;&#1072;&#1085;&#1085;&#1086;&#1081; &#1094;&#1077;&#1083;&#1080;. &#1045;&#1089;&#1083;&#1080; &#1074;&#1099; &#1085;&#1077; &#1089;&#1086;&#1075;&#1083;&#1072;&#1089;&#1085;&#1099; &#1085;&#1072; &#1086;&#1073;&#1088;&#1072;&#1073;&#1086;&#1090;&#1082;&#1091; &#1076;&#1072;&#1085;&#1085;&#1099;&#1093; &#1085;&#1072; &#1086;&#1089;&#1085;&#1086;&#1074;&#1072;&#1085;&#1080;&#1080; &#1079;&#1072;&#1082;&#1086;&#1085;&#1085;&#1099;&#1093; &#1080;&#1085;&#1090;&#1077;&#1088;&#1077;&#1089;&#1086;&#1074; &#1076;&#1083;&#1103; &#1083;&#1102;&#1073;&#1086;&#1081; &#1080;&#1079; &#1091;&#1082;&#1072;&#1079;&#1072;&#1085;&#1085;&#1099;&#1093; &#1094;&#1077;&#1083;&#1077;&#1081;, &#1087;&#1077;&#1088;&#1077;&#1074;&#1077;&#1076;&#1080;&#1090;&#1077; &#1087;&#1077;&#1088;&#1077;&#1082;&#1083;&#1102;&#1095;&#1072;&#1090;&#1077;&#1083;&#1100; &#1088;&#1103;&#1076;&#1086;&#1084; &#1089; &#1085;&#1077;&#1081; &#1074; &#1087;&#1086;&#1079;&#1080;&#1094;&#1080;&#1102; &laquo;&#1074;&#1099;&#1082;&#1083;&raquo;.',
                tcf_btn_allow_all: '&#1055;&#1088;&#1080;&#1085;&#1103;&#1090;&#1100; &#1074;&#1089;&#1077;',
                tcf_btn_deny_all: '&#1054;&#1090;&#1082;&#1083;&#1086;&#1085;&#1080;&#1090;&#1100; &#1074;&#1089;&#1077;',
                tcf_btn_settings: '&#1044;&#1088;&#1091;&#1075;&#1080;&#1077; &#1085;&#1072;&#1089;&#1090;&#1088;&#1086;&#1081;&#1082;&#1080;',
                tcf_btn_save: '&#1057;&#1086;&#1093;&#1088;&#1072;&#1085;&#1080;&#1090;&#1100; &#1080; &#1079;&#1072;&#1082;&#1088;&#1099;&#1090;&#1100;',
                tcf_btn_manage: '&#1059;&#1087;&#1088;&#1072;&#1074;&#1083;&#1077;&#1085;&#1080;&#1077; &#1089;&#1086;&#1075;&#1083;&#1072;&#1089;&#1080;&#1077;&#1084;',
                tcf_lifespan: '&#1057;&#1088;&#1086;&#1082; &#1076;&#1077;&#1081;&#1089;&#1090;&#1074;&#1080;&#1103;',
                tcf_storage_disclosure: '&#1044;&#1086;&#1089;&#1090;&#1091;&#1087; &#1082; &#1080;&#1085;&#1092;&#1086;&#1088;&#1084;&#1072;&#1094;&#1080;&#1080; &#1086; &#1093;&#1088;&#1072;&#1085;&#1080;&#1083;&#1080;&#1097;&#1077; &#1091;&#1089;&#1090;&#1088;&#1086;&#1081;&#1089;&#1090;&#1074;&#1072;',
                tcf_identifier: '&#1048;&#1076;&#1077;&#1085;&#1090;&#1080;&#1092;&#1080;&#1082;&#1072;&#1090;&#1086;&#1088;',
                tcf_type: '&#1058;&#1080;&#1087;',
                tcf_search: '&#1055;&#1086;&#1080;&#1089;&#1082;',
                tcf_filter: '&#1060;&#1080;&#1083;&#1100;&#1090;&#1088;',
                tcf_clear_filters: '&#1054;&#1095;&#1080;&#1089;&#1090;&#1080;&#1090;&#1100; &#1092;&#1080;&#1083;&#1100;&#1090;&#1088;&#1099;',
                tcf_type_tf: '&#1060;&#1091;&#1085;&#1082;&#1094;&#1080;&#1080;',
                tcf_type_tsf: '&#1057;&#1087;&#1077;&#1094;&#1080;&#1072;&#1083;&#1100;&#1085;&#1099;&#1077; &#1092;&#1091;&#1085;&#1082;&#1094;&#1080;&#1080;',
                tcf_type_tp: '&#1062;&#1077;&#1083;&#1080;',
                tcf_type_tsp: '&#1057;&#1087;&#1077;&#1094;&#1080;&#1072;&#1083;&#1100;&#1085;&#1099;&#1077; &#1094;&#1077;&#1083;&#1080;',
                tcf_type_tlp: '&#1062;&#1077;&#1083;&#1080; &#1085;&#1072; &#1086;&#1089;&#1085;&#1086;&#1074;&#1072;&#1085;&#1080;&#1080; &#1079;&#1072;&#1082;&#1086;&#1085;&#1085;&#1099;&#1093; &#1080;&#1085;&#1090;&#1077;&#1088;&#1077;&#1089;&#1086;&#1074;',
                tcf_vendor_cookies_and_other: '&#1050;&#1088;&#1086;&#1084;&#1077; &#1092;&#1072;&#1081;&#1083;&#1086;&#1074; cookie, &#1101;&#1090;&#1086;&#1090; &#1087;&#1072;&#1088;&#1090;&#1085;&#1077;&#1088; &#1080;&#1089;&#1087;&#1086;&#1083;&#1100;&#1079;&#1091;&#1077;&#1090; &#1080; &#1076;&#1088;&#1091;&#1075;&#1080;&#1077; &#1084;&#1077;&#1090;&#1086;&#1076;&#1099; &#1093;&#1088;&#1072;&#1085;&#1077;&#1085;&#1080;&#1103; &#1080; &#1076;&#1086;&#1089;&#1090;&#1091;&#1087;&#1072; &#1082; &#1076;&#1072;&#1085;&#1085;&#1099;&#1084; &#1080; &#1080;&#1085;&#1092;&#1086;&#1088;&#1084;&#1072;&#1094;&#1080;&#1080;.',
                tcf_vendor_no_cookies: '&#1069;&#1090;&#1086;&#1090; &#1087;&#1072;&#1088;&#1090;&#1085;&#1077;&#1088; &#1085;&#1077; &#1080;&#1089;&#1087;&#1086;&#1083;&#1100;&#1079;&#1091;&#1077;&#1090; &#1092;&#1072;&#1081;&#1083;&#1099; cookie, &#1085;&#1086; &#1080;&#1089;&#1087;&#1086;&#1083;&#1100;&#1079;&#1091;&#1077;&#1090; &#1076;&#1088;&#1091;&#1075;&#1080;&#1077; &#1084;&#1077;&#1090;&#1086;&#1076;&#1099; &#1093;&#1088;&#1072;&#1085;&#1077;&#1085;&#1080;&#1103; &#1080; &#1076;&#1086;&#1089;&#1090;&#1091;&#1087;&#1072; &#1082; &#1076;&#1072;&#1085;&#1085;&#1099;&#1084; &#1080; &#1080;&#1085;&#1092;&#1086;&#1088;&#1084;&#1072;&#1094;&#1080;&#1080;.',
                purpose_tab: '&#1062;&#1077;&#1083;&#1080; &#1080; &#1092;&#1091;&#1085;&#1082;&#1094;&#1080;&#1080;',
                purpose_message: '&#1042;&#1099; &#1084;&#1086;&#1078;&#1077;&#1090;&#1077; &#1076;&#1072;&#1090;&#1100; &#1089;&#1086;&#1075;&#1083;&#1072;&#1089;&#1080;&#1077; &#1080;&#1083;&#1080; &#1086;&#1090;&#1082;&#1072;&#1079;&#1072;&#1090;&#1100;&#1089;&#1103; &#1086;&#1090; &#1083;&#1102;&#1073;&#1086;&#1075;&#1086; &#1089;&#1073;&#1086;&#1088;&#1072; &#1080; &#1086;&#1073;&#1088;&#1072;&#1073;&#1086;&#1090;&#1082;&#1080; &#1076;&#1072;&#1085;&#1085;&#1099;&#1093;, &#1080;&#1089;&#1087;&#1086;&#1083;&#1100;&#1079;&#1091;&#1103; &#1082;&#1085;&#1086;&#1087;&#1082;&#1080; &#1085;&#1080;&#1078;&#1077;, &#1080;&#1083;&#1080; &#1074;&#1086;&#1089;&#1087;&#1086;&#1083;&#1100;&#1079;&#1086;&#1074;&#1072;&#1090;&#1100;&#1089;&#1103; &#1080;&#1085;&#1076;&#1080;&#1074;&#1080;&#1076;&#1091;&#1072;&#1083;&#1100;&#1085;&#1099;&#1084;&#1080; &#1085;&#1072;&#1089;&#1090;&#1088;&#1086;&#1081;&#1082;&#1072;&#1084;&#1080;, &#1091;&#1089;&#1090;&#1072;&#1085;&#1072;&#1074;&#1083;&#1080;&#1074;&#1072;&#1103; &#1087;&#1077;&#1088;&#1077;&#1082;&#1083;&#1102;&#1095;&#1072;&#1090;&#1077;&#1083;&#1080; &#1088;&#1103;&#1076;&#1086;&#1084; &#1089; &#1082;&#1072;&#1078;&#1076;&#1086;&#1081; &#1094;&#1077;&#1083;&#1100;&#1102; &#1080;&#1083;&#1080; &#1092;&#1091;&#1085;&#1082;&#1094;&#1080;&#1077;&#1081; &#1074; &#1087;&#1086;&#1079;&#1080;&#1094;&#1080;&#1102; &laquo;&#1074;&#1082;&#1083;&raquo; &#1080;&#1083;&#1080; &laquo;&#1074;&#1099;&#1082;&#1083;&raquo;. &#1052;&#1099; &#1076;&#1077;&#1083;&#1080;&#1084;&#1089;&#1103; &#1080;&#1085;&#1092;&#1086;&#1088;&#1084;&#1072;&#1094;&#1080;&#1077;&#1081; &#1089; &#1085;&#1072;&#1096;&#1080;&#1084;&#1080; &#1087;&#1072;&#1088;&#1090;&#1085;&#1077;&#1088;&#1072;&#1084;&#1080; &#1085;&#1072; &#1086;&#1089;&#1085;&#1086;&#1074;&#1077; &#1089;&#1086;&#1075;&#1083;&#1072;&#1089;&#1080;&#1103; &#1080; &#1079;&#1072;&#1082;&#1086;&#1085;&#1085;&#1086;&#1075;&#1086; &#1080;&#1085;&#1090;&#1077;&#1088;&#1077;&#1089;&#1072;. &#1053;&#1072; &#1074;&#1082;&#1083;&#1072;&#1076;&#1082;&#1077; &laquo;&#1055;&#1072;&#1088;&#1090;&#1085;&#1077;&#1088;&#1099;&raquo; &#1074;&#1099; &#1085;&#1072;&#1081;&#1076;&#1077;&#1090;&#1077; &#1089;&#1087;&#1080;&#1089;&#1086;&#1082; &#1085;&#1072;&#1096;&#1080;&#1093; &#1087;&#1072;&#1088;&#1090;&#1085;&#1077;&#1088;&#1086;&#1074; &#1080; &#1089;&#1084;&#1086;&#1078;&#1077;&#1090;&#1077; &#1074;&#1086;&#1089;&#1087;&#1086;&#1083;&#1100;&#1079;&#1086;&#1074;&#1072;&#1090;&#1100;&#1089;&#1103; &#1085;&#1072;&#1089;&#1090;&#1088;&#1086;&#1081;&#1082;&#1072;&#1084;&#1080; &#1089;&#1086;&#1075;&#1083;&#1072;&#1089;&#1080;&#1103; &#1086;&#1090;&#1085;&#1086;&#1089;&#1080;&#1090;&#1077;&#1083;&#1100;&#1085;&#1086; &#1082;&#1072;&#1078;&#1076;&#1086;&#1075;&#1086; &#1080;&#1079; &#1085;&#1080;&#1093; &#1080; &#1074;&#1086;&#1079;&#1088;&#1072;&#1079;&#1080;&#1090;&#1100; &#1087;&#1088;&#1086;&#1090;&#1080;&#1074; &#1086;&#1073;&#1088;&#1072;&#1073;&#1086;&#1090;&#1082;&#1080; &#1076;&#1072;&#1085;&#1085;&#1099;&#1093; &#1090;&#1077;&#1084;&#1080;, &#1082;&#1090;&#1086; &#1079;&#1072;&#1103;&#1074;&#1083;&#1103;&#1077;&#1090; &#1086; &#1079;&#1072;&#1082;&#1086;&#1085;&#1085;&#1086;&#1084; &#1080;&#1085;&#1090;&#1077;&#1088;&#1077;&#1089;&#1077; &#1086;&#1090;&#1085;&#1086;&#1089;&#1080;&#1090;&#1077;&#1083;&#1100;&#1085;&#1086; &#1086;&#1073;&#1088;&#1072;&#1073;&#1086;&#1090;&#1082;&#1080; &#1074;&#1072;&#1096;&#1080;&#1093; &#1076;&#1072;&#1085;&#1085;&#1099;&#1093;.\n&#1057;&#1076;&#1077;&#1083;&#1072;&#1085;&#1085;&#1099;&#1081; &#1074;&#1072;&#1084;&#1080; &#1074;&#1099;&#1073;&#1086;&#1088; &#1086;&#1090;&#1085;&#1086;&#1089;&#1080;&#1090;&#1089;&#1103; &#1080;&#1089;&#1082;&#1083;&#1102;&#1095;&#1080;&#1090;&#1077;&#1083;&#1100;&#1085;&#1086; &#1082; &#1101;&#1090;&#1086;&#1084;&#1091; &#1074;&#1077;&#1073;-&#1089;&#1072;&#1081;&#1090;&#1091;. &#1042;&#1099; &#1084;&#1086;&#1078;&#1077;&#1090;&#1077; &#1074; &#1083;&#1102;&#1073;&#1086;&#1081; &#1084;&#1086;&#1084;&#1077;&#1085;&#1090; &#1080;&#1079;&#1084;&#1077;&#1085;&#1080;&#1090;&#1100; &#1089;&#1074;&#1086;&#1080; &#1085;&#1072;&#1089;&#1090;&#1088;&#1086;&#1081;&#1082;&#1080; &#1080; &#1086;&#1090;&#1086;&#1079;&#1074;&#1072;&#1090;&#1100; &#1089;&#1086;&#1075;&#1083;&#1072;&#1089;&#1080;&#1077; &#1085;&#1072; &#1089;&#1090;&#1088;&#1072;&#1085;&#1080;&#1094;&#1077; [privacypolicy]&#1055;&#1086;&#1083;&#1080;&#1090;&#1080;&#1082;&#1072; &#1082;&#1086;&#1085;&#1092;&#1080;&#1076;&#1077;&#1085;&#1094;&#1080;&#1072;&#1083;&#1100;&#1085;&#1086;&#1089;&#1090;&#1080;[/privacypolicy] &#1080;&#1083;&#1080; &#1085;&#1072;&#1078;&#1072;&#1074; &#1082;&#1085;&#1086;&#1087;&#1082;&#1091; &laquo;&#1059;&#1087;&#1088;&#1072;&#1074;&#1083;&#1077;&#1085;&#1080;&#1077; &#1089;&#1086;&#1075;&#1083;&#1072;&#1089;&#1080;&#1077;&#1084;&raquo; &#1074; &#1083;&#1077;&#1074;&#1086;&#1084; &#1085;&#1080;&#1078;&#1085;&#1077;&#1084; &#1091;&#1075;&#1083;&#1091;.',
                purpose_footer: '&#1057;&#1074;&#1086;&#1080;&#1084; &#1089;&#1086;&#1075;&#1083;&#1072;&#1089;&#1080;&#1077;&#1084; &#1086;&#1090;&#1085;&#1086;&#1089;&#1080;&#1090;&#1077;&#1083;&#1100;&#1085;&#1086; &#1087;&#1077;&#1088;&#1077;&#1095;&#1080;&#1089;&#1083;&#1077;&#1085;&#1085;&#1099;&#1093; &#1079;&#1076;&#1077;&#1089;&#1100; &#1094;&#1077;&#1083;&#1077;&#1081; &#1080; &#1092;&#1091;&#1085;&#1082;&#1094;&#1080;&#1081; &#1074;&#1099; &#1076;&#1072;&#1077;&#1090;&#1077; &#1085;&#1072;&#1084; &#1080; &#1085;&#1072;&#1096;&#1080;&#1084; &#1087;&#1072;&#1088;&#1090;&#1085;&#1077;&#1088;&#1072;&#1084; &#1074;&#1086;&#1079;&#1084;&#1086;&#1078;&#1085;&#1086;&#1089;&#1090;&#1100;',
                descriptions: []
            }, {
                language_id: 9,
                code: 'pt',
                default: false,
                general_learn_more: 'Saber mais',
                general_close: 'Fechar',
                general_session: 'Sess&atilde;o',
                general_year: 'ano',
                general_years: 'anos',
                general_month: 'm&ecirc;s',
                general_months: 'm&ecirc;ses',
                general_week: 'semana',
                general_weeks: 'semanas',
                general_day: 'dia',
                general_days: 'dias',
                general_hour: 'hora',
                general_hours: 'horas',
                cookie_name: 'Nome',
                cookie_hostname: 'Nome de anfitri&atilde;o',
                cookie_path: 'Caminho',
                cookie_expiry: 'Termo',
                cookie_3rd_party: 'Terceiros',
                cookie_http_only: 'HTTP s&oacute;',
                cookie_secure: 'Seguro',
                widget_title: 'Sobre as Cookies Neste Site',
                widget_message: 'Utilizamos cookies para coletar e analisar informa&ccedil;&otilde;es sobre o desempenho e o uso do site, para fornecer fun&ccedil;&otilde;es de redes sociais e para melhorar e personalizar o conte&uacute;do e os an&uacute;ncios.',
                widget_btn_allow_all: 'Permitir Todos os Cookies',
                widget_btn_settings: 'Configura&ccedil;&otilde;es de Cookies',
                settings_title: 'Sobre as Cookies Neste Site',
                settings_tab: 'Configura&ccedil;&otilde;es de Cookies',
                settings_message: 'Os cookies usados no site s&atilde;o categorizados e voc&ecirc; pode ler sobre cada categoria e permitir ou negar parte ou a totalidade. Quando as categorias permitidas anteriormente s&atilde;o desativadas, todos os cookies atribu&iacute;dos a essa categoria ser&atilde;o exclu&iacute;dos do seu navegador.\nAl&eacute;m disso, voc&ecirc; pode ver uma lista de cookies atribu&iacute;dos a cada categoria e informa&ccedil;&otilde;es detalhadas na declara&ccedil;&atilde;o de cookies.',
                settings_btn_save: 'Salvar Configura&ccedil;&otilde;es',
                settings_close: 'Fechar',
                declaration_tab: 'Declara&ccedil;&atilde;o de Cookies',
                declaration_message: 'Os cookies usados no site s&atilde;o categorizados e voc&ecirc; pode ler sobre cada categoria e permitir ou negar parte ou a totalidade. Quando as categorias permitidas anteriormente s&atilde;o desativadas, todos os cookies atribu&iacute;dos a essa categoria ser&atilde;o exclu&iacute;dos do seu navegador.\nAl&eacute;m disso, voc&ecirc; pode ver uma lista de cookies atribu&iacute;dos a cada categoria e informa&ccedil;&otilde;es detalhadas na declara&ccedil;&atilde;o de cookies.',
                icon_btn: 'Configura&ccedil;&otilde;es de Cookies',
                necessary_title: 'Cookies necess&aacute;rios',
                necessary_description: 'Alguns cookies s&atilde;o necess&aacute;rios para fornecer a funcionalidade principal. O site n&atilde;o funcionar&aacute; corretamente sem esses cookies e eles est&atilde;o ativados por padr&atilde;o e n&atilde;o podem ser desativados.',
                preferences_title: 'Prefer&ecirc;ncias',
                preferences_description: 'Os cookies de prefer&ecirc;ncia permitem que o site se lembre de informa&ccedil;&otilde;es para personalizar a apar&ecirc;ncia ou o comportamento do site para cada usu&aacute;rio. Isso pode incluir o armazenamento de moedas, regi&otilde;es, idiomas ou temas de cor selecionados.',
                analytics_title: 'Cookies Anal&iacute;ticos',
                analytics_description: 'Os cookies anal&iacute;ticos nos ajudam a melhorar nosso site, coletando e relatando informa&ccedil;&otilde;es sobre seu uso.',
                marketing_title: 'Cookies de Marketing',
                marketing_description: 'Os cookies de marketing s&atilde;o usados para rastrear visitantes em sites para permitir que os editores exibam an&uacute;ncios relevantes e atraentes.',
                uncategorized_title: 'Outros Cookies',
                uncategorized_description: 'Os cookies nesta categoria ainda n&atilde;o foram categorizados e o objetivo pode ser desconhecido no momento.',
                general_learn_more_link: '',
                widget_btn_deny_all: 'Negar tudo',
                cookie_tags: 'R&oacute;tulos',
                widget_btn_ok: 'OK',
                widget_btn_donotsell: 'Do not sell or share my personal information',
                personal_data_tab: 'Personal information',
                personal_data_message: 'Under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA), California residents have the right to opt-out of the &bdquo;sale&ldquo; and &bdquo;sharing&ldquo; of their personal information (i.e., disclosures to other businesses or third parties for monetary or other valuable consideration).\nUse the toggle below to opt-out of sale and sharing of personal data.',
                donotsell_title: 'Allow sale and sharing of personal information',
                donotsell_description: '',
                token_title: 'Suas escolhas',
                token_text: 'Abaixo, voc&ecirc; ver&aacute; seu estado de consentimento atual',
                token_categories: 'Categorias com consentimento',
                token_token: 'Sua identifica&ccedil;&atilde;o',
                token_datetime: 'Data e hora do consentimento',
                general_categories: 'Categorias',
                general_vendor: 'Fornecedor',
                general_vendors: 'Fornecedores',
                general_service: 'Servi&ccedil;o',
                general_services: 'Servi&ccedil;os',
                service_tab: 'Servi&ccedil;os',
                service_message: 'Os servi&ccedil;os que recolhem dados e/ou configuram cookies neste website est&atilde;o listados abaixo. Pode expandir cada servi&ccedil;o para ver mais detalhes.',
                vendor_tab: 'Fornecedores',
                vendor_message: 'Os nossos fornecedores est&atilde;o listados abaixo. Pode expandir cada fornecedor para ver mais detalhes e modificar o consentimento para os servi&ccedil;os.',
                vendor_privacy_policy: 'Pol&iacute;tica de Privacidade',
                vendor_cookie_policy: 'Pol&iacute;tica de Cookies',
                tcf_notice_title: 'A sua Privacidade &eacute; Importante',
                tcf_notice_message: '&Eacute; seu direito legal escolher a informa&ccedil;&atilde;o que um site pode armazenar e ter acesso. Com a sua permiss&atilde;o, n&oacute;s e [vendors] os nossos parceiros [/vendors] armazenamos e/ou acedemos a informa&ccedil;&otilde;es de acesso num dispositivo, tais como identificadores &uacute;nicos em cookies e dados de navega&ccedil;&atilde;o para recolher e tratar dados pessoais. \n <strong>N&oacute;s e os nossos parceiros fazemos o seguinte processamento de dados:</strong>[br][purposesfeatures]\nSe aceitar algum ou todos estes, ter&aacute; concordado com a utiliza&ccedil;&atilde;o de cookies para estes fins neste website. Tamb&eacute;m pode optar por recusar o consentimento, mas certas funcionalidades personalizadas do site n&atilde;o estar&atilde;o dispon&iacute;veis para si. As suas escolhas de consentimento aplicar-se-&atilde;o apenas a este website, podendo alterar as suas defini&ccedil;&otilde;es e retirar o consentimento a qualquer momento da p&aacute;gina [privacypolicy]Pol&iacute;tica de Privacidade [/privacypolicy] ou clicando no bot&atilde;o <strong>Gerir consentimento</strong>  no canto inferior esquerdo.',
                tcf_settings_title: 'Centro de Prefer&ecirc;ncias de Privacidade',
                tcf_vendor_tab: 'Parceiros',
                tcf_vendor_message: 'Os nossos parceiros est&atilde;o listados abaixo. Expandir cada parceiro para ver e modificar o consentimento para fins e funcionalidades. Al&eacute;m disso, pode opor-se a prop&oacute;sitos com base em interesses leg&iacute;timos.',
                tcf_legitimate_interest_tab: 'Interesse Leg&iacute;timo',
                tcf_legitimate_interest_message: 'Alguns dos nossos parceiros processam dados pessoais sem o seu consentimento com base num interesse leg&iacute;timo. Pode rever as finalidades abaixo e expandindo, consulte uma lista de cada parceiro alegando interesse leg&iacute;timo para o efeito. Para se opor ao processamento com base no interesse leg&iacute;timo para qualquer dos fins abaixo indicados, desligar o interruptor ao lado do mesmo.',
                tcf_btn_allow_all: 'Aceitar tudo',
                tcf_btn_deny_all: 'Rejeitar Tudo',
                tcf_btn_settings: 'Mais Op&ccedil;&otilde;es',
                tcf_btn_save: 'Guardar e Fechar',
                tcf_btn_manage: 'Gerir o Consentimento',
                tcf_lifespan: 'Tempo de vida',
                tcf_storage_disclosure: 'Divulga&ccedil;&atilde;o do Armazenamento de Dispositivos',
                tcf_identifier: 'Identificador',
                tcf_type: 'Tipo',
                tcf_search: 'Pesquisar',
                tcf_filter: 'Filtro',
                tcf_clear_filters: 'Limpar Filtros',
                tcf_type_tf: 'Caracter&iacute;sticas',
                tcf_type_tsf: 'Caracter&iacute;sticas Especiais',
                tcf_type_tp: 'Finalidades',
                tcf_type_tsp: 'Finalidades Especiais',
                tcf_type_tlp: 'Finalidades de Interesse Leg&iacute;timo',
                tcf_vendor_cookies_and_other: 'Al&eacute;m de utilizar cookies, este fornecedor utiliza outros m&eacute;todos para armazenar e aceder a dados e informa&ccedil;&otilde;es.',
                tcf_vendor_no_cookies: 'Este fornecedor n&atilde;o utiliza cookies, mas utiliza outros m&eacute;todos para armazenar e aceder a dados e informa&ccedil;&otilde;es.',
                purpose_tab: 'Finalidades e Funcionalidades',
                purpose_message: 'Pode aceitar ou rejeitar a recolha e tratamento de dados de uma s&oacute; vez, utilizando os bot&otilde;es abaixo, ou pode adaptar os consentimentos individuais, trocando os alternamentos ao lado de cada finalidade ou funcionalidade. Partilhamos esta informa&ccedil;&atilde;o com os nossos parceiros com base no consentimento e interesse leg&iacute;timo. No separador Fornecedores, encontrar&aacute; uma lista dos nossos parceiros e ter&aacute; a op&ccedil;&atilde;o de personalizar o seu consentimento para cada um deles e opor-se ao processamento de dados para aqueles que reclamam um interesse leg&iacute;timo para processar os seus dados.\nAs escolhas que faz s&oacute; s&atilde;o relevantes para este website em particular e pode alterar as suas defini&ccedil;&otilde;es e retirar o consentimento a qualquer momento da p&aacute;gina [privacypolicy]Pol&iacute;tica de Privacidade [/privacypolicy] ou clicando no bot&atilde;o <strong>Gerir consentimento</strong> no canto inferior esquerdo.',
                purpose_footer: 'Ao dar o seu consentimento aos prop&oacute;sitos e funcionalidades listados aqui, voc&ecirc; d&aacute; a n&oacute;s e aos nossos parceiros a capacidade de',
                descriptions: []
            }, {
                language_id: 12,
                code: 'tr',
                default: false,
                general_learn_more: 'Daha fazla bilgi edinin',
                general_close: 'Kapat',
                general_session: 'Oturum',
                general_year: 'y&#305;l',
                general_years: 'y&#305;l',
                general_month: 'ay',
                general_months: 'ay',
                general_week: 'hafta',
                general_weeks: 'hafta',
                general_day: 'g&uuml;n',
                general_days: 'g&uuml;n',
                general_hour: 'saat',
                general_hours: 'saat',
                cookie_name: 'Ad&#305;',
                cookie_hostname: 'Host ad&#305;',
                cookie_path: 'Yol',
                cookie_expiry: 'Kullan&#305;m s&uuml;resi',
                cookie_3rd_party: '&Uuml;&ccedil;&uuml;nc&uuml; taraf',
                cookie_http_only: 'HTTP sadece',
                cookie_secure: 'G&uuml;venli',
                widget_title: 'Bu sitede kullan&#305;lan &ccedil;erezler hakk&#305;nda',
                widget_message: '&Ccedil;erezleri, sitenin performans ve kullan&#305;m&#305; hakk&#305;nda bilgi toplay&#305;p analiz etmek, sosyal medya &ouml;zellikleri sa&#287;lamak, i&ccedil;erik ve reklamlar&#305; geli&#351;tirmek ve &ouml;zelle&#351;tirmek i&ccedil;in kullan&#305;yoruz.',
                widget_btn_allow_all: 'T&uuml;m &ccedil;erezlere izin ver',
                widget_btn_settings: '&Ccedil;erez ayarlar&#305;',
                settings_title: 'Bu sitede kullan&#305;lan &ccedil;erezler hakk&#305;nda',
                settings_tab: '&Ccedil;erez ayarlar&#305;',
                settings_message: 'Sitede kullan&#305;lan &ccedil;erezler belirli kategorilere ayr&#305;lm&#305;&#351;t&#305;r ve a&#351;a&#287;&#305;da her bir kategori hakk&#305;nda bilgi alabilir ve bir k&#305;sm&#305;na veya hepsine izin verebilir veya reddedebilirsiniz. &Ouml;nceden izin verilen kategoriler devre d&#305;&#351;&#305; b&#305;rak&#305;ld&#305;&#287;&#305;nda, bu kategoriye atanan t&uuml;m &ccedil;erezler taray&#305;c&#305;n&#305;zdan kald&#305;r&#305;l&#305;r.\nEk olarak, her bir kategoriye atanan &ccedil;erezlerin bir listesini ve &ccedil;erez bildiriminde ayr&#305;nt&#305;l&#305; bilgileri g&ouml;rebilirsiniz.',
                settings_btn_save: 'Ayarlar&#305; kaydet',
                settings_close: 'Kapat',
                declaration_tab: '&Ccedil;erez bildirimi',
                declaration_message: 'Sitede kullan&#305;lan &ccedil;erezler belirli kategorilere ayr&#305;lm&#305;&#351;t&#305;r ve a&#351;a&#287;&#305;da her bir kategori hakk&#305;nda bilgi alabilir ve bir k&#305;sm&#305;na veya hepsine izin verebilir veya reddedebilirsiniz. &Ouml;nceden izin verilen kategoriler devre d&#305;&#351;&#305; b&#305;rak&#305;ld&#305;&#287;&#305;nda, bu kategoriye atanan t&uuml;m &ccedil;erezler taray&#305;c&#305;n&#305;zdan kald&#305;r&#305;l&#305;r.\nEk olarak, her bir kategoriye atanan &ccedil;erezlerin bir listesini ve &ccedil;erez bildiriminde ayr&#305;nt&#305;l&#305; bilgileri g&ouml;rebilirsiniz.',
                icon_btn: '&Ccedil;erez ayarlar&#305;',
                necessary_title: 'Gerekli &ccedil;erezler',
                necessary_description: 'Temel i&#351;levsellik sa&#287;lamak i&ccedil;in baz&#305; &ccedil;erezler gerekir. Web sitesi bu &ccedil;erezler olmadan d&uuml;zg&uuml;n bir &#351;ekilde &ccedil;al&#305;&#351;maz ve bunlar varsay&#305;lan olarak etkindir ve devre d&#305;&#351;&#305; b&#305;rak&#305;lamaz.',
                preferences_title: 'Tercihler',
                preferences_description: 'Tercih &ccedil;erezleri web sitesinin her bir kullan&#305;c&#305;n&#305;n bilgilerini hat&#305;rlayarak web sitesinin nas&#305;l g&ouml;r&uuml;nmesi veya davranmas&#305; gerekti&#287;ini belirlemek i&ccedil;in kullan&#305;l&#305;r. Bu, se&ccedil;ilen para birimini, b&ouml;lgeyi, dili veya renk temas&#305;n&#305; kaydetmeyi i&ccedil;erebilir.',
                analytics_title: 'Analitik &ccedil;erezler',
                analytics_description: 'Analitik &ccedil;erezler, web sitemisin kullan&#305;m&#305; hakk&#305;nda bilgi toplayarak ve rapor ederek web sitemizi geli&#351;tirmemize yard&#305;mc&#305; olur.',
                marketing_title: 'Pazarlama &ccedil;erezleri',
                marketing_description: 'Pazarlama &ccedil;erezleri, yay&#305;nc&#305;lar&#305;n alakal&#305; ve ilgi &ccedil;ekici reklamlar&#305; g&ouml;r&uuml;nt&uuml;lemesine izin vermek i&ccedil;in web sitelerindeki ziyaret&ccedil;ileri izlemek i&ccedil;in kullan&#305;l&#305;r.',
                uncategorized_title: 'Di&#287;er &ccedil;erezler',
                uncategorized_description: 'Bu kategorideki &ccedil;erezler hen&uuml;z bir kategoriye dahil edilmedi ve ama&ccedil;lar&#305; &#351;u an i&ccedil;in belirlenmedi.',
                general_learn_more_link: '',
                widget_btn_deny_all: 'Hepsini reddet',
                cookie_tags: 'Etiketler',
                widget_btn_ok: 'TAMAM',
                widget_btn_donotsell: 'Ki&#351;isel bilgilerimi satmay&#305;n',
                personal_data_tab: 'Ki&#351;isel bilgiler',
                personal_data_message: 'California T&uuml;ketici Gizlili&#287;i Yasas&#305; (CCPA) uyar&#305;nca, California\'da ikamet edenler, ki&#351;isel bilgilerinin "sat&#305;&#351;&#305;ndan"  (yani parasal veya di&#287;er de&#287;erli bedeller kar&#351;&#305;l&#305;&#287;&#305;nda di&#287;er i&#351;letmelere veya &uuml;&ccedil;&uuml;nc&uuml; taraflara if&#351;a edilmesinden) feragat etme hakk&#305;na sahiptir.\nKi&#351;isel verilerin sat&#305;&#351;&#305;ndan feragat etmek i&ccedil;in a&#351;a&#287;&#305;daki butonu kullan&#305;n.',
                donotsell_title: 'Ki&#351;isel bilgilerin sat&#305;&#351;&#305;na izin ver',
                donotsell_description: '',
                token_title: 'Se&ccedil;imleriniz',
                token_text: 'A&#351;a&#287;&#305;da mevcut izin durumunuzu g&ouml;rebilirsiniz',
                token_categories: '&#304;zin verilen kategoriler',
                token_token: 'Kimli&#287;iniz',
                token_datetime: '&#304;zin tarih ve saati',
                general_categories: 'Kategoriler',
                general_vendor: 'Sa&#287;lay&#305;c&#305;',
                general_vendors: 'Sa&#287;lay&#305;c&#305;lar',
                general_service: 'Hizmet',
                general_services: 'Hizmetler',
                service_tab: 'Hizmetler',
                service_message: 'Bu sitede veri toplayan ve/veya &ccedil;erezleri kullanan hizmetler a&#351;a&#287;&#305;da listelenmi&#351;tir. Daha fazla ayr&#305;nt&#305; i&ccedil;in her birine t&#305;klayarak geni&#351;letebilirsiniz.',
                vendor_tab: 'Sa&#287;lay&#305;c&#305;lar',
                vendor_message: 'Sa&#287;lay&#305;c&#305;lar&#305;m&#305;z a&#351;a&#287;&#305;da listelenmi&#351;tir. Daha fazla ayr&#305;nt&#305; g&ouml;rmek ve hizmet onaylar&#305;n&#305; de&#287;i&#351;tirmek i&ccedil;in her bir sa&#287;lay&#305;c&#305;ya t&#305;klayarak geni&#351;letebilirsiniz.',
                vendor_privacy_policy: 'Gizlilik Politikas&#305;',
                vendor_cookie_policy: '&Ccedil;erez Politikas&#305;',
                tcf_notice_title: 'Gizlili&#287;iniz &Ouml;nemli',
                tcf_notice_message: 'Bir sitenin hangi bilgilerinize eri&#351;ebilece&#287;ini se&ccedil;mek yasal olarak hakk&#305;n&#305;zd&#305;r. &#304;zninizle, biz ve [vendors]&uuml;&ccedil;&uuml;nc&uuml; taraf ortaklar&#305;m&#305;z[/vendors] ki&#351;isel verileri toplamak ve i&#351;lemek i&ccedil;in &ccedil;erezlerdeki benzersiz tan&#305;mlay&#305;c&#305;lar ve tarama verileri gibi bilgileri bir cihazda saklar ve/veya bunlara eri&#351;iriz.\n<strong> Biz ve ortaklar&#305;m&#305;z verileri &#351;u &#351;ekilde i&#351;leriz:</strong>[br][purposesfeatures]\nBunlardan herhangi birini veya hepsini kabul ederseniz, bu sitenin bu ama&ccedil;larla &ccedil;erezleri kullanmas&#305;n&#305; kabul etmi&#351; olursunuz. Reddetme hakk&#305;na da sahipsinizdir, ancak reddetti&#287;inizde sitenin belirli ki&#351;iselle&#351;tirilmi&#351; &ouml;zelliklerini kullanamazs&#305;n&#305;z. &#304;zin se&ccedil;enekleriniz yaln&#305;zca bu site i&ccedil;in ge&ccedil;erli olacakt&#305;r ve istedi&#287;iniz zaman [privacypolicy]Gizlilik Politikas&#305;[/privacypolicy] sayfas&#305;ndan veya sol alt k&ouml;&#351;edeki <strong>&#304;zinleri Y&ouml;net</strong> butonuna t&#305;klayarak ayarlar&#305;n&#305;z&#305; de&#287;i&#351;tirebilir ve izin vermek isteyip istemedi&#287;inizi belirleyebilirsiniz.',
                tcf_settings_title: 'Gizlilik Tercih Merkezi',
                tcf_vendor_tab: 'Ortaklar',
                tcf_vendor_message: 'Ortaklar&#305;m&#305;z a&#351;a&#287;&#305;da listelenmi&#351;tir. Ama&ccedil;lar ve &ouml;zelliklerle ilgili izinleri g&ouml;r&uuml;nt&uuml;lemek ve de&#287;i&#351;tirmek i&ccedil;in her bir orta&#287;&#305; geni&#351;letebilirsiniz. Ek olarak me&#351;ru menfaat temelinde ama&ccedil;lara itiraz edebilirsiniz.',
                tcf_legitimate_interest_tab: 'Me&#351;ru Menfaat',
                tcf_legitimate_interest_message: 'Ortaklar&#305;m&#305;zdan baz&#305;lar&#305; me&#351;ru menfaat temelinde izniniz olmadan ki&#351;isel verileri i&#351;leyebilir. Ne ama&ccedil;la i&#351;lediklerini her birini geni&#351;leterek inceleyebilir ve amac&#305; me&#351;ru menfaat olan ortaklar&#305;n bir listesini g&ouml;rebilirsiniz. Bilgilerinizin a&#351;a&#287;&#305;daki ama&ccedil;lardan herhangi biri i&ccedil;in me&#351;ru menfaat temelinde i&#351;lenmesine itiraz etmek i&ccedil;in yan&#305;ndaki butonu kapal&#305; h&acirc;le getirin.',
                tcf_btn_allow_all: 'Hepsini Kabul Et',
                tcf_btn_deny_all: 'Hepsini Reddet',
                tcf_btn_settings: 'Daha Fazla Se&ccedil;enek',
                tcf_btn_save: 'Kaydet ve Kapat',
                tcf_btn_manage: '&#304;zinleri Y&ouml;net',
                tcf_lifespan: 'Ge&ccedil;erlilik S&uuml;resi',
                tcf_storage_disclosure: 'Cihaz Depolama A&ccedil;&#305;klamas&#305;',
                tcf_identifier: 'Tan&#305;mlay&#305;c&#305;',
                tcf_type: 'T&uuml;r',
                tcf_search: 'Arat',
                tcf_filter: 'Filtrele',
                tcf_clear_filters: 'Filtreleri temizle',
                tcf_type_tf: '&Ouml;zellikler',
                tcf_type_tsf: '&Ouml;zel &Ouml;zellikler',
                tcf_type_tp: 'Ama&ccedil;lar',
                tcf_type_tsp: '&Ouml;zel Ama&ccedil;lar',
                tcf_type_tlp: 'Me&#351;ru Menfaat Ama&ccedil;lar&#305;',
                tcf_vendor_cookies_and_other: 'Bu sat&#305;c&#305;, &ccedil;erezleri kullanman&#305;n yan&#305; s&#305;ra veri ve bilgileri depolamak ve bunlara eri&#351;mek i&ccedil;in ba&#351;ka y&ouml;ntemler de kullan&#305;r.',
                tcf_vendor_no_cookies: 'Bu sat&#305;c&#305; &ccedil;erez kullanmaz fakat veri ve bilgileri depolamak ve bunlara ba&#351;ka eri&#351;im y&ouml;ntemleri kullan&#305;r.',
                purpose_tab: 'Ama&ccedil;lar ve &Ouml;zellikler',
                purpose_message: 'A&#351;a&#287;&#305;daki butonlar&#305; kullanarak veri toplama ve i&#351;lemenin tamam&#305;n&#305; kabul edebilir veya reddedebilir ya da her bir ama&ccedil; veya &ouml;zelli&#287;in yan&#305;ndaki butonlar&#305; a&ccedil;&#305;p kapatarak bireysel izinleri iste&#287;inize g&ouml;re modifiye edebilirsiniz. Bu bilgileri ortaklar&#305;m&#305;zla yaln&#305;zca izninizle ve me&#351;ru menfaat temelinde payla&#351;&#305;r&#305;z. Sa&#287;lay&#305;c&#305;lar sekmesinde ortaklar&#305;m&#305;z&#305;n bir listesini bulabilir ve her biri i&ccedil;in izinlerinizi &ouml;zelle&#351;tirebilir ve verilerinizi me&#351;ru menfaatlerle i&#351;leyen ortaklara itiraz edebilirsiniz.\nYapt&#305;&#287;&#305;n&#305;z se&ccedil;imler yaln&#305;zca bu site i&ccedil;in ge&ccedil;erlidir ve [privacypolicy]Gizlilik Politikas&#305;[/privacypolicy] sayfas&#305;ndan veya sol alt k&ouml;&#351;edeki &#304;zinleri Y&ouml;net butonuna t&#305;klayarak ayarlar&#305;n&#305;z&#305; de&#287;i&#351;tirebilir ve izinlerinizi istedi&#287;iniz zaman a&ccedil;&#305;p kapayabilirisiniz.',
                purpose_footer: 'Burada listelenen ama&ccedil; ve &ouml;zelliklere izin vererek, bize ve ortaklar&#305;m&#305;za a&#351;a&#287;&#305;dakileri yapma imk&acirc;n&#305; vermi&#351; olursunuz',
                descriptions: []
            }, {
                language_id: 15,
                code: 'sv',
                default: false,
                general_learn_more: 'L&auml;s mer',
                general_close: 'St&auml;ng',
                general_session: 'session',
                general_year: '&aring;r',
                general_years: '&aring;r',
                general_month: 'm&aring;nad',
                general_months: 'm&aring;nader',
                general_week: 'vecka',
                general_weeks: 'veckor',
                general_day: 'dag',
                general_days: 'dagar',
                general_hour: 'timme',
                general_hours: 'timmar',
                cookie_name: 'Namn',
                cookie_hostname: 'V&auml;rddator',
                cookie_path: 'S&ouml;kv&auml;g',
                cookie_expiry: 'Utg&aring;ngstid',
                cookie_3rd_party: 'Tredje part',
                cookie_http_only: 'Endast HTTP',
                cookie_secure: 'S&auml;ker',
                widget_title: 'Om cookies p&aring; denna webbplats',
                widget_message: 'Vi anv&auml;nder cookies f&ouml;r att samla in och analysera information om webbplatsens prestanda och anv&auml;ndning, f&ouml;r att f&ouml;rb&auml;ttra funktioner kopplade till sociala medier och f&ouml;r att f&ouml;rb&auml;ttra och anpassa inneh&aring;ll och annonser.',
                widget_btn_allow_all: 'Till&aring;t alla cookies',
                widget_btn_settings: 'Inst&auml;llningar f&ouml;r cookies',
                settings_title: 'Om cookies p&aring; denna webbplats',
                settings_tab: 'Cookie inst&auml;llningar',
                settings_message: 'Cookies vi anv&auml;nder p&aring; webbplatsen &auml;r uppdelade i kategorier och nedan kan du l&auml;sa vad de inneb&auml;r och tacka ja eller nej till alla cookies eller vissa av dem. N&auml;r du avaktiverar kategorier som tidigare har aktiverats kommer alla cookies i den kategorin tas bort fr&aring;n webbl&auml;saren.\nDu kan &auml;ven se en lista &ouml;ver alla cookies i varje kategori tillsammans med detaljerad information i cookie-deklarationen.',
                settings_btn_save: 'Spara inst&auml;llningar',
                settings_close: 'St&auml;ng',
                declaration_tab: 'Lista &ouml;ver cookies',
                declaration_message: 'Cookies vi anv&auml;nder p&aring; webbplatsen &auml;r uppdelade i kategorier och nedan kan du l&auml;sa vad de inneb&auml;r och tacka ja eller nej till alla cookies eller vissa av dem. N&auml;r du avaktiverar kategorier som tidigare har aktiverats kommer alla cookies i den kategorin tas bort fr&aring;n webbl&auml;saren.\nDu kan &auml;ven se en lista &ouml;ver alla cookies i varje kategori tillsammans med detaljerad information i cookie-deklarationen.',
                icon_btn: 'Cookie inst&auml;llningar',
                necessary_title: 'N&ouml;dv&auml;ndiga cookies',
                necessary_description: 'Vissa cookies &auml;r n&ouml;dv&auml;ndiga f&ouml;r webbplatsens funktionalitet. Webbplatsen kommer inte att fungera korrekt utan dessa cookies s&aring; de &auml;r aktiverade som standard och kan inte inaktiveras.',
                preferences_title: 'Preferenser',
                preferences_description: 'Preferens cookies g&ouml;r det m&ouml;jligt f&ouml;r webbplatsen att komma ih&aring;g information och anpassa hur webbplatsen ser ut och fungerar f&ouml;r varje anv&auml;ndare. Detta kan inneb&auml;ra lagring av vald valuta, region, spr&aring;k eller f&auml;rgschema.',
                analytics_title: 'Analys-cookies',
                analytics_description: 'Analyseringscookies hj&auml;lper oss f&ouml;rb&auml;ttra webbplatsen genom att samla och rapportera information om hur den anv&auml;nds. ',
                marketing_title: 'Marknadsf&ouml;rings-cookies',
                marketing_description: 'Marknadsf&ouml;rings-cookies anv&auml;nds f&ouml;r att sp&aring;ra gester p&aring; olika webbplatser f&ouml;r att kunna visa relevanta och engagerande annonser.',
                uncategorized_title: 'Andra cookies',
                uncategorized_description: 'Cookies i denna kategori har &auml;nnu inte kategoriseras och deras syfte kan vara ok&auml;nt i nul&auml;get.',
                general_learn_more_link: '',
                widget_btn_deny_all: 'Avb&ouml;j alla cookies',
                cookie_tags: 'Etiketter',
                widget_btn_ok: 'OK',
                widget_btn_donotsell: 'S&auml;lj inte min personliga information',
                personal_data_tab: 'Personuppgifter',
                personal_data_message: 'Enligt California Consumer Privacy Act (CCPA) har inv&aring;nare i Kalifornien r&auml;tt att v&auml;lja bort "f&ouml;rs&auml;ljning" av deras personuppgifter (dvs. upplysningar till andra f&ouml;retag eller tredje part f&ouml;r monet&auml;r eller annan v&auml;rdefull ers&auml;ttning).\nAnv&auml;nd v&auml;xeln nedan f&ouml;r att v&auml;lja bort f&ouml;rs&auml;ljning av personuppgifter.',
                donotsell_title: 'Till&aring;t f&ouml;rs&auml;ljning av personlig information',
                donotsell_description: '',
                token_title: 'Dina val',
                token_text: 'Nedan ser du ditt nuvarande samtycke',
                token_categories: 'Samtyckta kategorier',
                token_token: 'DITT ID',
                token_datetime: 'Datum och tid f&ouml;r samtycke',
                general_categories: 'Kategori',
                general_vendor: 'Leverant&ouml;r',
                general_vendors: 'Leverant&ouml;rer',
                general_service: 'Tj&auml;nst',
                general_services: 'Tj&auml;nster',
                service_tab: 'Tj&auml;nster',
                service_message: 'Tj&auml;nster som samlar in data och / eller st&auml;ller in cookies p&aring; denna webbplats listas nedan. Du kan ut&ouml;ka varje tj&auml;nst f&ouml;r att se ytterligare information.',
                vendor_tab: 'Leverant&ouml;rer',
                vendor_message: 'V&aring;ra leverant&ouml;rer listas nedan. Du kan ut&ouml;ka varje leverant&ouml;r f&ouml;r att se mer information och &auml;ndra samtycke f&ouml;r tj&auml;nster.',
                vendor_privacy_policy: 'Sekretesspolicy',
                vendor_cookie_policy: 'Cookiepolicy',
                tcf_notice_title: 'Din integritet &auml;r viktig',
                tcf_notice_message: 'Det &auml;r din lagliga r&auml;tt att v&auml;lja vilken information en webbplats kan lagra och ha tillg&aring;ng till. Med ditt tillst&aring;nd lagrar vi och v&aring;ra tredjepartspartners [/vendors]och/eller f&aring;r tillg&aring;ng till information p&aring; en enhet, till exempel unika identifierare i cookies och surfdata f&ouml;r att samla in och behandla personuppgifter.\n<strong>Vi och v&aring;ra partners g&ouml;r f&ouml;ljande databehandling: </strong>[br][purposesfeatures]\nOm du accepterar n&aring;gon eller alla av dessa, kommer du att ha samtyckt till denna webbplats anv&auml;ndning av cookies f&ouml;r dessa &auml;ndam&aring;l. Du kan ocks&aring; v&auml;lja att v&auml;gra samtycke, men vissa personliga funktioner p&aring; webbplatsen kommer inte att vara tillg&auml;ngliga f&ouml;r dig. Ditt samtycke g&auml;ller endast f&ouml;r denna webbplats, och du kan &auml;ndra dina inst&auml;llningar och &aring;terkalla samtycke n&auml;r som helst fr&aring;n [privacypolicy]Sekretesspolicy[/privacypolicy] sidan eller genom att klicka p&aring; <strong>Hantera samtycke</strong> knappen i det nedre v&auml;nstra h&ouml;rnet.',
                tcf_settings_title: 'Sekretesspolicy-inst&auml;llningar',
                tcf_vendor_tab: 'Partners',
                tcf_vendor_message: 'V&aring;ra partners listas nedan. Expandera varje partner f&ouml;r att visa och &auml;ndra samtycke f&ouml;r &auml;ndam&aring;l och funktioner. Dessutom kan du inv&auml;nda mot &auml;ndam&aring;l p&aring; grundval av ber&auml;ttigat intresse.',
                tcf_legitimate_interest_tab: 'Ber&auml;ttigat intresse',
                tcf_legitimate_interest_message: 'N&aring;gra av v&aring;ra samarbetspartners behandlar personuppgifter utan ditt samtycke p&aring; grundval av ett ber&auml;ttigat intresse. Du kan granska syften nedan och genom att expandera, se en lista &ouml;ver varje partner som h&auml;vdar legitimt intresse f&ouml;r &auml;ndam&aring;let. F&ouml;r att inv&auml;nda mot behandlingen p&aring; grundval av ber&auml;ttigat intresse f&ouml;r n&aring;got av syftena nedan, st&auml;ng av v&auml;xeln bredvid den.',
                tcf_btn_allow_all: 'Acceptera alla',
                tcf_btn_deny_all: 'Avvisa alla',
                tcf_btn_settings: 'Fler alternativ',
                tcf_btn_save: 'Spara & st&auml;ng',
                tcf_btn_manage: 'Hantera samtycke',
                tcf_lifespan: 'Livsl&auml;ngd',
                tcf_storage_disclosure: 'Information om lagring Av enheter',
                tcf_identifier: 'Identifikator',
                tcf_type: 'Typ',
                tcf_search: 'S&ouml;k',
                tcf_filter: 'Filter',
                tcf_clear_filters: 'Rensa filter',
                tcf_type_tf: 'Funktion',
                tcf_type_tsf: 'Speciella funktioner',
                tcf_type_tp: '&Auml;ndam&aring;l',
                tcf_type_tsp: 'S&auml;rskilda &auml;ndam&aring;l',
                tcf_type_tlp: 'Legitima intressen',
                tcf_vendor_cookies_and_other: 'F&ouml;rutom att anv&auml;nda cookies anv&auml;nder denna leverant&ouml;r andra metoder f&ouml;r att lagra och komma &aring;t data och information.',
                tcf_vendor_no_cookies: 'Denna leverant&ouml;r anv&auml;nder inte cookies men han anv&auml;nder andra metoder f&ouml;r att lagra och komma &aring;t data och information.',
                purpose_tab: '&Auml;ndam&aring;l och funktioner',
                purpose_message: 'Du kan acceptera eller avvisa datainsamling och bearbetning p&aring; en g&aring;ng genom att anv&auml;nda knapparna nedan, eller s&aring; kan du skr&auml;ddarsy enskilda samtycken genom att sl&aring; p&aring; och av v&auml;xlarna bredvid varje syfte eller funktion. Vi delar denna information med v&aring;ra partners p&aring; grundval av samtycke och ber&auml;ttigat intresse. P&aring; fliken leverant&ouml;rer, hittar du en lista &ouml;ver v&aring;ra partners och har m&ouml;jlighet att anpassa ditt samtycke f&ouml;r var och en av dem och inv&auml;nda mot databehandling f&ouml;r dem som h&auml;vdar ett legitimt intresse att behandla dina uppgifter.\nDe val du g&ouml;r &auml;r endast relevanta f&ouml;r den h&auml;r webbplatsen och du kan &auml;ndra dina inst&auml;llningar och &aring;terkalla samtycke n&auml;r som helst fr&aring;n sidan [privacypolicy]Sekretesspolicy[/privacypolicy] eller genom att klicka p&aring; knappen Hantera Samtycke I det nedre v&auml;nstra h&ouml;rnet.',
                purpose_footer: 'Genom att ge samtycke till de syften och funktioner som anges h&auml;r ger du oss och v&aring;ra partners m&ouml;jlighet att',
                descriptions: []
            }, {
                language_id: 18,
                code: 'nl',
                default: false,
                general_learn_more: 'Kom meer te weten',
                general_close: 'Sluiten',
                general_session: 'Sessie',
                general_year: 'jaar',
                general_years: 'jaren',
                general_month: 'maand',
                general_months: 'maanden',
                general_week: 'week',
                general_weeks: 'weken',
                general_day: 'dag',
                general_days: 'dagen',
                general_hour: 'uur',
                general_hours: 'uren',
                cookie_name: 'Naam',
                cookie_hostname: 'Hostnaam',
                cookie_path: 'Pad',
                cookie_expiry: 'Vervaldatum',
                cookie_3rd_party: '3de partij',
                cookie_http_only: 'Enkel HTTP',
                cookie_secure: 'Veilig',
                widget_title: 'Over de cookies op deze website',
                widget_message: 'We maken gebruik van cookies om gegevens m.b.t. de prestaties en het gebruik van deze website te verzamelen & analyseren, om sociale netwerkfunctionaliteiten aan te bieden en onze content & advertenties te verbeteren en personaliseren.',
                widget_btn_allow_all: 'Alle cookies toestaan',
                widget_btn_settings: 'Cookie-instellingen',
                settings_title: 'Over de cookies op deze website',
                settings_tab: 'Cookie-instellingen',
                settings_message: 'De cookies die op deze website worden gebruikt, hebben we in categori&euml;n onderverdeeld. en Hieronder vindt u een beschrijving van elke categorie en kunt u sommige of alle cookies toestaan of weigeren. Wanneer categorie&euml;n die eerder waren toegestaan, worden uitgeschakeld, worden alle cookies die aan die categorie zijn toegewezen uit uw browser verwijderd.\nBovendien kunt u een lijst met alle cookies zien die aan elke categorie zijn toegewezen, samen met een gedetailleerde beschrijving in de cookieverklaring.',
                settings_btn_save: 'Instellingen opslaan',
                settings_close: 'Sluiten',
                declaration_tab: 'Cookieverklaring',
                declaration_message: 'De cookies die op deze website worden gebruikt, hebben we in categori&euml;n onderverdeeld. en Hieronder vindt u een beschrijving van elke categorie en kunt u sommige of alle cookies toestaan of weigeren. Wanneer categorie&euml;n die eerder waren toegestaan, worden uitgeschakeld, worden alle cookies die aan die categorie zijn toegewezen uit uw browser verwijderd.\nBovendien kunt u een lijst met alle cookies zien die aan elke categorie zijn toegewezen, samen met een gedetailleerde beschrijving in de cookieverklaring.',
                icon_btn: 'Cookie-instellingen',
                necessary_title: 'Noodzakelijke cookies',
                necessary_description: 'Sommige cookies zijn nodig om de kernfunctionaliteit van onze website mogelijk te maken. De website zal niet goed werken zonder deze cookies en daardoor zijn ze standaard ingeschakeld en kunnen ze niet worden uitgeschakeld.',
                preferences_title: 'Voorkeuren',
                preferences_description: 'Met voorkeurcookies kan de website informatie onthouden over hoe het ontwerp van de website eruitziet of hoe de website zich gedraagt voor de gebruiker. Denk bijvoorbeeld aan het opslaan van de geselecteerde valuta, regio, taal of kleurenthema.',
                analytics_title: 'Analytische cookies',
                analytics_description: 'Analytische cookies helpen ons onze website te verbeteren door informatie over het gebruik ervan te verzamelen en te rapporteren.',
                marketing_title: 'Marketingcookies',
                marketing_description: 'Marketingcookies worden gebruikt om bezoekers op websites te volgen, zodat uitgevers relevante en boeiende advertenties kunnen weergeven.',
                uncategorized_title: 'Andere cookies',
                uncategorized_description: 'De cookies in deze categorie zijn nog niet gecategoriseerd en het doel ervan kan op dit moment onbekend zijn.',
                general_learn_more_link: '',
                widget_btn_deny_all: 'Weigeren',
                cookie_tags: 'Etiketten',
                widget_btn_ok: 'OK',
                widget_btn_donotsell: 'Verkoop mijn persoonlijke gegevens niet',
                personal_data_tab: 'Persoonlijke gegevens',
                personal_data_message: 'Volgens de California Consumer Privacy Act (CCPA) hebben inwoners van Californi&euml; het recht om zich af te melden voor de "verkoop" van hun persoonlijke informatie (d.w.z. bekendmaking aan andere bedrijven of derden voor geldelijke of andere waardevolle overweging).\nGebruik de onderstaande schakelaar om u af te melden voor de verkoop van persoonlijke gegevens.',
                donotsell_title: 'Verkoop van persoonlijke gegevens toestaan',
                donotsell_description: '',
                token_title: 'Uw keuzes',
                token_text: 'Hieronder ziet u uw huidige toestemmingsstatus',
                token_categories: 'Toegestane categorie&euml;n',
                token_token: 'Uw ID',
                token_datetime: 'Datum en tijd van toestemming',
                general_categories: 'Categorie&euml;n',
                general_vendor: 'Leverancier',
                general_vendors: 'Leveranciers',
                general_service: 'Dienst',
                general_services: 'Diensten',
                service_tab: 'Diensten',
                service_message: 'Diensten die gegevens verzamelen en/of cookies instellen op deze website staan hieronder vermeld. U kunt elke dienst uitvouwen om meer details te bekijken.',
                vendor_tab: 'Leveranciers',
                vendor_message: 'Onze leveranciers staan hieronder vermeld. U kunt elke leverancier uitvouwen om meer details te bekijken en toestemming voor diensten te wijzigen.',
                vendor_privacy_policy: 'Privacybeleid',
                vendor_cookie_policy: 'Cookiebeleid',
                tcf_notice_title: 'Uw privacy is belangrijk',
                tcf_notice_message: 'Het is uw wettelijke recht om te kiezen welke gegevens een website mag opslaan en waartoe het toegang mag hebben. Met uw toestemming kunnen wij en [vendors]onze externe partners[/vendors] gegevens op een apparaat opslaan of gebruiken, zoals unieke identificatoren in cookies en browsegegevens om persoonlijke gegevens te verzamelen en te verwerken. \n<strong>Wij en onze partners doen de volgende gegevensverwerking:</strong>[br][purposesfeatures]\nAls u een of allen accepteert, gaat u akkoord met het gebruik van cookies door deze website voor de genoemde doeleinden. U kunt er ook voor kiezen om toestemming te weigeren, echter zullen bepaalde gepersonaliseerde functies van de site dan niet beschikbaar zijn voor u. Uw toestemmingskeuzes zijn alleen van toepassing op deze website, en u kunt uw instellingen wijzigen en uw toestemming op elk gewenst moment intrekken vanaf de pagina [privacypolicy]Privacybeleid[/privacypolicy] of door op de knop <strong>Toestemming beheren</strong> te klikken in de onderste hoek links.',
                tcf_settings_title: 'Privacyvoorkeurencentrum',
                tcf_vendor_tab: 'Partners',
                tcf_vendor_message: 'Onze partners staan hieronder vermeld. Vouw elke partner uit om de toestemming voor doeleinden en functies te bekijken en te wijzigen. Daarnaast kunt u bezwaar maken tegen doeleinden op basis van gerechtvaardigd belang.',
                tcf_legitimate_interest_tab: 'Gerechtvaardigd belang',
                tcf_legitimate_interest_message: 'Sommige van onze partners verwerken persoonsgegevens zonder uw toestemming op basis van een gerechtvaardigd belang. U kunt de doeleinden hieronder bekijken en door ze uit te vouwen, ziet u een lijst van elke partner die een legitiem belang voor het doel claimt. Als u bezwaar heeft tegen de verwerking op basis van een legitiem belang voor een van de onderstaande doeleinden, schakelt u dit uit met de schakelaar ernaast.',
                tcf_btn_allow_all: 'Alles accepteren',
                tcf_btn_deny_all: 'Alles weigeren',
                tcf_btn_settings: 'Meer opties',
                tcf_btn_save: 'Opslaan & sluiten',
                tcf_btn_manage: 'Toestemming beheren',
                tcf_lifespan: 'Levensduur',
                tcf_storage_disclosure: 'Openbaarmaking van apparaatopslag',
                tcf_identifier: 'Identificator',
                tcf_type: 'Type',
                tcf_search: 'Zoeken',
                tcf_filter: 'Filter',
                tcf_clear_filters: 'Filters wissen',
                tcf_type_tf: 'Kenmerken',
                tcf_type_tsf: 'Speciale functies',
                tcf_type_tp: 'Doeleinden',
                tcf_type_tsp: 'Speciale doeleinden',
                tcf_type_tlp: 'Doeleinden van legitiem belang',
                tcf_vendor_cookies_and_other: 'Naast het gebruik van cookies, gebruikt deze leverancier andere methoden om gegevens en informatie op te slaan en te gebruiken.',
                tcf_vendor_no_cookies: 'Deze leverancier gebruikt geen cookies, maar hij gebruikt andere methoden om gegevens en informatie op te slaan en te gebruiken.',
                purpose_tab: 'Doeleinden en functies',
                purpose_message: 'U kunt het verzamelen en verwerken van gegevens in &eacute;&eacute;n keer accepteren of weigeren met behulp van de onderstaande knoppen, of u kunt individuele toestemmingen aanpassen door de schakelaars naast elk doel of functie in en uit te schakelen. We delen deze informatie met onze partners op basis van toestemming en gerechtvaardigd belang. Op het tabblad Verkopers vindt u een lijst van onze partners en hebt u de mogelijkheid om uw toestemming voor elk van hen aan te passen en bezwaar te maken tegen gegevensverwerking voor degenen die een legitiem belang claimen om uw gegevens te verwerken.\nDe keuzes die u maakt zijn alleen relevant voor deze specifieke website en u kunt uw instellingen wijzigen en uw toestemming op elk gewenst moment intrekken vanaf de pagina [privacypolicy]Privacybeleid[/privacypolicy] of door op de knop Toestemming beheren in de linkerbenedenhoek te klikken.',
                purpose_footer: 'Door toestemming te geven voor de doeleinden en functies die hier worden vermeld, geeft u ons en onze partners de mogelijkheid om:',
                descriptions: []
            }],
            categories: [{
                cid: 1,
                id: 'necessary',
                changeable: false,
                default: true,
                tracking: false,
                preconsent: true,
                cookies: [{
                    name: 'cloudfront_viewer_country',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '365 {days}',
                    thirdparty: false,
                    secure: true,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'bb_visitor_id',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '3650 {days}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'force_currency_homepage',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '365 {days}',
                    thirdparty: false,
                    secure: true,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'utm_cluster_id',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '365 {days}',
                    thirdparty: false,
                    secure: true,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'utm_sub_cluster_id',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '365 {days}',
                    thirdparty: false,
                    secure: true,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'monday_has_free_tier',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '3650 {days}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'monday_has_free_tier_v2',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '3650 {days}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'monday_has_student_plan',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '3650 {days}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'should_see_purchase_now',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '3650 {days}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'monday_free_tier_account_creation_item_resource_cr',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '3650 {days}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'platform_hide_3_users_bucket',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '3650 {days}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'use_old_storage_settings',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '3650 {days}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'cookiehub',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '365 {days}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: 'Used by CookieHub to store information about whether visitors have given or declined the use of cookie categories used on the site.',
                    vendors: [920],
                    services: [5],
                }, {
                    name: '__cf_bm',
                    hostname: '.hubspot.com',
                    path: '/',
                    expiry: '1 {hour}',
                    thirdparty: true,
                    secure: true,
                    httponly: false,
                    description: 'The __cf_bm cookie supports Cloudflare Bot Management by managing incoming traffic that matches criteria associated with bots. The cookie does not collect any personal data, and any information collected is subject to one-way encryption.',
                    vendors: [957],
                    services: [7],
                }, {
                    name: 'user_selected_locale_id',
                    hostname: 'monday.com',
                    path: '/',
                    expiry: '1 {day}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'user_selected_locale_id',
                    hostname: 'www.monday.com',
                    path: '/',
                    expiry: '1 {day}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: '__cf_bm',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '1 {hour}',
                    thirdparty: false,
                    secure: true,
                    httponly: false,
                    description: 'The __cf_bm cookie supports Cloudflare Bot Management by managing incoming traffic that matches criteria associated with bots. The cookie does not collect any personal data, and any information collected is subject to one-way encryption.',
                    vendors: [957],
                    services: [7],
                }, {
                    name: 'hp_pricing',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '90 {days}',
                    thirdparty: false,
                    secure: true,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: '__cf_bm',
                    hostname: '.trustradius.com',
                    path: '/',
                    expiry: '1 {hour}',
                    thirdparty: true,
                    secure: true,
                    httponly: false,
                    description: 'The __cf_bm cookie supports Cloudflare Bot Management by managing incoming traffic that matches criteria associated with bots. The cookie does not collect any personal data, and any information collected is subject to one-way encryption.',
                    vendors: [957],
                    services: [7],
                }, {
                    name: 'PHPSESSID',
                    hostname: 'monday.com',
                    path: '/',
                    expiry: 'Session',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: 'Cookie generated by applications based on the PHP language. This is a general purpose identifier used to maintain user session variables. It is normally a random generated number, how it is used can be specific to the site, but a good example is maintaining a logged-in status for a user between pages.',
                    vendors: [],
                    services: [],
                }, {
                    name: '__cfruid',
                    hostname: '.support.monday.com',
                    path: '/',
                    expiry: 'Session',
                    thirdparty: false,
                    secure: true,
                    httponly: false,
                    description: 'This cookie is set by Cloudflare for rate limiting policies.',
                    vendors: [957],
                    services: [7],
                }, {
                    name: '_an_uid',
                    hostname: 'monday.com',
                    path: '/',
                    expiry: '7 {days}',
                    thirdparty: false,
                    secure: true,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: '__cf_bm',
                    hostname: '.dapulse.com',
                    path: '/',
                    expiry: '1 {hour}',
                    thirdparty: true,
                    secure: true,
                    httponly: false,
                    description: 'The __cf_bm cookie supports Cloudflare Bot Management by managing incoming traffic that matches criteria associated with bots. The cookie does not collect any personal data, and any information collected is subject to one-way encryption.',
                    vendors: [957],
                    services: [7],
                }, {
                    name: '__cf_bm',
                    hostname: '.vimeo.com',
                    path: '/',
                    expiry: '1 {hour}',
                    thirdparty: true,
                    secure: true,
                    httponly: false,
                    description: 'The __cf_bm cookie supports Cloudflare Bot Management by managing incoming traffic that matches criteria associated with bots. The cookie does not collect any personal data, and any information collected is subject to one-way encryption.',
                    vendors: [957],
                    services: [7],
                }, {
                    name: '__cf_bm',
                    hostname: '.stream.mux.com',
                    path: '/',
                    expiry: '1 {hour}',
                    thirdparty: true,
                    secure: true,
                    httponly: false,
                    description: 'The __cf_bm cookie supports Cloudflare Bot Management by managing incoming traffic that matches criteria associated with bots. The cookie does not collect any personal data, and any information collected is subject to one-way encryption.',
                    vendors: [957],
                    services: [7],
                }, ]
            }, {
                cid: 2,
                id: 'preferences',
                changeable: true,
                default: true,
                tracking: false,
                preconsent: true,
                cookies: [{
                    name: 'VISITOR_INFO1_LIVE',
                    hostname: '.youtube.com',
                    path: '/',
                    expiry: '180 {days}',
                    thirdparty: true,
                    secure: true,
                    httponly: false,
                    description: 'A cookie that YouTube sets that measures your bandwidth to determine whether you get the new player interface or the old.',
                    vendors: [516],
                    services: [6],
                }, {
                    name: 'lidc',
                    hostname: '.linkedin.com',
                    path: '/',
                    expiry: '1 {day}',
                    thirdparty: true,
                    secure: true,
                    httponly: false,
                    description: 'Used by LinkedIn for routing.',
                    vendors: [534],
                    services: [10],
                }, {
                    name: 'hubspot_id_sent',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '3650 {days}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'platform_account_cluster',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '3650 {days}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'platform_account_sub_cluster',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '3650 {days}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'platform_account_id',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '1 {day}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'platform_user_id',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '1 {day}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'li_gc',
                    hostname: '.linkedin.com',
                    path: '/',
                    expiry: '180 {days}',
                    thirdparty: true,
                    secure: true,
                    httponly: false,
                    description: 'Used by LinkedIn to store consent of guests regarding the use of cookies for non-essential purposes',
                    vendors: [534],
                    services: [10],
                }, {
                    name: 'homepage_account_creation_item_resource_credit',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '365 {days}',
                    thirdparty: false,
                    secure: true,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'clusters',
                    hostname: '',
                    path: '',
                    expiry: 'Persistent',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'drift_campaign_refresh',
                    hostname: 'monday.com',
                    path: '/',
                    expiry: '1 {hour}',
                    thirdparty: false,
                    secure: true,
                    httponly: false,
                    description: 'Used by Drift to provide Website Chat functionality.',
                    vendors: [],
                    services: [],
                }, {
                    name: 'drift_aid',
                    hostname: 'monday.com',
                    path: '/',
                    expiry: '731 {days}',
                    thirdparty: false,
                    secure: true,
                    httponly: false,
                    description: 'Used by Drift to provide Website Chat functionality.',
                    vendors: [],
                    services: [],
                }, {
                    name: 'driftt_aid',
                    hostname: 'monday.com',
                    path: '/',
                    expiry: '731 {days}',
                    thirdparty: false,
                    secure: true,
                    httponly: false,
                    description: 'This is the anonymous identifier token. It is used to tie the visitor on your website with the profile within the Drift system.',
                    vendors: [],
                    services: [],
                }, {
                    name: 'DRIFT_visitCounts',
                    hostname: '',
                    path: '',
                    expiry: 'Persistent',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'DRIFT_SESSION_STARTED',
                    hostname: '',
                    path: '',
                    expiry: 'Session',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'utm_locale_id',
                    hostname: 'monday.com',
                    path: '/',
                    expiry: '1 {day}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'utm_locale_id',
                    hostname: 'www.monday.com',
                    path: '/',
                    expiry: '1 {day}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'wpml_browser_redirect_test',
                    hostname: 'monday.com',
                    path: '/',
                    expiry: 'Session',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: 'WPML makes it easy to build multilingual sites and run them. It&rsquo;s powerful enough for corporate sites, yet simple for blogs.',
                    vendors: [],
                    services: [],
                }, {
                    name: 'utm_locale_id',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '7 {days}',
                    thirdparty: false,
                    secure: true,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'wp-wpml_current_language',
                    hostname: 'monday.com',
                    path: '/',
                    expiry: 'Session',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: 'This cookie is set by WPML and it stores the current language settings.',
                    vendors: [907],
                    services: [60],
                }, {
                    name: '_icl_visitor_lang_js',
                    hostname: '.monday.com',
                    path: '/l/',
                    expiry: '1 {day}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'wpEmojiSettingsSupports',
                    hostname: '',
                    path: '',
                    expiry: 'Session',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, ]
            }, {
                cid: 3,
                id: 'analytics',
                changeable: true,
                default: true,
                tracking: true,
                preconsent: true,
                cookies: [{
                    name: 'experiment_visitor_id',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '90 {days}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'm_landing_page',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '365 {days}',
                    thirdparty: false,
                    secure: true,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'xi_time_diff',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '3650 {days}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'xi_ip',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '3650 {days}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'xi_loc',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '3650 {days}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'xi_org',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '3650 {days}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'xi_city',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '3650 {days}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'xi_region',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '3650 {days}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'xi_country',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '3650 {days}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'YSC',
                    hostname: '.youtube.com',
                    path: '/',
                    expiry: 'Session',
                    thirdparty: true,
                    secure: true,
                    httponly: false,
                    description: 'This cookie is set by YouTube video service on pages with YouTube embedded videos to track views.',
                    vendors: [516],
                    services: [6],
                }, {
                    name: '_ga',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '730 {days}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: 'Contains a unique identifier used by Google Analytics to determine that two distinct hits belong to the same user across browsing sessions.',
                    vendors: [516],
                    services: [1],
                }, {
                    name: '_gid',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '1 {day}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: 'Contains a unique identifier used by Google Analytics to determine that two distinct hits belong to the same user across browsing sessions.',
                    vendors: [516],
                    services: [1],
                }, {
                    name: '_gat_*',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '1 {hour}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: 'Used by Google Analytics to throttle request rate (limit the collection of data on high traffic sites)',
                    vendors: [516],
                    services: [1],
                }, {
                    name: '_dc_gtm_*',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '1 {hour}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: 'Used to throttle request rate. If Google Analytics is deployed via Google Tag Manager',
                    vendors: [516],
                    services: [1],
                }, {
                    name: 'bcookie',
                    hostname: '.linkedin.com',
                    path: '/',
                    expiry: '365 {days}',
                    thirdparty: true,
                    secure: true,
                    httponly: false,
                    description: 'This is a Microsoft MSN 1st party cookie for sharing the content of the website via social media.',
                    vendors: [534],
                    services: [10],
                }, {
                    name: 'fb_id_sent',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '3650 {days}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: '__hstc',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '180 {days}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: 'This cookie name is associated with websites built on the HubSpot platform. This is the main cookie for tracking visitors. It contains the domain, utk, initial timestamp (first visit), last timestamp (last visit), current timestamp (this visit), and session number (increments for each subsequent session).',
                    vendors: [1038],
                    services: [18],
                }, {
                    name: 'hubspotutk',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '180 {days}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: 'This cookie name is associated with websites built on the HubSpot platform. This cookie is used to keep track of a visitor\'s identity. This cookie is passed to HubSpot on form submission and used when deduplicating contacts.',
                    vendors: [1038],
                    services: [18],
                }, {
                    name: '__hssrc',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: 'Session',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: 'This cookie name is associated with websites built on the HubSpot platform. Whenever HubSpot changes the session cookie, this cookie is also set to determine if the visitor has restarted their browser. If this cookie does not exist when HubSpot manages cookies, it is considered a new session.',
                    vendors: [1038],
                    services: [18],
                }, {
                    name: '__hssc',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '1 {hour}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: 'This cookie name is associated with websites built on the HubSpot platform. This cookie keeps track of sessions. This is used to determine if HubSpot should increment the session number and timestamps in the __hstc cookie. It contains the domain, viewCount (increments each pageView in a session), and session start timestamp.',
                    vendors: [1038],
                    services: [18],
                }, {
                    name: 'MUID',
                    hostname: '.bing.com',
                    path: '/',
                    expiry: '390 {days}',
                    thirdparty: true,
                    secure: true,
                    httponly: false,
                    description: 'Microsoft User Identifier tracking cookie used by Bing Ads. It can be set by embedded microsoft scripts. Widely believed to sync across many different Microsoft domains, allowing user tracking.',
                    vendors: [877],
                    services: [11],
                }, {
                    name: 'xi_postal',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '3650 {days}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: '_gd_visitor',
                    hostname: 'monday.com',
                    path: '/',
                    expiry: '731 {days}',
                    thirdparty: false,
                    secure: true,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: '_gd_session',
                    hostname: 'monday.com',
                    path: '/',
                    expiry: '4 {hours}',
                    thirdparty: false,
                    secure: true,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: '_gd_svisitor',
                    hostname: 'monday.com',
                    path: '/',
                    expiry: '731 {days}',
                    thirdparty: false,
                    secure: true,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: '_event_tracker_queue',
                    hostname: '',
                    path: '',
                    expiry: 'Persistent',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: '_dd_s',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '1 {hour}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: 'This cookie is set by Datadog to group all events generated from a unique user session across multiple pages. It contains the current session ID, whether the session is excluded due to sampling, and the expiration date of the session. The cookie is extended for an extra 15 minutes every time the user interacts with the website, up to the maximum user session duration (4 hours).',
                    vendors: [936],
                    services: [89],
                }, {
                    name: '_hjSessionUser_*',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '365 {days}',
                    thirdparty: false,
                    secure: true,
                    httponly: false,
                    description: 'Hotjar cookie. This cookie is set when the customer first lands on a page with the Hotjar script. It is used to persist the Hotjar User ID, unique to that site on the browser. This ensures that behavior in subsequent visits to the same site will be attributed to the same user ID.',
                    vendors: [942],
                    services: [4],
                }, {
                    name: '_hjFirstSeen',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '1 {hour}',
                    thirdparty: false,
                    secure: true,
                    httponly: false,
                    description: 'This cookie is set by Hotjar to identify a new user&rsquo;s first session. It stores a true/false value, indicating whether this was the first time Hotjar saw this user. It is used by Recording filters to identify new user sessions.',
                    vendors: [942],
                    services: [4],
                }, {
                    name: '_hjSession_*',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '1 {hour}',
                    thirdparty: false,
                    secure: true,
                    httponly: false,
                    description: 'Used by Hotjar to hold current session data.',
                    vendors: [942],
                    services: [4],
                }, {
                    name: '_hjAbsoluteSessionInProgress',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '1 {hour}',
                    thirdparty: false,
                    secure: true,
                    httponly: false,
                    description: 'The cookie is set so Hotjar can track the beginning of the user\'s journey for a total session count. It does not contain any identifiable information.',
                    vendors: [942],
                    services: [4],
                }, {
                    name: 'ln_or',
                    hostname: 'monday.com',
                    path: '/',
                    expiry: '1 {day}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: 'Used by LinkedIn to determine if Oribi analytics can be carried out on a specific domain',
                    vendors: [],
                    services: [],
                }, {
                    name: 'oribili_user_guid',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '365 {days}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: 'Used to count unique visitors to a website',
                    vendors: [],
                    services: [],
                }, {
                    name: '_hjIncludedInSessionSample_*',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '1 {hour}',
                    thirdparty: false,
                    secure: true,
                    httponly: false,
                    description: 'This cookie is set to let Hotjar know whether that visitor is included in the data sampling defined by your site\'s daily session limit.',
                    vendors: [942],
                    services: [4],
                }, {
                    name: 'ps_mode',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '90 {days}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'DRIFT_SESSION_ID',
                    hostname: '',
                    path: '',
                    expiry: 'Session',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: '_gd_visitor',
                    hostname: 'www.monday.com',
                    path: '/',
                    expiry: '731 {days}',
                    thirdparty: false,
                    secure: true,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: '_gd_session',
                    hostname: 'www.monday.com',
                    path: '/',
                    expiry: '4 {hours}',
                    thirdparty: false,
                    secure: true,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'ln_or',
                    hostname: 'www.monday.com',
                    path: '/',
                    expiry: '1 {day}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: 'Used by LinkedIn to determine if Oribi analytics can be carried out on a specific domain',
                    vendors: [],
                    services: [],
                }, {
                    name: '_gd_svisitor',
                    hostname: 'www.monday.com',
                    path: '/',
                    expiry: '731 {days}',
                    thirdparty: false,
                    secure: true,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'm_source',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '365 {days}',
                    thirdparty: false,
                    secure: true,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'm_medium',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '365 {days}',
                    thirdparty: false,
                    secure: true,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'taboola global:last-external-referrer',
                    hostname: '',
                    path: '',
                    expiry: 'Persistent',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'utm_medium',
                    hostname: '',
                    path: '',
                    expiry: 'Persistent',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'utm_source',
                    hostname: '',
                    path: '',
                    expiry: 'Persistent',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'hjActiveViewportIds',
                    hostname: '',
                    path: '',
                    expiry: 'Persistent',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'hjViewportId',
                    hostname: '',
                    path: '',
                    expiry: 'Session',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: 'This Hotjar cookie stores information about the user viewport such as size and dimensions.',
                    vendors: [942],
                    services: [4],
                }, {
                    name: '_hjRecordingLastActivity',
                    hostname: '',
                    path: '',
                    expiry: 'Session',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: 'This should be found in Session storage (as opposed to cookies). This gets updated when a visitor recording starts and when data is sent through the WebSocket (the visitor performs an action that Hotjar records).',
                    vendors: [942],
                    services: [4],
                }, {
                    name: '_hjRecordingEnabled',
                    hostname: '',
                    path: '',
                    expiry: 'Session',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: 'This is added when a Recording starts and is read when the recording module is initialized to see if the user is already in a recording in a particular session.',
                    vendors: [942],
                    services: [4],
                }, {
                    name: 'm_campaign',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '365 {days}',
                    thirdparty: false,
                    secure: true,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'utm_campaign',
                    hostname: '',
                    path: '',
                    expiry: 'Persistent',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'utm_source',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: 'Session',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'utm_campaign',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: 'Session',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'ajs_anonymous_id',
                    hostname: '.loom.com',
                    path: '/',
                    expiry: '365 {days}',
                    thirdparty: true,
                    secure: true,
                    httponly: false,
                    description: 'This cookie is used to aggregate and segment data to different data tracking tools by Segment',
                    vendors: [1106],
                    services: [155],
                }, {
                    name: 'loom_anon_comment',
                    hostname: '.www.loom.com',
                    path: '/',
                    expiry: 'Session',
                    thirdparty: true,
                    secure: true,
                    httponly: false,
                    description: 'Used by Loom to track comments on videos',
                    vendors: [],
                    services: [],
                }, {
                    name: 'loom_referral_video',
                    hostname: '.www.loom.com',
                    path: '/',
                    expiry: 'Session',
                    thirdparty: true,
                    secure: true,
                    httponly: false,
                    description: 'Used by Loom to track referral paths of videos',
                    vendors: [],
                    services: [],
                }, {
                    name: 'fs_lua',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '1 {hour}',
                    thirdparty: false,
                    secure: true,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'fs_uid',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '365 {days}',
                    thirdparty: false,
                    secure: true,
                    httponly: false,
                    description: 'Used by FullStory to track the user across sessions and pages',
                    vendors: [998],
                    services: [114],
                }, {
                    name: '_fs_uid',
                    hostname: '',
                    path: '',
                    expiry: 'Persistent',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: '_fs_lua',
                    hostname: '',
                    path: '',
                    expiry: 'Persistent',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: '_fs_tab_id',
                    hostname: '',
                    path: '',
                    expiry: 'Session',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: '_fs_swan_song',
                    hostname: '',
                    path: '',
                    expiry: 'Persistent',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: '_gac_*',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '90 {days}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, ]
            }, {
                cid: 4,
                id: 'marketing',
                changeable: true,
                default: false,
                tracking: true,
                preconsent: false,
                cookies: [{
                    name: '_gcl_au',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '90 {days}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: 'Used by Google AdSense to understand user interaction with the website by generating analytical data.',
                    vendors: [516],
                    services: [2],
                }, {
                    name: 'IDE',
                    hostname: '.doubleclick.net',
                    path: '/',
                    expiry: '390 {days}',
                    thirdparty: true,
                    secure: true,
                    httponly: false,
                    description: 'Used by Google\'s DoubleClick to serve targeted advertisements that are relevant to users across the web. Targeted advertisements may be displayed to users based on previous visits to a website. These cookies measure the conversion rate of ads presented to the user.',
                    vendors: [516],
                    services: [2],
                }, {
                    name: '_fbp',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '90 {days}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: 'Facebook Pixel advertising first-party cookie. Used by Facebook to track visits across websites to deliver a series of advertisement products such as real time bidding from third party advertisers.',
                    vendors: [873],
                    services: [3],
                }, {
                    name: 'UserMatchHistory',
                    hostname: '.linkedin.com',
                    path: '/',
                    expiry: '30 {days}',
                    thirdparty: true,
                    secure: true,
                    httponly: false,
                    description: 'Contains a unique identifier used by LinkedIn to determine that two distinct hits belong to the same user across browsing sessions.',
                    vendors: [534],
                    services: [10],
                }, {
                    name: 'bscookie',
                    hostname: '.www.linkedin.com',
                    path: '/',
                    expiry: '365 {days}',
                    thirdparty: true,
                    secure: true,
                    httponly: false,
                    description: 'Used by the social networking service, LinkedIn, for tracking the use of embedded services.',
                    vendors: [534],
                    services: [10],
                }, {
                    name: 'AnalyticsSyncHistory',
                    hostname: '.linkedin.com',
                    path: '/',
                    expiry: '30 {days}',
                    thirdparty: true,
                    secure: true,
                    httponly: false,
                    description: 'Used by LinkedIn to store information about the time a sync with the lms_analytics cookie took place for users in the Designated Countries',
                    vendors: [534],
                    services: [10],
                }, {
                    name: '_uetsid',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '1 {day}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: 'This cookie is used by Bing to determine what ads should be shown that may be relevant to the end user perusing the site.',
                    vendors: [877],
                    services: [11],
                }, {
                    name: '_uetvid',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '390 {days}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: 'Used by Microsoft Advertising to store a unique, anonymized visitor ID to personalize marketing.',
                    vendors: [877],
                    services: [11],
                }, {
                    name: '6suuid',
                    hostname: '.6sc.co',
                    path: '/',
                    expiry: '730 {days}',
                    thirdparty: true,
                    secure: true,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: '_uetsid_exp',
                    hostname: '',
                    path: '',
                    expiry: 'Persistent',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: 'This is a cookie utilised by Microsoft Bing Ads and is a tracking cookie. It allows us to engage with a user that has previously visited our website.',
                    vendors: [877],
                    services: [11],
                }, {
                    name: '_uetvid',
                    hostname: '',
                    path: '',
                    expiry: 'Persistent',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: 'This is a cookie utilised by Microsoft Bing Ads and is a tracking cookie. It allows us to engage with a user that has previously visited our website.',
                    vendors: [877],
                    services: [11],
                }, {
                    name: '_uetvid_exp',
                    hostname: '',
                    path: '',
                    expiry: 'Persistent',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: 'This is a cookie utilised by Microsoft Bing Ads and is a tracking cookie. It allows us to engage with a user that has previously visited our website.',
                    vendors: [877],
                    services: [11],
                }, {
                    name: '_uetsid',
                    hostname: '',
                    path: '',
                    expiry: 'Persistent',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: 'This is a cookie utilised by Microsoft Bing Ads and is a tracking cookie. It allows us to engage with a user that has previously visited our website.',
                    vendors: [877],
                    services: [11],
                }, {
                    name: 'eng_mt',
                    hostname: '',
                    path: '',
                    expiry: 'Persistent',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, {
                    name: 'wfivefivec',
                    hostname: '.w55c.net',
                    path: '/',
                    expiry: '395 {days}, 10 {hours}',
                    thirdparty: true,
                    secure: true,
                    httponly: false,
                    description: 'Set by Roku and is used for advertising purposes.',
                    vendors: [29],
                    services: [74],
                }, {
                    name: 'tuuid',
                    hostname: '.company-target.com',
                    path: '/',
                    expiry: '730 {days}',
                    thirdparty: true,
                    secure: true,
                    httponly: false,
                    description: 'This cookie is mainly set by bidswitch.net to make advertising messages more relevant to the website visitor.',
                    vendors: [95],
                    services: [26],
                }, {
                    name: 'tuuid_lu',
                    hostname: '.company-target.com',
                    path: '/',
                    expiry: '730 {days}',
                    thirdparty: true,
                    secure: true,
                    httponly: false,
                    description: 'This cookie is usually provided by bidswitch.net and is used for advertising purposes.',
                    vendors: [95],
                    services: [26],
                }, {
                    name: 'CMID',
                    hostname: '.casalemedia.com',
                    path: '/',
                    expiry: '365 {days}',
                    thirdparty: true,
                    secure: true,
                    httponly: false,
                    description: 'Cookie is set by Casale Media. The main business activity is linked to advertising and tracking the products users are looking at.',
                    vendors: [894],
                    services: [41],
                }, {
                    name: 'CMPS',
                    hostname: '.casalemedia.com',
                    path: '/',
                    expiry: '90 {days}',
                    thirdparty: true,
                    secure: true,
                    httponly: false,
                    description: 'Cookie is set by Casale Media. The main business activity is linked to advertising and tracking the products users are looking at.',
                    vendors: [],
                    services: [],
                }, {
                    name: 'CMPRO',
                    hostname: '.casalemedia.com',
                    path: '/',
                    expiry: '90 {days}',
                    thirdparty: true,
                    secure: true,
                    httponly: false,
                    description: 'Cookie is set by Casale Media. The main business activity is linked to advertising and tracking the products users are looking at.',
                    vendors: [894],
                    services: [41],
                }, {
                    name: 'tvid',
                    hostname: '.tremorhub.com',
                    path: '/',
                    expiry: '365 {days}, 6 {hours}',
                    thirdparty: true,
                    secure: true,
                    httponly: false,
                    description: 'Presents the user with relevant content and advertisement. The service is provided by third-party advertisement hubs, which facilitate real-time bidding for advertisers.',
                    vendors: [],
                    services: [],
                }, {
                    name: 'tv_UIDM',
                    hostname: '.tremorhub.com',
                    path: '/',
                    expiry: '730 {days}, 12 {hours}',
                    thirdparty: true,
                    secure: true,
                    httponly: false,
                    description: 'Presents the user with relevant content and advertisement. The service is provided by third-party advertisement hubs, which facilitate real-time bidding for advertisers.',
                    vendors: [],
                    services: [],
                }, {
                    name: 'li_sugr',
                    hostname: '.linkedin.com',
                    path: '/',
                    expiry: '90 {days}',
                    thirdparty: true,
                    secure: true,
                    httponly: false,
                    description: 'Used by LinkedIn to make a probabilistic match of a user\'s identity outside the Designated Countries',
                    vendors: [],
                    services: [],
                }, {
                    name: '_gcl_aw',
                    hostname: '.monday.com',
                    path: '/',
                    expiry: '90 {days}',
                    thirdparty: false,
                    secure: false,
                    httponly: false,
                    description: '',
                    vendors: [],
                    services: [],
                }, ]
            }, ],
            services: [{
                id: 2,
                category_id: 4,
                vendor_id: 516,
                name: 'Google Ads',
            }, {
                id: 6,
                category_id: 3,
                vendor_id: 516,
                name: 'YouTube',
            }, {
                id: 1,
                category_id: 3,
                vendor_id: 516,
                name: 'Google Analytics',
            }, {
                id: 3,
                category_id: 3,
                vendor_id: 873,
                name: 'Facebook Pixel',
            }, {
                id: 10,
                category_id: 3,
                vendor_id: 534,
                name: 'LinkedIn Insight',
            }, {
                id: 18,
                category_id: 3,
                vendor_id: 1038,
                name: 'HubSpot',
            }, {
                id: 5,
                category_id: 1,
                vendor_id: 920,
                name: 'CookieHub',
            }, {
                id: 7,
                category_id: 1,
                vendor_id: 957,
                name: 'Cloudflare',
            }, {
                id: 11,
                category_id: 4,
                vendor_id: 877,
                name: 'Microsoft Ads',
            }, {
                id: 89,
                category_id: 3,
                vendor_id: 936,
                name: 'Datadog',
            }, {
                id: 4,
                category_id: 3,
                vendor_id: 942,
                name: 'Hotjar',
            }, {
                id: 74,
                category_id: 4,
                vendor_id: 29,
                name: 'Roku',
            }, {
                id: 26,
                category_id: 4,
                vendor_id: 95,
                name: 'Bidswitch',
            }, {
                id: 41,
                category_id: 4,
                vendor_id: 894,
                name: 'Casale Media',
            }, {
                id: 60,
                category_id: 2,
                vendor_id: 907,
                name: 'WordPress Multilingual',
            }, {
                id: 155,
                category_id: 3,
                vendor_id: 1106,
                name: 'Segment',
            }, {
                id: 114,
                category_id: 3,
                vendor_id: 998,
                name: 'FullStory',
            }, ],
            vendors: [{
                id: 516,
                external_id: 755,
                name: 'Google Advertising Products',
                services: [1, 2, 6, 8, 35, 37, 78, 120],
            }, {
                id: 873,
                name: 'Facebook',
                services: [3],
            }, {
                id: 534,
                external_id: 804,
                name: 'LinkedIn Ireland Unlimited Company',
                services: [10],
            }, {
                id: 1038,
                name: 'HubSpot',
                services: [18],
            }, {
                id: 920,
                name: 'CookieHub',
                services: [5],
            }, {
                id: 957,
                name: 'Cloudflare, Inc.',
                services: [7, 124],
            }, {
                id: 877,
                name: 'Microsoft',
                services: [11, 20, 28, 80],
            }, {
                id: 936,
                name: 'Datadog',
                services: [89],
            }, {
                id: 942,
                name: 'Hotjar',
                services: [4],
            }, {
                id: 29,
                external_id: 71,
                name: 'Roku Advertising Services',
                services: [74],
            }, {
                id: 95,
                external_id: 128,
                name: 'BIDSWITCH GmbH',
                services: [26],
            }, {
                id: 894,
                name: 'Casale Media',
                services: [41],
            }, {
                id: 907,
                name: 'OnTheGoSystems',
                services: [60],
            }, {
                id: 1106,
                name: 'Twilio Inc.',
                services: [155],
            }, {
                id: 998,
                name: 'FullStory, Inc',
                services: [114],
            }, ],
            region: null,
            onDialogOpen: function() {},
            onDialogClose: function() {},
            onSettingsOpen: function() {},
            onSettingsClose: function() {},
            onInitialise: function(e) {},
            onStatusChange: function(e, t) {},
            onAllow: function(e) {},
            onRevoke: function(e) {},
            elements: {
                branding: '<p><a href="https://www.cookiehub.com" tabindex="-1" rel="noopener" target="_blank">Cookie consent by CookieHub</a></p>',
                container: '<div class="ch2-container{{theme}}{{style}}">{{dialog}}{{settings}}</div>{{icon}}',
                dialog: {
                    container: '<div class="ch2-dialog{{position}}" role="dialog" aria-labelledby="ch2-dialog-title" aria-describedby="ch2-dialog-description">{{close}}{{content}}{{actions}}</div>',
                    content: '<div class="ch2-dialog-content {{class}}">{{line1}}{{line2}}{{line3}}</div>',
                    line1: '<p id="ch2-dialog-title"><strong>{{title}}</strong></p>',
                    line2: '<p id="ch2-dialog-description">{{text}}</p>',
                    line3: '<p><a href="{{url}}" rel="noopener" target="{{target}}" class="ch2-learn-more">{{link}}</a></p>',
                    actions: '<div class="ch2-dialog-actions {{class}}">{{buttons}}</div>',
                    button: '<button class="ch2-btn {{class}}">{{label}}</button>',
                    close: '<div class="ch2-dialog-close"><a href="#" data-action="{{action}}" class="ch2-dialog-close-btn" aria-label="{{close}}"></a></div>'
                },
                settings: {
                    container: '<div class="ch2-settings{{class}}" role="dialog" aria-labelledby="ch2-settings-title" aria-describedby="ch2-settings-description">{{header}}{{tabbar}}<div class="ch2-settings-content">{{content}}</div>{{actions}}</div>',
                    header: '<div class="ch2-settings-header"><a href="#" class="ch2-close-settings-btn" aria-label="{{close}}"></a><p id="ch2-settings-title" tabindex="0"><strong>{{title}}</strong></p></div>',
                    content: '<div class="ch2-settings-tab-container" id="ch2-settings">{{line1}}{{line2}}{{button1}}{{button3}}{{options}}{{branding}}</div>',
                    line1: '<p id="ch2-settings-description">{{text}}</p>',
                    line2: '<p><a href="{{url}}" rel="noopener" target="{{target}}" class="ch2-learn-more">{{link}}</a></p>',
                    actions: '<div class="ch2-settings-actions">{{branding}}{{button2}}</div>',
                    button1: '<button class="ch2-btn ch2-btn-secondary ch2-allow-all-btn">{{label}}</button>',
                    button2: '<button class="ch2-btn ch2-btn-primary ch2-save-settings-btn">{{label}}</button>',
                    button3: '<button class="ch2-btn ch2-btn-secondary ch2-deny-all-btn">{{label}}</button>',
                    options: {
                        container: '<div class="ch2-settings-options">{{options}}</div>',
                        option: '<div class="ch2-settings-option">{{switch}}{{details}}</div>',
                        switch: '<div class="ch2-switch"><input type="checkbox" class="ch2-switch-value" name="{{name}}" aria-labelledby="ch2-{{id}}-title" id="c2-{{id}}"{{is-checked}}{{is-disabled}}><label for="c2-{{id}}" aria-hidden="true" tabindex="-1">&#8;</label></div>',
                        details: '<div class="ch2-settings-option-details"><p id="ch2-{{id}}-title"><strong>{{title}}</strong></p><p>{{text}}</p></div>'
                    },
                    options2: {
                        container: '<div class="ch2-settings-options ch2-collapse"><p><strong>{{title}}</strong></p>{{options}}</div>',
                        option: '<div class="ch2-settings-option">{{toggler}}{{details}}</div>',
                        toggler: '<div class="ch2-collapse-toggler">{{switch}}<a href="#" role="button" aria-expanded="false" aria-controls="ch2-collapse-{{id}}" id="ch2-{{id}}-title">{{title}}</a></div>',
                        switch: '<div class="ch2-switch"><input type="checkbox" class="ch2-switch-value" name="{{name}}" aria-labelledby="ch2-{{id}}-title" id="c2-{{id}}"{{is-checked}}{{is-disabled}}><label for="c2-{{id}}" aria-hidden="true" tabindex="-1">&#8;</label></div>',
                        details: '<div class="ch2-settings-option-details ch2-collapse-content" id="ch2-collapse-{{id}}"><p>{{text}}</p>{{links}}</div>'
                    },
                    tabbar: {
                        container: '<div class="ch2-settings-tabs"><ul role="tablist">{{items}}</ul></div>',
                        item: '<li class="{{active}}" aria-selected="{{selected}}" role="tab"><a href="{{link}}" class="ch2-select-tab" role="button">{{name}}</a></li>'
                    }
                },
                personalData: {
                    container: '<div class="ch2-settings-tab-container" id="ch2-personal-data" style="display:none"><div class="ch2-settings-personal-data">{{line1}}{{line2}}{{options}}</div></div>',
                    line1: "<p>{{text}}</p>",
                    line2: '<p><a href="{{url}}" rel="noopener" target="{{target}}" class="ch2-learn-more">{{link}}</a></p>'
                },
                declaration: {
                    container: '<div class="ch2-settings-tab-container" id="ch2-declaration" style="display:none"><div class="ch2-settings-declaration">{{line1}}{{line2}}{{token}}{{categories}}</div></div>',
                    line1: "<p>{{text}}</p>",
                    line2: '<p><a href="{{url}}" rel="noopener" target="{{target}}" class="ch2-learn-more">{{link}}</a></p>',
                    token: {
                        container: '<div class="ch2-declaration-choice"><p class="ch2-header"><strong>{{title}}</strong></p>{{line1}}{{consent}}</div>',
                        line1: "<p>{{text}}</p>",
                        consent: "<dl><dt>{{categoriesTitle}}</dt><dd>{{categories}}</dd><dt>{{tokenTitle}}</dt><dd>{{token}}</dd><dt>{{datetimeTitle}}</dt><dd>{{datetime}}</dd></dl>"
                    },
                    categories: {
                        container: '<div class="ch2-declaration-category">{{details}}{{table}}</div>',
                        details: '<p class="ch2-header" id="ch2-catlbl-{{id}}"><strong>{{title}}</strong></p><p id="ch2-catdesc-{{id}}">{{text}}</p>',
                        table: '<table aria-labelledby="ch2-catlbl-{{id}}" aria-describedby="ch2-catdesc-{{id}}"><caption>{{title}}</caption><thead><tr><th>{{name}}</th><th>{{hostname}}</th><th>{{path}}</th><th>{{expiry}}</th><th>{{tags}}</th></tr></thead><tbody>{{cookies}}</tbody></table>',
                        cookie: '<tr><td>{{name}}</td><td>{{hostname}}</td><td>{{path}}</td><td>{{expiry}}</td><td>{{tags}}</td></tr><tr><td colspan="5"><p>{{description}}</p></td></tr>',
                        cookieAlt: "<tr><td>{{name}}</td><td>{{hostname}}</td><td>{{path}}</td><td>{{expiry}}</td><td>{{tags}}</td></tr>"
                    }
                },
                bodyDeclaration: {
                    container: '{{line1}}{{line2}}<div class="cookiehub-categories">{{categories}}</div>',
                    line1: "<p>{{text}}</p>",
                    line2: '<p><a href="{{url}}" rel="noopener" target="{{target}}" class="ch2-learn-more">{{link}}</a></p>',
                    categories: {
                        container: '<div class="cookiehub-category">{{details}}{{table}}</div>',
                        details: "<h3>{{title}}</h3><p>{{text}}</p>",
                        table: "<table><thead><tr><th>{{name}}</th><th>{{hostname}}</th><th>{{path}}</th><th>{{expiry}}</th><th>&nbsp;</th></tr></thead><tbody>{{cookies}}</tbody></table>",
                        cookie: '<tr><td>{{name}}</td><td>{{hostname}}</td><td>{{path}}</td><td>{{expiry}}</td><td>{{tags}}</td></tr><tr><td colspan="5"><p>{{description}}</p></td></tr>',
                        cookieAlt: "<tr><td>{{name}}</td><td>{{hostname}}</td><td>{{path}}</td><td>{{expiry}}</td><td>{{tags}}</td></tr>"
                    }
                },
                icon: {
                    container: '<div class="ch2-icon{{style}}{{position}}" role="complementary"><a href="#" class="ch2-open-settings-btn" role="button" aria-label="{{label}}">{{svg}}<span aria-hidden="true">{{link}}</span></a></div>',
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.03 23.02"><path d="M10.31.08a5.25,5.25,0,0,0-.25,1.11c-.1.57-.2,1.08-.22,1.14s-.1.11-.27.14a5.2,5.2,0,0,0-.68.17l-.46.14-.2-.22c-.1-.13-.44-.52-.74-.88A2.83,2.83,0,0,0,6.83,1a4.14,4.14,0,0,0-1,.5c-1,.58-1.06.62-1.06.76A10.66,10.66,0,0,0,5.13,3.4l.38,1L5,5l-.53.54-.17-.07c-.69-.27-1.92-.7-2-.7s-.19,0-.76,1.06a4.52,4.52,0,0,0-.5,1c0,.08.24.3.67.66l.87.75.22.19-.13.46a6,6,0,0,0-.18.69c0,.16-.06.24-.14.26s-.55.12-1.11.22a8.44,8.44,0,0,0-1.11.24C0,10.35,0,10.36,0,11.5s0,1.14.09,1.21A5.07,5.07,0,0,0,1.18,13l1.11.2c.08,0,.12.08.16.23s.1.42.18.68a4.33,4.33,0,0,1,.13.52,9.1,9.1,0,0,1-.87.76,4.94,4.94,0,0,0-.87.84,4.14,4.14,0,0,0,.5,1c.58,1,.61,1.06.76,1.06a11.47,11.47,0,0,0,1.13-.37l1-.38L5,18l.53.53-.06.17c-.27.69-.7,1.91-.7,2s0,.19,1.06.77a4.53,4.53,0,0,0,1,.5,3.75,3.75,0,0,0,.8-.84l.75-.88s.21,0,.51.1l.68.17c.17,0,.24.06.27.13s.13.57.22,1.14a6,6,0,0,0,.25,1.11c.07.08.19.09,1.21.09s1.15,0,1.22-.11A7.21,7.21,0,0,0,13,21.79c.1-.55.2-1.05.22-1.11s.1-.11.27-.13.46-.11.68-.18l.46-.13.2.22.74.87a2.83,2.83,0,0,0,.66.67,4.14,4.14,0,0,0,1-.5c1-.58,1.06-.62,1.06-.76s-.17-.57-.37-1.13l-.38-1,.53-.54.53-.54.17.07c.69.27,1.92.7,2,.7s.18-.05.76-1.06a4.14,4.14,0,0,0,.5-1,4.67,4.67,0,0,0-.88-.84,6.37,6.37,0,0,1-.85-.79s.08-.35.17-.71.19-.65.26-.68.54-.11,1.09-.21a7.21,7.21,0,0,0,1.12-.24c.11-.07.11-.08.11-1.22s0-1.15-.11-1.22a8.59,8.59,0,0,0-1.12-.24c-.55-.1-1-.19-1.09-.21s-.14-.2-.26-.68-.17-.67-.17-.71a8,8,0,0,1,.85-.79A1,1,0,0,0,22,6.58a1,1,0,0,0-.5-.76c-.58-1-.62-1.07-.76-1.07s-1.31.43-2,.7l-.17.07L18.05,5l-.53-.54.38-1c.14-.37.27-.75.38-1.13,0-.14-.06-.18-1.07-.76a4.14,4.14,0,0,0-1-.5,2.83,2.83,0,0,0-.66.67c-.3.36-.64.75-.74.88l-.2.22-.46-.14c-.25-.08-.56-.15-.68-.18s-.24-.06-.27-.13-.12-.56-.21-1.11A8.27,8.27,0,0,0,12.73.11C12.67,0,12.65,0,11.52,0S10.38,0,10.31.08Zm2,6.08a5.24,5.24,0,0,1,3,1.53,5.28,5.28,0,0,1,1.59,4.07,5.35,5.35,0,0,1-.39,1.76A5.41,5.41,0,0,1,6.34,9.93,5.64,5.64,0,0,1,7,8.48,7.41,7.41,0,0,1,8.5,7,5.44,5.44,0,0,1,12.36,6.16Z"/></svg>',
                    link: "{{label}}"
                }
            }
        }
    }

    function t(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    var i = function() {
        function e() {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        var i, n, o;
        return i = e, (n = [{
            key: "isBot",
            value: function() {
                var e = new RegExp("(cookiehubscan|googlebot|adsbot|mediapartners|baidu|bingbot|bingpreview|sogou|proximic|duckduckbot|teoma|slurp|yandex|semrush|lighthouse|gtmetrix|pingdom)", "i"),
                    t = navigator.userAgent;
                return e.test(t)
            }
        }, {
            key: "dnt",
            value: function() {
                return 1 == navigator.doNotTrack
            }
        }]) && t(i.prototype, n), o && t(i, o), e
    }();

    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    var o = function() {
        function e() {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        var t, i, o;
        return t = e, (i = [{
            key: "get",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = "; " + document.cookie,
                    n = i.split("; "),
                    o = void 0;
                if (null != n)
                    for (var s = 0; s < n.length; s++) {
                        var a = n[s].split(e + "=");
                        null != a && 2 == a.length && ("consent" == e && null != o ? o.length < a[1].length && (o = a[1]) : o = a[1])
                    }
                if (t && null != o) try {
                    o = atob(o)
                } catch (e) {}
                return o
            }
        }, {
            key: "set",
            value: function(e, t, i, n, o) {
                var s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                    a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "None",
                    l = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
                s && (t = btoa(t));
                var r = new Date;
                r.setDate(r.getDate() + (i || 365));
                var c = [e + "=" + t, "expires=" + r.toUTCString(), "path=" + (o || "/")];
                n && c.push("domain=" + n), "" != a && c.push("SameSite=" + a), l && c.push("Secure"), document.cookie = c.join(";")
            }
        }, {
            key: "deleteStorageAll",
            value: function() {
                for (var e = 0; e < localStorage.length; e++) {
                    var t = localStorage.key(e);
                    null != t && "cookiehub" != t && localStorage.removeItem(t)
                }
                for (e = 0; e < sessionStorage.length; e++) {
                    var i = sessionStorage.key(e);
                    null != i && "cookiehub" != i && sessionStorage.removeItem(i)
                }
            }
        }, {
            key: "deleteStorage",
            value: function(e) {
                e.indexOf("*") > 0 && (e = e.replace("*", ""));
                for (var t = 0; t < localStorage.length; t++) {
                    var i = localStorage.key(t);
                    if (null != i && i.length >= e.length) {
                        if (i == e) {
                            localStorage.removeItem(i);
                            break
                        }
                        i.substr(0, e.length) == e && localStorage.removeItem(i)
                    }
                }
                for (t = 0; t < sessionStorage.length; t++) {
                    var n = sessionStorage.key(t);
                    if (null != n && n.length >= e.length) {
                        if (n == e) {
                            sessionStorage.removeItem(n);
                            break
                        }
                        n.substr(0, e.length) == e && sessionStorage.removeItem(n)
                    }
                }
            }
        }, {
            key: "delete",
            value: function(e, t) {
                e.indexOf("*") > 0 && (e = e.replace("*", ""));
                var i = ("; " + document.cookie).split("; ");
                if (window.location.hostname == t && (t = ""), null != i)
                    for (var n = 0; n < i.length; n++) {
                        var o = i[n].split("=");
                        null != o && o.length > 1 && "cookiehub" != o[0] && (o[0] == e || e.length > 3 && o[0].substr(0, e.length) == e) && (document.cookie = o[0] + "=; Expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;", document.cookie = o[0] + "=; Expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=" + t, document.cookie = o[0] + "=; Expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=." + window.location.hostname, document.cookie = o[0] + "=; Expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;", document.cookie = o[0] + "=; Expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=" + t, document.cookie = o[0] + "=; Expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=." + window.location.hostname)
                    }
            }
        }, {
            key: "deleteAll",
            value: function() {
                var e = ("; " + document.cookie).split("; ");
                if (null != e)
                    for (var t = 0; t < e.length; t++) {
                        var i = e[t].split("=");
                        null != i && i.length > 1 && "cookiehub" != i[0] && (document.cookie = i[0] + "=; Expires=Thu, 01 Jan 1970 00:00:00 GMT;", document.cookie = i[0] + "=; Expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;")
                    }
            }
        }]) && n(t.prototype, i), o && n(t, o), e
    }();

    function s(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function a(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e
    }
    var l = function() {
        function e(t) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), a(this, "browser", new i), a(this, "options", {}), a(this, "noticeShown", !1), a(this, "choice", {
                answered: !1,
                preconsent: !1,
                revision: 1,
                dnt: !1,
                allowSale: !0,
                implict: !1,
                region: "",
                token: "",
                timestamp: null,
                categories: []
            }), this.options = t;
            var n = new Date;
            this.choice.timestamp = n.toISOString(), this.choice.revision = this.options.revision, this.choice.dnt = this.browser.dnt();
            for (var o = 0; o < this.options.categories.length; o++) {
                var s = this.options.categories[o],
                    l = !s.changeable;
                this.choice.dnt && "necessary" != s.id && (l = !1);
                var r = {
                    cid: s.cid,
                    id: s.id,
                    value: l,
                    preconsent: s.preconsent,
                    tracking: s.tracking,
                    default: s.default,
                    fired: !1
                };
                this.choice.categories.push(r)
            }
            null != navigator.globalPrivacyControl && (this.choice.allowSale = !navigator.globalPrivacyControl), this.isChoiceStored() && this.parseUserChoice()
        }
        var t, n, l;
        return t = e, (n = [{
            key: "isBot",
            value: function() {
                return this.browser.isBot()
            }
        }, {
            key: "getUserChoice",
            value: function() {
                return (new o).get(this.options.cookie.name, this.options.encode)
            }
        }, {
            key: "isChoiceStored",
            value: function() {
                var e = this.getUserChoice();
                if (null != e) {
                    try {
                        JSON.parse(e)
                    } catch (e) {
                        return !1
                    }
                    return !0
                }
                return !1
            }
        }, {
            key: "parseUserChoice",
            value: function() {
                if (this.isChoiceStored()) {
                    var e = this.getUserChoice(),
                        t = JSON.parse(e),
                        i = 1;
                    null != t.revision && (i = t.revision), this.choice.answered = t.answered, this.choice.revision = t.revision, this.choice.token = t.token, this.choice.region = t.region, null != t.timestamp && (this.choice.timestamp = t.timestamp), null != t.allowSale && (this.choice.allowSale = t.allowSale);
                    for (var n = 0; n < this.choice.categories.length; n++)
                        for (var o = 0; o < t.categories.length; o++) this.choice.categories[n].id == t.categories[o].id && (this.choice.categories[n].value = t.categories[o].value);
                    return i < this.options.revision && (this.choice.answered = !1), !0
                }
                return !1
            }
        }, {
            key: "implictConsent",
            value: function(e, t) {
                this.choice.answered = e, this.choice.implict = !0, this.choice.preconsent = !0, this.isBot() && (this.choice.categories = [], this.choice.categories.push({
                    cid: 1,
                    id: "necessary",
                    value: !0,
                    preconsent: !0,
                    fired: !1
                }), this.choice.categories.push({
                    cid: 2,
                    id: "preferences",
                    value: !0,
                    preconsent: !0,
                    fired: !1
                }), this.choice.categories.push({
                    cid: 3,
                    id: "analytics",
                    value: !0,
                    preconsent: !0,
                    fired: !1
                }), this.choice.categories.push({
                    cid: 4,
                    id: "marketing",
                    value: !0,
                    preconsent: !0,
                    fired: !1
                }), this.choice.categories.push({
                    cid: 5,
                    id: "uncategorized",
                    value: !0,
                    preconsent: !0,
                    fired: !1
                }));
                for (var i = 0; i < this.choice.categories.length; i++) this.choice.categories[i].value = !0, this.choice.categories[i].preconsent = !0
            }
        }, {
            key: "hasConsented",
            value: function(e, t) {
                if (this.choice.answered)
                    for (var i = 0; i < this.choice.categories.length; i++) {
                        var n = this.choice.categories[i];
                        if (n.id == e) return "necessary" == e || n.value
                    }
                return this.getDefaultCategoryState(e)
            }
        }, {
            key: "getDefaultCheckState",
            value: function(e) {
                for (var t = !1, i = 0; i < this.choice.categories.length; i++) {
                    var n = this.choice.categories[i];
                    if (n.id == e) {
                        if (t = n.default, null != this.options.region.categories && "Default" != this.options.region.title) {
                            var o = this.options.region.categories[e];
                            null != o && ("1" == o.default ? t = !0 : "0" == o.default && (t = !1))
                        }
                        break
                    }
                }
                return t
            }
        }, {
            key: "getDefaultCategoryState",
            value: function(e) {
                if (!this.choice.answered) {
                    var t = "implicit" == this.options.region.consentType;
                    for (n = 0; n < this.choice.categories.length; n++)
                        if ((o = this.choice.categories[n]).id == e && (o.preconsent && (t = !o.tracking || !this.browser.dnt()), null != this.options.region.categories && "Default" != this.options.region.title)) {
                            var i = this.options.region.categories[e];
                            null != i && ("1" == i.tracking && this.browser.dnt() || "inherit" == i.tracking && o.tracking && this.browser.dnt() ? t = !1 : "implicit" == i.type ? t = !0 : "explicit" == i.type && (t = !1))
                        }
                    return t
                }
                for (var n = 0; n < this.choice.categories.length; n++) {
                    var o;
                    if ((o = this.choice.categories[n]).id == e) return "necessary" == e || o.value
                }
            }
        }]) && s(t.prototype, n), l && s(t, l), e
    }();

    function r(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e
    }
    var c = function e(t) {
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), r(this, "options", {}), r(this, "lookup", (function(e) {
            var t = this.options.regions,
                i = new XMLHttpRequest;
            i.onreadystatechange = function() {
                if (i.readyState == XMLHttpRequest.DONE)
                    if (200 == i.status) {
                        var n = i.response,
                            o = null;
                        if (null != n && null != n.r) {
                            for (var s = 0; s < t.length; s++) {
                                for (var a = 0; a < t[s].region.length; a++)
                                    if (t[s].region[a] == n.r) {
                                        o = t[s];
                                        break
                                    }
                                if (null != o) break
                            }
                            e(!0, o, n.r)
                        } else e(!1, null, null)
                    } else e(!1, null, null)
            };
            for (var n = "", o = 0; o < this.options.regions.length; o++) {
                "" != n && (n += ",");
                for (var s = 0; s < this.options.regions[o].region.length; s++) s > 0 && (n += ","), n += this.options.regions[o].region[s]
            }
            i.open("POST", "https://cookiehub.net/region", !0), i.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), i.setRequestHeader("cookiehub-regions", n), i.responseType = "json", i.send()
        })), this.options = t
    };

    function h() {
        this.generateToken = function() {
            for (var e = "", t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", i = 0; i < 64; i++) e += t.charAt(Math.floor(Math.random() * t.length));
            return e
        }, this.log = function(e, t, i) {
            for (var n = [], o = 0; o < i.categories.length; o++) n.push({
                i: i.categories[o].cid,
                v: i.categories[o].value
            });
            var s = {
                    a: e,
                    r: t.revision,
                    d: t.domainId,
                    u: location.href,
                    t: i.token,
                    s: JSON.stringify(n),
                    n: "1"
                },
                a = new XMLHttpRequest;
            a.onreadystatechange = function() {
                a.readyState == XMLHttpRequest.DONE && a.status
            }, a.open("POST", "https://consent.cookiehub.net/log", !0), a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.send(JSON.stringify(s))
        }
    }

    function d(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function u(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e
    }
    var g = function() {
        function e(t) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), u(this, "options", {}), this.options = t
        }
        var t, i, n;
        return t = e, (i = [{
            key: "dataLayer",
            value: function() {
                return window[this.options.dataLayer] = window[this.options.dataLayer] || [], window[this.options.dataLayer]
            }
        }, {
            key: "triggerEvent",
            value: function(e) {
                if (this.options.enabled) {
                    var t = this.dataLayer();
                    if (this.options.delay) {
                        var i = this;
                        setTimeout((function() {
                            t.push({
                                event: i.options.prefix + e
                            })
                        }), this.options.delay)
                    } else t.push({
                        event: this.options.prefix + e
                    })
                }
            }
        }, {
            key: "setVariable",
            value: function(e, t) {
                if (this.options.enabled) {
                    var i = this.dataLayer(),
                        n = u({}, this.options.prefix + e, t);
                    i.push(n)
                }
            }
        }]) && d(t.prototype, i), n && d(t, n), e
    }();

    function p(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    var f = function() {
        function e(t) {
            var i, n, o;
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), o = {}, (n = "options") in (i = this) ? Object.defineProperty(i, n, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : i[n] = o, this.options = t
        }
        var t, i, n;
        return t = e, (i = [{
            key: "dataLayer",
            value: function() {
                return window[this.options.dataLayer] = window[this.options.dataLayer] || [], window[this.options.dataLayer]
            }
        }, {
            key: "update",
            value: function(e) {
                if (this.options.enabled) {
                    var t = this.dataLayer(),
                        i = {
                            security_storage: e.hasConsented("necessary") ? "granted" : "denied",
                            functionality_storage: e.hasConsented("preferences") ? "granted" : "denied",
                            personalization_storage: e.hasConsented("preferences") ? "granted" : "denied",
                            ad_storage: e.hasConsented("marketing") ? "granted" : "denied",
                            analytics_storage: e.hasConsented("analytics") ? "granted" : "denied"
                        };
                    this.gtag("consent", "update", i), e.hasConsented("marketing") || this.gtag("set", "ads_data_redaction", !0), t.push({
                        event: "cookiehub_consent_update"
                    })
                }
            }
        }, {
            key: "gtag",
            value: function() {
                var e = this.dataLayer();
                e.push(arguments)
            }
        }]) && p(t.prototype, i), n && p(t, n), e
    }();

    function b(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    var v = function() {
        function e(t) {
            var i, n, o;
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), o = {}, (n = "options") in (i = this) ? Object.defineProperty(i, n, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : i[n] = o, this.options = t
        }
        var t, i, n;
        return t = e, (i = [{
            key: "escapeRegExp",
            value: function(e) {
                return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            }
        }, {
            key: "getElementsByClass",
            value: function(e) {
                var t = document.getElementsByClassName("ch2")[0];
                "ch2-open-settings-btn" != e && "ch2-container" != e || (t = document.body);
                var i = t.getElementsByClassName(e);
                return i.length > 0 ? i : []
            }
        }, {
            key: "getFirstElementByClass",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    i = null;
                return null == t ? i = this.getElementsByClass(e) : t.getElementsByClassName(e), null != i && i.length > 0 ? i[0] : null
            }
        }, {
            key: "hasClass",
            value: function(e, t) {
                var i = " ";
                return 1 === e.nodeType && (i + e.className + i).replace(/[\n\t]/g, i).indexOf(i + t + i) >= 0
            }
        }, {
            key: "addClass",
            value: function(e, t) {
                this.hasClass(e, t) || (e.className += " " + t)
            }
        }, {
            key: "addClassMulti",
            value: function(e, t) {
                for (var i = this.getElementsByClass(e), n = 0; n < i.length; n++) this.addClass(i[n], t)
            }
        }, {
            key: "removeClass",
            value: function(e, t) {
                if (this.hasClass(e, t)) {
                    var i = new RegExp("\\b" + this.escapeRegExp(t) + "\\b");
                    e.className = e.className.replace(i, "")
                }
            }
        }, {
            key: "removeClassMulti",
            value: function(e, t) {
                for (var i = this.getElementsByClass(e), n = 0; n < i.length; n++) this.removeClass(i[n], t)
            }
        }, {
            key: "addEvent",
            value: function(e, t) {
                for (var i = this.getElementsByClass(e), n = 0; n < i.length; n++) {
                    var o = this;
                    i[n].addEventListener("click", (function(e) {
                        t(e, o)
                    }), !1)
                }
            }
        }, {
            key: "findFirstLink",
            value: function(e) {
                var t = this.getFirstElementByClass(e);
                if (null != t) {
                    var i = t.getElementsByTagName("a");
                    if (null != i && i.length > 0) return i[0]
                }
                return null
            }
        }, {
            key: "conditionalElements",
            value: function(e, t) {
                for (var i = document.querySelectorAll('[data-consent="' + e + '"], [data-consent="' + e + '/loaded"]'), n = 0; n < i.length; n++)
                    if ("SCRIPT" == i[n].nodeName) {
                        if ("text/plain" == i[n].type && t && i[n].dataset.consent.indexOf("loaded") <= 0) {
                            var o = document.createElement("script");
                            o.dataset.consent = e, i[n].dataset.src ? o.src = i[n].dataset.src : i[n].src && (o.src = i[n].src), i[n].hasAttribute("nonce") && o.setAttribute("nonce", i[n].getAttribute("nonce")), o.type = "text/javascript", o.innerHTML = i[n].innerHTML, i[n].dataset.consent = e + "/loaded", null != document.body ? document.body.appendChild(o) : document.getElementsByTagName("head")[0].appendChild(o)
                        }
                    } else "IFRAME" != i[n].nodeName && "IMG" != i[n].nodeName || null == i[n].dataset.src || !t ? t ? null == i[n].dataset.inverse ? i[n].style.display = null == i[n].dataset.display ? "" : i[n].dataset.display : i[n].style.display = "none" : null == i[n].dataset.inverse ? i[n].style.display = "none" : i[n].style.display = null == i[n].dataset.display ? "" : i[n].dataset.display : (i[n].dataset.consent = e + "/loaded", i[n].src != i[n].dataset.src && (i[n].src = i[n].dataset.src), null != i[n].dataset.display ? i[n].style.display = i[n].dataset.display : i[n].style.display = "")
            }
        }]) && b(t.prototype, i), n && b(t, n), e
    }();

    function y(e) {
        return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function m(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    var k = function() {
        function e() {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        var t, i, n;
        return t = e, (i = [{
            key: "extend",
            value: function(e, t) {
                for (var i in t) t.hasOwnProperty(i) && (i in e && this.isPlainObject(e[i]) && this.isPlainObject(t[i]) ? this.extend(e[i], t[i]) : e[i] = t[i]);
                return e
            }
        }, {
            key: "isPlainObject",
            value: function(e) {
                return "object" === y(e) && null !== e && e.constructor == Object
            }
        }]) && m(t.prototype, i), n && m(t, n), e
    }();

    function w(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    var C = function() {
        function e() {
            var t, i, n;
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), n = null, (i = "el") in (t = this) ? Object.defineProperty(t, i, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[i] = n, this.el = document.createElement("div")
        }
        var t, i, n;
        return t = e, (i = [{
            key: "decodeHTML",
            value: function(e) {
                return e = (e = (e = e.replace(/(<(a)([^>]*)>)/g, "[$2$3]")).replace(/(<(|\/)(strong|em|p|br|b|i|ul|ol|li|a|div|span|h1|h2|h3|h4|h5|h6)[^>]*>)/g, "[$2$3]")).replace(/(<([^>]+)>)/gi, ""), this.el.innerHTML = e, e = (e = (e = this.el.textContent).replace(/(\[(a)([^\]]*)*\])/g, "<$2$3>")).replace(/(\[(|\/)(strong|em|p|br|b|i|ul|ol|li|a|div|span|h1|h2|h3|h4|h5|h6)[^\]]*\])/g, "<$2$3>")
            }
        }]) && w(t.prototype, i), n && w(t, n), e
    }();

    function E(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function U(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e
    }
    var _ = function() {
        function e(t) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), U(this, "options", {}), U(this, "htmlUtil", new C), this.options = t
        }
        var t, i, n;
        return t = e, (i = [{
            key: "getLabels",
            value: function() {
                var e = this.options.labels[0];
                if (this.options.language)
                    for (var t = 0; t < this.options.labels.length; t++)
                        if (this.options.labels[t].code == this.options.language) {
                            e = this.options.labels[t];
                            break
                        }
                if (this.options.displayLanguage > 0) {
                    var i = "";
                    if ((1 == this.options.displayLanguage || 4 == this.options.displayLanguage) && location.pathname.length > 2 && (3 != location.pathname.length && "?" != location.pathname.substr(3, 1) && "#" != location.pathname.substr(3, 1) && "/" != location.pathname.substr(3, 1) && "-" != location.pathname.substr(3, 1) || (i = location.pathname.substr(1, 2))), (1 == this.options.displayLanguage && 0 == i.length || 3 == this.options.displayLanguage) && (i = null != document.documentElement.lang ? document.documentElement.lang : "").length > 2 && (i = i.substr(0, 2)), (1 == this.options.displayLanguage && 0 == i.length || 2 == this.options.displayLanguage) && (i = navigator.language).length > 2 && (i = i.substr(0, 2)), "" != i)
                        for (t = 0; t < this.options.labels.length; t++)
                            if (this.options.labels[t].code == i) {
                                e = this.options.labels[t];
                                break
                            }
                }
                return e
            }
        }, {
            key: "getValue",
            value: function(e) {
                var t = this.getLabels();
                return null != t[e = e.replace("required_", "necessary_")] ? this.htmlUtil.decodeHTML(t[e]) : ""
            }
        }, {
            key: "getCDValue",
            value: function(e, t) {
                var i = this.getLabels();
                if (null != i.descriptions)
                    for (var n = 0; n < i.descriptions.length; n++) {
                        var o = i.descriptions[n];
                        if (o.key == e || o.key + "*" == e) return this.htmlUtil.decodeHTML(o.value)
                    }
                return t
            }
        }, {
            key: "inject",
            value: function(e, t) {
                for (var i in t) e = e.replace(new RegExp("{{" + i + "}}", "g"), t[i]);
                return e
            }
        }]) && E(t.prototype, i), n && E(t, n), e
    }();

    function x(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function S(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e
    }
    var T = function() {
        function e(t) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), S(this, "options", {}), S(this, "labelUtil", null), S(this, "region", null), this.options = t, this.region = t.region, this.labelUtil = new _(this.options)
        }
        var t, i, n;
        return t = e, (i = [{
            key: "render",
            value: function() {
                if (this.options.color && "simple" != this.region.banner.theme && "custom" != this.region.banner.theme) {
                    var e = "";
                    e += ".ch2-style-light .ch2-btn-primary, .ch2-style-dark .ch2-btn-primary { background: " + this.options.color, null != this.options.accentTextColor && "" != this.options.accentTextColor && (e += ";color:" + this.options.accentTextColor), e += "}", e += ".ch2-style-light .ch2-btn-primary:hover, .ch2-style-dark .ch2-btn-primary:hover { background: " + this.options.color + "; box-shadow: 0px 0px 20px 0 " + this.options.color + "66; }", e += ".ch2-style-light .ch2-switch input:checked + label, .ch2-style-dark .ch2-switch input:checked + label { background: " + this.options.color + " }", e += ".ch2-style-light.ch2-icon a:hover svg { border: 2px solid " + this.options.color + "; fill: " + this.options.color + " }", e += ".ch2-style-dark.ch2-icon a:hover svg { border: 2px solid " + this.options.color + "; background: " + this.options.color + " }", e += "@media (max-width: 800px) {", e += ".ch2-settings-declaration table tbody tr td:not([colspan]):nth-child(1)::before { content: '" + this.labelUtil.getValue("cookie_name") + ": '; }", e += ".ch2-settings-declaration table tbody tr td:not([colspan]):nth-child(2)::before { content: '" + this.labelUtil.getValue("cookie_hostname") + ": '; }", e += ".ch2-settings-declaration table tbody tr td:not([colspan]):nth-child(3)::before { content: '" + this.labelUtil.getValue("cookie_path") + ": '; }", e += ".ch2-settings-declaration table tbody tr td:not([colspan]):nth-child(4)::before { content: '" + this.labelUtil.getValue("cookie_expiry") + ": '; }", e += "}";
                    var t = document.createElement("style");
                    t.appendChild(document.createTextNode(e)), document.getElementsByTagName("head")[0].appendChild(t)
                }
                var i = this.options.style;
                this.options.enhancedAccessibility && (i += " ch2-ea");
                var n = {
                    theme: " ch2-theme-" + this.region.banner.theme,
                    style: " " + i
                };
                return this.labelUtil.inject(this.options.elements.container, n)
            }
        }]) && x(t.prototype, i), n && x(t, n), e
    }();

    function j(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function O(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e
    }
    var D = function() {
        function e(t) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), O(this, "options", {}), O(this, "labelUtil", null), O(this, "region", null), this.options = t, this.region = t.region, this.labelUtil = new _(this.options)
        }
        var t, i, n;
        return t = e, (i = [{
            key: "isEnabled",
            value: function() {
                return (null == this.options.showIcon || this.options.showIcon) && "none" != this.region.icon.theme && null != this.options.categories && this.options.categories.length > 0
            }
        }, {
            key: "render",
            value: function() {
                if (this.isEnabled()) {
                    var e = {
                        style: " ch2-icon-" + this.region.icon.theme,
                        position: " ch2-icon-" + this.region.icon.position,
                        label: this.labelUtil.getValue("icon_btn"),
                        link: this.labelUtil.inject(this.options.elements.icon.link, {
                            label: this.labelUtil.getValue("icon_btn")
                        }),
                        svg: this.options.elements.icon.svg
                    };
                    return this.region.icon.dark ? e.style += " ch2-style-dark" : e.style += " ch2-style-light", this.labelUtil.inject(this.options.elements.icon.container, e)
                }
                return ""
            }
        }]) && j(t.prototype, i), n && j(t, n), e
    }();

    function B(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function L(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e
    }
    var V = function() {
        function e(t) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), L(this, "options", {}), L(this, "labelUtil", null), L(this, "region", null), this.options = t, this.region = t.region, this.labelUtil = new _(this.options)
        }
        var t, i, n;
        return t = e, (i = [{
            key: "isEnabled",
            value: function() {
                return "notice" == this.region.bannerType && null != this.options.categories && this.options.categories.length > 0
            }
        }, {
            key: "render",
            value: function() {
                if (this.isEnabled()) {
                    var e = {
                        close: this.renderClose(),
                        position: " ch2-dialog-" + this.region.banner.position,
                        content: this.renderContent(),
                        actions: this.renderActions()
                    };
                    return this.labelUtil.inject(this.options.elements.dialog.container, e)
                }
                return ""
            }
        }, {
            key: "renderClose",
            value: function() {
                if (null != this.region.banner.closeAction && "" != this.region.banner.closeAction) {
                    var e = {
                        close: this.labelUtil.inject("close", {
                            title: this.labelUtil.getValue("general_close")
                        }),
                        action: this.region.banner.closeAction
                    };
                    return this.labelUtil.inject(this.options.elements.dialog.close, e)
                }
                return ""
            }
        }, {
            key: "renderContent",
            value: function() {
                var e = this.options.elements.dialog.line2,
                    t = this.labelUtil.getValue("widget_message");
                t.indexOf("<p") >= 0 && (e = (e = e.replace(/<p/g, "<div")).replace(/<\/p>/g, "</div>"));
                var i = {
                    line1: this.labelUtil.inject(this.options.elements.dialog.line1, {
                        title: this.labelUtil.getValue("widget_title")
                    }),
                    line2: this.labelUtil.inject(e, {
                        text: t
                    }),
                    line3: this.renderLearnMore(),
                    class: this.region.banner.actions.length >= 3 ? "h2-dialog-content-morespace" : ""
                };
                return this.labelUtil.inject(this.options.elements.dialog.content, i)
            }
        }, {
            key: "renderLearnMore",
            value: function() {
                if (this.options.learnMore.length > 0 || "" != this.labelUtil.getValue("general_learn_more_link")) {
                    var e = this.options.learnMore;
                    "" != this.labelUtil.getValue("general_learn_more_link") && (e = this.labelUtil.getValue("general_learn_more_link"));
                    var t = "_self";
                    "/" != e.substr(0, 1) && e.indexOf(location.hostname) <= 0 && (t = "_blank"), null != this.options.learnMoreTarget && "" != this.options.learnMoreTarget && (t = this.options.learnMoreTarget);
                    var i = {
                        url: e,
                        link: this.labelUtil.getValue("general_learn_more"),
                        target: t
                    };
                    return this.labelUtil.inject(this.options.elements.dialog.line3, i)
                }
                return ""
            }
        }, {
            key: "renderActions",
            value: function() {
                var e = this.region.banner.actions.length >= 3,
                    t = this.options.elements.dialog.actions;
                t = e ? (t = t.replace("{{class}}", "ch2-dialog-actions-vertical")).replace("{{buttons}}", "<div>{{buttons}}</div><div>{{settings}}</div>") : t.replace("{{class}}", "");
                for (var i = this.renderButton(this.labelUtil.getValue("widget_btn_allow_all"), "ch2-allow-all-btn ch2-btn-primary"), n = this.renderButton(this.labelUtil.getValue("widget_btn_deny_all"), "ch2-deny-all-btn ch2-btn-primary"), o = this.renderButton(this.labelUtil.getValue("widget_btn_settings"), "ch2-open-settings-btn ch2-btn-secondary"), s = this.renderButton(this.labelUtil.getValue("widget_btn_settings"), "ch2-open-settings-btn ch2-btn-text"), a = this.renderButton(this.labelUtil.getValue("widget_btn_donotsell"), "ch2-open-personal-data-btn ch2-btn-text"), l = "", r = "", c = 0; c < this.region.banner.actions.length; c++) {
                    var h = this.region.banner.actions[c],
                        d = "";
                    "allow" == h && (d = i), "deny" == h && (d = n), "settings" == h && (d = o), "settings-alt" == h && (d = s), "donotsell" == h && (d = a), c < 2 ? l += d : r += d
                }
                var u = {
                    class: e ? "h2-dialog-content-morespace" : "",
                    buttons: l,
                    settings: r
                };
                return this.labelUtil.inject(t, u)
            }
        }, {
            key: "renderButton",
            value: function(e, t) {
                var i = this.region.banner.actions.length >= 3; - 1 == t.indexOf("ch2-btn-text") && (e.length > 24 ? t += " ch2-btn-text-xxs" : e.length > 22 ? t += " ch2-btn-text-xs" : e.length > 18 && (t += " ch2-btn-text-sm")), i && (t = t.replace("ch2-btn-secondary", "ch2-btn-transparent"));
                var n = {
                    label: e,
                    class: t
                };
                return this.labelUtil.inject(this.options.elements.dialog.button, n)
            }
        }]) && B(t.prototype, i), n && B(t, n), e
    }();

    function A(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function P(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e
    }
    var I = function() {
        function e(t, i) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), P(this, "options", {}), P(this, "labelUtil", null), P(this, "dialog", null), P(this, "region", null), P(this, "state", null), this.options = t, this.region = t.region, this.labelUtil = new _(this.options), this.dialog = new V(this.options), this.state = i
        }
        var t, i, n;
        return t = e, (i = [{
            key: "isEnabled",
            value: function() {
                return this.region.preferences.features.declaration
            }
        }, {
            key: "render",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (this.isEnabled() || e) {
                    var t = {
                        line1: this.labelUtil.inject(this.options.elements.declaration.line1, {
                            text: this.labelUtil.getValue("declaration_message")
                        }),
                        line2: this.dialog.renderLearnMore(),
                        token: this.renderToken(),
                        categories: this.renderCategories()
                    };
                    return e ? this.labelUtil.inject('<div class="ch2-settings-declaration">{{line1}}{{line2}}{{token}}{{categories}}</div>', t) : this.labelUtil.inject(this.options.elements.declaration.container, t)
                }
                return ""
            }
        }, {
            key: "renderToken",
            value: function() {
                var e = "";
                if (this.options.showToken && null != this.state && this.state.choice.answered && null != this.state.choice.token) {
                    for (var t = this.labelUtil.getValue("token_title"), i = this.labelUtil.inject(this.options.elements.declaration.token.line1, {
                            text: this.labelUtil.getValue("token_text")
                        }), n = "", o = 0; o < this.state.choice.categories.length; o++) {
                        var s = this.state.choice.categories[o];
                        s.value && (n.length > 0 && (n += ", "), n += this.labelUtil.getValue(s.id + "_title"), s.cid)
                    }
                    var a = new Date(this.state.choice.timestamp.replace("Z", "")),
                        l = this.labelUtil.inject(this.options.elements.declaration.token.consent, {
                            categoriesTitle: this.labelUtil.getValue("token_categories"),
                            categories: n,
                            tokenTitle: this.labelUtil.getValue("token_token"),
                            token: this.state.choice.token,
                            datetimeTitle: this.labelUtil.getValue("token_datetime"),
                            datetime: a.toLocaleString("de-DE")
                        });
                    e = this.labelUtil.inject(this.options.elements.declaration.token.container, {
                        title: t,
                        line1: i,
                        consent: l
                    })
                }
                return e
            }
        }, {
            key: "renderCategories",
            value: function() {
                for (var e = "", t = 0; t < this.options.categories.length; t++) {
                    var i = this.options.categories[t],
                        n = "";
                    if (null != i.cookies && i.cookies.length > 0)
                        for (var o = 0; o < i.cookies.length; o++) {
                            var s = this.labelUtil.getCDValue(i.cookies[o].name, i.cookies[o].description),
                                a = i.cookies[o].expiry;
                            a = "Session" == a ? this.labelUtil.getValue("general_session") : (a = (a = (a = (a = (a = (a = (a = (a = (a = a.replace("{hour}", this.labelUtil.getValue("general_hour"))).replace("{hours}", this.labelUtil.getValue("general_hours"))).replace("{week}", this.labelUtil.getValue("general_week"))).replace("{weeks}", this.labelUtil.getValue("general_weeks"))).replace("{day}", this.labelUtil.getValue("general_day"))).replace("{days}", this.labelUtil.getValue("general_days"))).replace("{month}", this.labelUtil.getValue("general_month"))).replace("{months}", this.labelUtil.getValue("general_months"))).replace("{year}", this.labelUtil.getValue("general_year"))).replace("{years}", this.labelUtil.getValue("general_years"));
                            var l = "";
                            i.cookies[o].thirdparty && (l += "<span>" + this.labelUtil.getValue("cookie_3rd_party") + "</span>");
                            var r = {
                                name: i.cookies[o].name,
                                hostname: i.cookies[o].hostname,
                                path: i.cookies[o].path,
                                description: s,
                                expiry: a,
                                tags: l
                            };
                            n += this.labelUtil.inject(null == s || "" == s ? this.options.elements.declaration.categories.cookieAlt : this.options.elements.declaration.categories.cookie, r)
                        }
                    var c = {
                        details: this.labelUtil.inject(this.options.elements.declaration.categories.details, {
                            id: i.id,
                            title: this.labelUtil.getValue(i.id + "_title"),
                            text: this.labelUtil.getValue(i.id + "_description")
                        }),
                        table: this.labelUtil.inject(this.options.elements.declaration.categories.table, {
                            id: i.id,
                            title: this.labelUtil.getValue(i.id + "_title"),
                            name: this.labelUtil.getValue("cookie_name"),
                            hostname: this.labelUtil.getValue("cookie_hostname"),
                            path: this.labelUtil.getValue("cookie_path"),
                            expiry: this.labelUtil.getValue("cookie_expiry"),
                            tags: this.options.enhancedAccessibility ? this.labelUtil.getValue("cookie_tags") : "",
                            cookies: n
                        })
                    };
                    e += this.labelUtil.inject(this.options.elements.declaration.categories.container, c)
                }
                return this.labelUtil.inject(this.options.elements.settings.options.container, {
                    options: e
                })
            }
        }]) && A(t.prototype, i), n && A(t, n), e
    }();

    function M(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function N(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e
    }
    var R = function() {
        function e(t, i) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), N(this, "options", {}), N(this, "labelUtil", null), N(this, "dialog", null), N(this, "state", null), N(this, "region", null), this.options = t, this.state = i, this.region = t.region, this.labelUtil = new _(this.options), this.dialog = new V(this.options)
        }
        var t, i, n;
        return t = e, (i = [{
            key: "isEnabled",
            value: function() {
                return this.region.preferences.features.personalData
            }
        }, {
            key: "render",
            value: function() {
                if (this.isEnabled()) {
                    var e = {
                        line1: this.labelUtil.inject(this.options.elements.personalData.line1, {
                            text: this.labelUtil.getValue("personal_data_message")
                        }),
                        line2: this.dialog.renderLearnMore(),
                        options: this.renderOptions()
                    };
                    return this.labelUtil.inject(this.options.elements.personalData.container, e)
                }
                return ""
            }
        }, {
            key: "renderOptions",
            value: function() {
                var e = "",
                    t = {
                        switch: this.labelUtil.inject(this.options.elements.settings.options.switch, {
                            id: 1011,
                            name: "personal-data",
                            "is-checked": this.state.allowSale ? " checked" : "",
                            "is-disabled": "",
                            title: this.labelUtil.getValue("donotsell_title")
                        }),
                        details: this.labelUtil.inject(this.options.elements.settings.options.details, {
                            id: 1011,
                            title: this.labelUtil.getValue("donotsell_title"),
                            text: this.labelUtil.getValue("donotsell_description")
                        })
                    };
                return e += this.labelUtil.inject(this.options.elements.settings.options.option, t), this.labelUtil.inject(this.options.elements.settings.options.container, {
                    options: e
                })
            }
        }]) && M(t.prototype, i), n && M(t, n), e
    }();

    function J(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function H(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e
    }
    var F = function() {
        function e(t) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), H(this, "options", {}), H(this, "domUtil", null), this.options = t, this.domUtil = new v(this.options)
        }
        var t, i, n;
        return t = e, (i = [{
            key: "attachEvents",
            value: function() {
                for (var e = this.domUtil.getElementsByClass("ch2-collapse-toggler"), t = 0; t < e.length; t++)
                    for (var i = 0; i < e[t].children.length; i++) e[t].children[i].hasAttribute("aria-controls") && !e[t].children[i].hasAttribute("data-r") && null != document.getElementById(e[t].children[i].getAttribute("aria-controls")) && (document.getElementById(e[t].children[i].getAttribute("aria-controls")).style.display = "none", e[t].children[i].addEventListener("click", (function(e) {
                        e.preventDefault();
                        var t = this.getAttribute("aria-controls");
                        "true" == this.getAttribute("aria-expanded") ? (this.setAttribute("aria-expanded", "false"), document.getElementById(t).style.display = "none") : (this.setAttribute("aria-expanded", "true"), document.getElementById(t).style.display = "")
                    })), e[t].children[i].setAttribute("data-r", !0))
            }
        }]) && J(t.prototype, i), n && J(t, n), e
    }();

    function q(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function G(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e
    }
    var $ = function() {
        function e(t, i) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), G(this, "options", {}), G(this, "state", null), G(this, "labelUtil", null), G(this, "domUtil", null), G(this, "declaration", null), G(this, "dialog", null), G(this, "rendered", !1), G(this, "region", null), G(this, "collapse", null), this.options = t, this.state = i, this.region = t.region, this.labelUtil = new _(this.options), this.domUtil = new v(this.options), this.declaration = new I(this.options, i), this.personalData = new R(this.options, i), this.dialog = new V(this.options), this.collapse = new F(this.options)
        }
        var t, i, n;
        return t = e, (i = [{
            key: "isEnabled",
            value: function() {
                return this.tabsEnabled() > 0
            }
        }, {
            key: "tabsEnabled",
            value: function() {
                var e = 0;
                return this.region.preferences.features.categories && e++, this.region.preferences.features.declaration && e++, this.region.preferences.features.personalData && e++, this.region.preferences.features.vendor && e++, e
            }
        }, {
            key: "tabEnabledByDefault",
            value: function(e) {
                return this.region.preferences.features.categories ? "categories" == e : this.region.preferences.features.personalData ? "personalData" == e : !!this.region.preferences.features.declaration && "declaration" == e
            }
        }, {
            key: "hasCookies",
            value: function() {
                for (var e = 0; e < this.options.categories.length; e++) {
                    var t = this.options.categories[e];
                    if (null != t.cookies && t.cookies.length > 0) return !0
                }
                return !1
            }
        }, {
            key: "el",
            value: function() {
                var e = this.domUtil.getElementsByClass("ch2-settings");
                return e.length > 0 ? e[0] : null
            }
        }, {
            key: "render",
            value: function() {
                if (this.isEnabled()) {
                    var e = "";
                    if (this.region.preferences.features.categories) {
                        var t = this.renderContent();
                        this.tabEnabledByDefault("categories") && (t = t.replace(new RegExp('style="display:none"', "g"), "")), e += t
                    }
                    if (this.region.preferences.features.declaration) {
                        var i = this.declaration.render();
                        this.tabEnabledByDefault("declaration") && (i = i.replace(new RegExp('style="display:none"', "g"), "")), e += i
                    }
                    if (this.region.preferences.features.personalData) {
                        var n = this.personalData.render();
                        this.tabEnabledByDefault("personalData") && (n = n.replace(new RegExp('style="display:none"', "g"), "")), e += n
                    }
                    var o = {
                        header: this.renderHeader(),
                        class: this.tabsEnabled() ? " ch2-settings-scan" : "",
                        tabbar: this.tabsEnabled() > 0 ? this.renderTabBar() : "",
                        content: e,
                        actions: this.renderActions()
                    };
                    return this.rendered = !0, this.labelUtil.inject(this.options.elements.settings.container, o)
                }
                return ""
            }
        }, {
            key: "renderHeader",
            value: function() {
                var e = {
                    close: this.labelUtil.getValue("general_close"),
                    title: this.labelUtil.getValue("settings_title")
                };
                return this.labelUtil.inject(this.options.elements.settings.header, e)
            }
        }, {
            key: "renderTabBar",
            value: function() {
                var e = [];
                this.region.preferences.features.categories && e.push({
                    id: "ch2-settings",
                    name: this.labelUtil.getValue("settings_tab"),
                    active: this.tabEnabledByDefault("categories")
                }), this.region.preferences.features.personalData && e.push({
                    id: "ch2-personal-data",
                    name: this.labelUtil.getValue("personal_data_tab"),
                    active: this.tabEnabledByDefault("personalData")
                }), this.region.preferences.features.declaration && e.push({
                    id: "ch2-declaration",
                    name: this.labelUtil.getValue("declaration_tab"),
                    active: this.tabEnabledByDefault("declaration")
                });
                for (var t = "", i = 0; i < e.length; i++) {
                    var n = {
                        active: e[i].active ? "active" : "",
                        selected: e[i].active,
                        link: "#" + e[i].id,
                        name: e[i].name
                    };
                    t += this.labelUtil.inject(this.options.elements.settings.tabbar.item, n)
                }
                var o = {
                    items: t
                };
                return this.labelUtil.inject(this.options.elements.settings.tabbar.container, o)
            }
        }, {
            key: "renderContent",
            value: function() {
                for (var e = this.labelUtil.inject(this.options.elements.settings.button1, {
                        label: this.labelUtil.getValue("widget_btn_allow_all")
                    }), t = this.labelUtil.inject(this.options.elements.settings.button3, {
                        label: this.labelUtil.getValue("widget_btn_deny_all")
                    }), i = "", n = "", o = 0; o < this.region.preferences.actions.length; o++) {
                    var s = this.region.preferences.actions[o],
                        a = "";
                    "allow" == s && (a = e), "deny" == s && (a = t), 0 == o ? i += a : n += a
                }
                var l = this.options.elements.branding;
                null != this.options.affiliate && (l = l.replace("https://www.cookiehub.com", "https://www.cookiehub.com/?al=" + this.options.affiliate));
                var r = {
                    branding: this.options.features.hideBranding ? "" : l,
                    line1: this.labelUtil.inject(this.options.elements.settings.line1, {
                        text: this.labelUtil.getValue("settings_message")
                    }),
                    line2: this.dialog.renderLearnMore(),
                    options: this.renderOptions(),
                    button1: i,
                    button3: n
                };
                return this.labelUtil.inject(this.options.elements.settings.content, r)
            }
        }, {
            key: "renderOptions",
            value: function() {
                for (var e = "", t = 0; t < this.options.categories.length; t++) {
                    for (var i = this.options.categories[t], n = !1, o = 0; o < this.state.choice.categories.length; o++) {
                        var s = this.state.choice.categories[o];
                        if (s.id == i.id && s.value) {
                            n = !0;
                            break
                        }
                    }
                    this.state.choice.answered || (n = this.state.getDefaultCheckState(i.id));
                    var a = {
                        switch: this.labelUtil.inject(this.options.elements.settings.options.switch, {
                            id: t,
                            name: i.id,
                            "is-checked": n ? " checked" : "",
                            "is-disabled": i.changeable ? "" : "  disabled",
                            title: this.labelUtil.getValue(i.id + "_title")
                        }),
                        details: this.labelUtil.inject(this.options.elements.settings.options.details, {
                            id: t,
                            title: this.labelUtil.getValue(i.id + "_title"),
                            text: this.labelUtil.getValue(i.id + "_description")
                        })
                    };
                    e += this.labelUtil.inject(this.options.elements.settings.options.option, a)
                }
                return this.labelUtil.inject(this.options.elements.settings.options.container, {
                    options: e
                })
            }
        }, {
            key: "renderService",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    i = "sv",
                    n = "";
                if (null != t && (i = t), null != e) {
                    var o = !0;
                    n += this.renderOption(i + "-" + e.id, o, !1, e.name, e.description)
                }
                return n
            }
        }, {
            key: "renderActions",
            value: function() {
                var e = this.options.elements.branding;
                null != this.options.affiliate && (e = e.replace("https://www.cookiehub.com", "https://www.cookiehub.com/?al=" + this.options.affiliate));
                var t = {
                    branding: this.options.features.hideBranding ? "" : e,
                    button2: this.labelUtil.inject(this.options.elements.settings.button2, {
                        label: this.labelUtil.getValue("settings_btn_save")
                    })
                };
                return this.labelUtil.inject(this.options.elements.settings.actions, t)
            }
        }, {
            key: "attachEvents",
            value: function(t) {
                this.rendered && this.domUtil.addEvent("ch2-select-tab", (function(i, n) {
                    i.preventDefault();
                    var o = i.target;
                    if (!n.hasClass(o.parentElement, "active")) {
                        var s = "";
                        o.href.indexOf("#") > 0 && (s = o.href.split("#")[1]), "" != s && new e(t).selectTab(s)
                    }
                }))
            }
        }, {
            key: "selectTab",
            value: function(e) {
                if (null == e && (null != document.getElementById("ch2-settings") ? e = "ch2-settings" : null != document.getElementById("ch2-personal-data") ? e = "ch2-personal-data" : null != document.getElementById("ch2-declaration") && (e = "ch2-declaration")), null != e) {
                    for (var t = this.domUtil.getElementsByClass("ch2-select-tab"), i = 0; i < t.length; i++) t[i].getAttribute("href") == "#" + e ? (this.domUtil.addClass(t[i].parentElement, "active"), t[i].parentElement.setAttribute("aria-selected", "true")) : (this.domUtil.removeClass(t[i].parentElement, "active"), t[i].parentElement.setAttribute("aria-selected", "false"));
                    var n = this.domUtil.getElementsByClass("ch2-settings-tab-container");
                    for (i = 0; i < n.length; i++) n[i].style.display = n[i].id == e ? "block" : "none"
                }
            }
        }, {
            key: "open",
            value: function(e) {
                if (this.rendered) {
                    for (var t = this.domUtil.getElementsByClass("ch2-switch-value"), i = 0; i < t.length; i++) "personal-data" == t[i].name ? t[i].checked = this.state.choice.allowSale : this.state.choice.answered && (t[i].checked = this.state.hasConsented(t[i].name));
                    if (!this.domUtil.hasClass(this.el(), "ch2-visible")) {
                        var n = this.domUtil.getFirstElementByClass("ch2-close-settings-btn");
                        null != n && (n.style.display = this.state.choice.answered || this.options.features.optional ? "" : "none"), this.domUtil.addClassMulti("ch2-settings", "ch2-visible"), this.domUtil.addClassMulti("ch2-container", "ch2-block ch2-scale"), document.getElementsByTagName("body")[0].style.overflow = "hidden"
                    }
                    this.collapse.attachEvents(), this.selectTab(e)
                }
            }
        }, {
            key: "close",
            value: function() {
                this.rendered && (this.domUtil.removeClassMulti("ch2-settings", "ch2-visible"), this.domUtil.removeClassMulti("ch2-container", "ch2-block ch2-scale"), document.getElementsByTagName("body")[0].style.removeProperty("overflow"))
            }
        }, {
            key: "renderOption",
            value: function(e, t, i, n, o) {
                var s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "",
                    a = e;
                "necessary" == e ? a = 1 : "preferences" == e ? a = 2 : "analytics" == e ? a = 3 : "marketing" == e ? a = 4 : "uncategorized" == e && (a = 5);
                var l = '<span style="display:inline-block;width:10px;height:14px"></span>';
                (i || e != a) && (l = this.labelUtil.inject(this.options.elements.settings.options2.switch, {
                    id: a,
                    name: e,
                    "is-checked": t ? " checked" : "",
                    "is-disabled": i ? "" : " disabled",
                    title: n
                }));
                var r = {
                    toggler: this.labelUtil.inject(this.options.elements.settings.options2.toggler, {
                        id: a,
                        switch: l,
                        title: n
                    }),
                    details: this.labelUtil.inject(this.options.elements.settings.options2.details, {
                        id: a,
                        title: n,
                        text: null != o ? o : "",
                        links: s
                    })
                };
                return this.labelUtil.inject(this.options.elements.settings.options2.option, r)
            }
        }]) && q(t.prototype, i), n && q(t, n), e
    }();
    if (function(t) {
            for (var i, n, s = document.querySelectorAll("[data-consent]"), a = 0; a < s.length; a++) null != s[a].nodeName && "SCRIPT" != s[a].nodeName && "IFRAME" != s[a].nodeName && null != s[a].dataset && (s[a].dataset.display = s[a].style.display, null == s[a].dataset.inverse && (s[a].style.display = "none"));
            t.hasInitialised || (t.Popup = function() {
                var t, n, s, a, r, d = (new e).mySettings,
                    u = new h,
                    p = new o,
                    b = new k;

                function y() {
                    this.initialise.apply(this, arguments)
                }

                function m(e, t, o) {
                    ("implicit" == this.options.region.consentType && (o = !0), e) && this.options.onInitialise.bind(this)(i.choice);
                    for (var l = 0; l < i.choice.categories.length; l++) {
                        var r = i.choice.categories[l].value;
                        i.choice.answered || (r = i.getDefaultCategoryState(i.choice.categories[l].id)), null != n && n.setVariable(i.choice.categories[l].id, r)
                    }
                    if (e ? null != n && n.triggerEvent("ready") : null != n && n.triggerEvent("modified"), o) {
                        var c = this.options.cookie;
                        p.set(c.name, JSON.stringify(i.choice), c.expiryDays, c.domain, c.path, this.options.encode, c.sameSite, c.secure)
                    }
                    t && null != u && u.log(t, this.options, i.choice);
                    for (l = 0; l < i.choice.categories.length; l++)
                        if (!i.choice.categories[l].fired) {
                            i.choice.categories[l].fired = !0;
                            r = i.choice.categories[l].value;
                            i.choice.answered || (r = i.getDefaultCategoryState(i.choice.categories[l].id));
                            var h = w.call(this, i.choice.categories[l].id);
                            if (r) null != n && n.triggerEvent(i.choice.categories[l].id), null != h && (h.onAllow && h.onAllow.call(this), this.options.onAllow.call(this, i.choice.categories[l].id));
                            else if (null != h && !e) {
                                h.onRevoke && h.onRevoke.call(this);
                                var d = h.cookies;
                                if (null != d)
                                    for (var g = 0; g < d.length; g++) "cookiehub" != d[g].name && (p.delete(d[g].name, d[g].hostname), p.deleteStorage(d[g].name));
                                this.options.onRevoke.call(this, i.choice.categories[l].id)
                            }
                            a.conditionalElements(i.choice.categories[l].id, r)
                        }
                    null != s && s.update(i)
                }

                function w(e) {
                    for (var t = 0; t < this.options.categories.length; t++)
                        if (this.options.categories[t].id == e) return this.options.categories[t];
                    return null
                }

                function C(e, t) {
                    this.options.region = e, i.choice.region = t, "implicit" != this.options.region.consentType || i.choice.answered || i.implictConsent(!1)
                }

                function E() {
                    if (null != this.options.stylesheet && "" != this.options.stylesheet) {
                        var e = document.createElement("link"),
                            t = this.options.stylesheet;
                        i.choice.answered && (t += "?1"), e.href = t, e.type = "text/css", e.rel = "stylesheet", e.onload = this.showContainer.bind(this), document.getElementsByTagName("head")[0].appendChild(e)
                    } else this.showContainer();
                    "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", this.cl.bind(this)) : this.cl.call(this)
                }

                function U() {
                    var e = window.location.search;
                    if (!i.choice.answered && e.indexOf("_cl=") > -1) {
                        var t = e.split("_cl=")[1];
                        if (t.indexOf("&") > -1 && (t = t.split("&")[0]), null != t && "" != t) {
                            var n = "";
                            try {
                                n = atob(t)
                            } catch (e) {}
                            if ("" != n) {
                                var o = n.split(";");
                                if (o.length > 4 && 1 == o[0]) {
                                    i.choice.answered = !0, i.choice.allAllowed = "1" == o[1], i.choice.allowSale = "1" == o[2], 64 == o[3].length && (i.choice.token = o[3]);
                                    var s = o[4].split(",");
                                    null != s && s.length > 0 && (i.choice.categories = [], i.choice.categories.push({
                                        cid: 1,
                                        id: "necessary",
                                        value: !0,
                                        preconsent: !1,
                                        fired: !1
                                    }), i.choice.categories.push({
                                        cid: 2,
                                        id: "preferences",
                                        value: s.indexOf("2") > -1,
                                        preconsent: !1,
                                        fired: !1
                                    }), i.choice.categories.push({
                                        cid: 3,
                                        id: "analytics",
                                        value: s.indexOf("3") > -1,
                                        preconsent: !1,
                                        fired: !1
                                    }), i.choice.categories.push({
                                        cid: 4,
                                        id: "marketing",
                                        value: s.indexOf("4") > -1,
                                        preconsent: !1,
                                        fired: !1
                                    }), i.choice.categories.push({
                                        cid: 5,
                                        id: "uncategorized",
                                        value: s.indexOf("5") > -1,
                                        preconsent: !1,
                                        fired: !1
                                    }));
                                    var a = this.options.cookie;
                                    p.set(a.name, JSON.stringify(i.choice), a.expiryDays, a.domain, a.path, this.options.encode, a.sameSite, a.secure)
                                }
                            }
                        }
                    }
                    return !0
                }

                function _() {
                    var e = new T(this.options).render(),
                        t = new D(this.options).render();
                    e = e.replace("{{icon}}", t);
                    var n = new V(this.options).render();
                    e = e.replace("{{dialog}}", n);
                    var o = (r = new $(this.options, i)).render();
                    e = e.replace("{{settings}}", o);
                    var s = document.createElement("div");
                    this.options.enhancedAccessibility && (s = document.createElement("section"));
                    var l = "";
                    null != this.options.region && this.options.region.region.length > 0 && (l = " ch2-region-" + this.options.region.region[0].toLowerCase(), s.dataset.region = this.options.region.region[0].toLowerCase()), s.className = "ch2" + l, s.innerHTML = e, s.dataset.nosnippet = !0, this.cssLoaded || (s.style.display = "none"), null == this.options.container ? "top" == this.options.renderPosition || this.options.enhancedAccessibility && "bottom" != this.options.renderPosition ? document.body.insertBefore(s, document.body.firstChild) : document.body.appendChild(s) : this.options.container.appendChild(s), r.attachEvents(this.options), this.el.container = a.getFirstElementByClass("ch2-container"), this.el.settings = a.getFirstElementByClass("ch2-settings"), this.el.dialog = a.getFirstElementByClass("ch2-dialog"), this.el.icon = a.getFirstElementByClass("ch2-icon"), this.el.container.addEventListener("click", this.containerClick.bind(this), !1);
                    for (var c = a.getElementsByClass("ch2-open-settings-btn"), h = 0; h < c.length; h++) c[h].addEventListener("click", this.openSettings.bind(this), !1);
                    var d = a.getElementsByClass("ch2-dialog-close-btn");
                    for (h = 0; h < d.length; h++) {
                        var u = d[h].dataset.action;
                        "deny" == u ? d[h].addEventListener("click", this.denyCookies.bind(this), !1) : "allow" == u ? d[h].addEventListener("click", this.allowCookies.bind(this), !1) : d[h].addEventListener("click", this.closeDialog.bind(this), !1)
                    }
                    var g = a.getElementsByClass("ch2-open-personal-data-btn");
                    for (h = 0; h < g.length; h++) g[h].addEventListener("click", this.openPersonalData.bind(this), !1);
                    var p = a.getElementsByClass("ch2-close-settings-btn");
                    for (h = 0; h < p.length; h++) p[h].addEventListener("click", this.closeSettings.bind(this), !1);
                    var f = a.getElementsByClass("ch2-save-settings-btn");
                    for (h = 0; h < f.length; h++) f[h].addEventListener("click", this.saveSettings.bind(this), !1);
                    var b = a.getElementsByClass("ch2-allow-all-btn");
                    for (h = 0; h < b.length; h++) b[h].addEventListener("click", this.allowCookies.bind(this), !1);
                    var v = a.getElementsByClass("ch2-deny-all-btn");
                    for (h = 0; h < v.length; h++) v[h].addEventListener("click", this.denyCookies.bind(this), !1);
                    var y = a.getElementsByClass("ch2-learn-more");
                    for (h = 0; h < y.length; h++) y[h].addEventListener("click", this.learnMoreClick.bind(this), !1);
                    this.renderDeclaration()
                }
                return y.prototype.el = {}, y.prototype.cssLoaded = !1, y.prototype.initialise = function(e) {
                    if (window.cookiehub.hasInitialised && this.destroy(), b.extend(this.options = {}, d), b.isPlainObject(e) && b.extend(this.options, e), i = new l(this.options), t = "function" == typeof c ? new c(this.options) : null, n = "function" == typeof g ? new g(this.options.gtm) : null, s = "function" == typeof f ? new f(this.options.gcm) : null, a = new v(this.options), this.options.region = this.options.regions[0], i.isBot()) return i.implictConsent(!0), m.call(this, !0, !1, !0), void(null != n && n.triggerEvent("modified"));
                    if (i.choice.answered || null != i.choice.region && i.choice.region.length > 0) {
                        if (null != i.choice.region && i.choice.region.length > 0)
                            for (var o = 0; o < this.options.regions.length; o++)
                                for (var r = 0; r < this.options.regions[o].region.length; r++)
                                    if (this.options.regions[o].region[r] == i.choice.region) {
                                        C.call(this, this.options.regions[o], i.choice.region);
                                        break
                                    }
                        E.call(this), m.call(this, !0, !1, !1)
                    } else if (U.call(this), null != u && "" == i.choice.token && (i.choice.token = u.generateToken()), null != t && this.options.regions.length > 1) {
                        var h = this;
                        t.lookup((function(e, t, i) {
                            null != t && C.call(h, t, i), E.call(h), m.call(h, !0, !1, !1)
                        }))
                    } else E.call(this), m.call(this, !0, !1, !1);
                    if (!i.isBot() && null != this.options.linker && this.options.linker.length > 0) {
                        var p = document.getElementsByTagName("a");
                        for (o = 0; o < p.length; o++) {
                            var y = p[o];
                            null != y.hostname && null == y.dataset.cl && this.options.linker.indexOf(y.hostname) > -1 && (y.addEventListener("click", window.cookiehub.linker), y.dataset.cl = "true")
                        }
                    }
                }, y.prototype.showContainer = function() {
                    this.cssLoaded = !0;
                    var e = document.getElementsByClassName("ch2");
                    return null != e && e.length > 0 && (e[0].style.display = ""), !0
                }, y.prototype.cl = function() {
                    !this.options.enabled && this.options.render && _.call(this), this.options.enabled && (i.noticeShown = !0, _.call(this), i.choice.answered || "none" == this.options.region.bannerType ? setTimeout((function(e) {
                        e.openIcon()
                    }), 10, this) : "notice" == this.options.region.bannerType ? setTimeout((function(e) {
                        e.openDialog()
                    }), 10, this) : "preferences" == this.options.region.bannerType ? setTimeout((function(e) {
                        e.openSettings()
                    }), 10, this) : setTimeout((function(e) {
                        e.openIcon()
                    }), 10, this))
                }, y.prototype.destroy = function() {
                    this.options = null;
                    for (var e = document.getElementsByClassName("ch2"), t = 0; t < e.length; t++) null != e[t] && e[t].parentNode && e[t].parentNode.removeChild(e[t])
                }, y.prototype.setLanguage = function(e) {
                    var t = Object.assign({}, this.options);
                    this.destroy(), t.language = e, t.displayLanguage = 0, window.cookiehub.initialise(t)
                }, y.prototype.conditionalElements = function() {
                    for (var e = 0; e < i.choice.categories.length; e++) {
                        var t = i.choice.categories[e].value;
                        i.choice.answered || (t = i.getDefaultCategoryState(i.choice.categories[e].id)), a.conditionalElements(i.choice.categories[e].id, t)
                    }
                }, y.prototype.choiceModified = function(e, t) {
                    if (this.el.settings && (null == e || 3 == e.eventPhase)) {
                        var n = JSON.parse(JSON.stringify(i.choice));
                        i.choice.answered = !0, i.choice.revision = this.options.revision;
                        var o = new Date;
                        i.choice.timestamp = o.toISOString();
                        for (var s = a.getElementsByClass("ch2-switch-value"), l = 0; l < i.choice.categories.length; l++)
                            for (var r = i.choice.categories[l], c = 0; c < s.length; c++)
                                if (s[c].name == r.id) {
                                    i.choice.categories[l].value == s[c].checked && s[c].checked || (i.choice.categories[l].value = s[c].checked, i.choice.categories[l].fired = !1);
                                    break
                                }
                        if ("ccpa" == this.options.region.framework)
                            for (c = 0; c < s.length; c++)
                                if ("personal-data" == s[c].name) {
                                    i.choice.allowSale != s[c].checked && (i.choice.allowSale = s[c].checked);
                                    break
                                }
                        return this.options.onStatusChange.call(this, i.choice, n), m.call(this, !1, 1, !0), this
                    }
                }, y.prototype.hasConsented = function(e) {
                    if (this.options) return i.hasConsented(e)
                }, y.prototype.allowCookies = function(e, t) {
                    e && e.preventDefault(), null != n && n.triggerEvent("click_allow_all");
                    var o = JSON.parse(JSON.stringify(i.choice));
                    i.choice.answered = !0, i.choice.revision = this.options.revision;
                    var s = new Date;
                    i.choice.timestamp = s.toISOString();
                    for (var a = 0; a < i.choice.categories.length; a++) {
                        var l = i.choice.categories[a].value;
                        i.choice.categories[a];
                        l || (i.choice.categories[a].value = !0, i.choice.categories[a].fired = !1)
                    }
                    return this.options.onStatusChange.call(this, i.choice, o), this.closeDialog(), this.closeSettings(), m.call(this, !1, 1, !0), this
                }, y.prototype.denyCookies = function(e, t) {
                    e && e.preventDefault(), null != n && n.triggerEvent("click_deny_all");
                    var o = JSON.parse(JSON.stringify(i.choice));
                    i.choice.answered = !0, i.choice.revision = this.options.revision;
                    var s = new Date;
                    i.choice.timestamp = s.toISOString();
                    for (var a = 0; a < i.choice.categories.length; a++) {
                        var l = i.choice.categories[a].value;
                        i.choice.categories[a];
                        "necessary" != i.choice.categories[a].id && l && (i.choice.categories[a].value = !1, i.choice.categories[a].fired = !1)
                    }
                    if (this.options.onStatusChange.call(this, i.choice, o), this.closeDialog(), this.closeSettings(), m.call(this, !1, 1, !0), !i.isBot())
                        for (var r = 0; r < i.choice.categories.length; r++)
                            if ("necessary" != i.choice.categories[r].id) {
                                var c = w.call(this, i.choice.categories[r].id).cookies;
                                if (null != c)
                                    for (var h = 0; h < c.length; h++) "cookiehub" != c[h].name && (p.delete(c[h].name, c[h].hostname), p.deleteStorage(c[h].name))
                            }
                    return this
                }, y.prototype.learnMoreClick = function(e, t) {
                    if (this.el.dialog) return null != n && n.triggerEvent("click_learn_more"), this
                }, y.prototype.saveSettings = function(e, t) {
                    if (e && e.preventDefault(), this.el.settings) return null != n && n.triggerEvent("click_save"), this.choiceModified(), this.closeSettings(), this
                }, y.prototype.openSettings = function(e) {
                    if (e && e.preventDefault(), null != n && n.triggerEvent("click_open_settings"), this.el.settings) return this.closeDialog(), this.closeIcon(), r.open(null), this
                }, y.prototype.openPersonalData = function(e) {
                    if (e && e.preventDefault(), this.el.settings) return null != n && n.triggerEvent("click_open_personal_data"), this.closeDialog(), this.closeIcon(), r.open("ch2-personal-data"), this
                }, y.prototype.closeSettings = function(e, t) {
                    return e && e.preventDefault(), r.close(), this.openIcon(), this
                }, y.prototype.containerClick = function(e, t) {
                    return a.hasClass(e.target, "ch2-container") && i.choice.answered && a.hasClass(this.el.settings, "ch2-visible") && this.closeSettings(), this
                }, y.prototype.openDialog = function() {
                    if (this.el.dialog) {
                        if (this.options.region.banner.blockUI && (a.addClass(this.el.container, "ch2-block"), document.getElementsByTagName("body")[0].style.overflow = "hidden"), this.options.region.banner.blockUI || this.options.enhancedAccessibility) {
                            var e = this.el.dialog;
                            this.options.region.banner.blockUI && (e = a.findFirstLink("ch2-dialog-content")), null != e && setTimeout((function() {
                                e.focus()
                            }), 100)
                        }
                        return a.addClass(this.el.dialog, "ch2-visible"), this.closeIcon(), this
                    }
                }, y.prototype.closeDialog = function() {
                    if (this.el.dialog) return a.removeClass(this.el.dialog, "ch2-visible"), a.removeClass(this.el.container, "ch2-block"), document.getElementsByTagName("body")[0].style.removeProperty("overflow"), this.openIcon(), this
                }, y.prototype.openIcon = function() {
                    if (this.el.icon) return a.addClass(this.el.icon, "ch2-visible"), this
                }, y.prototype.closeIcon = function() {
                    if (this.el.icon) return a.removeClass(this.el.icon, "ch2-visible"), this
                }, y.prototype.hasAnswered = function(e) {
                    return null != i.choice && i.choice.answered
                }, y.prototype.openVendors = function(e) {
                    if (e && e.preventDefault(), this.el.settings) return null != n && n.triggerEvent("click_open_vendors"), this.closeDialog(), this.closeIcon(), r.open("ch2-vendors"), this
                }, y.prototype.usprivacy = function() {
                    var e = "1";
                    return i.noticeShown ? (e += "y", e += i.choice.allowSale ? "n" : "y", e += "-") : e += "---", e
                }, y.prototype.getStatus = function() {
                    return p.get(this.options.cookie.name, this.options.encode)
                }, y.prototype.clearStatus = function() {
                    var e = this.options.cookie;
                    p.delete(e.name, e.domain)
                }, y.prototype.renderDeclaration = function() {
                    var e = document.body.getElementsByClassName("cookiehub-declaration");
                    if (null != e && e.length > 0) {
                        var t = new I(this.options, i).render(!0);
                        e[0].innerHTML = t
                    }
                }, y.prototype.linkerstring = function() {
                    var e = "";
                    if (null != i.choice && i.choice.answered) {
                        var t = [];
                        t.push(1), t.push(i.choice.allAllowed ? "1" : "0"), t.push(i.choice.allowSale ? "1" : "0"), t.push(i.choice.token);
                        for (var n = [], o = 0; o < i.choice.categories.length; o++) i.choice.categories[o] === parseInt(i.choice.categories[o], 10) ? n.push(i.choice.categories[o]) : i.choice.categories[o].value && n.push(i.choice.categories[o].cid);
                        t.push(n.join(",")), e = t.join(";")
                    }
                    return btoa(e)
                }, y
            }(), t.initialise = function(e, i, o) {
                i || (i = function() {}), o || (o = function() {}), n = new t.Popup(e)
            }, t.load = function(e, i, n) {
                return t.initialise(e, i, n)
            }, t.hasInitialised = !0, t.usprivacy = function() {
                return null != n ? n.usprivacy() : "1---"
            }, t.hasConsented = function(e) {
                return n.hasConsented(e)
            }, t.hasAnswered = function() {
                return null != n && n.hasAnswered()
            }, t.allowAll = function() {
                n.allowCookies()
            }, t.denyAll = function() {
                n.denyCookies()
            }, t.openDialog = function() {
                n.openDialog()
            }, t.closeDialog = function() {
                n.closeDialog()
            }, t.openSettings = function() {
                n.openSettings()
            }, t.closeSettings = function() {
                n.closeSettings()
            }, t.renderDeclaration = function() {
                n.renderDeclaration()
            }, t.conditionalElements = function() {
                n.conditionalElements()
            }, t.setLanguage = function(e) {
                n.setLanguage(e)
            }, t.destroy = function() {
                n.destroy()
            }, t.linker = function(e) {
                var t = n.linkerstring();
                "" != t && (e.target.href += (-1 == e.target.href.indexOf("?") ? "?" : "&") + "_cl=" + t)
            }, window.cookiehub = t)
        }(window.cookiehub || {}), null != window.cookiehub_gtm && window.cookiehub_gtm.enabled) {
        var z = {
            showIcon: !0,
            features: {
                gcm: window.cookiehub_gtm.consentMode
            },
            gtm: {
                enabled: !0
            },
            gcm: {
                enabled: !0
            }
        };
        null != window.cookiehub_gtm.language && 2 == window.cookiehub_gtm.language.length && (z.features.translate = !1, z.language = window.cookiehub_gtm.language), null != window.cookiehub_gtm.renderPosition && (z.renderPosition = window.cookiehub_gtm.renderPosition), null != window.cookiehub_gtm.showUI && (z.enabled = window.cookiehub_gtm.showUI), null != window.cookiehub_gtm.showIcon && (z.showIcon = window.cookiehub_gtm.showIcon), null != window.cookiehub_gtm.expiryDays && (z.cookie = {
            expiryDays: parseInt(window.cookiehub_gtm.expiryDays)
        }), null != window.cookiehub_gtm.linker && window.cookiehub_gtm.linker.length > 0 && (z.linker = window.cookiehub_gtm.linker), window.cookiehub.load(z)
    }
}();