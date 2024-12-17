import React from 'react'
import pricingData from '@/components/pricingSection/pricingData';

interface Props {
    params: Promise<{
        type: string; params: string
    }>;
}
const BuyForm = async ({ params }: Props) => {
    const resolvedParams = await params;
    const plan = resolvedParams
    if (!plan) return <p>No hay un plan valido seleccionado</p>
    const planSelect = pricingData.find((p) => p.type === plan.type)
    console.log(planSelect)
    return (
        <div>
            <div className='mt-24 text-white text-2xl'>
                <p>{planSelect?.type}</p>
            </div>
        </div>
    )
}

export default BuyForm