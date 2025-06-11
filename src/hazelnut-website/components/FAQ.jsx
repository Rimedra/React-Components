import React from 'react'

export default function FAQ() {
  return (
<section id="sorular" class="bg-stone-100 py-20">
      <div class="mx-auto px-4 max-w-4xl">
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
              Gıda güvenliği için kapalı ambalajda satış yapıyoruz.
            </p>
          </details>
        </div>
      </div>
    </section>
      )
}
