import React, { FC } from "react";
import { Text, Link, Button } from "@geist-ui/core";
import NextLink from "next/link"; 

const TopBar: FC = () => {
    return (
        <div className="topbar">
            <NextLink href="/">
                <Link color={true}>PoS ! PoS</Link>
            </NextLink>
            <Button>
                Connect Wallet. Todo: wire up connection
            </Button>
        </div>
    )
}

export default TopBar;