import { LandingH1, P } from "@/components/ui/typography";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden p-8 pb-20 gap-6 sm:p-20 flex flex-col items-center justify-center">
      <div
        className={
          "relative flex flex-col gap-4 items-center justify-center w-full h-full"
        }
      >
        <LandingH1 className={"font-semibold text-center text-slate-700"}>
          Your Ultimate Hub for <span className={"text-teal-500"}>Global Currency Exchange</span>
        </LandingH1>

        <P
          className={
            "text-xl max-w-xl text-center font-medium leading-8 text-muted-foreground"
          }
        >
          Seamlessly manage currencies in one platform. Access real-time rates, execute exchanges, and monitor your portfolio—all tailored to your preferences and location.
        </P>

        <div className={"relative w-full h-[calc(100vh-300px)] lg:h-[80vh] mt-6"}>
          <Image
            src={"/images/image.jpg"} // Make sure the image path is correct
            alt={"Cryptocurrency background"}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className={"dropEffect"}
          />
        </div>
      </div>
    </div>
  );
}
