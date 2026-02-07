import NavBar from './navComponents/NavBar';

const Header = () => {
    return (
        <header>
            <div className='mx-auto px-2 h-17 flex items-center justify-between'>
                <NavBar />
            </div>
        </header>
    )
}

export default Header;
