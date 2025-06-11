import React from 'react'

export default function Footer() {
  return (
        <>
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
                    <h3 class="font-semibold mb-2">Demircan Fındık</h3>
                    <p>© 2025 Demircan Fındık Tüm hakları saklıdır.</p>
                    </div>
                    <div>
                    <h3 class="font-semibold mb-2">Hızlı Menü</h3>
                    <ul class="space-y-1">
                        <li><a href="#urun" class="hover:underline">Ürünlerimiz</a></li>
                        <li><a href="#hikaye" class="hover:underline">Hikayemiz</a></li>
                        <li><a href="#sorular" class="hover:underline">SSS</a></li>
                        <li><a href="#" class="hover:underline">Gizlilik Politikası</a></li>
                    </ul>
                    </div>
                    <div>
                    <h3 class="font-semibold mb-2">İletişim</h3>
                    <p>Zonguldak / Türkiye</p>
                    <p>Telefon: +90 000 000 00 00</p>
                    <p>E‑posta: hello@demircanfındık.com</p>
                    </div>
                </div>
                </footer>
        </>
    )
}
