"use client";
import { produtos } from './components/Itens';
import Image from 'next/image';

const adicionarAoCarrinho = (produto: any) => {
  //
  const carrinhoAtual = JSON.parse(sessionStorage.getItem('carrinho') || '[]');

  // ve se ja existe
  const produtoExistente = carrinhoAtual.find((item: any) => item.id === produto.id);

  if (produtoExistente) {
    // se ja existe so aumenta a quantidade
    produtoExistente.quantidade += 1;
  } else {
    // se nao, so adiciona
    const novoProduto = { ...produto, quantidade: 1 };
    carrinhoAtual.push(novoProduto);
  }
  // atualiza o session storage
  sessionStorage.setItem('carrinho', JSON.stringify(carrinhoAtual));

  alert(`${produto.nome} foi adicionado ao carrinho!`);
};

export default function HomePage() {
  return (
    <div className='bg-gray-300'>
      <div className="mx-auto max-w-md">
        <h1 className="border-b border-black text-center pt-2 text-lg text-black">Produtos</h1>
      </div>
      <div className="grid grid-cols-4 gap-5 max-w-screen-lg mx-auto p-5">
        {produtos.map((produto) => (
          <div key={produto.id} className="h-[250px] border border-gray-300 bg-white shadow-lg flex flex-col">
            <Image
              src={produto.imagem}
              alt={produto.nome}
              className="h-[150px]"
            />
            <div className="flex flex-col justify-between  p-2 flex-grow">
              <h1 className="text-black">{produto.nome}</h1>
              <h1 className="text-black">R$ {produto.preco}</h1>

              <button
                className="border rounded-lg text-black hover:bg-green-400"
                onClick={() => adicionarAoCarrinho(produto)}>
                adicionar ao carrinho
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}
