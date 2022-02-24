import Image from "next/image";

const workerDomain = "https://next-images.evgastap.workers.dev";
const cloudflareDomain = process.env.SITE_URL;

// replace [yourprojectname] and [yourdomain.com] with your actual project name and (custom) domain
const cloudflareImageLoader = ({ src, width, quality }) => {
  if (!quality) {
    quality = 75;
  }
  return `${workerDomain}?width=${width}&quality=${quality}&image=${cloudflareDomain}${src}`;
};

export default function Img(props) {
  if (process.env.NODE_ENV === "development") {
    return <Image unoptimized={true} {...props} />;
  } else {
    return <Image {...props} loader={cloudflareImageLoader} />;
  }
}
