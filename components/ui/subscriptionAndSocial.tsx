import Image from 'next/image';
import Link from 'next/link';

export default function SubscriptionAndSocials() {
    return (
        <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-around gap-25">
            <div className="flex flex-col justify-between gap-25">
                <p className='text-lg opacity-50'>
                    Don’t miss <span className='font-bold'>$KLINK News & Promotions</span>, subscribe!
                </p>
                <div className='flex justify-between border-1 rounded-full border-socials'>
                    <input
                        type="text"
                        placeholder='Enter Email Address'
                        className='pl-15'
                    />
                    <button type='submit' className='w-98 h-50 m-10 text-white bg-socials rounded-full'>Submit</button>
                </div>
            </div>
            <div className="flex items-center justify-center gap-20">
                <Link href={"https://x.com/klinkfinance"} target='_blank' rel="noopener noreferrer">
                    <Image src="/img/social/x.png" alt="X logo" width={60} height={60} />
                </Link>
                <Link href={"https://t.me/klinkfinance"} target='_blank' rel="noopener noreferrer">
                    <Image src="/img/social/telegram.png" alt="Telegram logo" width={60} height={60} />
                </Link>
                <Link href={"https://discord.gg/klinkfinance"} target='_blank' rel="noopener noreferrer">
                    <Image src="/img/social/discord.png" alt="Discord logo" width={60} height={60} />
                </Link>
                <Link href={"https://www.youtube.com/@klinkfinance"} target='_blank' rel="noopener noreferrer">
                    <Image src="/img/social/youtube.png" alt="Youtube logo" width={60} height={60} />
                </Link>
                <Link href={"https://www.linkedin.com/company/klinkfinance"} target='_blank' rel="noopener noreferrer">
                    <Image src="/img/social/linkedin.png" alt="LinkedIn logo" width={60} height={60} />
                </Link>
            </div>
        </div>
    )
}