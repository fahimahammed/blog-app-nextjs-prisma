import Comments from '@/components/comments';
import FormComments from '@/components/form-comments';
import React from 'react';

const BlogDetails = () => {
    return (
        <div className='max-w-4xl mx-auto py-8'>
            <h1 className='text-3xl font-bold'>Post Tiltle</h1>
            <p>Written by: author name</p>
            <div className='mt-4'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem unde, quae repellat modi illo cupiditate ullam vitae veritatis voluptate hic similique quia dignissimos quisquam in non nulla neque facere. Reiciendis amet veniam asperiores id sunt mollitia a ratione tempora accusantium placeat impedit aliquam sequi nam architecto, molestiae rem earum ipsa.
            </div>

            <Comments />
            <FormComments />
        </div>
    );
};

export default BlogDetails;