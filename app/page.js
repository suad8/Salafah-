import MenuSection from "@/components/MenuSection";
import { menu } from "@/data/menuData";

export const metadata = {
  title: "سلافة | المنيو",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10 space-y-10">
        <header className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-black">منيو سلافة</h1>
          <p className="text-gray-600">اختبار سريع — الصور والأسعار جاهزة.</p>
        </header>

        {menu.map((section) => (
          <MenuSection key={section.id} section={section} />
        ))}
      </div>
    </main>
  );
}
