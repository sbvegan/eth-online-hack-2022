import React, { FC, useEffect, useState } from "react";
import { Link, Button, Modal, Text } from "@geist-ui/core";
import NextLink from "next/link"; 

import { 
    useAccount, 
    useConnect,
    useDisconnect,
    useEnsAvatar,
    useEnsName
} from "wagmi"

const TopBar: FC = () => {
    const { address, connector, isConnected } = useAccount()
    const { data: ensAvatar } = useEnsAvatar({ addressOrName: address })
    const { data: ensName } = useEnsName({ address })
    const { 
        connect, 
        connectors, 
        error, 
        isLoading, 
        pendingConnector 
    } = useConnect()
    const { disconnect } = useDisconnect()

    const [buttonText, setButtonText] = useState("Connect Wallet")
    const [buttonDisabled, setButtonDisabled] = useState(false)

    useEffect(() => {
        if (isConnected) {
            setButtonText("Wallet Connected")
            setButtonDisabled(true)
        } else {
            setButtonText("Connect Wallet")
            setButtonDisabled(false)
        }
    }, [isLoading, error, connectors])

    const [modalVisibility, setModalVisibility] = useState(false)
    const modalHandler = () => setModalVisibility(true)
    const closeModalHandler = () => {
      setModalVisibility(false)
    }

    return (
        <div className="topbar">
            <NextLink href="/">
                <Link color={true}>PoS ! PoS</Link>
            </NextLink>
            {isConnected ? 
                <Text>Account: {ensName ? `${ensName} (${address})` : address}</Text>
                :
                <Button 
                    disabled={buttonDisabled}
                    onClick={modalHandler}
                >
                {buttonText}
            </Button>
            }
            
            <Modal 
                visible={modalVisibility} 
                onClose={closeModalHandler}
            >
                <Modal.Title>Connect Wallet</Modal.Title>
                <Modal.Subtitle>Choose your wallet provider.</Modal.Subtitle>
                {connectors.map((connector) => (
                    <Button
                    disabled={!connector.ready}
                    key={connector.id}
                    onClick={() => connect({ connector })}
                    >
                    {connector.name}
                    {!connector.ready && ' (unsupported)'}
                    {isLoading &&
                        connector.id === pendingConnector?.id &&
                        ' (connecting)'}
                    </Button>
                ))}
            </Modal>
            
            {/* todo: error handling */}
            {/* {error && <div>{error.message}</div>} */}
        </div>
    )
}

export default TopBar;