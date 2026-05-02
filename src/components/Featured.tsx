export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/c8385b83-1b8b-4997-a10f-6700f78bc6ed/files/30a9b2a7-e280-4b86-8dff-4213bae68ba2.jpg"
          alt="Флорист собирает букет"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Каждый букет — это эмоция</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Свежие цветы и яркие шары для дней рождения, свадеб, корпоративов и просто так. Собираем букеты вручную с любовью к каждой детали.
        </p>
        <div className="flex flex-col gap-4 mb-8 text-neutral-700">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-black rounded-full shrink-0" />
            <span>Доставка за 2 часа по городу</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-black rounded-full shrink-0" />
            <span>Только свежие цветы — поставки каждый день</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-black rounded-full shrink-0" />
            <span>Индивидуальное оформление под ваш повод</span>
          </div>
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Смотреть каталог
        </button>
      </div>
    </div>
  );
}