export const Editor = ({
  markdownContent,
  setMarkdownContent,
  resizeEditor,
}) => {
  return (
    <section className='wrapper-edit'>
      <div className='header-edit'>
        <i className='fas fa-fire'> Editor</i>
        <i
          onClick={() => resizeEditor()}
          className='fa fa-arrows-alt icon-edit'
        />
      </div>
      <textarea
        id='editor'
        className='editor-text-area'
        type='text'
        name='markdown'
        defaultValue={markdownContent}
        onChange={e => setMarkdownContent(e.target.value)}
      />
    </section>
  );
};
