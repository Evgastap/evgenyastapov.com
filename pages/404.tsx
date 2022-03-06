import CloudflareImage from "../components/CloudflareImage";

export default function Custom404() {
  return (
    <>
      <div className="relative -z-10 mx-4 flex h-screen w-screen flex-col items-center	 justify-center text-white">
        {/* <h1 className="font-handwriting text-5xl">
          That's awkward. This page doesn't exist.
        </h1>
        <h2 className="mt-2 text-2xl font-light">
          Have a cool picture instead.
        </h2> */}
        <CloudflareImage
          src="/Northern lights.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </>
  );
}
