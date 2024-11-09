import Image from "next/image";

const menuItems = [
  { name: "Falafel Bowl", image: "/images/falafelBowl.jpg" },
  { name: "Falafel Bowl 2", image: "/images/falafelBowl2.jpg" },
  { name: "Food Assortment", image: "/images/foodAssortment.jpg" },
  { name: "Gyro", image: "/images/gyro.jpg" },
  { name: "Gyro 2", image: "/images/gyro2.jpg" },
  { name: "Hummus", image: "/images/hummus.jpg" },
  { name: "Orzo", image: "/images/orzo.jpg" },
  { name: "Rice", image: "images/rice.jpg" },
  { name: "Salad", image: "/images/salad.jpg" },
  { name: "Sandwich", image: "/images/sandwitch.jpg" },
  { name: "Shawarma", image: "/images/shawerma.png" },
  { name: "Tabouleh", image: "/images/tabouleh.jpg" },
];

export default function MenuGrid() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-customRed text-3xl font-bold text-center mb-12">
        Our Menu
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item) => (
          <div key={item.name} className="flex flex-col items-center">
            <div className="relative w-full aspect-square mb-4">
              <Image
                src={item.image}
                alt={item.name}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-center">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
