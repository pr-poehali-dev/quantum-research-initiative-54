import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", occasion: "", comment: "" });
  const [sent, setSent] = useState(false);

  const occasions = [
    "День рождения",
    "Свадьба",
    "Юбилей",
    "Корпоратив",
    "Просто так",
    "Другой повод",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="bg-white px-6 py-20 lg:py-32">
      <div className="max-w-2xl mx-auto">
        <h3 className="uppercase text-sm tracking-wide text-neutral-500 mb-4">Оформить заказ</h3>
        <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 leading-tight mb-12">
          Закажите букет<br />или шары
        </h2>

        {sent ? (
          <div className="text-center py-16">
            <p className="text-2xl font-bold text-neutral-900 mb-3">Заявка принята!</p>
            <p className="text-neutral-500">Мы свяжемся с вами в течение 15 минут.</p>
            <button
              onClick={() => { setSent(false); setForm({ name: "", phone: "", occasion: "", comment: "" }); }}
              className="mt-8 bg-black text-white px-6 py-3 uppercase text-sm tracking-wide hover:bg-neutral-800 transition-colors"
            >
              Новый заказ
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="uppercase text-xs tracking-wide text-neutral-500">Ваше имя</label>
              <input
                type="text"
                required
                placeholder="Например, Анна"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="border border-neutral-300 px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="uppercase text-xs tracking-wide text-neutral-500">Телефон</label>
              <input
                type="tel"
                required
                placeholder="+7 (___) ___-__-__"
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
                className="border border-neutral-300 px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="uppercase text-xs tracking-wide text-neutral-500">Повод</label>
              <div className="flex flex-wrap gap-2">
                {occasions.map(o => (
                  <button
                    key={o}
                    type="button"
                    onClick={() => setForm({ ...form, occasion: o })}
                    className={`px-4 py-2 border text-sm transition-all duration-200 ${
                      form.occasion === o
                        ? "bg-black text-white border-black"
                        : "bg-white text-neutral-700 border-neutral-300 hover:border-black"
                    }`}
                  >
                    {o}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="uppercase text-xs tracking-wide text-neutral-500">Пожелания (необязательно)</label>
              <textarea
                rows={3}
                placeholder="Любимые цветы, цвет, бюджет..."
                value={form.comment}
                onChange={e => setForm({ ...form, comment: e.target.value })}
                className="border border-neutral-300 px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white px-8 py-4 uppercase text-sm tracking-wide hover:bg-neutral-800 transition-colors w-full lg:w-fit"
            >
              Отправить заявку
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
