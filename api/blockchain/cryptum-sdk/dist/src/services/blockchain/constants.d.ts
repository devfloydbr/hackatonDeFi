export namespace CELO_CONTRACT_ADDRESS {
    const testnet: string;
    const mainnet: string;
}
export namespace CUSD_CONTRACT_ADDRESS {
    const testnet_1: string;
    export { testnet_1 as testnet };
    const mainnet_1: string;
    export { mainnet_1 as mainnet };
}
export namespace CEUR_CONTRACT_ADDRESS {
    const testnet_2: string;
    export { testnet_2 as testnet };
    const mainnet_2: string;
    export { mainnet_2 as mainnet };
}
export namespace BSC_COMMON_CHAIN {
    export namespace testnet_3 {
        const base: string;
        namespace chain {
            const chainId: number;
            const networkId: number;
        }
    }
    export { testnet_3 as testnet };
    export namespace mainnet_3 {
        const base_1: string;
        export { base_1 as base };
        export namespace chain_1 {
            const chainId_1: number;
            export { chainId_1 as chainId };
            const networkId_1: number;
            export { networkId_1 as networkId };
        }
        export { chain_1 as chain };
    }
    export { mainnet_3 as mainnet };
}
export var TRANSFER_METHOD_ABI: {
    constant: boolean;
    inputs: {
        name: string;
        type: string;
    }[];
    name: string;
    outputs: {
        name: string;
        type: string;
    }[];
    payable: boolean;
    stateMutability: string;
    type: string;
}[];
export var TRANSFER_COMMENT_METHOD_ABI: {
    constant: boolean;
    inputs: {
        internalType: string;
        name: string;
        type: string;
    }[];
    name: string;
    outputs: {
        internalType: string;
        name: string;
        type: string;
    }[];
    payable: boolean;
    stateMutability: string;
    type: string;
}[];
export namespace CELO_ACCOUNTS_ADDRESS {
    const testnet_4: string;
    export { testnet_4 as testnet };
    const mainnet_4: string;
    export { mainnet_4 as mainnet };
}
export namespace CELO_ELECTION_ADDRESS {
    const testnet_5: string;
    export { testnet_5 as testnet };
    const mainnet_5: string;
    export { mainnet_5 as mainnet };
}
export namespace CELO_LOCKEDGOLD_ADDRESS {
    const testnet_6: string;
    export { testnet_6 as testnet };
    const mainnet_6: string;
    export { mainnet_6 as mainnet };
}
export namespace TOKEN_TYPES {
    const ERC20: string;
    const ERC721: string;
    const ERC1155: string;
}
/**
 * Blockchain protocols
 */
export type Protocol = string;
export namespace Protocol {
    const BITCOIN: string;
    const BSC: string;
    const CELO: string;
    const ETHEREUM: string;
    const STELLAR: string;
    const RIPPLE: string;
    const HATHOR: string;
    const CARDANO: string;
    const AVAXCCHAIN: string;
}
