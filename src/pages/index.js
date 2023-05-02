import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-blue-100 h-screen flex flex-row items-center justify-center justify-items-center">
      <div className="flex flex-col items-center bg-white w-1/5 sm:w-10/12 lg:w-1/3 md:w-1/2 xl:w-1/3 p-4 rounded-lg">
        <Image
          src="/assets/image-qr-code.png"
          alt="image"
          width="400"
          height="400"
          style={{
            objectFit: "contain",
          }}
          className="rounded-md block"
        />
        <div className=" pt-4 pb-4 flex flex-col gap-4">
          <h4 className="font-bold text-center text-lg">
            Improve your front-end skills by building projects
          </h4>
          <p className="text-center text-slate-500">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </main>
  );
}
