import { useState } from 'react';
import { initialState } from '../constants/initialState';
import { Editor } from './Editor';
import { Previewer } from './Previewer';

export const App = () => {
  const [markdownContent, setMarkdownContent] = useState(initialState);
  const [removeEditor, setRemoveEditor] = useState(true);
  const [removePreviewer, setRemovePreviewer] = useState(true);

  const resizeEditor = () => {
    const changeIcon = document.querySelector('.icon-edit');
    changeIcon.classList.toggle('fa-arrows-alt');
    changeIcon.classList.toggle('fa-compress');
    const wrapperEdit = document.querySelector('.wrapper-edit');
    wrapperEdit.classList.toggle('resizeEditor');
    setRemovePreviewer(!removePreviewer);
  };
  const resizePreviewer = () => {
    const changeIcon = document.querySelector('.icon-preview');
    changeIcon.classList.toggle('fa-arrows-alt');
    changeIcon.classList.toggle('fa-compress');
    const wrapperPreviewer = document.querySelector('.wrapper-previewer');
    wrapperPreviewer.classList.toggle('resizePreviewer');
    setRemoveEditor(!removeEditor);
  };
  return (
    <>
      <main id='title'>Markdown to html converter</main>
      {removeEditor && (
        <Editor
          resizeEditor={resizeEditor}
          markdownContent={markdownContent}
          setMarkdownContent={setMarkdownContent}
        />
      )}
      {removePreviewer && (
        <Previewer
          resizePreviewer={resizePreviewer}
          markdownContent={markdownContent}
        />
      )}
    </>
  );
};
export default App;
