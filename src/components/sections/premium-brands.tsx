"use client";

const premiumProducts = [
  {
    id: "trail-pacer",
    brand: "UrbanEdgePro",
    name: "Trail Pacer",
    color: "Forest Green",
    price: "559 zł",
    url: "https://fashionhero.aiproductheroes.pl/products/trail-pacer",
    image:
      "https://fashionhero.aiproductheroes.pl/_next/image?url=%2Fimages%2Fproducts%2Fproduct-2.jpg&w=800&q=75",
    position: 1,
  },
  {
    id: "dash-sport",
    brand: "UrbanEdgePro",
    name: "Dash Sport",
    color: "Storm Blue",
    price: "579 zł",
    url: "https://fashionhero.aiproductheroes.pl/products/dash-sport",
    image:
      "https://fashionhero.aiproductheroes.pl/_next/image?url=%2Fimages%2Fproducts%2Fproduct-3.jpg&w=800&q=75",
    position: 2,
  },
  {
    id: "aero-knit",
    brand: "Bella DonnaPro",
    name: "Aero Knit",
    color: "Cloud White",
    price: "519 zł",
    url: "https://fashionhero.aiproductheroes.pl/products/aero-knit",
    image:
      "https://fashionhero.aiproductheroes.pl/_next/image?url=%2Fimages%2Fproducts%2Fproduct-10.jpg&w=800&q=75",
    position: 3,
  },
  {
    id: "ankle-boot-womens",
    brand: "Bella DonnaPro",
    name: "Ankle Boot",
    color: "Black",
    price: "549 zł",
    url: "https://fashionhero.aiproductheroes.pl/products/ankle-boot-womens",
    image:
      "https://fashionhero.aiproductheroes.pl/_next/image?url=%2Fimages%2Fproducts%2Fproduct-13.jpg&w=800&q=75",
    position: 4,
  },
  {
    id: "velocity-runner",
    brand: "SportPeakPro",
    name: "Velocity Runner",
    color: "Volt",
    price: "549 zł",
    url: "https://fashionhero.aiproductheroes.pl/products/velocity-runner",
    image:
      "https://fashionhero.aiproductheroes.pl/_next/image?url=%2Fimages%2Fproducts%2Fproduct-5.jpg&w=800&q=75",
    position: 5,
  },
  {
    id: "wrap-dress",
    brand: "Bella DonnaPro",
    name: "Wrap Dress",
    color: "Navy",
    price: "499 zł",
    url: "https://fashionhero.aiproductheroes.pl/products/wrap-dress",
    image:
      "https://fashionhero.aiproductheroes.pl/_next/image?url=%2Fimages%2Fproducts%2Fproduct-14.jpg&w=800&q=75",
    position: 6,
  },
  {
    id: "lightweight-jacket-mens",
    brand: "UrbanEdgePro",
    name: "Lightweight Jacket",
    color: "Black",
    price: "509 zł",
    url: "https://fashionhero.aiproductheroes.pl/products/lightweight-jacket-mens",
    image:
      "https://fashionhero.aiproductheroes.pl/_next/image?url=%2Fimages%2Fproducts%2Fproduct-4.jpg&w=800&q=75",
    position: 7,
  },
  {
    id: "edge-runner-pro",
    brand: "UrbanEdgePro",
    name: "Edge Runner Pro",
    color: "Cement",
    price: "549 zł",
    url: "https://fashionhero.aiproductheroes.pl/products/edge-runner-pro",
    image:
      "https://fashionhero.aiproductheroes.pl/_next/image?url=%2Fimages%2Fproducts%2Fproduct-6.jpg&w=800&q=75",
    position: 8,
  },
];

type Product = (typeof premiumProducts)[number];

function trackPremiumClick(productId: string, brand: string, position: number) {
  const event = {
    event: "premium_section_click",
    product_id: productId,
    brand,
    position,
    timestamp: new Date().toISOString(),
  };
  console.log("TRACK:", JSON.stringify(event));
}

function CardInner({ product }: { product: Product }) {
  return (
    <>
      <div
        className="relative w-full overflow-hidden mb-3 bg-[#f5f4f2]"
        style={{ aspectRatio: "3 / 4" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <p className="text-[11px] font-medium uppercase tracking-[0.5px] text-warm-gray mb-0.5">
        {product.brand}
      </p>
      <p className="text-[13px] font-medium text-charcoal mb-0.5">
        {product.name} — {product.color}
      </p>
      <p className="text-[13px] text-charcoal">{product.price}</p>
    </>
  );
}

export function PremiumBrands() {
  return (
    <>
      <div className="px-4 md:px-8 lg:px-12">
        <hr className="border-t border-[#e5e5e5]" />
      </div>

      <section className="px-4 md:px-8 lg:px-12 py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[11px] font-medium uppercase tracking-[0.8px] text-warm-gray mb-3">
            PREMIUM BRANDS
          </p>
          <h2 className="text-[40px] font-normal text-charcoal mb-3 leading-tight">
            Marki Premium
          </h2>
          <p className="text-sm text-warm-gray">
            Starannie dobrane marki dla wymagających kupujących.
          </p>
        </div>

        {/* Desktop: 4-column grid */}
        <div className="hidden md:grid md:grid-cols-4 gap-6">
          {premiumProducts.map((product) => (
            <a
              key={product.id}
              href={product.url}
              onClick={() => trackPremiumClick(product.id, product.brand, product.position)}
              className="group block"
            >
              <CardInner product={product} />
            </a>
          ))}
        </div>

        {/* Mobile: horizontal snap scroll */}
        <div
          className="flex md:hidden gap-4 overflow-x-auto pb-4"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {premiumProducts.map((product) => (
            <a
              key={product.id}
              href={product.url}
              onClick={() => trackPremiumClick(product.id, product.brand, product.position)}
              className="group flex-shrink-0 block"
              style={{ width: "80vw", scrollSnapAlign: "start" }}
            >
              <CardInner product={product} />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
