"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import twoPeopleSmiling from "../../public/images/menu/twopeopleSmiling.jpg";

export function About() {
  return (
    <div className="bg-white dark:bg-black py-12">
      {/* Keep the original background and top/bottom padding */}
      <div className="container mx-auto px-4"> {/* Matching the padding from MenuGrid */}
        <h1 className="text-4xl font-bold mb-8 text-customRed">
          About Shawarma Delight
        </h1>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <Card className="bg-white shadow-lg h-full dark:bg-black">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-customRed">
                  Our Story
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Founded in 2010, Shawarma Delight has been serving the most
                  authentic and delicious shawarma in town for over a decade.
                  Our journey began with a simple goal: to bring the rich
                  flavors of Middle Eastern cuisine to our local community.
                </p>
                <p>
                  What started as a small family-owned shop has now grown into a
                  beloved establishment, thanks to our commitment to quality
                  ingredients, traditional recipes, and exceptional customer
                  service.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="relative h-[300px] md:h-auto">
            <Image
              src={twoPeopleSmiling}
              alt="Shawarma preparation"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="mb-12">
          <Card className="bg-white shadow-lg dark:bg-black">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-customRed">
                Our Commitment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">At Shawarma Delight, we're committed to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Using only the freshest, highest-quality ingredients</li>
                <li>Preparing our meats and vegetables daily</li>
                <li>Offering a variety of options for different dietary needs</li>
                <li>Providing a warm and welcoming atmosphere for our guests</li>
                <li>Continuously improving our recipes and service based on customer feedback</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-customRed">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Authentic Recipes",
              "Fresh Ingredients",
              "Fast Service",
              "Family Owned",
            ].map((item, index) => (
              <Badge
                key={index}
                variant="outline"
                className="p-4 text-center text-customRed border-customRed hover:bg-customRed hover:text-white"
              >
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
