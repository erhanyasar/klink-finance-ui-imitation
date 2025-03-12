import Image from 'next/image';

export default function MissionStatement () {
    return (
        <div className="flex flex-col items-center">
            <Image src="img/pointed-background.svg" alt="Klink logo" fill />
            <p>Trusted by the best in Web3</p>
            <Image
                src="/img/web3.png"
                alt="WEB3 group"
                className="top-464.41 left-0"
                width={1778.9808349609375}
                height={105.8917236328125}
            />
            <Image
                src="/img/mission-statement.png"
                alt="mission statement flow visual"
                className="top-1895 left-904 rounded-lg"
                width={851.4841918945312}
                height={520}
            />
        </div>
    )
}