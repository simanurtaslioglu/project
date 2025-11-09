const ataturkTimelineData = [
    {
        year: 1881,
        title: "MUSTAFA DÜNYAYA GELDİ",
        source: "SELÂNİK POSTASI",
        excerpt: "Osmanlı İmparatorluğu'nun Selanik şehrinde Ali Rıza Efendi ve Zübeyde Hanım'ın oğlu olarak doğdu. Tarihi değiştirecek liderin ilk adımı.",
        image: "X.jpeg"
    },
    {
        year: 1893,
        title: "KEMAL ADINI ALDI",
        source: "ASKERİ RÜŞTİYE KAYITLARI",
        excerpt: "Selânik Askerî Rüştiyesi'ne yazıldı ve matematik öğretmeni tarafından zekası ve yeteneği nedeniyle kendisine 'Kemal' ikinci adını verildi.",
        image: "indir.jpeg"
    },
    {
        year: 1899,
        title: "İSTANBUL HARP OKULU",
        source: "HARP OKULU KAYIT",
        excerpt: "18 Mart 1899'da İstanbul'da Harp Okulu piyade sınıfına yazıldı ve askeri eğitimine başladı. 1902'de Harp Akademisi'ne girdi.",
        image: "indir (1).jpeg"
    },
    {
        year: 1905,
        title: "KURMAY YÜZBAŞI",
        source: "HARP AKADEMİSİ",
        excerpt: "11 Ocak 1905'te Kurmay Yüzbaşı olarak Harp Akademisi'ni bitirdi. Merkezi Şam'da bulunan 5. Ordu'da göreve başladı.",
        image: "indir (2).jpeg"
    },
    {
        year: 1906,
        title: "VATAN VE HÜRRİYET",
        source: "GİZLİ CEMİYET",
        excerpt: "Ekim 1906'da arkadaşlarıyla birlikte Şam'da gizli Vatan ve Hürriyet Cemiyeti'ni kurdu. Bu, O'nun siyasi hayatının ilk adımıdır.",
        image: "Mustafa Kemal ATATÜRK 🇹🇷.jpeg"
    },
    {
        year: 1909,
        title: "HAREKET ORDU'SUNDA",
        source: "ASKERİ HAREKÂT",
        excerpt: "13 Nisan 1909'da 31 Mart Ayaklanması'nı bastırmak üzere Selanik'ten gelen Hareket Ordusu'nda kurmay olarak görev aldı.",
        image: "Mustafa Kemal Atatürk.jpeg"
    },
    {
        year: 1911,
        title: "TRABLUSGARP'TA DİRENİŞ",
        source: "ŞARK GÖNÜLLÜLERİ",
        excerpt: "18 Aralık 1911'de Trablusgarp'ta Şark Gönüllüleri komutanlığına atandı. 9 Ocak 1912'de Tobruk Savaşı'nı yönetti ve başarılı oldu. Binbaşılığa yükseltildi.",
        image: "indir (3).jpeg"
    },
    {
        year: 1914,
        title: "SOFYA ASKERİ ATEŞE",
        source: "DİPLOMASİ",
        excerpt: "27 Ekim 1913'te Sofya'ya askeri ateşe atandı. 1 Mart 1914'te Yarbaylığa yükseltildi ve Birinci Dünya Savaşı öncesinde önemli diplomatik gözlemler yaptı.",
        image: "indir (4).jpeg"
    },
    {
        year: 1915,
        title: "ÇANAKKALE DESTANI",
        source: "ARIBURNU BÜLTENİ",
        excerpt: "Şubat 1915'te 19. Tümen'i kurdu. 25 Nisan 1915'te ANZAC askerlerini Arıburnu'nda durdurdu. 10 Ağustos'ta Anafartalar Grubu komutanı olarak büyük bir zafer kazandı. Albaylığa yükseltildi.",
        image: "canakkale.jpeg"
    },
    {
        year: 1916,
        title: "MUŞ VE BİTLİS'İN GERİ ALINMASI",
        source: "KAFKAS CEPHESİ",
        excerpt: "1 Nisan 1916'da Mirlivalığa (Tuğgeneralliğe) yükseltildi. 8 Ağustos 1916'da 16. Kolordu Kumandanı olarak Bitlis ve Muş'u Ruslardan geri alarak önemli bir başarı elde etti.",
        image: "indir (5).jpeg"
    },
    {
        year: 1918,
        title: "YILDIRIM ORDULARI",
        source: "ORDU HABERİ",
        excerpt: "31 Ekim 1918'de Yıldırım Orduları Grubu komutanı oldu. Mondros Mütarekesi imzalandıktan sonra ordunun terhis edilmesine karşı çıktı.",
        image: "Atatürk.jpeg"
    },
    {
        year: 1919,
        title: "MİLLİ MÜCADELE BAŞLADI",
        source: "SAMSUN MANŞETİ",
        excerpt: "19 Mayıs 1919'da Samsun'a ayak basarak kurtuluş meşalesini yaktı. Ardından Havza ve Amasya Genelgeleri'ni yayınladı. 8 Temmuz'da askerlikten çekildi.",
        image: "sakarya.jpeg"
    },
    {
        year: 1919.5, // Sıralamayı korumak için .5 kullanıldı
        title: "KONGRELER BAŞKANI",
        source: "MİLLETİN SESİ",
        excerpt: "23 Temmuz 1919'da Erzurum, 4 Eylül 1919'da Sivas Kongresi'ne başkanlık etti. 27 Aralık'ta Heyet-i Temsiliye ile birlikte Ankara'ya geldi.",
        image: "Mustafa Kemal Atatürk (1).jpeg"
    },
    {
        year: 1920,
        title: "TBMM KURULDU",
        source: "EGEMENLİK",
        excerpt: "23 Nisan 1920'de Ankara'da Türkiye Büyük Millet Meclisi'ni açtı. Milli egemenliği tesis ederek yeni devletin temellerini attı. İstanbul'da idam cezasına çarptırıldı.",
        image: "dbc83a703299589d2b434a63eb3d0521.jpg"
    },
    {
        year: 1921,
        title: "BAŞKOMUTANLIK ve SAKARYA",
        source: "KADER ANI",
        excerpt: "5 Ağustos 1921'de TBMM tarafından Başkomutan yapıldı. 23 Ağustos'ta Sakarya Savaşı'nı yönetti. 19 Eylül'de Mareşallik rütbesi ve Gazi sanı verildi.",
        image: "Reisicumhur Atatürk Meclis konuşmasını yaparken (1 Kasım 1925).jpeg"
    },
    {
        year: 1922,
        title: "BÜYÜK TAARRUZ ZAFERİ",
        source: "ZAFER GAZETESİ",
        excerpt: "26 Ağustos 1922'de Kocatepe'den Büyük Taarruz'u, 30 Ağustos'ta Başkomutanlık Meydan Savaşı'nı yönetti. 9 Eylül'de İzmir'i düşmandan kurtardı. 1 Kasım'da Saltanat kaldırıldı.",
        image: "indir (6).jpeg"
    },
    {
        year: 1923,
        title: "CUMHURİYET İLAN EDİLDİ",
        source: "HAKİMİYET-İ MİLLİYE",
        excerpt: "29 Ocak'ta Latife Hanım ile evlendi. 17 Şubat'ta İzmir İktisat Kongresi açıldı. 29 Ekim 1923'te Cumhuriyet ilan edildi ve ilk cumhurbaşkanı seçildi. Halk Fırkası'nı kurdu.",
        image: "mustafakemal.jpeg"
    },
    {
        year: 1924,
        title: "HALİFELİK KALDIRILDI",
        source: "TEŞKİLAT-I ESASİYE",
        excerpt: "3 Mart 1924'te Halifelik kaldırıldı. 20 Nisan'da Yeni Teşkilat-ı Esasiye Kanunu kabul edildi. Yeni devletin modernleşme adımları hızlandı.",
        image: "mustafa kemal atatürk (2).jpeg"
    },
    {
        year: 1925,
        title: "ŞAPKA DEVRİMİ",
        source: "YENİ TOPLUM",
        excerpt: "25 Kasım 1925'te Şapka Yasası kabul edildi. Medeni Kanun ve Uluslararası Takvim/Saat gibi inkılaplarla toplumsal yaşamda köklü değişimler yaşandı.",
        image: "23 Ağustos 1925 - Şapka ve Kıyafet Devrimi.jpeg"
    },
    {
        year: 1928,
        title: "HARF İNKILABI",
        source: "YENİ TÜRK HARFLERİ",
        excerpt: "1 Kasım 1928'de Yeni Türk harflerinin kabulüne ilişkin yasa çıktı. Okur-yazarlığı yaygınlaştırma ve bilim yolunu açma hedefi güdüldü.",
        image: "indir (7).jpeg"
    },
    {
        year: 1931,
        title: "TÜRK TARİH KURUMU",
        source: "KÜLTÜR VURGUSU",
        excerpt: "15 Nisan 1931'de Türk Tarihi Tetkik Cemiyeti'ni (Türk Tarih Kurumu) kurdu. 4 Mayıs 1931'de üçüncü kez cumhurbaşkanı seçildi.",
        image: "Türk Harf Devrimi.jpeg"
    },
    {
        year: 1932,
        title: "TÜRK DİL KURUMU",
        source: "DİL İNKILABI",
        excerpt: "12 Temmuz 1932'de Türk Dili Tetkik Cemiyeti'ni (Türk Dil Kurumu) kurdu. Türkçenin zenginliğini ve bilim dili olma potansiyelini vurguladı.",
        image: "indir (8).jpeg"
    },
    {
        year: 1934,
        title: "ATATÜRK SOYADI",
        source: "TBMM KARARI",
        excerpt: "24 Kasım 1934'te TBMM kararıyla 'Atatürk' soyadı verildi. Bu, 'Türklerin Atası' anlamına gelen özel bir payedir.",
        image: "indir (9).jpeg"
    },
    {
        year: 1937,
        title: "HATAY BAĞIMSIZLIĞI",
        source: "MİLLETLER CEMİYETİ",
        excerpt: "27 Ocak 1937'de Hatay'ın bağımsızlığı Milletler Cemiyeti'nce kabul edildi. Atatürk'ün Hatay davasına verdiği önem zaferle sonuçlandı.",
        image: "screenshot-3-ushf.jpg"
    },
    {
        year: 1938,
        title: "EBEDİYETE İNTİKAL",
        source: "SON POSTA MANŞETİ",
        excerpt: "10 Kasım 1938 Perşembe sabahı saat 09:05'te, Dolmabahçe Sarayı'nda hayata gözlerini yumdu. Türkiye Cumhuriyeti, kurucusunu sonsuzluğa uğurladı.",
        image: "107.jpg"
    }
];

// ... BLOK 2 ve BLOK 3 (İçerik Oluşturma ve Swiper Başlatma) bu kodun hemen altında gelmeli ve aynı kalmalıdır.

// =======================================================
// BLOK 2: İÇERİK OLUŞTURMA VE HTML'E EKLEME
// =======================================================

const swiperWrapper = document.querySelector('.swiper-wrapper');

// Veriyi döngüye alarak kartları oluştur
ataturkTimelineData.forEach(item => {
    const cardHTML = `
        <div class="swiper-slide card newspaper-card">
            <div class="card-header">
                <span class="date">YIL: ${item.year}</span>
                <span class="source">${item.source}</span>
            </div>
            <h2 class="card-headline">${item.title}</h2>
            <img src="${item.image}" alt="${item.title}" class="card-image">
            <p class="card-excerpt">${item.excerpt}</p>
        </div>
    `;
    // Oluşturulan HTML'i wrapper'a ekle
    swiperWrapper.insertAdjacentHTML('beforeend', cardHTML);
});


// =======================================================
// BLOK 3: SWIPER'I BAŞLATMA
// =======================================================

// Kartlar HTML'e eklendikten sonra Swiper başlatılmalıdır.
var swiper = new Swiper(".myCardSwiper", {
    effect: "coverflow", 
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto", 
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: false,

});



