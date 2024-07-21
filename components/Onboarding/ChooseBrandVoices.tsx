import {
  TABLE_DATA_BRAND_VOICES,
  TABLE_HEADERS_BRAND_VOICES,
} from "@/utils/CONSTANTS";
import Image from "next/image";
import RadioButton from "../RadioButton";
import SideDrawer from "../SideDrawer";
import useOnboardingHooks from "./useOnboardingHooks";
import { IBrandVoices } from "@/interface";

export default function ChooseBrandVoices() {
  const {
    selectedBrandVoiceIndex,
    handleChange,
    toggleDrawerViewMore,
    isBrandVoiceDrawerOpen,
    selectViewMoreIndex,
  } = useOnboardingHooks();
  return (
    <div className="mt-0.93 flex flex-col overflow-scroll">
      <table className="rounded-lg w-[570px] md:w-full">
        <thead className="bg-gray-scale-20 rounded-t-lg">
          <tr className="text-body-large-semibold">
            {TABLE_HEADERS_BRAND_VOICES.map((header, index: number) => (
              <th
                key={index}
                className={`py-3.5 text-left ${
                  index === 0 && "rounded-tl-lg pl-[1.5625rem] text-left"
                } ${
                  index === TABLE_HEADERS_BRAND_VOICES.length - 1 &&
                  "rounded-tr-lg pr-0.93 text-right"
                }`}
              >
                {header.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_DATA_BRAND_VOICES.map((voice, index) => (
            <tr
              key={voice.name}
              className={`${index % 2 == 0 ? "bg-gray-scale-15" : "bg-white"}`}
            >
              <td className="pl-[1.5625rem] w-[5.3125rem]">
                <p className="text-body-medium-regular text-gray-scale-60">
                  {voice.name}
                </p>
              </td>
              <td className="w-[5rem]">
                <div className="w-[3.125rem] h-[3.125rem] relative">
                  <Image
                    src={voice.avatar}
                    alt={voice.name}
                    layout="fill"
                    className="rounded-[0.25rem]"
                  />
                </div>
              </td>
              <td className="w-[8.75rem] text-body-medium-regular text-gray-scale-60">
                {voice.description}
              </td>
              <td
                className="w-[5.3125rem] text-body-medium-regular text-primary underline cursor-pointer"
                onClick={() => toggleDrawerViewMore(index)}
              >
                View More
              </td>
              <td className="w-[6.25rem] rounded-bl-lg rounded-br-lg">
                <RadioButton
                  index={index}
                  selectedIndex={selectedBrandVoiceIndex}
                  name={"choose-brand-voices"}
                  handleChange={(n: number) => handleChange(n)}
                  className="bg-transparent border-none justify-center min-h-[4.25rem]"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <SideDrawer
        isOpen={isBrandVoiceDrawerOpen}
        onClose={() => toggleDrawerViewMore()}
        className="w-full md:w-[41.875rem]"
      >
        <DrawerContent {...TABLE_DATA_BRAND_VOICES[selectViewMoreIndex]} />
      </SideDrawer>
    </div>
  );
}

const DrawerContent = (data: IBrandVoices) => {
  return (
    <div className="">
      <h2 className="text-xl font-bold mb-4">Detail</h2>
      <div className="flex flex-col gap-[1.5625rem]">
        <div className="flex flex-col gap-2">
          <h3 className="text-body-medium-semibold text-gray-scale-80">
            Avatar
          </h3>
          <div className="w-[3.125rem] h-[3.125rem] relative">
            <Image
              src={data.avatar}
              alt={data.name}
              layout="fill"
              className="rounded-[0.25rem]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-body-medium-semibold text-gray-scale-80">
            Brand voice name
          </h3>
          <p className="text-body-medium-regular text-gray-scale-60 bg-gray-scale-15 rounded-lg px-2 py-3">
            {data.name}
          </p>
        </div>

        {/* Dummy description */}
        <div className="flex flex-col gap-2">
          <h3 className="text-body-medium-semibold text-gray-scale-80">
            Description of Brand Voice
          </h3>
          <div className="text-body-medium-regular text-gray-scale-60 bg-gray-scale-15 rounded-lg px-2 py-3 gap-2 flex flex-col">
            <div>
              <p>Brand Voice Overview: </p>
              <p>
                BP's brand has evolved into a voice that is innovative,
                responsible, and community-focused. It aims to transition from a
                traditional oil company to an integrated energy company that
                delivers secure, affordable, lower carbon energy solutions. The
                communication style reflects a commitment to sustainability,
                technological advancement, and community engagement, resonating
                with audiences who value environmental responsibility and
                forward-thinking energy solutions.
              </p>
            </div>
            <div>
              <p>Key Attributes of Brand Voice:</p>
              <p>
                - Innovative: BP communicates its transition towards more
                sustainable energy solutions with a focus on technological
                advancements and efficiency improvements. The brand's voice
                highlights its innovative approaches to managing safety risks
                and operational emissions, showcasing its leadership in
                transforming the energy sector .
              </p>{" "}
              <p>
                - Responsible: The brand voice emphasizes BP's commitment to a
                lower carbon future, aligning with global energy transition
                trends. By focusing on sustainable practices and environmental
                responsibility, BP builds trust and credibility with its
                stakeholders, demonstrating its role in tackling climate change
                and promoting energy security .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
