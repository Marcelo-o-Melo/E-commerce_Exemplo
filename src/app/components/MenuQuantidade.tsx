import { useState } from 'react';

interface MenuQuantidadeProps {
    quantidade: number;
    setQuantidade: (quantidade: number) => void;
}

export default function MenuQuantidade({ quantidade, setQuantidade }: MenuQuantidadeProps) {
    return (
        <div className='mb-3 h-[20px] flex'>
            <label htmlFor="quantidade" className="mr-2 text-black mb-2 ml-2">
                Quantidade
            </label>
            <select
                id="quantidade"
                value={quantidade}
                onChange={(event) => setQuantidade(parseInt(event.target.value))}
                className="mr-2 text-center text-black  block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
                {[...Array(10)].map((_, index) => (
                    <option key={index + 1} value={index + 1}>
                        {index + 1}
                    </option>
                ))}
            </select>
        </div>
    );
}
