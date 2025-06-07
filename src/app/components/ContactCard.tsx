"use client";
import { Card } from "@/components/ui/card";

export default function ContactCard() {
  return (
    <Card className="p-6 bg-white shadow-md rounded-xl w-full max-w-sm">
      <h2 className="text-xl font-semibold mb-4">Información de Contacto</h2>
      <ul className="space-y-2 text-gray-700">
        <li>
          📧 <a href="mailto:tucorreo@example.com" className="hover:underline">mfarinardguez@hotmail.com</a>
        </li>
        <li>
          📞 <a href="tel:+34123456789" className="hover:underline">+34 622 843 601</a>
        </li>
        <li>
          💼 <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/mfarinarodriguez/</a>
        </li>
      </ul>
    </Card>
  );
}
