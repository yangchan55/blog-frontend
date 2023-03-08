import React from 'react';
import Responsive from '../components/common/Responsive';
import EditorContainer from '../containers/wirte/EditorContainer';
import TagBoxContainer from '../containers/wirte/TagBoxContainer';
import WriteActionButtonsContainer from '../containers/wirte/WriteActionButtonsContainer';
import { Helmet } from 'react-helmet-async';

const WritePage = () => {
  return (
    <Responsive>
      <Helmet>
        <title>글 작성하기 - REACTERS</title>
      </Helmet>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtonsContainer />
    </Responsive>
  );
};

export default WritePage;
