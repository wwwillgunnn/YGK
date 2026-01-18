import Navbar from "@/components/Navbar";

export default function galleryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen flex flex-col bg-[radial-gradient(circle,_#6DB86B,_#305230)]">
      <Navbar />
      <section className="flex-1 flex items-center justify-center px-6">
        {children}
      </section>
    </main>
  );
}
