"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Reviews() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.trustmary.com/AOd6PYRj0";
    script.async = true;

    if (widgetRef.current) {
      widgetRef.current.appendChild(script);
    }

    return () => {
      if (widgetRef.current && widgetRef.current.contains(script)) {
        widgetRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <Card className="w-full max-w-4xl mx-auto bg-customGrey dark:bg-black shadow-lg">
      <CardHeader>
        <CardTitle className="text-[36px] font-bold text-amber-800 text-center pt-12">
          What Our Customers Say
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div ref={widgetRef} className="w-full min-h-[400px]" />
        <style jsx global>{`
          /* Remove margin from the Trustmary widget heading */
          #trustmary-widget .tm-title {
            margin: 0 !important;
          }

          /* Remove top padding from .tm-widget container */
          .go3087873059.tm-widget {
            padding-top: 0 !important;
          }

          #trustmary-widget .tm-widget {
            padding-top: 0 !important;
          }

          #trustmary-widget [class^="go"] {
            padding-top: 0 !important;
          }

          /* Additional custom styling for Trustmary widget */
          #trustmary-widget .tm-review {
            background-color: #fffbeb !important; /* bg-amber-50 */
            border: 1px solid #fbbf24 !important; /* border-amber-400 */
            border-radius: 0.5rem !important;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;
          }
        `}</style>
      </CardContent>
    </Card>
  );
}
