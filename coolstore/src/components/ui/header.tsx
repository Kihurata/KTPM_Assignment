
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Search as SearchIcon, Menu as MenuIcon, X as XIcon } from "lucide-react";

const nav = [
  { label: "Xe mới", href: "/product-listing" },
  { label: "Trung tâm Porsche", href: "/trung-tam" },
  { label: "Dịch vụ", href: "/dich-vu" },
  { label: "Về Porsche", href: "/ve-porsche" },
  { label: "Trạm sạc Porsche", href: "/tram-sac" },
  { label: "Tiêu điểm", href: "/tieu-diem" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur">
      {/* Hàng 1: Logo */}
      <div className="mx-auto max-w-7xl h-16 px-3 md:px-6 border-b border-gray-200 flex items-center justify-center">
        {/* center: đổi sang justify-start nếu muốn logo nằm trái */}
        <Link to="/" aria-label="Trang chủ" className="shrink-0">
          <img src="./public/images.jpeg" alt="" className="h-8 w-auto" />
        </Link>
      </div>

      {/* Hàng 2: Nav + Search + CTA */}
      <div className="mx-auto max-w-7xl h-12 px-3 md:px-6 border-b border-gray-100 flex items-center gap-3">
        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-5">
          {nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                "text-sm text-gray-800 hover:text-gray-900 " +
                (isActive ? "font-semibold underline underline-offset-4" : "")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Spacer */}
        <div className="ms-auto" />

        {/* Search (desktop) */}
        <form
          className="hidden md:flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 ps-3 pe-1 py-1"
          role="search"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="w-40 bg-transparent text-sm outline-none placeholder:text-gray-400"
            placeholder="Tìm kiếm"
            aria-label="Tìm kiếm"
          />
          <button
            type="submit"
            className="grid h-8 w-8 place-items-center rounded-full hover:bg-gray-100"
            aria-label="Tìm"
          >
            <SearchIcon className="h-4 w-4 text-gray-600" />
          </button>
        </form>

        {/* CTA (desktop) */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            to="/tao-cau-hinh"
            className="rounded-md border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50"
          >
            Tạo cấu hình xe
          </Link>
          <Link
            to="/lien-he"
            className="rounded-md bg-[#2B5C8A] px-3 py-2 text-sm text-white hover:bg-[#2B5C8A]/90"
          >
            Liên hệ
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="grid h-10 w-10 place-items-center rounded md:hidden hover:bg-gray-100"
          onClick={() => setOpen((v) => !v)}
          aria-label="Mở menu"
          aria-expanded={open}
        >
          {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-3 py-3">
            <form
              className="mb-3 flex items-center gap-2 rounded-md border border-gray-200 bg-gray-50 ps-3 pe-1 py-2"
              role="search"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                placeholder="Tìm kiếm"
                aria-label="Tìm kiếm"
              />
              <button
                type="submit"
                className="grid h-9 w-9 place-items-center rounded hover:bg-gray-100"
                aria-label="Tìm"
              >
                <SearchIcon className="h-4 w-4 text-gray-600" />
              </button>
            </form>

            <nav className="flex flex-col">
              {nav.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className="rounded-md px-3 py-2 text-sm text-gray-800 hover:bg-gray-50"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="mt-3 flex gap-2">
              <Link
                to="/tao-cau-hinh"
                className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm text-center hover:bg-gray-50"
                onClick={() => setOpen(false)}
              >
                Tạo cấu hình xe
              </Link>
              <Link
                to="/lien-he"
                className="flex-1 rounded-md bg-[#2B5C8A] px-3 py-2 text-sm text-white text-center hover:bg-[#2B5C8A]/90"
                onClick={() => setOpen(false)}
              >
                Liên hệ
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
