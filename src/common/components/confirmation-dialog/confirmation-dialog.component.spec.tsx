import React from 'react';
import { render, screen } from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('common/components/confirmation-dialog', () => {

  const defaultProps = {
    title: 'Test Title',
    isOpen: true,
    labels: {
      acceptButton: 'Test aceptar',
      closeButton: 'Test cerrar',
    },
    onAccept: jest.fn(),
    onClose: jest.fn(),
  };

  const defaultContent = 'Test content';

  it('should render the title and content, an accept button and a close button', () => {

    // Act
    render(<ConfirmationDialogComponent
      { ...defaultProps }
    >{ defaultContent }</ConfirmationDialogComponent>);

    const titleElement = screen.getByRole('heading');
    const contentElement = screen.getByText(defaultContent);
    const closeButtonElement = screen.getByRole('button', { name: defaultProps.labels.closeButton });
    const acceptButtonElement = screen.getByRole('button', { name: defaultProps.labels.acceptButton });

    // Assert
    expect(titleElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
    expect(closeButtonElement).toBeInTheDocument();
    expect(acceptButtonElement).toBeInTheDocument();
  });

  it('should call onClose when the close button is clicked', () => {
    // Act
    render(<ConfirmationDialogComponent
      { ...defaultProps }
    >{ defaultContent }</ConfirmationDialogComponent>);

    const closeButtonElement = screen.getByRole('button', { name: defaultProps.labels.closeButton });

    closeButtonElement.click();

    // Assert
    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it('should call onAccept, onClose when the accept button is clicked', () => {
    // Act
    render(<ConfirmationDialogComponent
      { ...defaultProps }
    >{ defaultContent }</ConfirmationDialogComponent>);

    const acceptButtonElement = screen.getByRole('button', { name: defaultProps.labels.acceptButton });

    acceptButtonElement.click();

    // Assert
    expect(defaultProps.onAccept).toHaveBeenCalled();
    expect(defaultProps.onClose).toHaveBeenCalled();
  });
});
