"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone } from "lucide-react";

export function Location() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-customRed">Our Location</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-white shadow-lg dark:bg-black">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-customRed">
              Shawarma Delight
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-10">
            <div className="flex items-center space-x-3">
              <MapPin className="text-customRed " size={32} />
              <p>1808 Portage Trail, Cuyahoga Falls, OH, United States, Ohio</p>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="text-customRed" />
              <p>Mon-Sat: 11am-10pm, Sun: 12pm-9pm</p>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="text-customRed" />
              <p>(234) 334-3996</p>
            </div>
            <Button className="bg-customRed hover:bg-customDRed mt-4">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.google.com/maps/dir/?api=1&destination=Shawarma+Brothers+Ohio">
                Get Directions
              </a>
            </Button>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-lg overflow-hidden">
          <CardContent className="p-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2063.9868467207675!2d-81.50615834770322!3d41.14655287652402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883127ed59113679%3A0xf2060c3c16e78aa!2sShawarma%20Brothers!5e0!3m2!1sen!2sus!4v1728091265047!5m2!1sen!2sus"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
