'use client';

import { Oval } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className='w-full grid place-items-center min-h-svh'>
            <div className='-mt-70'>
                <Oval
                    visible={true}
                    height='70'
                    width='70'
                    color='#022AE0'
                    secondaryColor='#476DFD'
                    strokeWidth='4'
                    ariaLabel='oval-loading'
                />
            </div>
        </div>
    )
}

export default Loading;
