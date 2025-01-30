import { Download } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface Props {
    pdf: string

}

const PdfRedirect = ({pdf}: Props) => {
    return (
        <div className="pl-2 py-2">
            <Link target="_blank" className="text-primary flex items-center gap-2 hover:underline" href={pdf} passHref>
                visitar programa de estudios <Download size={16} />
            </Link>
        </div>
    )
}

export default PdfRedirect