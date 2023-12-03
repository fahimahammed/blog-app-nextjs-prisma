'use client'
import React, { ChangeEvent, useState } from 'react';

const FormComments = () => {
    const [comment, setComment] = useState<string>("");
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setComment(event.target.value);
    };

    const handleSubmit = () => {
        console.log(comment)
    };

    return (
        <div>
            <div className='mt-4'>
                <label
                    htmlFor="comment"
                    className='block text-gray-800 text-sm font-bold mb-2'
                >
                    Add Comment
                </label>
                <input
                    type='text'
                    className='w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300'
                    name='comment'
                    value={comment}
                    onChange={handleChange}
                />
                <button
                    onClick={handleSubmit}
                    className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-2 disabled:bg-gray-400'
                >
                    Post Comment
                </button>
            </div>
        </div>
    );
};

export default FormComments;