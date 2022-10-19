import React from 'react'

const PageLoader = () => {
    return(
        <>
            <div className="bg-[rgba(238,238,238,.6)] h-screen w-full absolute left-0 top-0 flex items-center justify-center z-50">
                <div className="absolute left-[calc(50% - 4em)] top-[calc(50% - 4em)] transition-opacity z-50">
                    <div
                        className="animate-spin border-2 border-[rgba(0, 0, 0, 0.2)] border-l-[17.6px] border-l-primary__color w-[10em] h-[10em] rounded-full"/>
                    <div className="z-50 bg-[url('/assets/logo.png')] bg-contain bg-center bg-no-repeat h-full w-[50%] absolute top-0 translate-x-[50%] translate-y-0"/>
                </div>
            </div>
        </>
    )
}
export default PageLoader

