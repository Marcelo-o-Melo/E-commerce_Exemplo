// components/Navbar.js
import Link from 'next/link';
import lupa from '../assets/magnifying-glass-solid.svg';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Link da Loja - Esquerda */}
        <div className="text-white text-lg">
          <Link href="/" className="hover:text-gray-400">
            Loja Aleatoria
          </Link>
        </div>

        {/* Div do Input e Button - Centro */}
        <div className="flex items-center  bg-gray-500 w-1/2 mx-auto max-w-xl">
          <input className="bg-gray-600 text-white px-2 py-1 outline-none flex-grow " placeholder="Buscar..."></input>
          <button className="ml-auto">
                <Image
                  src={lupa}
                  alt="cartplus"
                  title="adicionar ao carrinho"
                  className="max-w-[30px] max-h-[30px] p-1 fill-current text-white"
                />
              </button>
        </div>

        {/* Links de Pedidos e Carrinho - Direita */}
        <div className="text-white text-lg flex space-x-20">
          <Link href="/PagePedidos" className="hover:text-gray-400">
            Pedidos
          </Link>
          <Link href="/PageCarrinho" className="hover:text-gray-400">
            Carrinho
          </Link>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
