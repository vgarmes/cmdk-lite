import { describe, beforeEach, expect, test, it } from 'vitest';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { Command } from '.';

describe('Router', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should render without issues', () => {
    render(<Command />);
    expect(true).toBeTruthy();
  });
});
