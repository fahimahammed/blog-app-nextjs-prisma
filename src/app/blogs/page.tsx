import prisma from '@/lib/dbConfig';
import Link from 'next/link';
import React from 'react';

const BlogsPage = async () => {
    let posts = [];
    try {
        posts = await prisma.post.findMany({
            orderBy: {
                createdAt: 'desc'
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
        <div className='max-w-4xl mx-auto py-8'>
            <h1 className='text-3xl font-bold mb-4'>Blogs</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {
                    posts.map((post) => (
                        <Link key={post.id} href={`/blogs/${post.id}`} className='bg-white p-4 rounded-md shadow'>
                            <h2 className='text-xl font-bold mb-2'>{post.title}</h2>
                            <p className='text-gray-600 text-sm'>@{post?.author?.name}</p>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default BlogsPage;