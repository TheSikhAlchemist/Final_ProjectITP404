import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import CommentSection from './CommentSection';

describe('CommentSection component', () => {
  it('renders comment form without crashing', () => {
    render(<CommentSection />);
  });

  it('adds a comment to the comment list', () => {
    render(<CommentSection />);
    const nameInput = screen.getByPlaceholderText('Your Name');
    const commentInput = screen.getByPlaceholderText('Your Comment');
    const addButton = screen.getByText('Add Comment');

    fireEvent.change(nameInput, { target: { value: 'John' } });
    fireEvent.change(commentInput, { target: { value: 'Great post!' } });
    fireEvent.click(addButton);

    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('Great post!')).toBeInTheDocument();
  });

  it('clears comment form after submission', () => {
    render(<CommentSection />);
    const nameInput = screen.getByPlaceholderText('Your Name');
    const commentInput = screen.getByPlaceholderText('Your Comment');
    const addButton = screen.getByText('Add Comment');

    fireEvent.change(nameInput, { target: { value: 'Alice' } });
    fireEvent.change(commentInput, { target: { value: 'Nice article!' } });
    fireEvent.click(addButton);

    expect(nameInput.value).toBe('');
    expect(commentInput.value).toBe('');
  });

  it('displays formatted timestamp in the comment', () => {
    render(<CommentSection />);
    const timestamp = Date.now();
    const formattedTimestamp = new Date(timestamp).toLocaleString();
    const nameInput = screen.getByPlaceholderText('Your Name');
    const commentInput = screen.getByPlaceholderText('Your Comment');
    const addButton = screen.getByText('Add Comment');

    fireEvent.change(nameInput, { target: { value: 'Bob' } });
    fireEvent.change(commentInput, { target: { value: 'Interesting read!' } });
    fireEvent.click(addButton);

    expect(screen.getByText(formattedTimestamp)).toBeInTheDocument();
  });
  it('displays multiple comments in the comment list', () => {
    render(<CommentSection />);
    const addButton = screen.getByText('Add Comment');
  
    // Add first comment
    fireEvent.change(screen.getByPlaceholderText('Your Name'), { target: { value: 'Alice' } });
    fireEvent.change(screen.getByPlaceholderText('Your Comment'), { target: { value: 'Nice article!' } });
    fireEvent.click(addButton);
  
    // Add second comment
    fireEvent.change(screen.getByPlaceholderText('Your Name'), { target: { value: 'Bob' } });
    fireEvent.change(screen.getByPlaceholderText('Your Comment'), { target: { value: 'Great content!' } });
    fireEvent.click(addButton);
  
    // Check if both comments are displayed
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Nice article!')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.getByText('Great content!')).toBeInTheDocument();
  });
  it('adds another comment to the comment list', () => {
    render(<CommentSection />);
    const addButton = screen.getByText('Add Comment');

    // Add a comment
    fireEvent.change(screen.getByPlaceholderText('Your Name'), { target: { value: 'Eve' } });
    fireEvent.change(screen.getByPlaceholderText('Your Comment'), { target: { value: 'Well done!' } });
    fireEvent.click(addButton);

    // Check if the new comment is displayed
    expect(screen.getByText('Eve')).toBeInTheDocument();
    expect(screen.getByText('Well done!')).toBeInTheDocument();
  });

  it('clears comment form after second submission', () => {
    render(<CommentSection />);
    const addButton = screen.getByText('Add Comment');

    // Add a comment
    fireEvent.change(screen.getByPlaceholderText('Your Name'), { target: { value: 'Charlie' } });
    fireEvent.change(screen.getByPlaceholderText('Your Comment'), { target: { value: 'Impressive work!' } });
    fireEvent.click(addButton);

    // Check if the form is cleared after the second submission
    expect(screen.getByPlaceholderText('Your Name').value).toBe('');
    expect(screen.getByPlaceholderText('Your Comment').value).toBe('');
  });




});
