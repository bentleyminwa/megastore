export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex justify-center py-4">
      <p>{currentYear}. All rights reserved Megastore.</p>
    </footer>
  );
}
