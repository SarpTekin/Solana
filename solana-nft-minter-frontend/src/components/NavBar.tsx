import type { FC, ReactNode } from 'react'
import { useState, useEffect } from 'react'
import { HStack, Spacer } from '@chakra-ui/react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

import styles from '../styles/Home.module.css'

const NavBar: FC = () => {
    const [walletButton, setWalletButton] = useState<ReactNode>(null)

    useEffect(() => {
        setWalletButton(
            <WalletMultiButton className={styles['wallet-adapter-button-trigger']} />
        )
    }, [])

    return (
        <HStack width="full" padding={4}>
            <Spacer />
            {walletButton}
        </HStack>
    )
}

export default NavBar