
import React from "react";
import { useEffect, useState } from "react";
import { SearchIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Footer } from "../components/ui/footer";
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

  return (
    <div className="relative w-full bg-white overflow-hidden flex flex-col">

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
      <Footer />
      {/* Featured Cars Section */}
      <Footer/>
    </div>
  );
};