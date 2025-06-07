'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { carFormSchema } from '@/lib/data'

const FormTextInput = ({ subject, title }) => {
    console.log(subject)

    const [topic, setTopic] = useState(subject);

    const {
        register,
        setValue,
        getValues,
        formState: { errors },
        handleSubmit,
        watch, } = useForm({
            resolver: zodResolver(carFormSchema),
            defaultValues: {
                make: "",
                model: "",
                year: "",
                price: "",
                km: "",
                color: "",
                fuelType: "",
                transmission: "",
                bodyType: "",
                seats: "",
                description: "",
                status: "AVAILABLE",
                featured: false,
            },
        })

    
    useEffect(() => {
        setTopic(subject); 
    },[])

    console.log('aa',topic)

    return (
        <div className="space-y-2">
            <Label htmlFor={topic} >{title}</Label>
            <Input
                id={topic}
                {...register("make")}
                placeholder="e.g. Tesla"
                className={errors.topic ? "border-red-500" : ""}
            />
            {errors.subject && (
                <p className="text-xs text-red-500 mt-2">
                    {errors.subject.message}
                </p>
            )}
        </div>
    )
}

export default FormTextInput