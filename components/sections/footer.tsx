import Image from 'next/image';

export default function Footer() {
    return (
        <>
            <Image src="pointed-background.svg" alt="Klink logo" fill />
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                <div>
                    <Image src="klink-logo.svg" alt="Klink logo" width={380} height={46} />
                    <p>
                    Our mission is to activate millions of Web3 users through AI enabled wealth creation technology,
                    mutually servicing our community platform and providing partners with easy-to-embed integration
                    tools to assist their activation and monetization, functioning as a robust earnings infrastructure
                    for dApps, platforms, gaming, Web3 media, mini-apps, and blockchain ecosystems.
                    </p>
                </div>
                <p>Don’t miss $KLINK News & Promotions, subscribe!</p>
                <div>
                <h4>Useful Resources</h4>
                Buy $KLINK Stake $KLINK Klink Docs Media Kit Link3
                </div>
                <p>Copyright © 2024 Klink Finance. All rights reserved.</p>
                <div>
                    <p>
                        Klink Finance sp. z o.o. is a limited liability company registered in Poland with company number
                        0000957722 with a registered office address at Twarda, 18, 00-105 Warsaw, Poland. Klink Finance is
                        registered in the Virtual Currency Registry under the control of the Chamber of Tax Administrations
                        in Poland under number RDWW-570. Digital currency is not legal tender, is not backed by national
                        governments, and crypto accounts held with Klink Finance are not subject to FDIC, FSCS, ECB or
                        similar protections. Digital currency values are not static and fluctuate due to market changes.
                        Not all products and services are available in all geographic areas and are subject to applicable
                        terms and conditions. Eligibility for particular products and services is subject to final
                        determination by Klink Finance. Rewards related to Klink products are subject to change over time.
                    </p>
                </div>
            </footer>
      </>
    )
}