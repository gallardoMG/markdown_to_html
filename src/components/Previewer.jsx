import { Remarkable } from 'remarkable';

export const Previewer = ({ markdownContent, resizePreviewer }) => {
  const rk = new Remarkable({
    breaks: true, // Convert '\n' in paragraphs into <br>
  });
  const htmlString = rk.render(markdownContent);
  const createMarkup = () => ({
    __html: htmlString,
  });
  return (
    <section className='wrapper-previewer'>
      <div className='header-preview'>
        <i className='fas fa-fire'> Previewer</i>
        <a href='#title' className='link-icon-preview'>
          <i
            onClick={() => resizePreviewer()}
            className='fa fa-arrows-alt icon-preview'
          />
        </a>
      </div>
      <div id='preview' dangerouslySetInnerHTML={createMarkup()} />
    </section>
  );
};
