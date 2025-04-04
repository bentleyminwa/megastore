import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex-1 flex min-h-screen flex-col">
      <Header />
      <section className="min-h-screen px-20">{children}</section>
      <Footer />
    </main>
  );
}
