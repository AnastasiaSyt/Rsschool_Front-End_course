const birdsDataBY = [
    [
      {
        id: 1,
        name: "Крумкач",
        species: "Corvus corax",
        description:
          "Крумкач ​​- буйная птушка. Даўжыня цела дасягае 70 сантыметраў, размах крылаў - да паўтара метра. Вароны засяляюць наваколлі Таўэра. У Англіі існуе павер'е, што ў дзень, калі чорныя вароны паляцяць ад Таўэра, манархія абрынецца.",
        image: "https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg",
        audio:
          "https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3",
      },
      {
        id: 2,
        name: "Журавель",
        species: "Grus grus",
        description:
          'Гукі, якія выдаюцца жураўлём, падобныя на звонкае "кур-лы - кур-лы". Жураўлі часцей за ўсё спяваюць дуэтам - адна птушка пачынае запеў са склада "курэй", а другая падхапляе "лы". Калі птушка спявае адна, то яна выдае толькі гук "курэй".',
        image: "https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg",
        audio:
          "https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3",
      },
      {
        id: 3,
        name: "Ластаўка",
        species: "Delichon urbicum",
        description:
          'Для ластавак характэрна нягучнае шчабятанне. Песні ластавак не змаўкаюць на працягу ўсяго лета. Даследнікі адрозніваюць у птушак да 6 шчабечучых гукаў: "віт", "ві-віт", "чывіт", "чырывіт" і да т.п. Ластаўкі любяць спяваць дуэтам.',
        image: "https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg",
        audio:
          "https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3",
      },
      {
        id: 4,
        name: "Казадой",
        species: "Caprimulgus europaeus",
        description:
          "Казaдой - непрыкметная птушка, вядомая дзякуючы свайму голасу. Песня казадоя гучыць як манатонная трэль падобная да тарахцення матацыкла. Такое бразджанне чуваць ад заходу да світання, яго танальнасць, частата і гучнасць змяняюцца.",
        image: "https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg",
        audio:
          "https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3",
      },
      {
        id: 5,
        name: "Зязюля",
        species: "Cuculus canorus",
        description:
          "Зязюлю назвалі так з-за асаблівасцяў яе песень. Звонкае «ку-ку» не зблытаць ні з якой іншай птушкай. Зязюлі не будуюць гнёзды, іх нашчадства вырошчваюць іншыя віды птушыных, якім зязюлі падкідваюць свае яйкі.",
        image: "https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg",
        audio:
          "https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3",
      },
      {
        id: 6,
        name: "Сініца",
        species: "Parus major",
        description:
          "У шчабятанні сініц адрозніваюць больш за 40 розных гукавых спалучэнняў. Спяваюць яны практычна круглы год, крыху заціхаючы толькі зімой. Сініцы сапраўдныя санітары лесу. Адна пара сініц у перыяд гнездавання засцерагае ад шкоднікаў дзясяткі дрэў.",
        image: "https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg",
        audio:
          "https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3",
      },
    ],
    [
      {
        id: 1,
        name: "Верабей",
        species: "Passer domesticus",
        description:
          "Вераб'і з'яўляюцца самымі вядомымі птушкамі. Іх лёгка пазнаць па стракатым апярэнні і забіяцкім цвірканню. Вераб'і ставяцца да сінатропнай ўвазе - яны селяцца паблізу да чалавечага жылля.",
        image: "https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg",
        audio:
          "https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3",
      },
      {
        id: 2,
        name: "Грак",
        species: "Corvus frugilegus",
        description:
          "Гракі вельмі разумныя і кемлівыя птушкі. З дапамогай дзюбы яны ствараюць і выкарыстоўваюць найпростыя прылады. У гракоў развіты рэфлекс на гукі трактара. Пачуўшы «тарахценне», яны ляцяць на гук - трактар ​​арэ зямлю, значыць, у гэтым месцы шмат корму.",
        image: "https://live.staticflickr.com//65535//49347123322_291c86b016.jpg",
        audio:
          "https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3",
      },
      {
        id: 3,
        name: "Галка",
        species: "Coloeus monedula",
        description:
          'Слова "галка" адбылося са стараславянскай мовы і перакладаецца як "чорная". Гэтым словам часта называюць крумкачоў ці іншых чорных птушак. Лацінскую назву галкі "monedula" звязваюць са словамі манета за любоў птушкі да бліскучых і яркіх рэчаў.',
        image: "https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg",
        audio:
          "https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3",
      },
      {
        id: 4,
        name: "Пеўчы дрозд",
        species: "Turdus philomelos",
        description:
          "Дрозд - лепшы спявак з атрада вераб'іных. Песня складаецца толькі з прыгожых гучных свістаў і кароткіх пошчакаў. Часцей за ўсё яе можна пачуць у ранішні і вячэрні час. Спяваюць дразды на працягу ўсяго перыяду гнездавання.",
        image: "https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg",
        audio:
          "https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3",
      },
      {
        id: 5,
        name: "Сарока",
        species: "Pica pica",
        description:
          "Сарока вельмі працавітая птушка. Яна будуе да васьмі гнёздаў, а потым выбірае з іх самае лепшае. Уваход у гняздо сорак заўсёды звернуты на поўдзень, каб у жыллё было цяплей. Сарокі з'яўляюцца адзінымі птушкамі, якія пазнаюць сябе ў люстэрку.",
        image: "https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg",
        audio:
          "https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3",
      },
      {
        id: 6,
        name: "Сойка",
        species: "Garrulus glandarius",
        description:
          "Калі сойка хвалюецца, чубок на яе галаве натапырваецца. Птушка імкнецца стварыць жахлівае відовішча. Сойкі ўмеюць імітаваць галасы іншых птушак, жывёл і гукі, якія стварае чалавек. На зіму яны робяць вялікія запасы жалудоў і арэхаў.",
        image: "https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg",
        audio:
          "https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3",
      },
    ],
    [
      {
        id: 1,
        name: "Зяблік",
        species: "Fringilla coelebs",
        description:
          "У дзікай прыродзе налічваецца 450 відаў зяблікаў. Зімой зяблікі вядуць зграйны лад жыцця. Часам у іх сем'ях можна ўбачыць вераб'ёў. Заспяваюць зяблікі вясной, з надыходам шлюбнага перыяду. Іх спевы - гэта залівістыя шматхвілінныя рулады.",
        image: "https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg",
        audio:
          "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3",
      },
      {
        id: 2,
        name: "Клёст",
        species: "Loxia curvirostra",
        description:
          "Клястоў называюць «каляднымі» птушкамі. У натуральных умовах яны даюць патомства зімой - у студзені. Гэтыя птушкі ўцяпляюць свае гнёзды мохам і поўсцю жывёл, таму птушанятам не холадна. У пошуках гузоў клясты могуць ляцець за 3500 км ад гнязда.",
        image: "https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg",
        audio:
          "https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3",
      },
      {
        id: 3,
        name: "Галубка",
        species: "Streptopelia turtur",
        description:
          "Галубка жыве ў змешаных і шырокалісцевых лясах, а таксама ў гарадскіх парках і пасёлках. Птушкі часта выбіраюць месцы жыцця побач з чалавекам і лёгка абвыкаюць да людзей. Дзякуючы меладычным прыемным спевам галубак часта разводзяць у хатніх умовах.",
        image: "https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg",
        audio:
          "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3",
      },
      {
        id: 4,
        name: "Дзяцел",
        species: "Dendrocopos major",
        description:
          "Дзяцел - прыкметная і шумная птушка, часта жыве побач з чалавекам. З сярэдзіны студзеня да канца чэрвеня можна пачуць «барабанны дроб» дзятлаў – трэль ад вібрацыі галінак пад хуткімі ўдарамі дзюбы птушкі. У добрае надвор'е дроб чутны ў радыусе 1,5 км.",
        image: "https://live.staticflickr.com/65535/49339376578_e933426455.jpg",
        audio:
          "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3",
      },
      {
        id: 5,
        name: "Удод",
        species: "Upupa epops",
        description:
          "Удоды аддаюць перавагу жыць на адкрытых ландшафтах з асобнымі дрэвамі або гаямі. Найбольш зручнымі для птушкі з'яўляюцца лесастэп і савана. Удод можа выбіраць месцы жыхарства побач з чалавекам: пашы, вінаграднікі, фруктовыя сады.",
        image: "https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg",
        audio:
          "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3",
      },
      {
        id: 6,
        name: "Стрыж",
        species: "Apus apus",
        description:
          "Стрыжа можна ўбачыць практычна ў кожным кутку планеты. Яны насяляюць як у лясных зонах, так і на адчыненых мясцовасцях. Жывуць стрыжы буйнымі зграямі. Вялікія калоніі гэтых птушак можна ўбачыць у гарадах ці на прыбярэжных скалах.",
        image: "https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg",
        audio:
          "https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3",
      },
    ],
    [
      {
        id: 1,
        name: "Жаўрук",
        species: "Alauda arvensis",
        description:
          "Жаўрукі - пералётныя птушкі. З пачатку верасня яны адлятаюць на поўдзень. Вяртаюцца яны ў пачатку сакавіка, незалежна ад таго, сышоў снег ці не. Па прылёце жаўрукоў вызначалі наступ вясны і час, калі пара араць зямлю.",
        image: "https://live.staticflickr.com/65535/47105096764_f751fba568.jpg",
        audio:
          "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3",
      },
      {
        id: 2,
        name: "Салавей",
        species: "Luscinia luscinia",
        description:
          "Салаўі спяваюць з пачатку траўня і да канца лета. Кожная песня салаўя складаецца з 12 паўтаральных элементаў, якія яшчэ называюць каленамі. Акрамя ўласных пошчакаў, салаўі лёгка і добра пераймаюць спевы іншых птушак.",
        image: "https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg",
        audio:
          "https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3",
      },
      {
        id: 3,
        name: "Шпак",
        species: "Sturnus vulgaris",
        description:
          "Шпакі - пералётныя птушкі. Сінхронны пералёт вялікіх зграй шпакоў завецца мурмурацыяй. Гэтая прыгожая і зачаравальная з'ява - мноства птушак быццам танчаць у паветры, утворачы мудрагелістыя постаці, якія памяншаюцца і павялічваюцца ў небе.",
        image: "https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg",
        audio:
          "https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3",
      },
      {
        id: 4,
        name: "Івалга",
        species: "Oriolus oriolus",
        description:
          "Меладычнасць голасу івалгі параўноўваюць з гучаннем флейты. Чалавеку складана разглядзець івалгу, бо яна насяляе высока на дрэвах. Івалга не толькі вельмі прыгожая, але і карысная птушка. Яна знішчае атрутных гусеніц, якіх не ядуць іншыя птушкі.",
        image: "https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg",
        audio:
          "https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3",
      },
      {
        id: 5,
        name: "Амялушка",
        species: "Bombycilla garrulus",
        description:
          "У амялушкі вельмі чэпкія кіпцікі, што дапамагае птушцы ўтрымлівацца на галінках і склёўваць ягады, якія цяжэй за ўсё дастаць. У перыяд заляцанняў самец прапануе самцы ягаду ці іншы пачастунак. Калі самка яго прымае, то птушкі ствараюць пару.",
        image: "https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg",
        audio:
          "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3",
      },
      {
        id: 6,
        name: "Шчагол",
        species: "Carduelis carduelis",
        description:
          "Шчыглы спяваюць прыгожа і меладычна. І ў прыродзе, і ў няволі яны шчабечуць амаль круглы год. У спеве шчыгла адрозніваюць больш за 20 пералівістых пошчакаў. Шчыглы абвыкаюць да людзей, і нават могуць вярнуцца да гаспадара пасля таго, як іх выпусцілі на волю.",
        image: "https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg",
        audio:
          "https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3",
      },
    ],
    [
      {
        id: 1,
        name: "Арол",
        species: "Aquila nipalensis",
        description:
          "У старажытныя часы арол быў сімвалам сонца. Арлы часта параць над зямлёй, пры гэтым хуткасць іх перасоўвання можа дасягаць 240 км/ч. Ілюзія павольнага руху адбываецца з-за вышыні палёту - больш за 700 метраў",
        image: "https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg",
        audio:
          "https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3",
      },
      {
        id: 2,
        name: "Коршун",
        species: "Milvus migrans",
        description:
          "Каршуны - буйныя драпежнікі, у вышыню яны дасягаюць каля паўметра, а вага дарослых асобін дасягае 1 кг. Крылы вузкія і доўгія, іх размах складае 1,5 м. Каршуны часта гняздуюцца вялікімі зграямі і нават утвараюць буйныя калоніі.",
        image: "https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg",
        audio:
          "https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3",
      },
      {
        id: 3,
        name: "Лунь",
        species: "Circus cyaneus",
        description:
          'Лунь - гэта невялікі сокал. Сілкуецца ў асноўным мышападобнымі грызунамі, аснова яго рацыёну - палёўкі, хамякі, мышы. Апярэнне луня можа быць попельна-шэрым. З такой птушкай звязана параўнанне "сівой, як лунь".',
        image: "https://live.staticflickr.com/4480/37240531151_b74619c99d.jpg",
        audio:
          "https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3",
      },
      {
        id: 4,
        name: "Сокал",
        species: "Falco peregrinus",
        description:
          "Лацінская назва сокала Falco пайшла ад слова «серп» з-за серпападобнай формы крылаў. Доўгія і шырокія крылы дазваляюць сокалу высока паднімацца ў неба і вольна парыць. Хуткасць палёту сокала дасягае 280-320 кіламетраў за гадзіну.",
        image: "https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg",
        audio:
          "https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3",
      },
      {
        id: 5,
        name: "Ястраб",
        species: "Accipiter gentilis",
        description:
          'Для ўсіх ястрабаў характэрны шырокія і кароткія крылы. Яшчэ адна адметная прыкмета - белыя "бровы" над вачыма. Славянскія дружыннікі размяшчалі выяву каршака на сваіх сцягах, як сімвал адвагі, моцы і бязлітаснасці да ворагаў.',
        image: "https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg",
        audio:
          "https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3",
      },
      {
        id: 6,
        name: "Пугач",
        species: "Bubo bubo",
        description:
          "Палёт пугача бясшумны, зрок вельмі вострае. Гэтыя асаблівасці робяць птушку непераўзыдзеным начным паляўнічым. У пугача няма натуральных ворагаў, ніводны звер не палюе на дарослых птушак. А вось на птушанят нападаюць лісы і ваўкі.",
        image: "https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg",
        audio:
          "https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3",
      },
    ],
    [
      {
        id: 1,
        name: "Альбатрос",
        species: "Diomedea exulans",
        description:
          "Альбатрос - самая буйная лятаючая птушка ў свеце. Размах крылаў дасягае тры з паловай, вага - дзесяць кілаграмаў. Большую частку жыцця альбатросы праводзяць у паветры, пакрываючы над акіянскімі прасторамі велізарныя адлегласці",
        image: "https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg",
        audio:
          "https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3",
      },
      {
        id: 2,
        name: "Олуша",
        species: "Sula nebouxii",
        description:
          "Асаблівасцю галубаногай олушы з'яўляецца не толькі насычаны ярка-сіні колер лапак, але яшчэ і той факт, што яны вельмі цёплыя. У той час як іншыя віды птушак грэюць мура сваім целам, блакітногая олуша робіць гэта з дапамогай лапак",
        image: "https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg",
        audio:
          "https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3",
      },
      {
        id: 3,
        name: "Буравеснік",
        species: "Puffinus griseus",
        description:
          "Памеры буравеснікавыя розныя. Самыя маленькія з іх у даўжыню складаюць да 25 гл, самыя вялікія - да 1 м, пры размаху крылаў каля 2 м. Існуе павер'е, што з'яўленне буравесніка ў паветры прадвесціць буру, пра што кажа сама назва птушкі.",
        image: "https://live.staticflickr.com//607//22136056020_935cb113f9.jpg",
        audio:
          "https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3",
      },
      {
        id: 4,
        name: "Пелікан",
        species: "Pelecanus",
        description:
          "Пеліканы - насельнікі мораў і рэк. Ходзяць яны нязграбна, але добра лётаюць і плаваюць. Сілкуюцца ў асноўным рыбай, уладкоўваюць калектыўныя паляванні - выстраіўшыся паўкругам пляскаюць па вадзе крыламі і дзюбамі і выцясняюць напалоханую рыбу на плыткаводдзе.",
        image: "https://i.ibb.co/mqqxpKB/89644134.jpg",
        audio:
          "https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3",
      },
      {
        id: 5,
        name: "Пінгвін",
        species: "Aptenodytes forsteri",
        description:
          "Самец імператарскага пінгвіна дасягае росты 130 гл, яго маса можа набліжацца да 50 кг. З усіх сучасных пінгвінаў гэты від - самы буйны. Сілкаванне пінгвіна складаецца з рыбы, кальмараў і криля. Палююць птушкі ў акіяне вялікімі групамі.",
        image: "https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg",
        audio:
          "https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3",
      },
      {
        id: 6,
        name: "Чайка",
        species: "Larus argentatus",
        description:
          "Чайкі засяляюць берагі мораў, азёр, рэк, вадасховішчаў, балот, часта гняздуюцца на астравах. З канца мінулага стагоддзі чайкі сталі з'яўляцца ў буйных гарадах, дзе ўладкоўвае гнёзды на дахах будынкаў. Усе чайкі вядуць каланіяльны лад жыцця.",
        image: "https://live.staticflickr.com/65535/48577115317_7034201dde.jpg",
        audio:
          "https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3",
      },
    ],
  ];

  export default birdsDataBY;
