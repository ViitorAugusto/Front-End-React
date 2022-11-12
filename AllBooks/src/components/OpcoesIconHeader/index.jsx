import { User, ShoppingBag } from "phosphor-react"
export function OpcoesIconHeader() {
  
const iconsHeader = [ <User size={24} /> , <ShoppingBag size={24} /> ]
    return (
        <ul>
        {      
            iconsHeader.map(icon => {
                return <li key={icon}>{icon}</li>
            })
            }
        </ul>
  )
}