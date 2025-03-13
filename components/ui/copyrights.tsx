import Image from 'next/image';

export default function Copyrights() {
    return (
        <div>
            <Image
                src="/img/hr.png"
                alt="Horizontal line"
                width={178.9808349609443}
                height={1.51}
                className="my-[2.5rem] w-full block h-[0.1rem]"
            />
            <p className='text-sm opacity-20'>Copyright © 2024 Klink Finance. All rights reserved.</p>
            <Image
                src="/img/hr.png"
                alt="Horizontal line"
                width={178.9808349609443}
                height={1.51}
                className="my-[2.5rem] w-full block md:hidden h-[0.1rem]"
            />
            <div className='block md:hidden text-sm opacity-20'>
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
        </div>
    )
}