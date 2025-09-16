import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
const vehicleData = [
  {
    id: "243169",
    name: "Cayenne S Coupé 243169",
    url: "https://porsche-vietnam.vn/xe-moi/cayenne-s-coupe-243169/",
    images: [
      "/cayenne-s-coupe-243169-01-840x560-jpg.png",
      "/cayenne-s-coupe-243169-04-840x560-jpg.png",
    ],
    specs: [
      { label: "Mã số", value: "243169" },
      { label: "Ngoại thất", value: "Đỏ" },
      { label: "Nội thất", value: "Đen" },
      { label: "Động cơ", value: "tăng áp kép, V8" },
      { label: "Dung tích (cc)", value: "3.996" },
      { label: "Công suất tối đa (hp/rpm)", value: "474" },
      { label: "Mô-men xoắn cực đại (Nm/rpm)", value: "600" },
      { label: "Thời gian tăng tốc (s/giây) (0~100km/giờ)", value: "4,7" },
      { label: "Tốc độ tối đa (km/giờ)", value: "273" },
      { label: "Tự trọng (DIN) (kg)", value: "2.190" },
      { label: "Giá bán", value: "9.138.400.000 VNĐ*", isPrice: true },
    ],
  },
  {
    id: "243730",
    name: "Cayenne 243730",
    url: "https://porsche-vietnam.vn/xe-moi/cayenne-243730/",
    images: ["/dscf2272-840x560-jpg.png", "/dscf2277-840x560-jpg.png"],
    specs: [
      { label: "Mã số", value: "243730" },
      { label: "Ngoại thất", value: "Trắng" },
      { label: "Nội thất", value: "Đen - Be" },
      { label: "Động cơ", value: "tăng áp, V6" },
      { label: "Dung tích (cc)", value: "2.995" },
      { label: "Công suất tối đa (hp/rpm)", value: "353" },
      { label: "Mô-men xoắn cực đại (Nm/rpm)", value: "500" },
      { label: "Thời gian tăng tốc (s/giây) (0~100km/giờ)", value: "5,7" },
      { label: "Tốc độ tối đa (km/giờ)", value: "248" },
      { label: "Tự trọng (DIN) (kg)", value: "2.055" },
      { label: "Giá bán", value: "6.114.100.000 VNĐ*", isPrice: true },
    ],
  },
  {
    id: "254162",
    name: "Taycan Turbo 254162",
    url: "https://porsche-vietnam.vn/xe-moi/taycan-turbo-254162/",
    images: ["/dscf1471-840x560-jpg.png", "/dscf1477-840x560-jpg.png"],
    specs: [
      { label: "Mã số", value: "254162" },
      { label: "Ngoại thất", value: "Xám Ánh Kim" },
      { label: "Nội thất", value: "Đen - Đỏ" },
      {
        label: "Động cơ",
        value: "mô-tơ đồng bộ nam châm vĩnh cửu (trước và sau)",
        isMultiline: true,
      },
      { label: "Dung tích (cc)", value: "", isEmpty: true },
      { label: "Công suất tối đa (hp/rpm)", value: "707" },
      { label: "Mô-men xoắn cực đại (Nm/rpm)", value: "940" },
      { label: "Thời gian tăng tốc (s/giây) (0~100km/giờ)", value: "2,7" },
      { label: "Tốc độ tối đa (km/giờ)", value: "260" },
      { label: "Tự trọng (DIN) (kg)", value: "2.290" },
      { label: "Giá bán", value: "8.616.000.000 VNĐ*", isPrice: true },
    ],
  },
  {
    id: "243740",
    name: "Cayenne 243740",
    url: "https://porsche-vietnam.vn/xe-moi/cayenne-243740/",
    images: ["/dscf1430-840x560-jpg.png", "/dscf1433-840x560-jpg.png"],
    specs: [
      { label: "Mã số", value: "243740" },
      { label: "Ngoại thất", value: "Đỏ" },
      { label: "Nội thất", value: "Đen" },
      { label: "Động cơ", value: "tăng áp, V6" },
      { label: "Dung tích (cc)", value: "2.995" },
      { label: "Công suất tối đa (hp/rpm)", value: "353" },
      { label: "Mô-men xoắn cực đại (Nm/rpm)", value: "500" },
      { label: "Thời gian tăng tốc (s/giây) (0~100km/giờ)", value: "5,7" },
      { label: "Tốc độ tối đa (km/giờ)", value: "248" },
      { label: "Tự trọng (DIN) (kg)", value: "2.055" },
      { label: "Giá bán", value: "6.499.700.000 VNĐ*", isPrice: true },
    ],
  },
  {
    id: "243751",
    name: "Cayenne Coupé 243751",
    url: "https://porsche-vietnam.vn/xe-moi/cayenne-coupe-243751/",
    images: ["/dscf8778-840x560-jpg.png", "/dscf8784-edit-840x560-jpg.png"],
    specs: [
      { label: "Mã số", value: "243751" },
      { label: "Ngoại thất", value: "Xanh Ánh Kim" },
      { label: "Nội thất", value: "Đen - Be" },
      { label: "Động cơ", value: "tăng áp, V6" },
      { label: "Dung tích (cc)", value: "2.995" },
      { label: "Công suất tối đa (hp/rpm)", value: "353" },
      { label: "Mô-men xoắn cực đại (Nm/rpm)", value: "500" },
      { label: "Thời gian tăng tốc (s/giây) (0~100km/giờ)", value: "5,7" },
      { label: "Tốc độ tối đa (km/giờ)", value: "248" },
      { label: "Tự trọng (DIN) (kg)", value: "2.085" },
      { label: "Giá bán", value: "6.211.800.000 VNĐ*", isPrice: true },
    ],
  },
  {
    id: "243742",
    name: "Cayenne 243742",
    url: "https://porsche-vietnam.vn/xe-moi/cayenne-243742/",
    images: ["/dscf7987-840x560-jpg.png", "/dscf7954-840x560-jpg.png"],
    specs: [
      { label: "Mã số", value: "243742" },
      { label: "Ngoại thất", value: "Xanh Ánh Kim" },
      { label: "Nội thất", value: "Đen - Xám" },
      { label: "Động cơ", value: "tăng áp, V6" },
      { label: "Dung tích (cc)", value: "2.995" },
      { label: "Công suất tối đa (hp/rpm)", value: "353" },
      { label: "Mô-men xoắn cực đại (Nm/rpm)", value: "500" },
      { label: "Thời gian tăng tốc (s/giây) (0~100km/giờ)", value: "5,7" },
      { label: "Tốc độ tối đa (km/giờ)", value: "248" },
      { label: "Tự trọng (DIN) (kg)", value: "2.055" },
      { label: "Giá bán", value: "6.632.800.000 VNĐ*", isPrice: true },
    ],
  },
  {
    id: "233445",
    name: "Macan GTS 233445",
    url: "https://porsche-vietnam.vn/xe-moi/macan-gts-233445/",
    images: [
      "/233445-macan-gts-python-green-1-840x559-jpg.png",
      "/233445-macan-gts-python-green-2-840x559-jpg.png",
    ],
    specs: [
      { label: "Mã số", value: "233445" },
      { label: "Ngoại thất", value: "Xanh" },
      { label: "Nội thất", value: "GTS Đen viền chỉ Xanh" },
      { label: "Động cơ", value: "tăng áp kép, V6" },
      { label: "Dung tích (cc)", value: "2.894" },
      { label: "Công suất tối đa (hp/rpm)", value: "440 / 5.700 - 6.600" },
      { label: "Mô-men xoắn cực đại (Nm/rpm)", value: "550 / 1.900 - 5.600" },
      { label: "Thời gian tăng tốc (s/giây) (0~100km/giờ)", value: "4,5" },
      { label: "Tốc độ tối đa (km/giờ)", value: "272" },
      { label: "Tự trọng (DIN) (kg)", value: "1.960" },
      { label: "Giá bán", value: "6.259.400.000 VNĐ*", isPrice: true },
    ],
  },
];

export const ProductListing = (): JSX.Element => {
  return (
    <div className="relative w-full bg-white overflow-hidden flex flex-col">
      <section className="flex flex-col w-full items-start pt-[45px] pb-[70px] px-48 relative">
        {vehicleData.map((vehicle, index) => (
          <div
            key={vehicle.id}
            className={`flex flex items-start gap-8 pt-4 pb-[31px] px-0 relative self-stretch w-full flex-[0_0_auto] ${index < vehicleData.length - 1 ? "border-b border-solid border-[#cccccc]" : ""}`}
          >
            <div className="flex flex-col w-[391.67px] items-start gap-5 relative">
              {vehicle.images.map((image, imgIndex) => (
                <div
                  key={imgIndex}
                  className="inline-flex items-start relative flex-[0_0_auto]"
                >
                  <div
                    className="relative max-w-[391.67px] w-[391.67px] h-[261.11px] bg-cover bg-[50%_50%]"
                    style={{ backgroundImage: `url(${image})` }}
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col w-[1144.31px] items-start pl-[99.83px] pr-0 py-0 relative self-stretch">
              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-start px-0 py-[3.5px] relative flex-[0_0_auto]">
                    <a
                      className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-porsche-vietnamvnblack text-[22.2px] tracking-[0] leading-[34px] whitespace-nowrap"
                      href={vehicle.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {vehicle.name}
                    </a>
                  </div>
                </div>

                <img
                  className="absolute w-[18px] h-[18px] top-[9px] -left-5"
                  alt="Container"
                  src="/container.svg"
                />
              </div>

              <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto] mt-[-3px]">
                <Card className="w-[600px] border-0 shadow-none bg-transparent">
                  <CardContent className="p-0">
                    {vehicle.specs.map((spec, specIndex) => (
                      <div key={specIndex}>
                        {spec.isEmpty ? (
                          <div className="flex-col border-t border-solid border-[#c8cacb] flex items-start relative w-full">
                            <div className="pl-0 pr-2.5 pt-2.5 pb-[11px] flex-[0_0_auto] flex flex-col w-[300px] items-start relative">
                              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-porsche-vietnamvnblack text-[13.5px] tracking-[0] leading-6 whitespace-nowrap">
                                {spec.label}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div
                            className={`justify-center flex items-start relative w-full ${specIndex > 0 ? "border-t border-solid border-[#c8cacb]" : ""}`}
                          >
                            <div className="flex flex-col w-[300px] items-start pl-0 pr-2.5 py-2.5 relative">
                              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-porsche-vietnamvnblack text-[13.2px] tracking-[0] leading-6 whitespace-nowrap">
                                {spec.label}
                              </div>
                            </div>

                            <div className="flex flex-col w-[300px] items-start pl-0 pr-2.5 py-2.5 relative">
                              <div
                                className={`relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] ${spec.isPrice ? "font-bold" : "font-normal"} text-porsche-vietnamvnblack text-[15px] tracking-[0] leading-6 ${spec.isMultiline ? "" : "whitespace-nowrap"}`}
                              >
                                {spec.isMultiline ? (
                                  <>
                                    mô-tơ đồng bộ nam châm vĩnh cửu (trước và
                                    <br />
                                    sau)
                                  </>
                                ) : (
                                  spec.value
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                  <Button
                    className="relative w-[127.8px] h-[50px] bg-porsche-vietnamvnouter-space hover:bg-porsche-vietnamvnouter-space/90 h-auto p-0"
                    asChild
                  >
                    <a
                      href={vehicle.url}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="flex items-center justify-start w-full h-full"
                    >
                      <img
                        className="w-4 h-6 ml-4"
                        alt="Container"
                        src="/container.svg"
                      />
                      <span className="ml-[10px] [font-family:'Inter',Helvetica] font-normal text-white text-[13.6px] tracking-[0] leading-6 whitespace-nowrap">
                        Xem thêm
                      </span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
