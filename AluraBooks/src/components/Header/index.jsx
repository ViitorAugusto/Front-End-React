import Logo from '../../img/Logo.jpg';
import { OpcoesHeader } from '../OpcoesHeader';
import { OpcoesIconHeader } from '../OpcoesIconHeader';
import './styles.css';
export function Header() {
  return (
    <div>
      <header>
      
        <nav>
            <img className='logo' src={Logo} alt="" />
            <p><strong>All</strong>Books</p>
              <OpcoesHeader />
              <OpcoesIconHeader />
        </nav>
      </header>
    </div>
  )
}