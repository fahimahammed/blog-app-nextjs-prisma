import prisma from '@/lib/dbConfig';
import { format } from 'date-fns';
import React, { FC } from 'react';

interface CommentProps {
    postId: string
}

const Comments: FC<CommentProps> = async ({ postId }) => {
    let comments = [];
    try {
        comments = await prisma.comment.findMany({
            where: {
                postId
            },
            include: {
                author: true
            }
        });
    }
    catch (err) {
        throw new Error("something went wrong!")
    }

    return (
        <div className='mt-8'>
            <h2 className='text-2xl font-bold'>Comments</h2>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id} className='mb-4 bg-slate-300 p-2'>
                        <div className='flex items-center mb-2'>
                            <div className='text-blue-800 font-bold mr-2'>
                                {comment.author?.name}
                            </div>
                            <div className='text-gray-500 text-sm'>
                                {format(comment.createdAt, 'MMMM d, yyyy')}
                            </div>
                        </div>
                        <p>{comment.text}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Comments;