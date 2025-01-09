import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="p-2 ">{children}</div>

    </div >
  );
}
