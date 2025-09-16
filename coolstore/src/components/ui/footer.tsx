import { Button } from "./button";
import { Separator } from "./separator";

const contactInfo = [
  { label: "Liên hệ chung:", value: "info@porsche-vietnam.com" },
  { label: "Dịch vụ Khách hàng:", value: "crm@porsche-vietnam.com" },
];

const porscheCenters = [
  "Trung Tâm Porsche Sài Gòn",
  "Trung Tâm Porsche Hà Nội",
  "Porsche Studio Hà Nội",
];

const socialIcons = [
  { src: "/container-14.svg", alt: "Social media icon 1" },
  { src: "/container-17.svg", alt: "Social media icon 2" },
  { src: "/container-15.svg", alt: "Social media icon 3" },
];

export const Footer = () => {
  return (
    <>
      {/* Featured Cars Section / Contact Info */}
      <section className="w-full relative">
        <div className="flex flex-col lg:flex-row w-full max-w-[1536px] mx-auto px-12 pt-6 pb-1.5">
          <div className="flex flex-col w-full lg:w-[1152px] lg:pr-4">
            <div className="flex flex-col gap-2.5 w-full">
              <h2 className="font-porsche-vietnam-vn-semantic-heading-4 font-[number:var(--porsche-vietnam-vn-semantic-heading-4-font-weight)] text-porsche-vietnamvnblack text-[length:var(--porsche-vietnam-vn-semantic-heading-4-font-size)] tracking-[var(--porsche-vietnam-vn-semantic-heading-4-letter-spacing)] leading-[var(--porsche-vietnam-vn-semantic-heading-4-line-height)] [font-style:var(--porsche-vietnam-vn-semantic-heading-4-font-style)]">
                Thông tin liên lạc:
              </h2>

              <div className="flex flex-col w-full space-y-7">
                <h3 className="[font-family:'Arial-Bold',Helvetica] font-bold text-porsche-vietnamvnblack text-[13.4px] leading-7 whitespace-nowrap">
                  Porsche Việt Nam
                </h3>

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

                <h4 className="font-porsche-vietnam-vn-semantic-strong font-[number:var(--porsche-vietnam-vn-semantic-strong-font-weight)] text-porsche-vietnamvnblack text-[length:var(--porsche-vietnam-vn-semantic-strong-font-size)] tracking-[var(--porsche-vietnam-vn-semantic-strong-letter-spacing)] leading-[var(--porsche-vietnam-vn-semantic-strong-line-height)] whitespace-nowrap [font-style:var(--porsche-vietnam-vn-semantic-strong-font-style)]">
                  Các Trung Tâm Porsche
                </h4>

                {porscheCenters.map((center, index) => (
                  <span
                    key={index}
                    className="[font-family:'Arial-Regular',Helvetica] font-normal text-porsche-vietnamvngray text-base leading-6 whitespace-nowrap px-0 py-[0.5px]"
                  >
                    {center}
                  </span>
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

              <h3 className="[font-family:'Arial-Regular',Helvetica] font-normal text-porsche-vietnamvnoslo-gray text-xl leading-7 whitespace-nowrap">
                Kết nối với Porsche
              </h3>

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

      {/* Footer Section */}
      <footer className="w-full bg-porsche-vietnamvnshark px-48 pb-[70px] pt-0">
        <div className="flex flex-col gap-[23px] border-t border-[#494e51] pt-[30px]">
          <p className="mt-[-1.00px] font-porsche-vietnam-vn-arial-narrow font-[number:var(--porsche-vietnam-vn-arial-narrow-font-weight)] text-white text-[length:var(--porsche-vietnam-vn-arial-narrow-font-size)] tracking-[var(--porsche-vietnam-vn-arial-narrow-letter-spacing)] leading-[var(--porsche-vietnam-vn-arial-narrow-line-height)] [font-style:var(--porsche-vietnam-vn-arial-narrow-font-style)]">
            © Porsche Việt Nam 2024
          </p>

          <Button
            variant="link"
            className="[font-family:'Arial-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-6 whitespace-nowrap p-0 h-auto hover:no-underline"
          >
            Chính sách quyền riêng tư
          </Button>
        </div>
      </footer>
    </>
  );
};
