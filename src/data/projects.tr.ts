import type { ProjectDetail } from '@/data/projectTypes';

export const projectsTr: ProjectDetail[] = [
  {
    title: 'Yangın ve Duman Tespit Sistemi',
    slug: 'fire-detection',
    featured: true,
    role: 'Bilgisayarlı Görü Stajyeri',
    timeline: 'Ağu 2024 - Eyl 2024',
    summary:
      'AFAC Tech bünyesinde gerçek zamanlı çalışan bir yangın ve duman tespit sistemi geliştirdim. Sürece OpenCV ile görüntü işleme temellerini atarak başladım, YOLOv5 prototiplerinin ardından performans farkını görünce YOLOv8 mimarisine geçiş yaptım. Kısıtlı VRAM kapasitesine sahip tüketici sınıfı donanımlarda model eğitimini başarılı bir şekilde optimize ettim.',
    stack: ['Python', 'YOLOv8', 'YOLOv5', 'OpenCV', 'Roboflow', 'Google Colab', 'NVIDIA CUDA'],
    highlights: [
      { label: 'En yüksek güven skoru', value: '~%90' },
      { label: 'Operasyonel güven aralığı', value: '%65 - %80' },
      { label: 'Maksimum eğitim süresi', value: '12+ saat / koşu' },
      { label: 'Donanım', value: 'RTX 3060 (%99 kullanım)' },
    ],
    problem:
      'AFAC Tech firmasının endüstriyel alanlar ve depolar için, yüksek işlem gücüne sahip GPU\'ların bulunmadığı ortamlarda çalışabilecek maliyet etkin bir çözüme ihtiyacı vardı. Gerçek zamanlı derin öğrenme modelleri genelde uç cihazlarda (edge computing) yüksek hesaplama gücü gerektirdiği için buradaki asıl mühendislik problemi, doğruluk oranı ile donanım kısıtları arasındaki dengeyi kurmaktı.',
    approach: [
      'Derin öğrenme modellerine geçmeden önce veri setini doğru anlamak adına OpenCV ile temel görüntü işleme algoritmalarını (gri tonlama, bulanıklaştırma, kenar tespiti, erozyon/genişletme, kontürler) uyguladım.',
      'İlk yangın prototipini YOLOv5 ile ayağa kaldırdım. Hız ve doğruluk limitlerine takılınca YOLOv8 ile benchmark testleri yapıp mimariyi daha performanslı olan sürüme güncelledim.',
      'Modele duman tespiti yeteneğini ikinci bir sınıf olarak ekledim. Yangın ve duman sınıfları arasındaki veri dengesizliğini, modelin öğrenme dağılımını bozmayacak stratejik veri artırımı (data augmentation) teknikleriyle çözdüm.',
      'Sistemi sadece bir ekrandan ibaret bırakmamak için, belirlenen güven eşiği aşıldığında tespit edilen kareyi anında e-posta (Gmail) ile ileten bir uyarı mekanizması entegre ettim.',
      'Eğitimlere ücretsiz olduğu için Google Colab üzerinde başladım. Kota sınırlarına takılınca süreci yerel donanımıma (RTX 3060) taşıdım; bunun için Linux/Colab odaklı betikleri Windows ortamına ve lokal CUDA mimarisine uyarladım.',
      '6 GB VRAM üzerinde aşırı öğrenmeyi (overfitting) engellemek için parametreleri sürekli optimize ederek, %99 GPU kullanımıyla 16 saate varan eğitim süreçleri yürüttüm.',
    ],
    outcome: [
      'Canlı kamera akışları üzerinden sorunsuz çalışan, gerçek zamanlı bir tespit modeli.',
      'Sadece geliştirme ortamında kalan bir model değil; tespit anında e-posta atabilen, insansız izlemeye (unattended monitoring) hazır uçtan uca bir sistem.',
      'Yangın tespitinde %90\'a varan güven (confidence) skoru; çevresel koşullara bağlı olarak günlük senaryolarda %65-80 arası stabil çalışma performansı.',
      'Özel çıkarım (inference) donanımı gerektirmeyen, küçük ve orta ölçekli endüstriyel alanlar için ideal, hafif ve optimize edilmiş bir mimari.',
    ],
    challenges: [
      'Roboflow üzerinden alınan duman veri setinin kısıtlı çeşitliliği; veri artırımı uygularken modelin doğruluğunu kaybetmemesi için sınırları çok iyi ayarlamak gerekti.',
      'Colab GPU kotasının proje ortasında dolmasıyla birlikte, hazır bir CUDA ortamı olmadan tüm yapılandırmayı yerel makineye taşımak zorunda kalmam.',
      'Sınırlı kapasiteye sahip (6 GB VRAM) tüketici sınıfı bir GPU ile çalışmanın, batch size ve model parametrelerinde sürekli bir bütçe/performans optimizasyonu gerektirmesi.',
      'Erken durdurma (early stopping) mekanizması olmadan koşulan 12-16 saatlik eğitimlerde, yanlış bir hiperparametre seçiminin koca bir günü çöpe atma riski taşıması.',
      'Kapsam ve zaman yönetimi açısından kendi veri setimi sıfırdan toplamak yerine, açık kaynaklı Roboflow veri setlerini temizleyerek kullanmanın daha akılcı bir mühendislik kararı olduğunu fark etmem.',
    ],
    gallery: [
      {
        src: '/fire-detection-matches.webp',
        alt: 'Temiz yangın sahnesinde 0.89 güvenle yangın tespiti',
        caption: 'Temiz bir sahnede güçlü yangın tespiti (Güven skoru: 0.89).',
      },
      {
        src: '/fire-detection-factory.webp',
        alt: 'Fabrika CCTV görüntüsünde 0.79 güvenle gerçek dünya yangın tespiti',
        caption: 'Danışmanım tarafından sağlanan fabrika güvenlik kamerası testi (Güven skoru: 0.79).',
      },
      {
        src: '/fire-detection-smoke.webp',
        alt: 'Egzoz sahnesinde duman tespiti, çift sınıf yeteneği',
        caption: 'Araç egzozu görüntüsü üzerinde duman sınıfı tespiti.',
      },
      {
        src: '/fire-detection-alert.webp',
        alt: 'Duman tespitinde yakalanan kareyle Gmail uyarısı',
        caption: 'Duman tespit edildiğinde yakalanan kareyle birlikte otomatik gönderilen e-posta uyarısı.',
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
    role: 'Yapay Zeka Araştırma Stajyeri',
    timeline: 'Haz 2025 - Ağu 2025',
    summary:
      'Qwen2.5 dil modelini, LoRA kullanarak bir müşteri destek asistanı olarak fine-tune ettim. Geliştirme sürecini tamamen tüketici sınıfı yerel donanımda gerçekleştirirken, modelin test edilebilmesi için sisteme bir Gradio arayüzü entegre ettim.',
    stack: ['Python', 'PyTorch', 'Qwen2.5', 'LoRA', 'bitsandbytes', 'Gradio', 'Hugging Face'],
    highlights: [
      { label: 'Temel model', value: 'Qwen2.5-1.5B-Instruct' },
      { label: 'Optimizasyon yöntemi', value: 'LoRA (r=64, alpha=16)' },
      { label: 'Niceleme (Quantization)', value: '4-bit + FP16 (bitsandbytes)' },
      { label: 'Veri seti', value: 'Bitext (8.175 örnek)' },
    ],
    problem:
      'AGU\'daki araştırma projesi kapsamında, bulut tabanlı ücretli API\'lere bağımlı olmayan, tamamen yerelde çalışabilecek müşteri destek tarzı bir LLM yapısına ihtiyaç vardı. En büyük zorluk, modern bir yapay zeka modelinin yanıt kalitesini bozmadan, eğitim ve çıkarım (inference) süreçlerini yaklaşık 6 GB VRAM kısıtlaması altında stabil tutmaktı.',
    approach: [
      'Eğitim, çıkarım ve model birleştirme süreçlerini yapılandırdım. Başlangıçta CPU darboğazına sebep olan Windows üzerindeki bitsandbytes uyumsuzluklarını gidererek ortamı hazırladım.',
      'Manuel etiketlenmiş yetersiz veri setini bırakıp Kaggle\'daki kapsamlı Bitext CSV veri setine geçtim. Hatalı UTF-8 karakterlerini, eksik asistan yanıtlarını ve düzensiz sütunları onaran bir veri dönüştürme betiği yazdım.',
      'Modelin kısıtlı VRAM\'e sığması için 4-bit niceleme, gradyan biriktirme (gradient accumulation) ve dikkatli öğrenme oranlarıyla (LR) birlikte FP16/FP32 geri dönüş stratejilerini kullanarak LoRA eğitimi gerçekleştirdim.',
      'Günler sürecek eğitimlerde hatalı parametrelerin zaman kaybına yol açmaması için, uzun koşulardan önce hata ayıklama amaçlı kısa testler uyguladım.',
      'Eğitim süreciyle GPU kaynaklarının çakışmasını önlemek adına, oluşturduğum Gradio test arayüzünü varsayılan olarak CPU üzerinde çalışacak şekilde ayarladım.',
    ],
    outcome: [
      'Dışa bağımlı olmayan, tamamen yerel donanımda çalışan ve müşteri destek senaryolarına özel olarak eğitilmiş (fine-tune) bir Qwen2.5 modeli.',
      'Gürültülü ve düzensiz veri setlerini (CSV), model eğitimine uygun temiz JSONL formatına çeviren, yeniden kullanılabilir veri hazırlama hattı.',
      'Eğitim süreçleri ile arayüz demolarının donanımı kilitlemeden yan yana yürütülebilmesini sağlayan CPU odaklı Gradio tasarımı.',
      'Uzun eğitim maliyetlerinden kaçınmak için geliştirilmiş hızlı doğrulama (fail-fast) pratikliği.',
    ],
    challenges: [
      '6 GB VRAM kısıtı nedeniyle Qwen2.5 modelini 4-bit quantize etme ve donanım sınırlarında gezen agresif batch boyutları seçme zorunluluğu.',
      'Windows ortamında bitsandbytes kütüphanesinin derleme sorunları sebebiyle başlangıçta yalnızca CPU üzerinde çalışması ve bu uyumsuzlukların giderilmesi süreci.',
      'Kamuya açık Bitext veri setindeki karakter kodlama (BOM) hataları ve tutarsız sütunların standart CSV okuma işlemlerini bozması.',
      'Uzun eğitim koşularında 4-bit tabanlı modelin sapmasını (divergence) önlemek için dikkatli bir öğrenme oranı planlaması yapma gereksinimi.',
      'Gradio arayüzü ve model eğitiminin aynı anda GPU\'ya yüklenmesi sonucu oluşan kaynak çakışmalarının, arayüzün CPU\'ya izole edilmesiyle çözülmesi.',
      'Sınırlı zaman diliminde kapsamlı bir modeli eğitebilmek için özel veri seti oluşturmak yerine herkese açık (public) veri setlerini tercih etme kararı.',
    ],
    gallery: [
      {
        src: '/qwen-chatbot-ui.webp',
        alt: 'Müşteri destek sohbet botu için Gradio arayüzü',
        caption: 'Birleştirilmiş LoRA adaptörüyle çalışan Gradio arayüzü.',
      },
      {
        src: '/qwen-chatbot-training.webp',
        alt: 'Qwen2.5 LoRA eğitim çıktısı',
        caption: 'Qwen2.5-1.5B-Instruct üzerinde LoRA eğitimi (r=64, alpha=16, 4-bit ve FP16).',
      },
    ],
    links: [{ label: 'YouTube sunumu', href: 'https://youtu.be/12e_yhELeQ4', external: true }],
  },
  {
    title: 'miRKeggGSM',
    slug: 'mirkegggsm',
    role: 'Öğrenci Araştırmacı - Bitirme Projesi',
    timeline: 'Eyl 2024 - Oca 2025',
    summary:
      'Biyoinformatik alanındaki bir bitirme projesine araştırmacı olarak katkı sağladım. miRNA ifade verileri ile KEGG yol (pathway) yapılarını harmanlayarak kanser sınıflandırması yapan bir makine öğrenmesi veri hattı (pipeline) geliştirdik. Danışmanlar: Prof. Dr. Burcu Bakır Güngör ve Prof. Dr. Malik Yousef.',
    stack: ['Python', 'R', 'KNIME', 'Random Forest', 'scikit-learn'],
    highlights: [
      { label: 'Kanser veri setleri', value: '12 (GEO)' },
      { label: 'Sınıflandırma yöntemi', value: 'Random Forest' },
      { label: 'En iyi AUC skoru', value: '>0.99' },
      { label: 'Çerçeve', value: 'G-S-M (KEGG yolları)' },
    ],
    problem:
      'miRNA verileri genellikle çok yüksek boyutlu ve gürültülüdür. Çoğu sınıflandırma algoritması miRNA\'lar, genler ve biyolojik yollar (pathways) arasındaki ilişkiyi göz ardı ettiği için, ortaya çıkan modellerin biyolojik olarak yorumlanması ve güvenilirliği düşük kalmaktadır.',
    approach: [
      'Farklı kanser türlerini barındıran 12 ayrı miRNA veri setini GEO (Gene Expression Omnibus) platformundan indirip veri ön işlemeden geçiren Python betikleri yazdım.',
      'G-S-M (Gruplama, Puanlama, Modelleme) iş akışının uçtan uca hatasız çalışabilmesi için mevcut KNIME düğümlerindeki yapısal hataları (bug) onardım.',
      'Performans değerlendirme aşamasını 12 veri setinin tamamında çalıştırarak algoritmaların metriklerini raporladım.',
      'Uygulanan yöntemleri, elde edilen sonuçları ve biyolojik çıkarımları detaylandıran akademik bitirme raporunu kaleme aldım.',
    ],
    outcome: [
      'Akciğer, meme, mide, özofagus gibi farklı kanser türlerini içeren 12 veri setinde sorunsuz çalışan stabil bir veri hattı.',
      'Birden fazla veri setinde 0.99\'un üzerinde başarılı AUC skoru ve %96\'lara varan sınıflandırma doğruluğu.',
      'KEGG tabanlı hastalık gruplaması sayesinde, model performansından ödün vermeden yüzlerce özelliği 10\'dan az miRNA\'ya indirgeme başarısı.',
    ],
    challenges: [
      'Devraldığım KNIME iş akışındaki hatalı düğümler nedeniyle, asıl analizlere başlamadan önce ciddi bir hata ayıklama (debugging) sürecinin gerekmesi.',
      'GEO platformundaki verilerin tutarsız formatlara sahip olması sebebiyle, veri setlerine özel dönüştürme (parsing) betikleri yazma zorunluluğu.',
      'Çalışılan veri setlerinin hacmi nedeniyle KNIME analizlerinin donanımı zorlaması ve bazı modellerin eğitiminin tam gün sürmesi.',
    ],
    gallery: [
      {
        src: '/mirkegggsm-architecture.webp',
        alt: 'miRKeggGSM G-S-M boru hattı mimarisi',
        caption: 'G-S-M mimarisi: Gruplama, puanlama ve modelleme aşamaları.',
      },
      {
        src: '/mirkegggsm-workflow.webp',
        alt: 'G-S-M boru hattını uygulayan KNIME iş akışı',
        caption: 'G-S-M veri hattını çalıştıran KNIME iş akışı (workflow).',
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
    role: 'Öğrenci Geliştirici · Grup Projesi',
    timeline: '2023 (Abdullah Gül Üniversitesi)',
    summary:
      'Firebase oturum yönetimi içeren, 43 yerleşik görüntü filtresine sahip ve Cutout Pro API ile yapay zeka destekli (arka plan kaldırma, renklendirme, kalite artırma) özellikler sunan bir Flutter Android fotoğraf düzenleme uygulaması.',
    stack: ['Flutter', 'Dart', 'Firebase', 'Cutout Pro API'],
    highlights: [
      { label: 'Filtreler', value: '43 Çeşit' },
      { label: 'Kimlik doğrulama', value: 'Firebase Authentication' },
      { label: 'Yapay zeka özellikleri', value: 'Cutout Pro API' },
      { label: 'Platform', value: 'Android (Flutter)' },
    ],
    problem:
      'Üniversite dersi kapsamında takım olarak, gerçek bir kimlik doğrulama altyapısına, galeri/kamera erişimine ve çeşitli yapay zeka entegrasyonlarına sahip stabil bir mobil fotoğraf düzenleyici teslim etmemiz gerekiyordu. Ekibin Flutter teknolojisini henüz öğrenme aşamasında olması, proje takvimini zorlaştıran ana unsurdu.',
    approach: [
      'Kullanıcı kayıt, giriş ve çıkış işlemlerini hata yönetimiyle (error handling) birlikte sunabilmek için Firebase Authentication altyapısını projeye entegre ettim.',
      'Kullanıcıların düzenleme akışına hem cihaz galerisinden görsel seçerek hem de doğrudan kamera ile fotoğraf çekerek başlayabilmesini sağlayan bir modül tasarladım.',
      'Uygulama içine, düzenlenen fotoğrafları cihaza geri kaydedebilen 43 farklı lokal filtre ön ayarı ekledim.',
      'Arka plan kaldırma, yüz tanıma, siyah-beyaz renklendirme ve 11 farklı stilde karikatürleştirme işlemleri için Cutout Pro API entegrasyonunu tamamladım.',
      'Üçüncü parti API sonuçlarını ana akışa dahil etmeden önce izole edebilmek adına, öncesi/sonrası kıyaslaması yapan bir test ve doğrulama ekranı geliştirdim.',
    ],
    outcome: [
      'Kayıt ol, fotoğraf seç, düzenle ve cihaza kaydet adımlarını eksiksiz tamamlayan uçtan uca bir Android uygulama deneyimi.',
      '43 lokal filtrenin yanı sıra ürünleştirilmiş dört farklı yapay zeka özelliği: arka plan kaldırma, renk düzeltme, kalite iyileştirme ve karikatür selfie.',
      'Kapsamlı hata yönetiminin sağlandığı stabil bir kimlik doğrulama akışı.',
    ],
    challenges: [
      'Cutout Pro API kullanımının ücretli olması sebebiyle, geliştirme ve test aşamasında maliyeti düşük tutmak için API çağrılarını dikkatli bir şekilde yönetme zorunluluğu.',
      'Ağır bir State Management (Durum Yönetimi) kütüphanesi kullanmadan, filtrelerin ve API sonuçlarının ekranda anlık güncellenmesini sağlayan karmaşık bir widget yapısı kurmak.',
      'Galeri, kamera ve özellik modüllerinin farklı React/Flutter rotalarında olması sebebiyle, kullanıcı deneyimini bozmadan ekranlar arası veri aktarımını sağlamak.',
    ],
    gallery: [
      {
        src: '/pixie-welcome.webp',
        alt: 'Pixie karşılama ekranı, Galeri ve Kamera düğmeleri',
        caption: 'Karşılama ekranı: Galeri ve kamera olmak üzere iki ana giriş noktası.',
      },
      {
        src: '/pixie-editing.webp',
        alt: 'Altta Cutout Pro araç çubuğu olan Pixie düzenleme sayfası',
        caption: 'Cutout Pro entegrasyonlu düzenleme araç çubuğu.',
      },
      {
        src: '/pixie-colorizer.webp',
        alt: 'Siyah beyaz ve renklendirilmiş foto yan yana',
        caption: 'Yapay zeka ile siyah beyaz görsellerin renklendirilmesi.',
      },
      {
        src: '/pixie-gallery.webp',
        alt: 'Dizin tarayıcısı açık Pixie galeri seçici',
        caption: 'Klasör yapısını destekleyen cihaz galeri yöneticisi.',
      },
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/TalhaKarakoyunlu/Pixie', external: true }],
  },
  {
    title: 'Musing',
    slug: 'music-app', // URL için kasıtlı slug: `music-app`; arayüzdeki ürün adı: "Musing".
    role: 'Öğrenci Geliştirici · Grup Projesi',
    timeline: 'Haz 2023 (Abdullah Gül Üniversitesi)',
    summary:
      'Spotify altyapısıyla desteklenen bir full-stack web müzik uygulaması. Kullanıcıların Spotify hesaplarıyla giriş yaparak sanatçı ve parçalara göz atabildiği, çalma listelerini yönetip 6 farklı içerik türünde arama yapabildiği, özel arayüze sahip bir platform.',
    stack: ['HTML', 'CSS', 'Bootstrap 5', 'JavaScript', 'Node.js', 'Express.js', 'EJS', 'Spotify API'],
    highlights: [
      { label: 'Ekip boyutu', value: '3 kişi' },
      { label: 'Kimlik doğrulama', value: 'Spotify OAuth 2.0' },
      { label: 'Arama kapsamı', value: '6 farklı içerik türü' },
      { label: 'Mimari', value: 'Server-side rendering (EJS)' },
    ],
    problem:
      'Ders kapsamında uçtan uca çalışabilen bir full-stack web uygulaması tasarlamamız istendi. Tercihimizi özel bir Spotify arayüzü geliştirmekten yana kullandık; bu durum OAuth 2.0 güvenlik standartlarını, modern bir framework olmadan sunucu tarafı sayfa oluşturmayı (SSR) ve gerçek zamanlı bir API entegrasyonunu kısıtlı bir sürede tamamlamayı gerektiriyordu.',
    approach: [
      'Dokümantasyonları detaylıca inceleyerek, JavaScript ekosisteminde daha net örneklere ve desteklenen uç noktalara (endpoints) sahip olması nedeniyle YouTube Music yerine Spotify API\'sini tercih ettik.',
      'Tüm yetkilendirme süreçlerini (OAuth akışı, token değişimi, profil ve çalma listesi verilerine erişim) Node.js ve Express.js kullanarak sunucu tarafında yönettik.',
      'Koyu mor renklerin hakim olduğu özel CSS tasarımını, Bootstrap 5 bileşenleri ve EJS şablon motoruyla entegre ettik. Performansı artırmak ve yükleme sürelerini 3 saniyenin altında tutmak için gereksiz API isteklerini filtreledik.',
      'Platforma parça, sanatçı, albüm, podcast, bölüm ve sesli kitap olmak üzere 6 farklı Spotify arama opsiyonu ekledik. Ek olarak favoriler ve önerilerden oluşan bir ana akış (feed) tasarladık.',
      'Bootstrap ızgara (grid) sistemini kullanarak uygulamanın hem masaüstü hem de mobil cihazlarda duyarlı (responsive) çalışmasını sağladık.',
    ],
    outcome: [
      'Kullanıcı profili yönetimi, açık/gizli oynatma listesi senkronizasyonu ve oynatma kontrollerini içeren stabil bir web platformu.',
      'Farklı ekran boyutlarında bozulmadan çalışan, tutarlı ve özel bir kullanıcı arayüzü.',
      'Spotify API\'sinin kısıtlamalarından kaynaklanan durumları (örneğin tam oynatma özelliği için Premium hesap zorunluluğu) analiz edip proje dokümantasyonuna ekleme.',
    ],
    challenges: [
      'Hazır bir kimlik doğrulama kütüphanesi (Passport.js vb.) kullanmadan, Express.js üzerinde güvenli bir OAuth token yenileme ve yeniden yetkilendirme altyapısı kurmak.',
      'Modern bir JavaScript çerçevesi (React/Vue) olmadan, yalnızca EJS şablonları üzerinden durumlu (stateful) sayfaları ve rota yönetimini planlamak.',
      'Tek bir kullanıcı görünümünü oluşturmak için eşzamanlı olarak birden fazla Spotify uç noktasına istek atarken, uygulamanın yükleme hızını makul seviyelerde tutmak.',
    ],
    gallery: [
      {
        src: '/musing-home.webp',
        alt: 'Musing ana sayfa, favori sanatçılar ve ruh hali çipleri',
        caption: 'Favori sanatçılar ve keşfetme modülleriyle kişiselleştirilmiş ana akış.',
      },
      {
        src: '/musing-playlists.webp',
        alt: 'Kullanıcı çalma listesi kartlarının olduğu Musing sayfası',
        caption: 'Kullanıcının Spotify çalma listeleri ve detayları.',
      },
      {
        src: '/musing-profile.webp',
        alt: 'Takip edilen sanatçıların olduğu Musing profil sayfası',
        caption: 'Profil görünümü, hesap bilgileri ve takip edilen sanatçılar.',
      },
      {
        src: '/musing-search.webp',
        alt: 'Sanatçı sonuçlarının olduğu Musing arama sayfası',
        caption: 'Spotify veritabanında 6 farklı filtre ile arama sonuçları.',
      },
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/TalhaKarakoyunlu/Music-App', external: true }],
  },
  {
    title: 'Sohbet Uygulaması',
    slug: 'chat-app',
    summary: 'İstemci tarafında Flutter kullanılarak geliştirilen; mesajların ağ üzerinde AES-256 ile şifrelendiği ve MySQL veritabanında güvenli bir şekilde yedeklendiği gerçek zamanlı bir sohbet uygulaması.',
    stack: ['Flutter', 'MySQL', 'AES-256'],
    highlights: [
      { label: 'Canlı iletişim', value: 'Gerçek zamanlı mesajlaşma' },
      { label: 'Veri güvenliği', value: 'AES-256 Şifreleme' },
      { label: 'Kalıcı depolama', value: 'MySQL Altyapısı' },
      { label: 'İstemci', value: 'Flutter Mobil Uygulama' },
    ],
    problem:
      'Kullanıcılara düşük gecikmeli (low-latency) anlık bir mesajlaşma hissi sunarken, aynı zamanda veri gizliliğini ihlal etmeyecek ve sohbet geçmişini sunucuda güvenli bir şekilde barındıracak bir mimari inşa etmek.',
    approach: [
      'Veri gönderim ve alım akışlarının stabil çalışmasına odaklanan temiz bir Flutter istemcisi (client) tasarladım.',
      'Ağ üzerinden aktarılan her mesaj yükünü (payload) AES-256 standardıyla şifreleyerek veri güvenliğini sağladım.',
      'Sohbet geçmişinin kalıcı ve güvenilir bir şekilde saklanması için arka planda MySQL veritabanı entegrasyonu gerçekleştirdim.',
    ],
    outcome: [
      'Mesajların uçtan uca şifrelendiği ve neredeyse anlık olarak iletildiği güvenli bir sohbet altyapısı.',
      'Farklı oturumlar veya cihaz kapatıp açmaları sonrasında bile kaybolmayan tutarlı bir konuşma geçmişi.',
    ],
    challenges: [
      'Her mesajın anlık olarak şifrelenip çözülmesi işleminin donanıma bindirdiği işlem yükünü (overhead), kullanıcının hissedeceği gecikme süresinin altında tutmak.',
      'Mobil cihazın arayüzündeki yerel durum (state) ile MySQL veritabanında saklanan konuşma geçmişini birbirine eksiksiz senkronize etmek.',
    ],
    gallery: [
      {
        src: '/project-placeholder-3.svg',
        alt: 'Sohbet uygulaması konuşma yer tutucusu',
        caption: 'Konuşma ekranı düzeni (Yer tutucu görsel).',
      },
      {
        src: '/project-placeholder-1.svg',
        alt: 'Sohbet uygulaması güvenlik yer tutucusu',
        caption: 'Şifreleme durumunu gösteren güvenlik katmanı (Yer tutucu görsel).',
      },
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/TalhaKarakoyunlu/Chat-App', external: true }],
  },
];