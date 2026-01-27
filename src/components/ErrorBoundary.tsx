import { Component, type ReactNode } from 'react';

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-app-bg text-app-text px-6">
          <div className="max-w-lg text-center">
            <h1 className="text-3xl font-semibold mb-3">Something went wrong</h1>
            <p className="text-app-muted">
              Please refresh the page. If the issue persists, you can reach me at{' '}
              <a
                href="mailto:karakoyunlutalha34@gmail.com"
                className="text-app-accent hover:text-app-accent/80"
              >
                karakoyunlutalha34@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
