import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function GiftCardPromo() {
  return (
    <div className="bg-customGrey dark:bg-black py-16">
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
          <div className="md:w-1/2 relative">
            <div className="w-full h-[300px] md:h-[400px] relative">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Shawarma Delight Gift Card"
                layout="fill"
                objectFit="contain"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32">
              <Image
                src="/placeholder.svg?height=128&width=128"
                alt="Shawarma Wrap"
                layout="fill"
                objectFit="cover"
                className="rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
