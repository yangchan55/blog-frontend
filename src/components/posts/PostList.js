import React from 'react';
import styled from 'styled-components';
import MaxResponsive from '../common/MaxResponsive';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';
import { Link } from 'react-router-dom';

const PostListBlock = styled(MaxResponsive)`
  margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

/*
const PostItemBlock = styled.div`
  width: 100%;
  padding-top: 3rem;
  padding-bottom: 3rem;
  // 맨 위 포스트는 padding-top 없음
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-top: 2rem;
  }
`;
*/

const PostItemCardBoxBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
`;

const PostItemBlock = styled.div`
  width: 19rem;
  border-radius: 4px;
  flex-direction: column;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  transition-duration: 0.5s;
  &:hover {
    transform: translateY(-10px);
  }
  h2 {
    font-size: 1.2rem;
    margin-bottom: 0;
    margin-top: 0;
    padding: 1rem;
    &:hover {
      color: ${palette.gray[6]};
    }
    height: 2rem;
  }
  p {
    font-size: 0.9rem;
  }
  a:hover {
    cursor: pointer;
  }
`;

const PostCardBlock = styled.div`
  height: 80%;
  max-height: 20rem;
  min-height: 20rem;
`;

const PostImageBlock = styled.div`
  img {
    width: 100%;
    height: 170px;
    object-fit: cover;
  }
`;

const PostContentBlock = styled.p`
  padding-top: 0.5rem;
  padding-right: 1rem;
  padding-left: 1rem;
`;

const PostItem = ({ post }) => {
  const { publishedDate, user, tags, title, body, image, _id } = post;
  /*
  const imgArr = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];
  let imgSrc =
    'http://localhost:4000/' +
    imgArr[Math.floor(Math.random() * imgArr.length)];
  const [image, setImage] = useState('<img src="' + imgSrc + '"/>');

  useEffect(() => {
    const imgReg = /<img[^>]*src=[^>]*>/g;
    const isImage = imgReg.exec(body);
    if (isImage !== null) {
      setImage(isImage[0]);
    }
  }, [body, image]);
  */

  return (
    <PostItemBlock>
      <PostCardBlock>
        <Link to={`/${user.username}/${_id}`}>
          <PostImageBlock
            dangerouslySetInnerHTML={{
              __html: image,
            }}
          />
          <h2>{title}</h2>
          <PostContentBlock
            dangerouslySetInnerHTML={{ __html: body.replace(/<[^>]*>?/g, ' ') }}
          />
        </Link>
      </PostCardBlock>
      <SubInfo
        username={user.username}
        publishedDate={new Date(publishedDate)}
      />

      <Tags tags={tags} />
    </PostItemBlock>
  );
};

const PostList = ({ posts, loading, error, showWriteButton }) => {
  if (error) {
    return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
  }
  return (
    <PostListBlock>
      <WritePostButtonWrapper>
        {showWriteButton && (
          <Button cyan to="/write">
            새 글 작성하기
          </Button>
        )}
      </WritePostButtonWrapper>
      {/** 로딩 중이 아니고, 포스트 배열이 존재할 때만 보여 줌 */}
      {!loading && posts && (
        <PostItemCardBoxBlock>
          {posts.map((post) => (
            <PostItem post={post} key={post._id} />
          ))}
        </PostItemCardBoxBlock>
      )}
    </PostListBlock>
  );
};

export default PostList;
