'use client'
import { IBlog } from '@/types/blog';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import ReactTextareaAutosize from 'react-textarea-autosize';

const inputClass = 'w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-200 text-black';


const FromNewPost = () => {
    const [formData, setFormData] = useState<IBlog>({
        title: '',
        content: ''
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("data: ", formData);
    }

    return (
        <form className='max-w-md mx-auto p-4' onSubmit={handleSubmit}>
            <div className='mb-4'>
                <input
                    type="text"
                    className={inputClass}
                    placeholder='Enter the title'
                    name='title'
                    value={formData.title}
                    onChange={handleChange}
                />
            </div>
            <div className='mb-4'>
                <ReactTextareaAutosize
                    minRows={5}
                    name='content'
                    className={inputClass}
                    placeholder='Enter the content...'
                    value={formData.content}
                    onChange={handleChange}
                />
            </div>
            <button
                type='submit'
                className='bg-blue-800 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full disabled:bg-gray-400'
            >
                Submit
            </button>
        </form>
    );
};

export default FromNewPost;