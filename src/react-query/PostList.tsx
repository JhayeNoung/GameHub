
import React from 'react';
import { usePosts } from './hooks/usePosts';

const PostList = () => {
  const pageSize = 20
  const { data: posts, isLoading, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } = usePosts({ pageSize });

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {posts.pages.map((post, i) => (
          <React.Fragment key={i}>
            {post.map((post) => (
              <p key={post.id}>{post.title}</p>
            ))}
          </React.Fragment>
        ))}
      </ul>
      <button
        className='btn btn-primary'
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetching}
      >
        {isFetchingNextPage
          ? 'Loading more...'
          : hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
      </button>
    </>
  );
};

export default PostList;
