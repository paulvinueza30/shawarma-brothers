"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone } from "lucide-react";

export function Location() {
  return (
    <Card className="w-full max-w-4xl mx-auto bg-customGrey dark:bg-black shadow-lg">
      <CardHeader>
        <CardTitle className="text-[36px] font-bold text-customRed text-center pt-12">
          Our Location
        </CardTitle>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 gap-8 pt-0">
        {/* Location Details */}
        <div className="bg-white dark:bg-black p-6 shadow-lg rounded-lg space-y-6">
          <h2 className="text-2xl font-bold text-customRed">
            Shawarma Brothers
          </h2>
          <div className="flex items-center space-x-3">
            <MapPin className="text-customRed" size={32} />
            <p>1808 Portage Trail, Cuyahoga Falls, OH, United States, Ohio</p>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="text-customRed" />
            <p>Tue-Sat: 11am-7:30pm, Mon: Closed, Sun: 12pm-4pm</p>
          </div>

          <div className="flex items-center space-x-2">
            <Phone className="text-customRed" />
            <p>(234) 334-3996</p>
          </div>
          <Button className="bg-customRed hover:bg-customDRed mt-4">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.google.com/maps/dir/?api=1&destination=Shawarma+Brothers+Ohio"
            >
              Get Directions
            </a>
          </Button>
        </div>

        {/* Map Embed */}
        <div className="bg-white dark:bg-black p-6 shadow-lg rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2063.9868467207675!2d-81.50615834770322!3d41.14655287652402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883127ed59113679%3A0xf2060c3c16e78aa!2sShawarma%20Brothers!5e0!3m2!1sen!2sus!4v1728091265047!5m2!1sen!2sus"
            width="100%"
            height="400"
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>
      </CardContent>
    </Card>
  );
}
