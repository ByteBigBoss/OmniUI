import React from 'react'

const WrapperBody = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className='w-full flex flex-col items-center'>
            <div className='desktop:w-[1133px] wide:w-[1400px] mobile:w-full tab:w-[90%] mobile:box-border mobile:px-[16px] '>
                {children}
            </div>
        </div>
    )
}

export default WrapperBody
