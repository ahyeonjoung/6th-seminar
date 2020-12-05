import './MainHeader.scss';
import Button from '../button/Button';
import MenuIcon from './mdi_dehaze.svg';
function MainHeader({history}){
    return(
    <header className="main-header">
        <img className="main-header__icon" src={MenuIcon} alt="Menu icon"/>
        <nav className="main-header__nav">
            <Button text="[ON SOPT]Web Part" onClickFunc={()=>history.push('/')}></Button>
            <span> / </span>
            <Button text="파트원소개"onClickFunc={()=>history.push('/members')}> </Button>
        </nav>
        <div className="empty">        </div>
        <div className="main-header__nav">
        <Button text="Share" />
        <Button text="Updates" />
        <Button text="Fav" />
        <Button text="..." />
        </div>
    </header>
    );

}
export default MainHeader;