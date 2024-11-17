import Image from "next/image";

export default function GiftCardPromo() {
  return (
    <div className="bg-customGrey dark:bg-black ">
      <div className="container mx-auto px-[15px] md:px-[60px]">
        <div className="flex flex-col md:flex-row items-center justify-between md:space-x-12">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h2 className="text-customRed text-xl font-semibold mb-2">
              SHAWARMA DELIGHT GIFT CARDS
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-customDRed mb-4">
              THE PERFECT GIFT FOR SHAWARMA LOVERS
            </h3>
            <p className="text-black mb-6">
              Give the gift of delicious, authentic shawarma to your friends and
              family. Our gift cards are perfect for any occasion and can be
              used for dine-in, takeout, or online orders. Available in various
              denominations to suit your needs.
            </p>
          </div>
          <div className="md:w-1/2 relative ">
            <div className="w-full h-[300px] md:h-[400px] relative overflow-hidden rounded-md">
              <Image
                src="/images/gift_card_red.png"
                alt="Shawarma Delight Gift Card"
                layout="intrinsic"
                width={560}
                height={500}
                objectFit="contain"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
