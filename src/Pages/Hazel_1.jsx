
  
    import React from 'react'
import Header_Transparent_At_Top_1 from '../components/Header_transparent_at_top_1.jsx'    
    export default function Hazel_1() {
      return (
        <div>
          
          
        <Header_Transparent_At_Top_1 />
    <section id="hero" className="relative py-10 overflow-hidden">
  <div className="absolute inset-0 -z-10">
    <img
      src="https://i.ibb.co/8LNcKfLL/about-hazelnuts-hero-dsk-0.jpg"
      alt=""
      className="w-full h-full object-cover object-center "   
    />
    <div className="absolute inset-0 bg-amber-900/10 md:bg-amber-900/20" />
  </div>

  <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center px-4">
    <div className="px-4 sm:px-8 md:px-12 lg:px-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-amber-800 mb-6 leading-tight">
        Taptaze &amp; Doğal Fındık,<br />Doğrudan Bahçeden Sofranıza
      </h1>
      <p className="text-lg mb-8 max-w-prose">
        Karadeniz’in verimli topraklarında yetişen fındıklarımızı hiçbir aracı
        olmadan size ulaştırıyoruz. %100 doğal, katkısız ve aroması zirvede.
      </p>
      <a
        href="#urun"
        className="inline-block bg-amber-700 hover:bg-amber-800 text-white
                   font-semibold py-3 px-8 rounded-2xl shadow-lg transition"
      >
        Hemen İncele
      </a>
    </div>

    <div className="px-4 sm:px-8 md:px-12 lg:px-16">
      <img
        src="https://i.ibb.co/p6DPrhwg/hearth-of-ferrero-intro-image-1.png"
        alt="Fındık"
        className="w-full"
      />
    </div>
  </div>
</section>


    <section id="urun" class="container mx-auto py-24 px-4">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <img src="https://placehold.co/500x500?text=Ürün+Foto" alt="Doğal Kavrulmuş Fındık" class="rounded-3xl shadow-md" />
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
            Doğal Kavrulmuş Fındık
          </h2>
          <p class="mb-6 max-w-prose">
            Tek ürün. Tek içerik. Karadeniz’in altın değerindeki fındıkları düşük ısıda özenle kavruldu ve vakumlu paketlere girdi. Yüksek protein, sağlıklı yağ ve eşsiz lezzet.
          </p>

          <form class="mb-8" id="addToCartForm">
            <label for="weight" class="block font-medium mb-2">Gramaj Seçimi</label>
            <select id="weight" name="weight" class="w-full border rounded-lg p-3 mb-4">
              <option value="250">250 g – 149 ₺</option>
              <option value="500" selected>500 g – 279 ₺</option>
              <option value="1000">1000 g – 529 ₺</option>
            </select>

            <button type="submit" class="w-full bg-amber-700 hover:bg-amber-800 text-white font-semibold py-3 px-6 rounded-xl transition shadow-lg">
              Sepete Ekle
            </button>
          </form>

          <ul class="space-y-3 text-sm">
            <li class="flex items-start gap-2"><span class="text-amber-700 font-bold">•</span> Tek kaynaklı, tek hasat</li>
            <li class="flex items-start gap-2"><span class="text-amber-700 font-bold">•</span> Katkısız, koruyucusuz</li>
            <li class="flex items-start gap-2"><span class="text-amber-700 font-bold">•</span> El değmeden paketleme</li>
            <li class="flex items-start gap-2"><span class="text-amber-700 font-bold">•</span> Vegan &amp; Glutensiz</li>
            <li class="flex items-start gap-2"><span class="text-amber-700 font-bold">•</span> FSC sertifikalı ambalaj</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="hikaye" class="bg-white py-20">
      <div class="container mx-auto px-4 text-center max-w-3xl">
        <h2 class="text-3xl md:text-4xl font-bold text-amber-800 mb-6">Bahçeden Bardağa — Hikayemiz</h2>
        <p class="leading-relaxed">
          Dedemizin 1950’lerde Ordu’daki ilk fındık bahçesiyle başlayan yolculuğumuz, bugün sürdürülebilir tarım ve doğa dostu süreçlerle devam ediyor.
          Her çekirdek; aile geleneğimiz, toprağa saygımız ve lezzet tutkumuzun nişanesidir.
        </p>
      </div>
    </section>

    <section id="tarif" class="container mx-auto py-24 px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-amber-800 mb-12">Fındıklı Tarif İlhamı</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-3xl shadow-lg hover:-translate-y-1 transition">
          <img src="https://placehold.co/400x250?text=Fındıklı+Granola" alt="Fındıklı Granola" class="rounded-xl mb-4" />
          <h3 class="font-semibold mb-2">Enerji Dolu Fındıklı Granola</h3>
          <p class="text-sm text-stone-600">Bal, yulaf ve kavrulmuş fındıkla 20 dakikada.</p>
        </div>
        <div class="bg-white p-6 rounded-3xl shadow-lg hover:-translate-y-1 transition">
          <img src="https://placehold.co/400x250?text=Fındık+Ezmesi" alt="Fındık Ezmesi" class="rounded-xl mb-4" />
          <h3 class="font-semibold mb-2">%100 Fındık Ezmesi</h3>
          <p class="text-sm text-stone-600">Tek malzemeyle kremsi lezzet – kahvaltıya özel.</p>
        </div>
        <div class="bg-white p-6 rounded-3xl shadow-lg hover:-translate-y-1 transition">
          <img src="https://placehold.co/400x250?text=Fındıklı+Brownie" alt="Fındıklı Brownie" class="rounded-xl mb-4" />
          <h3 class="font-semibold mb-2">Bol Fındıklı Brownie</h3>
          <p class="text-sm text-stone-600">Yoğun kakao ve çıtır fındık taneleriyle.</p>
        </div>
      </div>
    </section>

    <section id="sorular" class="bg-stone-100 py-20">
      <div class="container mx-auto px-4 max-w-4xl">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-amber-800 mb-12">Sıkça Sorulan Sorular</h2>
        <div class="space-y-4" id="faqList">
          <details class="group bg-white rounded-xl p-5 shadow">
            <summary class="font-medium cursor-pointer flex justify-between items-center">
              Kargolama süresi ne kadar?
              <span class="ml-2 group-open:rotate-180 transition-transform">⮟</span>
            </summary>
            <p class="mt-4 text-sm leading-relaxed text-stone-700">
              Hafta içi saat 15:00’e kadar verilen siparişler aynı gün, diğerleri ertesi iş günü kargoya teslim edilir.
            </p>
          </details>
          <details class="group bg-white rounded-xl p-5 shadow">
            <summary class="font-medium cursor-pointer flex justify-between items-center">
              Fındıklarınız organik mi?
              <span class="ml-2 group-open:rotate-180 transition-transform">⮟</span>
            </summary>
            <p class="mt-4 text-sm leading-relaxed text-stone-700">
              Bahçelerimizde kimyasal tarım ilacı kullanmıyor, doğal kompostla gübreleme yapıyoruz. Ancak resmi organik sertifikasyon süreci halen devam etmektedir.
            </p>
          </details>
          <details class="group bg-white rounded-xl p-5 shadow">
            <summary class="font-medium cursor-pointer flex justify-between items-center">
              Açık fındık alabilir miyim?
              <span class="ml-2 group-open:rotate-180 transition-transform">⮟</span>
            </summary>
            <p class="mt-4 text-sm leading-relaxed text-stone-700">
              Gıda güvenliği için yalnızca vakumlu ve kapalı ambalajda satış yapıyoruz.
            </p>
          </details>
        </div>
      </div>
    </section>

    <section class="container mx-auto py-20 px-4 text-center">
      <div class="bg-amber-100/70 rounded-3xl p-10 md:p-16 shadow-lg">
        <h2 class="text-2xl md:text-3xl font-bold text-amber-800 mb-4">
          Taze Fırsatları Kaçırmayın!
        </h2>
        <p class="mb-6 max-w-xl mx-auto">
          Yeni hasat duyuruları ve indirim kuponları için e‑posta listemize katılın.
        </p>
        <form class="flex flex-col md:flex-row gap-4 md:justify-center max-w-xl mx-auto">
          <input type="email" placeholder="E‑posta adresiniz" class="flex-1 rounded-xl p-3 border" />
          <button type="submit" class="bg-amber-700 hover:bg-amber-800 text-white font-semibold py-3 px-8 rounded-xl shadow">
            Abone Ol
          </button>
        </form>
      </div>
    </section>

    <footer class="bg-amber-800 text-amber-50 py-12">
      <div class="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 class="font-semibold mb-2">Fındık Dünyası</h3>
          <p>© 2025 Fındık Dünyası Ltd. Şti. Tüm hakları saklıdır.</p>
        </div>
        <div>
          <h3 class="font-semibold mb-2">Hızlı Menü</h3>
          <ul class="space-y-1">
            <li><a href="#urun" class="hover:underline">Ürün</a></li>
            <li><a href="#hikaye" class="hover:underline">Hikayemiz</a></li>
            <li><a href="#sorular" class="hover:underline">SSS</a></li>
            <li><a href="#" class="hover:underline">Gizlilik Politikası</a></li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold mb-2">İletişim</h3>
          <p>Ordu / Türkiye</p>
          <p>Telefon: +90 000 000 00 00</p>
          <p>E‑posta: hello@findikdunyasi.com</p>
        </div>
      </div>
    </footer>
</div>
      )
    }
    
