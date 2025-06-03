'use client'

import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqItems } from '@/lib/data';


const AccordionWrapper = () => {
  return (
        <Accordion type='single' collapsible className='w-full'>
            {faqItems.map((item, idx) => (

                <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger>
                        {item.question}
                    </AccordionTrigger>
                    <AccordionContent>
                        {item.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}

export default AccordionWrapper