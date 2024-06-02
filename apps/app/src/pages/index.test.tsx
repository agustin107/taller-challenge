import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Home from ".";

describe('Home page', () => {

  beforeEach(() => {
    window.localStorage.clear();
  });

  it('should render the home page', () => {
    render(<Home />);

    expect(screen.getByText('Todo List')).toBeInTheDocument();
    expect(
      screen.getByText(
        'This is a simple todo list application built with React, Next.js, and Tailwind CSS that uses local storage to persist the todo list.'
      )
    ).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should add a todo', async () => {
    const user = userEvent.setup();
    const title = 'Test todo';

    render(<Home />);

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /add todo/i });

    expect(screen.queryByRole('list')).not.toBeInTheDocument();

    await user.type(input, title);
    await user.click(button);

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('should toggle a todo', async () => {
    const user = userEvent.setup();
    const title = 'Test todo';

    render(<Home />);

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /add todo/i });

    await user.type(input, title);
    await user.click(button);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).not.toBeChecked();

    await user.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(screen.getByText(title).closest('div')).toHaveClass('line-through');
  });

  it('shouldn\'t add a todo without a title', async () => {
    const user = userEvent.setup();

    render(<Home />);

    const button = screen.getByRole('button', { name: /add todo/i });

    await user.click(button);

    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('should filter todos', async () => {
    const user = userEvent.setup();
    const title = 'Test todo';

    render(<Home />);

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /add todo/i });

    await user.type(input, title);
    await user.click(button);

    const checkbox = screen.getByRole('checkbox');

    await user.click(checkbox);

    let filter = screen.getByRole('button', { name: /active/i });

    await user.click(filter);

    expect(screen.queryByText(title)).not.toBeInTheDocument();

   filter = screen.getByRole('button', { name: /all/i });

    await user.click(filter);

    expect(screen.getByText(title)).toBeInTheDocument();
  });
});