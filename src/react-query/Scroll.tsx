import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import usePosts from './hooks/usePosts';

const Spinner = () => {
  return (
    <p>Loading...</p>
  )
}

const Scroll = () => {
  const pageSize = 20
  const { data: posts, isLoading, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } = usePosts({ pageSize });

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>;

  const fetchedGamesCount = posts?.pages.reduce((total, page) => total + page.length, 0) || 0;

  return (
    <>
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        hasMore={!!hasNextPage} // !! means if "hasNextPage" is undefinied transform it to "boolean" cause "hasMore" only accept boolean not undefinied
        next={() => fetchNextPage()}
        loader={<Spinner />}
      >
        <ul className="list-group">
          {posts.pages.map((post, i) => (
            <React.Fragment key={i}>
              {post.map((post) => (
                <p key={post.id}>{post.title}</p>
              ))}
            </React.Fragment>
          ))}
        </ul>
      </InfiniteScroll>
    </>
  );
};

export default Scroll;
