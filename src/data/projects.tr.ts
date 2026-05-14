import type { ProjectDetail } from '@/data/projectTypes';

export const projectsTr: ProjectDetail[] = [
  {
    title: 'Yangın ve Duman Tespit Sistemi',
    slug: 'fire-detection',
    featured: true,
    role: 'Bilgisayarlı görü stajyeri',
    timeline: 'Ağu 2024 - Eyl 2024',
    summary:
      'AFAC Tech’te gerçek zamanlı yangın ve duman tespiti yaptım. OpenCV temellerinden başlayıp YOLOv5 ile denedim, sonra bariz şekilde daha iyi olduğu için YOLOv8’e geçtim ve her şeyi tüketici sınıfı donanımda, sıkı kaynak limitleriyle eğittim.',
    stack: ['Python', 'YOLOv8', 'YOLOv5', 'OpenCV', 'Roboflow', 'Google Colab', 'NVIDIA CUDA'],
    highlights: [
      { label: 'En yüksek güven skoru', value: '~%90' },
      { label: 'Operasyonel güven aralığı', value: '%65 - %80' },
      { label: 'Maksimum eğitim süresi', value: '12+ saat / koşu' },
      { label: 'Donanım', value: 'RTX 3060 (%99 kullanım)' },
    ],
    problem:
      'AFAC Tech’in endüstriyel veya depo ortamları için uygun maliyetli yangın ve duman tespiti gerekiyordu; büyük GPU varsayamıyorsunuz. Sorun her zaman doğruluk ile donanım bütçesi arasında, çünkü güçlü gerçek zamanlı modeller genelde kenarda gerçekçi olmayan hesaplama ister.',
    approach: [
      'Derin öğrenmeden önce görüntüyü anlamak için OpenCV ile başladım (gri tonlama, bulanıklaştırma, kenar, genişletme ve erozyon, kontür, basit dönüşümler).',
      'İlk yangın prototipini YOLOv5 ile kurdum, hız ve doğrulukta tavan gördüm, YOLOv8 ile kıyaslayıp fark migrate etmeye değince taşındım.',
      'YOLOv8 üzerinde yeniden kurdum, dumanı ikinci sınıf olarak ekledim ve her sınıf için ayrı Roboflow veri setleri kullandım. Yangın ve duman dengesizdi; artırımı eğitim dağılımını bozmadan yaptım.',
      'Modelin üzerine e-posta uyarısı ekledim: güven eşiğini geçince Gmail’e kare ekli bildirim gitti, yani sadece ekranda demo kalmadı.',
      'Ücretsiz GPU için Colab’da başladım, kota bitince yerel RTX 3060’a taşındım; CUDA, sürücüler ve Colab/Linux varsayımlı betikleri Windows’a uyarladım.',
      'GPU kullanımı %99’a yakın, bazen yaklaşık 16 saate varan uzun koşular çalıştırdım ve 6 GB VRAM’de aşırı öğrenmeyi kontrol etmek için ayarları yineledim.',
    ],
    outcome: [
      'Canlı kamera beslemesinde çalışan gerçek zamanlı yangın ve duman modeli.',
      'Sadece not defterinde ağırlık değil: tespitler Gmail uyarısı tetikleyebildi, başıboş izlemeye daha yakın.',
      'Yangında güven yaklaşık %90’a çıktı; günlük kullanımda koşullara göre genelde %65–%80 bandında gezindi.',
      'Ayrı çıkarım donanığı olmadan daha küçük endüstriyel veya depo senaryolarına uyabilecek nispeten hafif bir kurulum.',
    ],
    challenges: [
      'Roboflow’daki duman verisi çok çeşitli değildi; artırım yardımcı oldu ama fazlası kaliteyi düşürebilirdi.',
      'Colab GPU kotası ortada bitti, CUDA hazır olmadan yerel ortama geçmek gerekti.',
      'RTX 3060 (6 GB VRAM) batch ve model seçimini sınırladı; her koşu bir bütçeleme gibiydi.',
      'Erken durdurma olmadan 12–16 saatlik koşularda kötü bir hiperparametre tüm günü çöpe atabiliyordu.',
      'Önce özel veri seti denedim; zaman ve kapsam için Roboflow kamu setleri daha mantıklı olunca bıraktım.',
    ],
    gallery: [
      {
        src: '/fire-detection-matches.webp',
        alt: 'Temiz yangın sahnesinde 0,89 güvenle yangın tespiti',
        caption: 'Temiz sahnede güçlü yangın tespiti (güven 0,89).',
      },
      {
        src: '/fire-detection-factory.webp',
        alt: 'Fabrika CCTV görüntüsünde 0,79 güvenle gerçek dünya yangın tespiti',
        caption: 'Danışmanın sağladığı fabrika CCTV testi (güven 0,79).',
      },
      {
        src: '/fire-detection-smoke.webp',
        alt: 'Egzoz sahnesinde duman tespiti, çift sınıf yeteneği',
        caption: 'Araç egzozu sahnesinde duman sınıfı.',
      },
      {
        src: '/fire-detection-alert.webp',
        alt: 'Duman tespitinde yakalanan kareyle Gmail uyarısı',
        caption: 'Duman tespitinde kare ekli Gmail uyarısı.',
      },
    ],
    links: [
      { label: 'YouTube sunumu', href: 'https://youtu.be/zky8htvPG0o' },
      { label: 'Roboflow yangın veri seti', href: 'https://universe.roboflow.com/-jwzpw/continuous_fire/dataset/6' },
      { label: 'Roboflow duman veri seti', href: 'https://universe.roboflow.com/orbit-w0l5f/smoke-detection-orbit/dataset/2' },
    ],
  },
  {
    title: 'Qwen2.5 Müşteri Destek Sohbet Botu',
    slug: 'qwen-chatbot',
    role: 'Yapay zeka araştırma stajyeri',
    timeline: 'Haz 2025 - Ağu 2025',
    summary:
      'Qwen2.5’i LoRA ile müşteri destek asistanı olarak ince ayarladım, denemek için Gradio arayüzü ekledim ve her şeyi yerel tüketici donanımında tuttum.',
    stack: ['Python', 'PyTorch', 'Qwen2.5', 'LoRA', 'bitsandbytes', 'Gradio', 'Hugging Face'],
    highlights: [
      { label: 'Temel model', value: 'Qwen2.5-1.5B-Instruct' },
      { label: 'İnce ayar yöntemi', value: 'LoRA (r=64, alpha=16)' },
      { label: 'Niceleme', value: '4-bit + FP16 (bitsandbytes)' },
      { label: 'Veri seti', value: 'Bitext (8.175 örnek)' },
    ],
    problem:
      'AGU araştırma hattı, ücretli bulut çıkarımı olmadan yerelde kalması gereken müşteri destek tarzı bir LLM istedi. Zor kısım, eğitim veya çıkarımda modelin dağılmadan yaklaşık 6 GB VRAM üzerinde modern talimatlü davranışı yakalamaktı.',
    approach: [
      'Eğitim, çıkarım ve birleştirme betikleri; başta CPU’da kilitlenmeme neden olan Windows’ta bitsandbytes sorunlarını çözdüm.',
      'Küçük elle etiketli seti bırakıp Kaggle’daki Bitext CSV’yi kullandım; UTF-8 BOM, eksik asistan cevapları ve dağınık sütun adlarını dönüştürücüde ele aldım.',
      'VRAM’e sığması için batch, gradyan biriktirme, öğrenme oranı ve 4-bit ile FP16 veya FP32 geri dönüşleriyle LoRA eğitimi.',
      'Uzun koşul öncesi kısa duman testleri; kötü ayarlar gün kaybettirmeden hızlıca patlasın diye.',
      'Eğitimle GPU çakışmasın diye varsayılan olarak CPU’da çalışan Gradio test arayüzü.',
    ],
    outcome: [
      'Tamamen yerel donanımda çalışan LoRA ile ince ayarlı Qwen2.5 asistanı.',
      'Gürültülü kamu CSV’den temiz JSONL’a giden yeniden kullanılabilir boru hattı.',
      'Demolar ve eğitimin yan yana gidebilmesi için CPU’da Gradio.',
      'Uzun eğitimden önce hızlı doğrulama alışkanlığı.',
    ],
    challenges: [
      'VRAM, Qwen2.5’i 6 GB’a sığdırmak için 4-bit niceleme, gradyan biriktirme ve sıkı batch seçimlerini zorunlu kıldı.',
      'Windows’ta bitsandbytes başta CPU-only eğitim demekti; ortam, derleme ve CUDA uyumsuzluklarını çözene kadar.',
      'Bitext BOM gürültüsü, eksik cevaplar ve tutarsız sütunlar saf CSV okumayı kırdı.',
      'Uzun koşular 4-bit tabanda sapmayı önlemek için dikkatli LR planı ve FP16 veya FP32 geri dönüşleri istedi.',
      'Gradio ve eğitim ikisi de GPU istedi; Gradio’yu CPU’ya almak çoğu çakışmayı kesti.',
      'AFAC’taki gibi elle veri yerine kamu verisi zaman ve kapsam için daha mantıklıydı.',
    ],
    gallery: [
      {
        src: '/qwen-chatbot-ui.webp',
        alt: 'Müşteri destek sohbet botu için Gradio arayüzü',
        caption: 'Birleştirilmiş LoRA adaptörüyle Gradio arayüzü.',
      },
      {
        src: '/qwen-chatbot-training.webp',
        alt: 'Qwen2.5 LoRA eğitim çıktısı',
        caption: 'Qwen2.5-1.5B-Instruct üzerinde LoRA koşusu (r=64, alpha=16, 4-bit artı FP16).',
      },
    ],
    links: [{ label: 'YouTube sunumu', href: 'https://youtu.be/12e_yhELeQ4', external: true }],
  },
  {
    title: 'miRKeggGSM',
    slug: 'mirkegggsm',
    role: 'Öğrenci araştırmacı - Bitirme projesi',
    timeline: 'Eyl 2024 - Oca 2025',
    summary:
      'miRNA ifade verileri ve KEGG yol bilgisiyle kanser sınıflandırması için bir makine öğrenmesi hattına katkı verdim. Danışmanlar: Prof. Burcu Bakır Güngör ve Prof. Malik Yousef.',
    stack: ['Python', 'R', 'KNIME', 'Random Forest', 'scikit-learn'],
    highlights: [
      { label: 'Kanser veri setleri', value: '12 (GEO)' },
      { label: 'Sınıflandırma yöntemi', value: 'Random Forest' },
      { label: 'En iyi AUC', value: '>0,99' },
      { label: 'Çerçeve', value: 'G-S-M (KEGG yolları)' },
    ],
    problem:
      'miRNA ifadesi yüksek boyutlu ve gürültülü. Birçok yöntem miRNA, gen ve yol arasındaki biyolojiyi atlıyor; model okunması ve güveni zorlaşıyor.',
    approach: [
      'Birkaç kanser türü için GEO’dan 12 miRNA veri setini indirip ön işleyen Python betikleri.',
      'G-S-M iş akışının uçtan uca çalışması için KNIME düğümlerindeki hataları giderdim.',
      'Tüm 12 veri setinde değerlendirme hattını koştum ve sonuçları topladım.',
      'Yöntem, sonuç ve çıkarımları anlatan bitirme raporunu yazdım.',
    ],
    outcome: [
      'Akciğer, meme, mide, özofagus ve diğerleri dahil 12 kanser veri setinde boru hattı çalıştı.',
      'Bazı veri setlerinde AUC 0,99’un üzerinde, doğruluk bazen yaklaşık %96.',
      'KEGG tabanlı hastalık gruplaması bazen yüzlerce özelliği ondan az miRNA’ya indirirken performansı korudu.',
    ],
    challenges: [
      'KNIME iş akışında önceden kırık düğümler vardı; deneyler başlamadan onları düzeltmek gerekti.',
      'GEO kaynakları tutarsız formatlar için özel betikler istedi.',
      'Büyük koşular KNIME’i zorladı; bazı işler tam gün sürdü.',
    ],
    gallery: [
      {
        src: '/mirkegggsm-architecture.webp',
        alt: 'miRKeggGSM G-S-M boru hattı mimarisi',
        caption: 'G-S-M boru hattı: gruplama, puanlama ve modelleme.',
      },
      {
        src: '/mirkegggsm-workflow.webp',
        alt: 'G-S-M boru hattını uygulayan KNIME iş akışı',
        caption: 'G-S-M boru hattı için KNIME iş akışı.',
      },
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/malikyousef/Groups-Filtering-Scoring-in-G-S-M-',
        external: true,
      },
    ],
  },
  {
    title: 'Pixie',
    slug: 'pixie',
    role: 'Öğrenci geliştirici · Grup projesi',
    timeline: '2023 (Abdullah Gül Üniversitesi)',
    summary:
      'Firebase ile oturum açmalı, 43 yerleşik filtreli ve Cutout Pro ile yapay zekâ ekleri (arka plan kaldırma, renk, iyileştirme, çizgi film selfie) olan Flutter Android görüntü düzenleyici.',
    stack: ['Flutter', 'Dart', 'Firebase', 'Cutout Pro API'],
    highlights: [
      { label: 'Filtreler', value: '43' },
      { label: 'Kimlik doğrulama', value: 'Firebase Authentication' },
      { label: 'Özel özellikler', value: 'Cutout Pro API' },
      { label: 'Platform', value: 'Android (Flutter)' },
    ],
    problem:
      'Ekip hâlâ Flutter öğrenirken, gerçek kimlik doğrulama, galeri ve kamera girişi, anlamlı bir filtre seti ve birkaç yapay zekâ ekli olan mobil bir düzenleyici teslim etmemiz gereken notlu grup projesiydi.',
    approach: [
      'Ayarlar çekmecesinden çıkış dahil e-posta ve parola ile kayıt, hataları ele alan giriş için Firebase.',
      'Düzenlemeye galeri ve kamera ile iki giriş noktası için görüntü seçici.',
      'Cihaz galerisine geri kaydeden 43 filtre ön ayarı.',
      'Arka plan kaldırma, yüz kesiti, renk düzeltme, iyileştirme ve 11 stille çizgi film selfie için Cutout Pro.',
      'Ana akışa bağlamadan önce API çıktısını doğrulamak için yan yana önce-sonra test ekranı.',
    ],
    outcome: [
      'Uçtan uca Android akışı: kimlik, foto seç, düzenle, galeriye kaydet.',
      'Ürettiğimiz yapıda 43 filtre artı dört Cutout özelliği: arka plan kaldırma, renk düzeltme, iyileştirme, çizgi film selfie.',
      'Kimlik akışı uçtan uca çalıştı; ayarlarda dil değişimi kapsam dışı, ileride notu düşüldü.',
    ],
    challenges: [
      'Cutout Pro ücretli; geliştirmede test çağrılarını idare etmek gerekti.',
      'Ağır durum yönetimi olmadan durumlu düzenleme için dikkatli widget düzeni.',
      'Galeri, kamera ve özel özellik ekranları ayrı rotalarda olduğundan düzenleme bağlamını tutarlı tutmak.',
    ],
    gallery: [
      {
        src: '/pixie-welcome.webp',
        alt: 'Pixie karşılama ekranı, Galeri ve Kamera düğmeleri',
        caption: 'Karşılama: galeri ve kamera ile iki giriş.',
      },
      {
        src: '/pixie-editing.webp',
        alt: 'Altta Cutout Pro araç çubuğu olan Pixie düzenleme sayfası',
        caption: 'Cutout araç çubuğu (arka plan kaldır, yüz kesiti, renk, pasaport).',
      },
      {
        src: '/pixie-colorizer.webp',
        alt: 'Siyah beyaz ve renklendirilmiş foto yan yana',
        caption: 'Renklendirici: siyah beyaz girdi ve renkli çıktı.',
      },
      {
        src: '/pixie-gallery.webp',
        alt: 'Dizin tarayıcısı açık Pixie galeri seçici',
        caption: 'Klasörlerle galeri seçici (son, resimler, sürücü, SD kart).',
      },
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/TalhaKarakoyunlu/Pixie', external: true }],
  },
  // URL için kasıtlı slug: `music-app`; arayüzdeki ürün adı: "Musing".
  {
    title: 'Musing',
    slug: 'music-app',
    role: 'Öğrenci geliştirici · Grup projesi',
    timeline: 'Haz 2023 (Abdullah Gül Üniversitesi)',
    summary:
      'Üniversite grup projesi olarak Spotify destekli bir müzik web uygulaması. Oturum açan kullanıcılar sanatçı ve parçalara göz atabilir, çalma listelerini yönetebilir, altı katalog türünde arama yapabilir ve özel koyu mor arayüzden oynatmayı kontrol edebilir.',
    stack: ['HTML', 'CSS', 'Bootstrap 5', 'JavaScript', 'Node.js', 'Express.js', 'EJS', 'Spotify API'],
    highlights: [
      { label: 'Ekip boyutu', value: '3 kişi' },
      { label: 'Kimlik doğrulama', value: 'Spotify OAuth 2.0' },
      { label: 'Arama kapsamı', value: '6 içerik türü' },
      { label: 'Sunum', value: 'Sunucu tarafı (EJS)' },
    ],
    problem:
      'Ders ekip hâlinde uçtan uca tam yığın bir uygulama istedi. Özel Spotify ön yüzü seçtik; bu OAuth 2.0, modern bileşen çerçevesi olmadan sunucu tarafı işleme ve gerçek sürede üçüncü taraf API demekti.',
    approach: [
      'Belgelere baktıktan sonra YouTube Music yerine Spotify seçtik: Spotify tarafında JavaScript odaklı daha net kaynak vardı.',
      'Express OAuth akışını (yetkilendirme, token değişimi, profil, çalma listeleri ve oynatma için kimliği doğrulanmış çağrılar) yönetti.',
      'EJS şablonları, Bootstrap 5 ve koyu mor özel CSS. Yaklaşık üç saniyelik his için gereksiz API çağrılarını kestik.',
      'Arama altı Spotify türünü (parça, sanatçı, albüm, program, bölüm, sesli kitap) ve favoriler ile önerilerden ana akışı kapsadı.',
      'Bootstrap ızgarası ve küçük ekranda hamburger menü ile duyarlı düzen.',
    ],
    outcome: [
      'Çalışan profil, herkese açık ve özel çalma listeleri, tam katalog araması ve önceki ve sonraki ile oynatma.',
      'Masaüstü ve mobilde aynı mor görünüm.',
      'Düzeltemediğimiz Spotify sınırlarını belgeledik: oynatma için masaüstü uygulaması açık olmalı, tam özellikler Premium ister.',
    ],
    challenges: [
      'Özel bir kimlik kütüphanesi olmadan Express’te OAuth yenileme ve yeniden yetkilendirme.',
      'Yalnızca EJS ile durumlu sayfalar için dikkatli rota ve istek tasarımı.',
      'Yükleme süresini makul tutarken görünüm başına birden çok Spotify uç noktası.',
    ],
    gallery: [
      {
        src: '/musing-home.webp',
        alt: 'Musing ana sayfa, favori sanatçılar ve ruh hali çipleri',
        caption: 'Favoriler ve ruh hali çipleriyle ana akış.',
      },
      {
        src: '/musing-playlists.webp',
        alt: 'Kullanıcı çalma listesi kartlarının olduğu Musing sayfası',
        caption: 'Parça sayılarıyla çalma listeleri.',
      },
      {
        src: '/musing-profile.webp',
        alt: 'Takip edilen sanatçıların olduğu Musing profil sayfası',
        caption: 'Takip edilen sanatçılar ve hesap bilgisi.',
      },
      {
        src: '/musing-search.webp',
        alt: 'Sanatçı sonuçlarının olduğu Musing arama sayfası',
        caption: 'Arama sonuçları (altı içerik türünden biri).',
      },
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/TalhaKarakoyunlu/Music-App', external: true }],
  },
  {
    title: 'Sohbet Uygulaması',
    slug: 'chat-app',
    summary: 'Flutter’da gerçek zamanlı sohbet, hat üzerinde AES-256 ve geçmiş için MySQL.',
    stack: ['Flutter', 'MySQL', 'AES-256'],
    highlights: [
      { label: 'Gerçek zamanlı sohbet', value: 'Canlı mesajlaşma' },
      { label: 'Şifreleme', value: 'AES-256' },
      { label: 'Depolama', value: 'MySQL' },
      { label: 'Mobil', value: 'Flutter arayüzü' },
    ],
    problem:
      'Anında hissettiren ama gizliliğe saygılı bir sohbet deneyimi; mesajların sunucuda güvenilir şekilde saklanması.',
    approach: [
      'Net gönder ve al akışları için Flutter istemcisi.',
      'Yük üzerinde AES-256.',
      'Kalıcı konuşma geçmişi için MySQL.',
    ],
    outcome: [
      'Uçtan uca şifreli yük ile neredeyse anında teslimat.',
      'Oturumlar arası tutarlı geçmiş.',
    ],
    challenges: [
      'Her mesajda şifre işi gecikmeyi makul tutmak.',
      'İstemci görünümünün MySQL’de saklananla uyumunu korumak.',
    ],
    gallery: [
      {
        src: '/project-placeholder-3.svg',
        alt: 'Sohbet uygulaması konuşma yer tutucusu',
        caption: 'Konuşma düzeni için yer tutucu.',
      },
      {
        src: '/project-placeholder-1.svg',
        alt: 'Sohbet uygulaması güvenlik yer tutucusu',
        caption: 'Şifreleme durumu için yer tutucu.',
      },
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/TalhaKarakoyunlu/Chat-App', external: true }],
  },
];
