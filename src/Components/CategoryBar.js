'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CgMenuGridR } from "react-icons/cg";
import { HiMiniBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

import SpotIcon from '../../public/Assets/spotlightIcon.png';
import ExtensionIcon from '../../public/Assets/extensionIcon.png';
import PVCIcon from '../../public/Assets/PVCIcon.png';
import SwitchIcon from '../../public/Assets/SwitchIcon.png';
import InsectIcon from '../../public/Assets/insect.png'

export default function CategoryBar({ active }) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const activeStyle = {
    borderLeft: "1px solid #ff5d5d",
    borderBottom:'1px solid #ff5d5d',
    borderTop :'1px solid #ff5d5d',
    borderRight :'1px solid #ff5d5d',
    fontWeight:'bold',
    paddingLeft: "1px",
    padding:'0.25rem 0.8rem',
  };

  return (
    <div className="max-w-8xl mx-auto p-4 md:p-8">
      <div className="bg-red-600 text-white text-xl font-medium p-4 flex justify-between items-center">
        <div className="flex gap-2">
          <CgMenuGridR size={25} />
          <span className="mt-1">All Categories</span>
        </div>
        
        {/* Hamburger menu button for tablet and below */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="xl:hidden text-2xl text-white"
        >
          {menuOpen ? <RxCross2 /> : <HiMiniBars3 />}
        </button>
      </div>

      {/* Desktop view - only shows on xl screens (1280px+) */}
      <div
        className="hidden xl:flex
                   flex-row justify-center items-center
                   gap-45
                   p-4 border border-[#E3001B]
                   text-[#E3001B] font-medium text-[18px]"
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
              fontWeight: "800",
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
            <option value="/liverpool">Liverpool Series</option>
            <option value="/Item_Oxford">Oxford Series</option>
            <option value="/Item_Rock">Rock Series</option>
          </select>
        </span>

        {/* Extension Socket */}
        <Link href="/Item_Extension">
          <div
            className="flex items-center gap-2 whitespace-nowrap"
            style={active === "extension" ? activeStyle : {}}
          >
            <Image src={ExtensionIcon} alt="Extension Icon" width={24} height={24} />
            <span>Extension Socket</span>
          </div>
        </Link>

        {/* Spot Lights */}
        <Link href="/Item_SpotLight">
          <div
            className="flex items-center gap-2 whitespace-nowrap"
            style={active === "spot" ? activeStyle : {}}
          >
            <Image src={SpotIcon} alt="Spot Lights" width={24} height={24} />
            <span>Spot Lights</span>
          </div>
        </Link>

        {/* Insect Killer */}
        <Link href="/Item_InsectKiller">
          <div
            className="flex items-center gap-2 whitespace-nowrap"
            style={active === "insectK" ? activeStyle : {}}
          >
            <Image src={InsectIcon} alt="Insect Killer" width={24} height={24} />
            <span>Insect Killer</span>
          </div>
        </Link>

        {/* PVC */}
        <Link href="/Item_Pvc">
          <div
            className="flex items-center gap-2 whitespace-nowrap"
            style={active === "pvc" ? activeStyle : {}}
          >
            <Image src={PVCIcon} alt="PVC Trunking" width={24} height={24} />
            <span>PVC Trunking</span>
          </div>
        </Link>
      </div>

      {/* Mobile/Tablet dropdown menu */}
      {menuOpen && (
        <div className="xl:hidden bg-white border border-[#E3001B] border-t-0">
          <div className="flex flex-col p-4 gap-4 text-[#E3001B] font-medium">
            {/* Switches & Socket */}
            <div
              className="flex items-center gap-2"
              style={active === "switch" ? activeStyle : {}}
            >
              <Image src={SwitchIcon} alt="Switch Icon" width={24} height={24} />
              <select
                style={{
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  outline: "none",
                  color: "#E3001B",
                  fontWeight: "800",
                  width: "100%",
                }}
                defaultValue=""
                onChange={(e) => {
                  const value = e.target.value;
                  if (value) {
                    router.push(value);
                    setMenuOpen(false);
                  }
                }}
              >
                <option value="" disabled hidden>
                  Switches and Socket
                </option>
                <option value="/liverpool">Liverpool Series</option>
                <option value="/Item_Oxford">Oxford Series</option>
                <option value="/Item_Rock">Rock Series</option>
              </select>
            </div>

            {/* Extension Socket */}
            <Link href="/Item_Extension" onClick={() => setMenuOpen(false)}>
              <div
                className="flex items-center gap-2"
                style={active === "extension" ? activeStyle : {}}
              >
                <Image src={ExtensionIcon} alt="Extension Icon" width={24} height={24} />
                <span>Extension Socket</span>
              </div>
            </Link>

            {/* Spot Lights */}
            <Link href="/Item_SpotLight" onClick={() => setMenuOpen(false)}>
              <div
                className="flex items-center gap-2"
                style={active === "spot" ? activeStyle : {}}
              >
                <Image src={SpotIcon} alt="Spot Lights" width={24} height={24} />
                <span>Spot Lights</span>
              </div>
            </Link>

            {/* Insect Killer */}
            <Link href="/Item_InsectKiller" onClick={() => setMenuOpen(false)}>
              <div
                className="flex items-center gap-2"
                style={active === "insectK" ? activeStyle : {}}
              >
                <Image src={InsectIcon} alt="Insect Killer" width={24} height={24} />
                <span>Insect Killer</span>
              </div>
            </Link>

            {/* PVC */}
            <Link href="/Item_Pvc" onClick={() => setMenuOpen(false)}>
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
      )}
    </div>
  );
}