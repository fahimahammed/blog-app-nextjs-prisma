'use client'

import { IBlog } from '@/types/blog';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, FormEvent, useState } from 'react';
import ReactTextareaAutosize from 'react-textarea-autosize';

const inputClass = 'w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-200 text-black';

const FromNewPost = () => {
    const [formData, setFormData] = useState<IBlog>({
        title: '',
        content: ''
    });

    const router = useRouter();

    const { data } = useSession();

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('api/posts', formData);
            if (response.status === 200) {
                router.push(`/blogs/${response.data.data.id}`)
            }
        }
        catch (err) {
            console.error(err)
        }
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
                disabled={!data?.user?.email}
                type='submit'
                className='bg-blue-800 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full disabled:bg-gray-400'
            >
                Submit
            </button>
        </form>
    );
};

export default FromNewPost;