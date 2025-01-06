export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="p-2 sm:px-4 md:px-4 lg:px-20">{children}</div>
    </div>
  );
}
