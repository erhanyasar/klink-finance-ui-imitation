import Image from 'next/image';

export default function TheKlinkMission() {
    return (
        <div className="max-w-screen flex flex-col sm:flex-row items-center justify-center">
            <div className="w-1/2 flex flex-col">
                <h1 className="w-[325px] h-[41px] text-figures font-normal leading-[170%]">The Klink Mission</h1>
                <h1 className="text-5xl">Activating Millions of Web3 Users Through AI-Enabled Wealth Creation Technology</h1>
                <p className='opacity-60 mt-[15px]'>
                    Klink operates a dual ecosystem: Serving the Klink community through its wealth creation
                    platform; Simultaneously, as a Web3 partner integration layer, offering easy-to-embed tools
                    for user activation and monetization.
                </p>
            </div>
            <Image
                src="/img/mission-statement.png"
                alt="mission statement flow visual"
                className="top-1895 left-904 rounded-lg w-full sm:w-1/2"
                width={851.4841918945312}
                height={520}
            />
        </div>
    )
}