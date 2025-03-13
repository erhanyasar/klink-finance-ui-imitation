import Image from 'next/image';

export default function MissionAndResources () {
    return (
        <div className="flex flex-col md:flex-row items-center justify-around gap-[5rem]">
            <div className="w-2/5 flex flex-col items-start justify-center">
                <Image src="img/klink-logo.svg" alt="Klink logo" width={280} height={46} />
                <p className='opacity-50 mt-[66px] text-lg font-normal'>
                    Our mission is to activate millions of Web3 users through AI enabled wealth creation technology,
                    mutually servicing our community platform and providing partners with easy-to-embed integration
                    tools to assist their activation and monetization, functioning as a robust earnings infrastructure
                    for dApps, platforms, gaming, Web3 media, mini-apps, and blockchain ecosystems.
                </p>
            </div>
            <div className="h-[350px] flex flex-col items-center justify-between">
                <h4 className="text-2xl font-extrabold">Useful Resources</h4>
                <ul className="h-[300px] flex flex-col items-center justify-around">
                    <li className="text-lg font-normal">Buy $KLINK</li>
                    <li className="text-lg font-normal">Stake $KLINK</li>
                    <li className="text-lg font-normal">Klink Docs</li>
                    <li className="text-lg font-normal">{' '}</li>
                    <li className="text-lg font-normal">Media Kit</li>
                    <li className="text-lg font-normal">Link3</li>
                </ul>
            </div>
        </div>
    )
}