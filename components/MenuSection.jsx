import Image from "next/image";

function PriceLine({ label, price }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-gray-600">{label}</span>
      <span className="font-semibold">{price} ر.س</span>
    </div>
  );
}

function Card({ item }) {
  return (
    <div className="rounded-2xl border bg-white shadow-sm overflow-hidden">
      <div className="relative aspect-[4/3] bg-gray-50">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={false}
        />
      </div>

      <div className="p-4 space-y-2">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold">{item.name}</h3>
          {"price" in item && typeof item.price === "number" ? (
            <div className="shrink-0 text-base font-extrabold">{item.price} ر.س</div>
          ) : null}
        </div>

        {item.note ? <p className="text-xs text-gray-500">{item.note}</p> : null}

        {Array.isArray(item.variants) ? (
          <div className="space-y-1 pt-1">
            {item.variants.map((v) => (
              <PriceLine key={v.label} label={v.label} price={v.price} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function MenuSection({ section }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-extrabold">{section.title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {section.items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
