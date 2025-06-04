"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const products = [
  {
    name: "Magnetic Press",
    description: "High-performance magnetic press for powder compaction in magnet manufacturing.",
    image: "/images/magnetic-press.jpg",
  },
  {
    name: "Jet Mill",
    description: "Ultra-fine particle size reduction for NdFeB powder preparation.",
    image: "/images/jet-mill.jpg",
  },
  {
    name: "Vacuum Induction Furnace (Strip Cast)",
    description: "Efficient strip casting furnace for rapid solidification of rare earth alloys.",
    image: "/images/strip-cast-furnace.jpg",
  },
  {
    name: "HD Furnace",
    description: "High-temperature sintering furnace with uniform heating and precise control.",
    image: "/images/hd-furnace.jpg",
  },
];

const testimonials = [
  {
    name: "Dr. Liu, R&D Director",
    text: "Magway LLC provided exceptional equipment and support that transformed our magnet production line.",
  },
  {
    name: "Jessica T., Operations Manager",
    text: "Their HD Furnace is by far the most consistent and reliable we've used.",
  },
];

const caseStudies = [
  {
    title: "Improving Efficiency in NdFeB Magnet Production",
    summary: "How a client increased output by 35% after integrating Magway’s Strip Cast Furnace.",
  },
  {
    title: "Precision Particle Size Control with Jet Mill",
    summary: "Achieving consistent fine powder grade using Magway’s Jet Mill system.",
  },
];

export default function Home() {
  return (
    <main className="p-6 space-y-10">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Magway LLC</h1>
        <p className="text-lg text-gray-600">
          Supplying premium magnet manufacturing equipment globally.
        </p>
      </section>

      <Tabs defaultValue="products" className="w-full">
        <TabsList className="flex justify-center gap-4">
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
          <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
          <TabsTrigger value="downloads">Downloads</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>

        <TabsContent value="products">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {products.map((product) => (
              <Card key={product.name}>
                <CardContent className="p-4 space-y-4">
                  <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-xl" />
                  <h2 className="text-xl font-semibold">{product.name}</h2>
                  <p className="text-sm text-gray-600">{product.description}</p>
                  <Button variant="default">Inquire</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="testimonials">
          <div className="mt-6 space-y-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-xl">
                <p className="italic">"{testimonial.text}"</p>
                <p className="text-right font-semibold mt-2">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="case-studies">
          <div className="mt-6 space-y-6">
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-xl border">
                <h3 className="text-lg font-bold">{caseStudy.title}</h3>
                <p className="text-gray-600">{caseStudy.summary}</p>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="downloads">
          <div className="mt-6 space-y-4">
            <h2 className="text-2xl font-bold">Download Brochures</h2>
            <ul className="list-disc list-inside">
              <li><a href="/docs/magnetic-press-brochure.pdf" className="text-blue-600" download>Magnetic Press Brochure</a></li>
              <li><a href="/docs/jet-mill-brochure.pdf" className="text-blue-600" download>Jet Mill Brochure</a></li>
              <li><a href="/docs/strip-cast-brochure.pdf" className="text-blue-600" download>Strip Cast Furnace Brochure</a></li>
              <li><a href="/docs/hd-furnace-brochure.pdf" className="text-blue-600" download>HD Furnace Brochure</a></li>
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="contact">
          <div className="max-w-xl mx-auto mt-6 space-y-6">
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <p>Email: <a href="mailto:kaimagnetics@gmail.com" className="text-blue-500">kaimagnetics@gmail.com</a></p>
            <p>Phone: <a href="tel:+60182549709" className="text-blue-500">+60 18-254 9709</a></p>
            <p>Location: USA</p>

            <form className="space-y-4">
              <div>
                <label className="block font-semibold">Name</label>
                <input type="text" className="w-full border p-2 rounded" placeholder="Your name" />
              </div>
              <div>
                <label className="block font-semibold">Email</label>
                <input type="email" className="w-full border p-2 rounded" placeholder="Your email" />
              </div>
              <div>
                <label className="block font-semibold">Message</label>
                <textarea className="w-full border p-2 rounded" rows="4" placeholder="How can we help you?" />
              </div>
              <Button type="submit">Send Inquiry</Button>
            </form>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}
