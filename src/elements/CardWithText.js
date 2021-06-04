import React from 'react'
import { motion } from 'framer-motion'

function CardWithText(props) {
    return (
        <div class="mt-10">
            
            <div class="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <a href={props.url}>
                <div className="w-full h-64 overflow-hidden">
                        <motion.img class="object-cover w-full max-h-full h-64" src={props.image} alt={props.title} whileHover={{ scale: 1.1 }} />
                </div>

                <div class="p-6">
                    <div>
                        <span class="text-xs font-medium text-green-500 uppercase dark:text-blue-400">{props.tags}</span>
                        <a href="#" class="block mt-2 text-2xl font-semibold text-gray-800 dark:text-white hover:text-gray-600 hover:underline">{props.title}</a>
                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{props.description}</p>
                    </div>

                    {/* <div class="mt-4">
                        <div class="flex items-center">
                            <div class="flex items-center">
                                <img class="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar" />
                                    <a href="#" class="mx-2 font-semibold text-gray-700 dark:text-gray-200">Jone Doe</a>
                    </div>
                                <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span>
                            </div>
                        </div> */}
                </div>
                </a>
            </div>
        </div>
    )
}

export default CardWithText;