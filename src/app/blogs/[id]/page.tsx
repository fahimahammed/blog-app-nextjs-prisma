import Comments from '@/components/comments';
import FormComments from '@/components/form-comments';
import prisma from '@/lib/dbConfig';
import { format } from 'date-fns';
import React, { FC } from 'react';

interface IBlogDetails {
    params: {
        id: string
    }
}

const BlogDetails: FC<IBlogDetails> = async ({ params }) => {
    const post = await prisma.post.findFirst({
        where: {
            id: params.id
        },
        include: {
            author: true
        }
    });

    return (
        <div className='max-w-4xl mx-auto py-8'>
            <h1 className='text-3xl font-bold'>{post?.title}</h1>
            <div className='flex justify-between text-gray-600 my-2'>
                <p>Author: {post?.author?.name}</p>
                <p>{format(post?.createdAt as Date, 'MMMM d, yyyy')}</p>
            </div>
            <div className='mt-4 text-justify'>
                {post?.content}
            </div>

            <Comments postId={params.id} />
            <FormComments postId={params.id} />
        </div>
    );
};

export default BlogDetails;