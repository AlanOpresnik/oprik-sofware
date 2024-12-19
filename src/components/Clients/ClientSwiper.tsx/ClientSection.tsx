import React from 'react'
import { cardData } from '../ClientsData/clientData'
import Image from 'next/image'
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const ClientSection = () => {
    return (
        <div className="">
            <p className="text-4xl mb-4 font-semibold text-white">Nuestros clientes</p>
            <div className="flex flex-col gap-12  max-w-[1170px]">
                {cardData.map((client) => (
                    <div key={client.name} className="flex gap-2 ">
                        <div key={client.web} className=''>
                            <Image

                                width={500}
                                height={300}
                                src={client.webImg}
                                alt={client.name}
                                className=" rounded-xl max-w-[400px] min-h-[240px] object-cover"
                            />
                        </div>
                        <div className='flex flex-col gap-2 px-1'>
                            <div className='flex items-center gap-1'>
                                <h3 className="text-2xl font-semibold text-white">{client.name}</h3>
                                <span className='text-primary mt-1.5'>{`(${client.plan})`}</span>
                            </div>
                            <p className='text-white max-w-[600px] '>{client.overview}</p>
                            <p className='text-white'> <span>{client.founder}</span> <span className='text-primary'>{client.personRole} </span></p>
                            <div className='flex gap-4 mt-1'>
                             
                                {client.images.map((image => (
                                    <Image
                                        width={60}
                                        height={60}
                                        key={image}
                                        src={image}
                                        alt="Technology used"
                                        className=" w-[30px] h-[30px] object-contain"
                                    />
                                )))}
                            </div>
                            <Link className='px-5 mt-2 py-2 flex gap-2 text-white w-fit border rounded-xl text-normal hover:bg-slate-50 transition-colors hover:!text-black font-semibold' href={client.web} target='_blank'>Visitar pagina web <ExternalLink className='mt-.5' size={20} /></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClientSection;
