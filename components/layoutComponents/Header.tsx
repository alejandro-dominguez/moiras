import NavBar from './navComponents/NavBar';

const Header = () => {
    return (
        <header>
            <div className='mx-auto h-17 flex items-center justify-between'>
                <NavBar />
            </div>
        </header>
    )
}

export default Header;
