import { MapPin, ShoppingCart } from 'phosphor-react'
import Logo from '../../assets/logo.svg'

// Styles //
import { HeaderContainer, LocationBadge, CartButton } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Copo de café" />
      <div>
        <LocationBadge>
          <MapPin size={18} weight="fill" />
          Rio de janeiro , RJ
        </LocationBadge>

        <CartButton>
          <ShoppingCart size={18} weight="fill" />
        </CartButton>
      </div>
    </HeaderContainer>
  )
}
