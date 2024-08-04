import { ModeToggleTheme } from "@/components/ModeToggleTheme";

import React from "react";
import WalletMenuButton from "@/components/Header/WalletMenuButton";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full flex items-center justify-end p-3 gap-4">
      <ul className="flex space-x-3">
        <li>
          <Link href={"/"}>Create</Link>
        </li>
        <li>
          <Link href={"/transfer"}>Transfer</Link>
        </li>
        <li>
          <Link href={"/burn"}>Burn</Link>
        </li>
        <li>
          <Link href={"/delegate"}>Delegate</Link>
        </li>
      </ul>
      <WalletMenuButton />
      <ModeToggleTheme />
    </div>
  );
}
