import React from "react";
import { useEffect, useState } from "react";
import { SearchIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../components/ui/navigation-menu";
import { Separator } from "../components/ui/separator";

export const Home = (): JSX.Element => {
  const [listings, setListings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiBase = import.meta.env.VITE_API_URL;
    fetch(`${apiBase}/listings`)   // 👈 gọi qua Kong, không cần /api/listings nữa
      .then(res => res.json())
      .then(json => {
        console.log('API data từ Kong:', json);
        // BE (getAllListings) trả mảng thuần, nên check:
        setListings(Array.isArray(json) ? json : (json.items ?? []));
      })
      .catch(err => console.error('API error:', err))
      .finally(() => setLoading(false));
  }, []);
  const navigationItems = [
    { label: "Xe mới", href: "#" },
    { label: "Trung tâm Porsche", href: "#" },
    { label: "Dịch vụ", href: "#" },
    { label: "Về Porsche", href: "#" },
    { label: "Trạm sạc Porsche", href: "#" },
    { label: "Tiêu điểm", href: "#" },
  ];

  const heroNavigationItems = [
    { label: "Xe mới" },
    { label: "Bảng giá" },
    { label: "Liên hệ" },
    { label: "So sánh xe" },
  ];

  const carModels = [
    {
      name: "718",
      image: "/718.png",
      gridPosition: "col-start-1 row-start-1",
    },
    {
      name: "911",
      image: "/911.png",
      gridPosition: "col-start-2 row-start-1",
    },
    {
      name: "Taycan",
      image: "/taycan.png",
      gridPosition: "col-start-3 row-start-1",
    },
    {
      name: "Panamera",
      image: "/panamera.png",
      gridPosition: "col-start-1 row-start-2",
    },
    {
      name: "Macan",
      image: "/macan.png",
      gridPosition: "col-start-2 row-start-2",
    },
    {
      name: "Cayenne",
      image: "/cayenne.png",
      gridPosition: "col-start-3 row-start-2",
    },
  ];

  const exploreItems = [
    {
      image: "/porsche-service-newsletter-2025-no2-banner-521x384-jpg.png",
      title: "Bản tin Dịch vụ Porsche 2025 – Số 2",
    },
    {
      image: "/tequipment-offer-cayenne-new-stock-banner-1-521x384-jpg.png",
      title: "Ưu đãi Phụ kiện Tequipment khi mua Porsche Cayenne",
    },
    {
      image:
        "/20-21-inch-911-carrera-light-weight-wheel-set-banner-521x384-jpg.png",
      title:
        "Bộ mâm xe 20/21 inch trọng lượng nhẹ dành cho 911 Carrera/Carrera GTS mới",
    },
    {
      image: "/b-n-tin-d-ch-v--porsche-2025---s--1.png",
      title: "Bản tin Dịch vụ Porsche 2025 – Số 1",
    },
  ];

  const contactInfo = [
    {
      label: "Liên hệ chung:",
      value: "info@porsche-vietnam.com",
    },
    {
      label: "Dịch vụ Khách hàng:",
      value: "crm@porsche-vietnam.com",
    },
  ];

  const porscheCenters = [
    "Trung Tâm Porsche Sài Gòn",
    "Trung Tâm Porsche Hà Nội",
    "Porsche Studio Hà Nội",
  ];

  const socialIcons = [
    {
      src: "/container-14.svg",
      alt: "Social media icon 1",
    },
    {
      src: "/container-17.svg",
      alt: "Social media icon 2",
    },
    {
      src: "/container-15.svg",
      alt: "Social media icon 3",
    },

  ];

  return (
    <div className="relative w-full bg-white overflow-hidden flex flex-col">
      {/* Explore Section */}
      <section className="w-full bg-white border-b border-gray-200">
        <div className="flex items-center justify-between px-48 py-2.5">
          <div className="flex items-center gap-[15px]">
            <div className="flex items-center gap-5 relative">
              <div className="[font-family:'Arial-Regular',Helvetica] font-normal text-porsche-vietnamvnblack text-base tracking-[0] leading-[22.9px]">
                Các dòng xe
              </div>
              <Separator
                orientation="vertical"
                className="h-[23px] border-black"
              />
            </div>

            <NavigationMenu>
              <NavigationMenuList className="gap-[30px]">
                {navigationItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={item.href}
                      className="[font-family:'Arial-Regular',Helvetica] font-normal text-porsche-vietnamvnblack text-base tracking-[0] leading-[22.9px] hover:text-porsche-vietnamvnmatisse transition-colors"
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 bg-porsche-vietnamvnporcelain p-2.5 w-[200px]">
              <div className="relative flex-1">
                <Input
                  placeholder="Tìm kiếm"
                  className="font-porsche-vietnam-vn-semantic-input font-[number:var(--porsche-vietnam-vn-semantic-input-font-weight)] text-porsche-vietnamvnmako text-[length:var(--porsche-vietnam-vn-semantic-input-font-size)] tracking-[var(--porsche-vietnam-vn-semantic-input-letter-spacing)] leading-[var(--porsche-vietnam-vn-semantic-input-line-height)] [font-style:var(--porsche-vietnam-vn-semantic-input-font-style)] border-[#e3e4e4]"
                />
              </div>
              <Button
                size="icon"
                className="w-8 h-8 bg-transparent hover:bg-gray-100"
              >
                <SearchIcon className="w-4 h-4 text-gray-600" />
              </Button>
            </div>

            <div className="bg-porsche-vietnamvnporcelain p-2.5 w-[200px]">
              <div className="flex items-center justify-between">
                <span className="[font-family:'Arial-Regular',Helvetica] font-normal text-porsche-vietnamvnmatisse text-base tracking-[0] leading-[22.9px]">
                  Tạo cấu hình xe
                </span>
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
                  <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
                </div>
              </div>
            </div>

            <Button className="w-[200px] bg-porsche-vietnamvnsan-juan hover:bg-porsche-vietnamvnsan-juan/90 text-white font-porsche-vietnam-vn-semantic-link font-[number:var(--porsche-vietnam-vn-semantic-link-font-weight)] text-[length:var(--porsche-vietnam-vn-semantic-link-font-size)] tracking-[var(--porsche-vietnam-vn-semantic-link-letter-spacing)] leading-[var(--porsche-vietnam-vn-semantic-link-line-height)] [font-style:var(--porsche-vietnam-vn-semantic-link-font-style)] h-[38px]">
              Liên hệ
            </Button>
          </div>
        </div>
      </section>

      {/* Car Gallery Section */}
      <section className="flex flex-col w-full items-start relative">
        <div className="flex flex-col items-start relative w-full">
          <div className="relative w-full h-[739px] overflow-hidden">
            <div className="relative h-[739px]">
              <div className="flex flex-col w-full items-start relative">
                <div className="flex flex-col items-start relative w-full">
                  <div className="relative w-full h-[739px] bg-[url(/992-ii-headbanner.png)] bg-cover bg-[50%_50%]" />

                  <div className="flex flex-col max-w-[1632px] w-full items-start absolute top-[591px] left-48 px-4">
                    <div className="flex flex-col items-start relative w-full">
                      <div className="flex flex-col items-start gap-0.5 relative w-full">
                        <div className="relative w-full h-[72px]">
                          <img
                            className="absolute w-10 h-[41px] top-[21px] -left-10"
                            alt="Container"
                            src="/container.svg"
                          />

                          <h1 className="absolute w-[468px] h-[72px] -top-0.5 left-0 [font-family:'Arial-Regular',Helvetica] font-normal text-white text-6xl tracking-[0] leading-[72px] whitespace-nowrap">
                            Độc Bản. Kinh Điển.
                          </h1>
                        </div>

                        <p className="relative w-fit [font-family:'Arial-Regular',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[30px] whitespace-nowrap">
                          Porsche 911 mới.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          className="absolute w-full h-11 top-[683px] left-0"
          alt="Container"
          src="/container-3.svg"
        />
      </section>

      {/* Hero Section */}
      <section className="flex flex-col w-full items-start pt-[45px] pb-[25px] px-48 relative bg-white">
        <nav className="flex items-center justify-center gap-[51.4px] relative w-full">
          {heroNavigationItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="inline-flex items-center px-0 py-2 relative flex-[0_0_auto] h-auto hover:bg-transparent"
            >
              <div className="flex flex-col w-[72px] h-[54px] items-start pl-0 pr-[18px] py-0 relative z-[1]">
                <div className="relative w-[54px] h-[54px] bg-[#2a4b6d] rounded-[5px]" />
              </div>
              <div className="inline-flex flex-col items-center relative flex-[0_0_auto] z-0">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Arial-Regular',Helvetica] font-normal text-porsche-vietnamvnblack text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                  {item.label}
                </div>
              </div>
            </Button>
          ))}
        </nav>
      </section>

      {/* Main Content Section */}
      {!loading && (
        <>
          <div>Count: {listings.length}</div>
          <ul>
            {listings.map(car => (
              <li key={car.id}>{car.brand} {car.model_name} ({car.year})</li>
            ))}
          </ul>
        </>
      )}
      <section className="flex flex-col w-full items-start pt-[30px] pb-10 px-48 bg-white">
        <div className="relative w-full bg-white">
          <header className="w-full flex flex-col items-center bg-white mb-[68px]">
            <div className="inline-flex items-start justify-center px-9 py-0 bg-white">
              <h2 className="[font-family:'Arial-Bold',Helvetica] font-bold text-porsche-vietnamvnblack text-[29.2px] text-center tracking-[0] leading-[44px] whitespace-nowrap">
                Các dòng xe
              </h2>
            </div>
          </header>

          <div className="grid grid-cols-3 grid-rows-2 gap-0 w-full">
            {carModels.map((model, index) => (
              <Card
                key={index}
                className={`relative w-full h-[575px] border-0 rounded-none overflow-hidden ${model.gridPosition}`}
              >
                <CardContent className="p-0 relative w-full h-full">
                  <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${model.image})` }}
                  />
                  <div className="absolute bottom-[57px] left-[25px] inline-flex items-center gap-[5.14px] pt-[1.46px] pb-[0.49px] px-0">
                    <img
                      className="relative flex-[0_0_auto]"
                      alt="Container"
                      src="/container.svg"
                    />
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Arial-Regular',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[30px] whitespace-nowrap">
                      {model.name}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="flex flex-col w-full items-center px-4 md:px-48 py-10 bg-white">
        <div className="flex flex-col items-center gap-6 w-full max-w-7xl">
          <header className="flex flex-col items-center">
            <h2 className="font-porsche-vietnam-vn-semantic-heading-2 font-[number:var(--porsche-vietnam-vn-semantic-heading-2-font-weight)] text-porsche-vietnamvnblack text-[length:var(--porsche-vietnam-vn-semantic-heading-2-font-size)] text-center tracking-[var(--porsche-vietnam-vn-semantic-heading-2-letter-spacing)] leading-[var(--porsche-vietnam-vn-semantic-heading-2-line-height)] [font-style:var(--porsche-vietnam-vn-semantic-heading-2-font-style)]">
              Khám phá
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 w-full">
            {exploreItems.map((item, index) => (
              <Card
                key={index}
                className="border-0 shadow-none bg-white group cursor-pointer"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <div
                      className="w-full h-[283px] bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />

                    <div className="flex flex-col items-start px-5 py-[5px] relative">
                      <div className="relative w-fit [font-family:'Arial-Regular',Helvetica] font-normal text-porsche-vietnamvnblack text-base tracking-[0] leading-6">
                        {item.title}
                      </div>

                      <img
                        className="absolute w-4 h-4 top-[9px] left-0"
                        alt="Container"
                        src="/container.svg"
                      />

                      <div className="absolute w-full h-[3px] top-[-3px] left-0 bg-porsche-vietnamvnmonza opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="w-full relative">
        <div className="flex flex-col lg:flex-row w-full max-w-[1536px] mx-auto px-12 pt-6 pb-1.5">
          <div className="flex flex-col w-full lg:w-[1152px] lg:pr-4">
            <div className="flex flex-col gap-2.5 w-full">
              <div className="flex flex-col w-full">
                <h2 className="font-porsche-vietnam-vn-semantic-heading-4 font-[number:var(--porsche-vietnam-vn-semantic-heading-4-font-weight)] text-porsche-vietnamvnblack text-[length:var(--porsche-vietnam-vn-semantic-heading-4-font-size)] tracking-[var(--porsche-vietnam-vn-semantic-heading-4-letter-spacing)] leading-[var(--porsche-vietnam-vn-semantic-heading-4-line-height)] [font-style:var(--porsche-vietnam-vn-semantic-heading-4-font-style)]">
                  Thông tin liên lạc:
                </h2>
              </div>

              <div className="flex flex-col w-full space-y-7">
                <div className="flex flex-col">
                  <h3 className="[font-family:'Arial-Bold',Helvetica] font-bold text-porsche-vietnamvnblack text-[13.4px] leading-7 whitespace-nowrap">
                    Porsche Việt Nam
                  </h3>
                </div>

                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-start gap-0">
                    <span className="[font-family:'Arial-Regular',Helvetica] font-normal text-porsche-vietnamvngray text-base leading-6 whitespace-nowrap">
                      {contact.label}
                    </span>
                    <span className="[font-family:'Arial-Regular',Helvetica] font-normal text-porsche-vietnamvngray text-base leading-6 whitespace-nowrap px-0 py-[0.5px]">
                      {contact.value}
                    </span>
                  </div>
                ))}

                <div className="flex flex-col">
                  <h4 className="font-porsche-vietnam-vn-semantic-strong font-[number:var(--porsche-vietnam-vn-semantic-strong-font-weight)] text-porsche-vietnamvnblack text-[length:var(--porsche-vietnam-vn-semantic-strong-font-size)] tracking-[var(--porsche-vietnam-vn-semantic-strong-letter-spacing)] leading-[var(--porsche-vietnam-vn-semantic-strong-line-height)] whitespace-nowrap [font-style:var(--porsche-vietnam-vn-semantic-strong-font-style)]">
                    Các Trung Tâm Porsche
                  </h4>
                </div>

                {porscheCenters.map((center, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="[font-family:'Arial-Regular',Helvetica] font-normal text-porsche-vietnamvngray text-base leading-6 whitespace-nowrap px-0 py-[0.5px]">
                      {center}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[369px] flex flex-col mt-8 lg:mt-0">
            <div className="flex flex-col space-y-7">
              <div className="flex flex-col max-w-[324px] w-full">
                <Button className="flex items-center justify-start pl-[47px] pr-[193.86px] py-[13px] bg-porsche-vietnamvnouter-space text-white hover:bg-porsche-vietnamvnouter-space/90 h-auto relative">
                  <img
                    className="absolute w-[26px] h-[26px] left-[13px]"
                    alt="Share icon"
                    src="/container-13.svg"
                  />
                  <span className="[font-family:'Arial-Regular',Helvetica] font-normal text-base leading-6">
                    Chia sẻ trang
                  </span>
                </Button>
              </div>

              <div className="flex flex-col">
                <h3 className="[font-family:'Arial-Regular',Helvetica] font-normal text-porsche-vietnamvnoslo-gray text-xl leading-7 whitespace-nowrap">
                  Kết nối với Porsche
                </h3>
              </div>

              <div className="flex items-start gap-[7.4px] pt-0 pb-[7px] px-0">
                {socialIcons.map((icon, index) => (
                  <div key={index} className="relative w-[50px] h-[50px]">
                    <div className="w-[50px] h-[50px] bg-porsche-vietnamvnouter-space" />
                    <img
                      className="absolute w-[50px] h-[50px] top-0 left-0"
                      alt={icon.alt}
                      src={icon.src}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="w-full bg-porsche-vietnamvnsilver-sand h-px" />
      </section>

      {/* Navigation Section */}
      <footer className="w-full bg-porsche-vietnamvnshark px-48 pb-[70px] pt-0">
        <div className="flex flex-col gap-[23px] border-t border-[#494e51] pt-[30px] pb-[5.68e-14px] px-0 min-h-px">
          <div className="flex flex-col pt-0 pb-[0.56px] px-0">
            <p className="mt-[-1.00px] font-porsche-vietnam-vn-arial-narrow font-[number:var(--porsche-vietnam-vn-arial-narrow-font-weight)] text-white text-[length:var(--porsche-vietnam-vn-arial-narrow-font-size)] tracking-[var(--porsche-vietnam-vn-arial-narrow-letter-spacing)] leading-[var(--porsche-vietnam-vn-arial-narrow-line-height)] [font-style:var(--porsche-vietnam-vn-arial-narrow-font-style)]">
              © Porsche Việt Nam 2024
            </p>
          </div>

          <div className="inline-flex px-0 py-[0.5px]">
            <Button
              variant="link"
              className="mt-[-1.00px] [font-family:'Arial-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-6 whitespace-nowrap p-0 h-auto hover:no-underline"
            >
              Chính sách quyền riêng tư
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};