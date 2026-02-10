'use client';

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CgMenuGridR } from "react-icons/cg";

import SpotIcon from '../Assets/spotlightIcon.png';
import ExtensionIcon from '../Assets/extensionIcon.png';
import PVCIcon from '../Assets/PVCIcon.png';
import SwitchIcon from '../Assets/SwitchIcon.png';
import InsectIcon from '../Assets/insect.png'
import { BsBorderBottom } from "react-icons/bs";

export default function CategoryBar({ active }) {
  const router = useRouter();

  const activeStyle = {
    borderLeft: "4px solid #E3001B",
    borderBottom:'4px solid #e9dcdc',
    fontWeight:'bold',
    paddingLeft: "8px",
  };

  return (
    <div className="max-w-8xl mx-auto p-8">
      <div className="bg-red-600 text-white text-xl font-medium p-4 flex gap-2">
        <CgMenuGridR size={25} />
        <span className="mt-1">All Categories</span>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "clamp(16px, 5vw, 80px)",
          padding: "16px",
          border: "1px solid #E3001B",
          color: "#E3001B",
          fontWeight: "500",
          fontSize: "18px",
        }}
      >

        {/* Switches & Socket */}
        <span
          style={{
            display: "flex",
            alignItems: "center",
            whiteSpace: "nowrap",
            ...(active === "switch" ? activeStyle : {}),
          }}
        >
          <Image src={SwitchIcon} alt="Switch Icon" width={24} height={24} />

          <select
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
              outline: "none",
              color: "#E3001B",
              fontWeight: "500",
            }}
            defaultValue=""
            onChange={(e) => {
              const value = e.target.value;
              if (value) router.push(value);
            }}
          >
            <option value="" disabled hidden>
              Switches and Socket
            </option>
            <option value="/Item_Liverpool">Liverpool Series</option>
            <option value="/Item_Oxford">Oxford Series</option>
            <option value="/Item_Rock">Rock Series</option>
          </select>
        </span>

        {/* Extension Socket */}
        <Link href="/Item_Extension">
          <div
            className="flex items-center gap-2"
            style={active === "extension" ? activeStyle : {}}
          >
            <Image src={ExtensionIcon} alt="Extension Icon" width={24} height={24} />
            <span>Extension Socket</span>
          </div>
        </Link>

        {/* Spot Lights */}
         <Link href="/Item_SpotLight">
        <div
          className="flex items-center gap-2 ml-10"
          style={active === "spot" ? activeStyle : {}}
        >
          <Image src={SpotIcon} alt="Spot Lights" width={24} height={24} />
          <span>Spot Lights      </span>
        </div>
        </Link>

        {/* Insect Killer */}
          <Link href="/Item_InsectKiller">
        <div
          className="flex items-center gap-2 ml-10"
          style={active === "insectK" ? activeStyle : {}}
        >
          <Image src={InsectIcon} alt="Insect Killer" width={24} height={24} />
          <span>Insect Killer</span>
        </div>
        </Link>

        {/* PVC */}
          <Link href="/Item_Pvc">
        <div
          className="flex items-center gap-2"
          style={active === "pvc" ? activeStyle : {}}
        >
          <Image src={PVCIcon} alt="PVC Trunking" width={24} height={24} />
          <span>PVC Trunking</span>
        </div>
            </Link>
      </div>
    </div>
  );
}
