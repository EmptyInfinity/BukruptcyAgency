window.onload = () => {
    $('.preloader').fadeOut("slow", () => {})
}

if ($(window).width() > 680) {
    let blocks = [
        '<strong class="black" data-i18n="block-text-header-1">Услуги:</strong><br><div class="p-circle">1.</div><span data-i18n="block-text-1-p-1">Решение споров, связанных с заключением, изменением, расторжением хозяйственных договоров.</span> <br> <div class="p-circle"> 2. </div><span data-i18n="block-text-1-p-2">Решение споров о применении мер ответственности (взыскание неустойки, процентов, пени) и возмещении убытков и материального ущерба.</span><br><div class="p-circle">3.</div><span data-i18n="block-text-1-p-3">Взыскание долгов.</span><br> <div class = "p-circle"> 4. </div><span data-i18n="block-text-1-p-4">Решение споров о правах на недвижимое имущество.</span><br><div class="p-circle">5.</div><span data-i18n="block-text-1-p-5">Решение споров о признании договоров недействительными и применение последствий недействительности договоров.</span><br> <div class = "p-circle"> 6. </div><span data-i18n="block-text-1-p-6">Решение споров, связанных с уступкой прав требований и переводом долга.</span><br><div class="p-circle">7.</div><span data-i18n="block-text-1-p-7">Решение  других споров, возникших между субъектами предпринимательской деятельности.</span>',
        '<p class="align-center black" data-i18n="block-text-header-2">Мы инициируем и комплексно сопровождаем под ключ следующие процедуры:</p>1. <span data-i18n="block-text-2-p-1">Распоряжение имуществом.</span><br>2. <span data-i18n="block-text-2-p-2">Ликвидационная процедура.</span><br>3. <span data-i18n="block-text-2-p-3">Санация.</span><br>4. <span data-i18n="block-text-2-p-4">Ликвидация по решению собственника.</span><br><hr class="add-hr"><strong class="black" data-i18n="block-text-2-p-5">УСЛУГА ДОЛЖНИКУ:</strong><br><div class="p-circle">1.</div><span data-i18n="block-text-2-p-6">Подготовка и подача заявления о возбуждении дела о банкротстве.</span><br><div class="p-circle">2.</div> <span data-i18n="block-text-2-p-7">Комплексные услуги арбитражного управляющего.</span><br><div class="p-circle">3.</div> <span data-i18n="block-text-2-p-8">Комплексное сопровождение дела в суде.</span><br> <div class="p-circle">4.</div><span data-i18n="block-text-2-p-9">Обжалование решений судов и действий участников дела о банкротстве.</span><br><div class="p-circle">5.</div><span data-i18n="block-text-2-p-10">Подготовка плана санации (досудебная, судебная процедуры) и мировых соглашения в <br>рамках дела о банкротстве.</span><br><div class="p-circle">6.</div><span data-i18n="block-text-2-p-11">Комплексный анализ финансового состояния должника.</span><br><div class="p-circle">7.</div><span data-i18n="block-text-2-p-12">Инвентаризация активов и обязательств.</span><br><div class="p-circle">8.</div><span data-i18n="block-text-2-p-13">Рассмотрение требований кредиторов и составления реестра требований.</span><br><div class="p-circle">9.</div><span data-i18n="block-text-2-p-14">Взаимодействие с распорядителем имущества, ликвидатором.</span><br><div class="p-circle">10.</div><span data-i18n="block-text-2-p-15">Контроль процедуры продажи имущества должника, принятия участия в аукционах с целью выкупа имущества.</span><br><div class="p-circle">11.</div><span data-i18n="block-text-2-p-16">Решения любых других Ваших проблем в процедурах банкротства.</span><br><hr class="add-hr"><strong class="black" data-i18n="block-text-2-p-17">УСЛУГА КРЕДИТОРУ:</strong> <br><span data-i18n="block-text-2-p-18">Банкротство Вашего должника это последний шанс взыскать долг. В рамках оказания услуги мы:</span><br><div class="p-circle">1.</div><span data-i18n="block-text-2-p-19">Заявляем кредиторские требование и контролируем их признание.</span><br><div class="p-circle">2.</div> <span data-i18n="block-text-2-p-20">Занимаемся поиском имущества должника для удовлетворения Ваших требований.</span><br><div class="p-circle">3.</div><span data-i18n="block-text-2-p-21">Комплексно сопровождаем Вас в суде и коллегиальных органах должника.</span><br><div class="p-circle">4.</div> <span data-i18n="block-text-2-p-22">Контролируем деятельность арбитражного управляющего, при необходимости проводим смену арбитражного управляющего на своего.</span><br>  <div class="p-circle">5.</div><span data-i18n="block-text-2-p-23">Полностью контролируем процесс продажи имущества должника и погашения Ваших требований. Обжалуем результаты аукциона.</span><br><div class="p-circle">6.</div><span data-i18n="block-text-2-p-24">Проводим анализ плана санации и проектов мировых соглашений на соответствие закону, исчисляем вероятность погашения Вашего долга.</span><br>  <div class="p-circle">7.</div><span data-i18n="block-text-2-p-25">Составляем план санации и мировые соглашения в рамках дела о банкротстве.</span>',
        '<strong class="black" data-i18n="block-text-header-3">Услуги:</strong><br><div class="p-circle">1.</div><span data-i18n="block-text-3-p-1">Переговоры с Банком: реструктуризация долга; подписание мировых соглашений с банками Украины. Если Вы или Ваша компания намерены продолжать хозяйственную деятельность, но мешают долги перед Банками, то Мы поможем Вам достигнуть компромисса на выгодных для Вас условиях, даже если Банк обратился в суд с исковым заявлением или исполняет судебное решение через исполнителей.</span><br><div class="p-circle">2.</div><span data-i18n="block-text-3-p-2">ВОЗВРАЩЕНИЕ ДЕПОЗИТА С НЕПЛАТЕЖЕСПОСОБНЫХ БАНКОВ И РАЗРЕШЕНИЕ ИНЫХ ВИДОВ СПОРОВ. Массовое банкротство банков с 2013 года привело к тому, что тысячи вкладчиков потеряли свои вклады. Мы поможем возвратить Вам максимально возможную сумму Ваших денег. Если у Вас есть долги перед такими банками, или Ваше имущество в залоге у неплатежеспособных банков, Мы поможем, с минимальными затратами, полностью аннулировать Ваши долги и возвратить имущество.</span><br><div class="p-circle">3.</div><span data-i18n="block-text-3-p-3">Признание кредитного договора и договоров залога недействительными. При реализации этой услуги мы используем тонкости законодательства которые при подписании договором не соблюдались сторонами. Это и есть основанием для признания договоров недействительными в судебном порядке.</span><br><div class="p-circle">4.</div><span data-i18n="block-text-3-p-4">Признание договора поручительства прекращенным. Практика и правовые позиции Верховного Суда, при существовании определенных обстоятельств, поддерживает кредиторов и позволяет добиться необходимого Вам результата.</span><br><div class="p-circle">5.</div><span data-i18n="block-text-3-p-5">Применение cрoкa иcковой дaвнocти. Xoрoший apгумeнт в cпoрe c бaнкoм, пocкoльку oчень чaстo бaнк или кoллeктoрскaя фирмa пытaется пoлучить деньги строк исковой давности для взыскания которых истек.</span><br> <div class="p-circle">6.</div><span data-i18n="block-text-3-p-6">Признание незаконным повышение процентной ставки по кредитному договору. В период с 2009 гoдa ввeдeны ряд зaкoнoв Укрaины, кoтoрыe зaпрeщaют бaнкaм в oднoстoрoннeм пoрядкe пoвышaть прoцeнтную стaвку пo крeдитным договорам.</span><br><div class="p-circle">7.</div><span data-i18n="block-text-3-p-7">Избавление от пени и штрафных санкций. Банки в большинстве случаев насчитывают штрафы по кредитному договору незаконно. В судебном порядке, используя правовые инструменты, размеры штрафов можно уменьшить или избавится от них вообще, что доказано множеством выигранных судебных дел и практикой Верховного Суда.</span><br> <div class="p-circle">8.</div><span data-i18n="block-text-3-p-8">Комплексное сопровождение процедуры принудительного взыскания долга (исполнительное производство, банкротство), выкуп имущества с публичных торгов. Мы можем контролировать процедуры принудительного взыскания долга с Вас, которые происходят в рамках исполнительного производства или банкротства. Если Банк уже начал процедуру взыскания долга за счет Вашего залогового имущества, Мы поможем Вам выкупить его за минимально возможную сумму и при этом полностью аннулировать Ваш долг перед Банком.</span><br> <div class="p-circle">9.</div><span data-i18n="block-text-3-p-9">Снятие арестов с имущества. В случает наличия арестов после выполнения всех обязательств перед Банком, Мы снимем любые обременения в максимально короткий строк.</span><br><div class="p-circle">10.</div><span data-i18n="block-text-3-p-10">Соблюдение прав жильцов при выселении их из предмета ипотеки в судебном порядке по иску банка. Использование законных методов позволить остановить процедуру «изъятия» жилья, выселения Вас из ипотечного имущества, а также позволит оставить жилую недвижимость у Вашем владении.</span>',
        '<strong class="black" data-i18n="block-text-header-4">Услуги:</strong><br><div class="p-circle">1.</div><span data-i18n="block-text-4-p-1">Юридическая консультация по уголовным делам : в мельчайших деталях рассматриваются вопросы защиты от обвинений в совершении экономических и коррупционных преступлений, включая особенности их расследования.</span><br><div class="p-circle">2.</div><span data-i18n="block-text-4-p-2">Изучение всех материалов уголовного производства, оценка вероятности тех или иных будущих решений по делу, построение стратегии защиты.</span><br><div class="p-circle">3.</div><span data-i18n="block-text-4-p-3">Участие в суде, при избрании подзащитному меры пресечения (главная задача «оставить клиента на свободе»); обжалование, постановленных с очевидными нарушениями решений следственного судьи об избрании меры пресечения и о назначении иных ограничительных мер (наложение ареста на имущество, временный доступ к вещам и документам и т.п.).</span><br><div class="p-circle">4.</div><span data-i18n="block-text-4-p-4">Отстаивание личных интересов клиента на всех этапах уголовного производства, независимо от статуса: защитник подозреваемого (с момента уведомления о подозрении), обвиняемого или, если дело в суде, то осуществляется защита подсудимого; помощь клиенту при его допросе в качестве свидетеля; представитель гражданского истца, потерпевшего.</span><br><div class="p-circle">5.</div><span data-i18n="block-text-4-p-5">Присутствие во всех, без исключения, процессуальных (следственных) действиях с непосредственным участием подзащитного: осмотре места происшествия, обыске, допросе, следственном эксперименте, вручении уведомления о подозрении и др.</span><br><div class="p-circle">6.</div><span data-i18n="block-text-4-p-6">Реагирование на факты фальсификации доказательств, подкупа свидетелей, незаконного влияния на экспертов.</span><br><div class="p-circle">7.</div><span data-i18n="block-text-4-p-7">Подготовка всех необходимых для защиты документов: жалоб следственному судье, ходатайств, заявлений в различные органы власти и т.д.</span><br><div class="p-circle">8.</div><span data-i18n="block-text-4-p-8">Подготовка жалоб на незаконные постановления, действия/бездеятельность лиц уполномоченных вести уголовное производство (прокурора, следователя).</span><br><div class="p-circle">9.</div><span data-i18n="block-text-4-p-9">Обжалование всех незаконных и подлежащих обжалованию определений вынесенных следственным судьей.</span><br><div class="p-circle">10.</div><span data-i18n="block-text-4-p-10">Обжалование приговоров, постановленных с нарушениями, в апелляционном и кассационном суде.Обращение за защитой, после исчерпания всех национальных механизмов, в международные инстанции, одной из которых является Европейский суд по правам человека.</span>',
        '<strong class="black" data-i18n="block-text-header-5">Содержание услуги:</strong> <br><div class="p-circle">1.</div><span data-i18n="block-text-5-p-1">Юридический аудит предприятий при сделках по слиянию или поглощению с подготовкой отчета</span><br><div class="p-circle">2.</div><span data-i18n="block-text-4-p-2">Юридическом аудите (legal due diligence report).</span><br><div class="p-circle">3.</div><span data-i18n="block-text-4-p-3">Диагностический юридический аудит.</span><br><div class="p-circle">4.</div><span data-i18n="block-text-4-p-4">Подготовка компании к последующей продаже.</span><br><div class="p-circle">5.</div><span data-i18n="block-text-4-p-5">Юридический аудит сделок.</span><br><div class="p-circle">6.</div><span data-i18n="block-text-4-p-6">Юридический аудит земельных участков и объектов недвижимости.</span><br><div class="p-circle">7.</div><span data-i18n="block-text-4-p-7">Подготовка договоров купли-продажи активов по итогам проведения юридического аудита.</span><br><div class="p-circle">8.</div><span data-i18n="block-text-4-p-8">Сопровождение судебных споров, вытекающих из предоставления стороне по соглашению ложной информации в ходе проведения юридического аудита.</span>',
        '<strong class="black" data-i18n="block-text-header-6">Услуги:</strong><br><div class="p-circle">1.</div><span data-i18n="block-text-6-p-1">Консультации по вопросам наименования, местонахождение, размера уставного капитала, избрание соответствующих КВЭД и другие.</span><br><div class="p-circle">2.</div><span data-i18n="block-text-6-p-2">Подготовка документов (устав, протокол, приказ, заявление о государственной регистрации создания юридического лица).</span><br><div class="p-circle">3.</div><span data-i18n="block-text-6-p-3">Проведение государственной регистрации.</span><br><div class="p-circle">4.</div><span data-i18n="block-text-6-p-4">Подача документов в налоговую (регистрация плательщиком единого налога, регистрация плательщиком НДС).</span><br><div class="p-circle">5.</div><span data-i18n="block-text-6-p-5">Получение ключей ЭЦП (электронная цифровая подпись).</span><br><div class="p-circle">6.</div><span data-i18n="block-text-6-p-6">Сопровождение при открытии счета в банке с оформлением карточки с образцами подписей и оттиска печати у нотариуса.</span><br><div class="p-circle">7.</div><span data-i18n="block-text-6-p-7">Предоставление помощи в изготовлении печати, штампов.</span><br><div class="p-circle">8.</div><span data-i18n="block-text-6-p-8">Предоставление других услуг связанных с регистрацией физического лица- предпринимателя и юридического лица.</span>',
        '<strong class="black" data-i18n="block-text-header-7">Услуга:</strong><br><div data-i18n="block-text-7">В связи с Конституционной реформой представительство в Верховном суде осуществляется исключительно адвокатами с 1 января 2017 года; в апелляционных судах - с 1 января 2018 года; в судах первой инстанции - с 1 января 2019 года. Наши Адвокаты обеспечат Ваше представительство как в судах любой инстанции так и в любых госорганах, органах местного самоуправления. </div>'
    ];
    let ad_info_txt = document.getElementById('ad_info_txt');
    let slides = document.querySelectorAll('.slide');
    if ($(window).width() > 890) {
        slides[1].classList.add('sl-active');
        ad_info_txt.innerHTML = blocks[1];
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].onclick = function () {
            if ($(window).width() > 890) {
                let addInfoOffset = $('#addInfo').offset().top - 180;
                $('body,html').animate({
                    scrollTop: addInfoOffset
                }, 500);
                for (let i = 0; i < slides.length; i++) {
                    slides[i].classList.remove('sl-active');
                }
                ad_info_txt.innerHTML = blocks[i];
                $('body').i18n();
                slides[i].classList.add('sl-active');
            }
        }
    }
}




menu_toggle.onclick = function () {
    menu_ul.classList.toggle("block");
    wrap2.classList.toggle("marg");
}

var owl = $(' .news .owl-carousel');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 12000,
    autoplayHoverPause: true,
    dots: true,
    smartSpeed: 3000,
    dots: false
});

if ($(window).width() <= 890) {
    dbl.classList.add('owl-carousel');
    var owl = $(' .wrap2 .owl-carousel').owlCarousel({
        loop: 'true',
        center: 'true',
        nav: false,
        dots: false,
        startPosition: 1,
        items: 1,
        responsive: {
            820: {
                stagePadding: 240,
                margin: 40
            },
            700: {
                stagePadding: 210,
                margin: 40
            },
            635: {
                stagePadding: 190,
                margin: 40
            },
            605: {
                stagePadding: 170,
                margin: 30
            },
            585: {
                stagePadding: 160,
                margin: 30
            },
            515: {
                stagePadding: 135,
                margin: 25
            },
            450: {
                stagePadding: 105,
                margin: 25
            },
            415: {
                stagePadding: 85,
                margin: 15
            },
            388: {
                stagePadding: 70,
                margin: 15
            },
            360: {
                stagePadding: 55,
                margin: 15
            },
            320: {
                stagePadding: 40,
                margin: 15
            }
        }
    });
}

let content = document.getElementById('wrap2');
let header = document.getElementById('header');
window.onscroll = () => {
    let headerHeight = header.getBoundingClientRect().height + 100;
    header.classList.add('h-fixed');
    content.style.marginTop = `${headerHeight}px`;
    if (window.pageYOffset == 0) {
        header.classList.remove('h-fixed');
        content.style.marginTop = '100px';
    }
}