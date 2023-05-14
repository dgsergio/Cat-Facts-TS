import { render, screen } from '@testing-library/react';
import Main from './Main';

describe('Main component', () => {
  it('should render and img and a paragraph', () => {
    render(
      <Main
        url="https://media1.giphy.com/media/ICOgUNjpvO0PC/giphy.gif?cid=be7e11a0ail90r021i07u19xebmca169xowo1gmkkkjm1lvv&ep=v1_gifs_search&rid=giphy.gif&ct=g"
        title="The title"
        fact="The cat is a friendly pet"
      />
    );
    const imgEl = screen.getByRole('img');
    const pEl = screen.getByText('The cat is a friendly pet');
    expect(imgEl).toBeInTheDocument();
    expect(pEl).toBeInTheDocument();
  });
});
