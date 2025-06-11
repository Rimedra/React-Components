import React from 'react'

export default function ProductSection() {
  return (
    <section id="urun" class=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 items-center justify-between py-24">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <img src="https://placehold.co/500x500?text=Ürün+Foto" alt="Doğal Fındık" class="rounded-3xl shadow-md" />
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
            Doğal Fındık
          </h2>
          <p class="mb-6 max-w-prose">
            Tek ürün. Tek içerik. Karadeniz’in altın değerindeki yüksek proteinli, sağlıklı yağlı ve eşsiz lezzetli fındıkları paketlere girdi.
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
            <li class="flex items-start gap-2"><span class="text-amber-700 font-bold">•</span> Vegan &amp; Glutensiz</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
