import { IoRefreshCircleSharp } from 'react-icons/io5';

const ErrorRefresh = ({ reset }: { reset: () => void }) => {
    return (
        <button
            onClick={() => reset()}
            className='rounded-md bg-darker shadow shadow-darker/50
            text-white flex gap-2 py-2 w-35 items-center justify-center'
        >
            <span>
                Refrescar
            </span>
            <IoRefreshCircleSharp
                size={30}
                className='block text-lighter drop-shadow-amber-50/15 drop-shadow-xs'
            />
        </button>
    )
}

export default ErrorRefresh;
