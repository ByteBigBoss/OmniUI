import { GitHubLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'
import WrapperBody from '@/components/wrappers/WrapperBody'
import { TextHoverEffect } from '@/components/ui/text-hover-effect'
import { Site } from '@/config/site'

const Footer = () => {
    return (
        <div className='z-[100] flex w-full flex-col items-center border-t border-[#0000001f] dark:border-[#ffffff1f] py-[20px] bg-[#f7f7f73f] dark:bg-[#00000025] backdrop-blur-sm'>
            <WrapperBody>
             <div className='flex items-center justify-between pt-8 mobile:flex-col mobile:gap-6'>
                    <Link href={Site.gitHubUrl} className='flex items-center gap-2 text-[12px] font-medium opacity-65'><GitHubLogoIcon width={20} height={20} /> {Site.gitHubUser}</Link>

                    <div className='text-[12px]   flex items-center gap-4'>
                        <div>
                            <span className='opacity-65'>Author:</span>
                            <Link href={Site.authorPortfolio} legacyBehavior>
                                <a target="_blank" rel="noopener noreferrer" className='hover:underline font-medium opacity-80 hover:opacity-100' > {Site.author}</a>
                            </Link>
                        </div>
                        <div>
                            <span className='opacity-65'>Organization:</span>
                            <Link href={Site.orgUrl} legacyBehavior>
                                <a target="_blank" rel="noopener noreferrer" className='hover:underline font-medium opacity-80 hover:opacity-100' > {Site.org}</a>
                            </Link>
                        </div>
                    </div>

                </div>

            </WrapperBody >
            <TextHoverEffect text={Site.siteName} />

        </div >
    )
}

export default Footer
