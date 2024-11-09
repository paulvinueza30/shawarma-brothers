"use client";

import { useState, useEffect } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { X } from "lucide-react";

type MessageType = "success" | "error" | "warning" | "info";

interface MessageBoxProps {
  type: MessageType;
  title: string;
  message: string;
  duration?: number;
  onClose?: () => void;
}

export function MessageBox({
  type,
  title,
  message,
  duration = 10000,
  onClose,
}: MessageBoxProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose && onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  const getAlertVariant = (type: MessageType) => {
    switch (type) {
      case "success":
        return "bg-green-50 text-green-900 border-green-200";
      case "error":
        return "bg-red-50 text-red-900 border-red-200";
      case "warning":
        return "bg-amber-50 text-amber-900 border-amber-200";
      case "info":
        return "bg-blue-50 text-blue-900 border-blue-200";
      default:
        return "bg-gray-50 text-gray-900 border-gray-200";
    }
  };

  return (
    <Alert className={`${getAlertVariant(type)} mb-4 relative`}>
      <AlertTitle className="font-semibold">{title}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
      <button
        onClick={() => {
          setIsVisible(false);
          onClose && onClose();
        }}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        <X size={16} />
      </button>
    </Alert>
  );
}
