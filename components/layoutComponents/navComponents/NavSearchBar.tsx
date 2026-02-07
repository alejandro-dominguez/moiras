import { IoSearch } from 'react-icons/io5';

const NavSearchBar = () => {
    return (
        <div className='flex items-center gap-1.5 border-b pb-0.5 mt-0.5 border-slate-900/70'>
            <IoSearch size={19} />
            <input
                type='text'
                placeholder='Buscar'
                className='w-24 placeholder-slate-600'
            />
        </div>
    )
}

export default NavSearchBar;
