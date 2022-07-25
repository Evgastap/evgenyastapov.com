import Image from "next/image";

export default function Custom404() {
  return (
    <>
      <div className="absolute z-10 text-center h-screen w-screen flex items-center flex-col justify-center text-white px-4">
        <h1 className="font-handwriting text-5xl">
          That's awkward. This page doesn't exist.
        </h1>
        <h2 className="mt-2 text-2xl font-light">
          Have a cool picture instead.
        </h2>
      </div>
      <div className="flex-coltext-white relative -z-10 h-screen w-screen">
        <Image
          src="v1651844346/Northern_lights_2_wanrue.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </>
  );
}
