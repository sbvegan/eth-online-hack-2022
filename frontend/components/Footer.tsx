import React, { FC } from "react";
import { Link } from "@geist-ui/core";

const Footer: FC = () => {
    return (
        <footer className="footer">
            <Link href="https://github.com/sbvegan/eth-online-hack-2022">
                Github {"<"}
            </Link>
            <Link href="https://online.ethglobal.com/">
                {">"} ETHOnline 2022
            </Link>
        </footer>
    )
}

export default Footer;