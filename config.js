const projectId = process.env.NEXT_PUBLIC_PROJECT_ID as string; // Pastikan Anda telah menambahkan PROJECT_ID di .env

export const educhain = {
    id: 656476,
    name: "EDUCHAIN",
    iconUrl: "https://app.sailfish.finance/svgs/edu.svg",
    iconBackground: "#fff",
    nativeCurrency: { name: "EDUCHAIN", symbol: "EDU", decimals: 18 },
    rpcUrls: {
        default: { http: ["https://rpc.open-campus-codex.gelato.digital"] },
    },
    blockExplorers: {
        default: {
            name: "Blockscout",
            url: "https://opencampus-codex.blockscout.com",
        },
    },
} as const satisfies Chain;
