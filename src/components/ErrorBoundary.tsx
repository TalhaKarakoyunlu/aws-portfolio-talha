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
        <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white px-6">
          <div className="max-w-lg text-center">
            <h1 className="text-3xl font-semibold mb-3">Something went wrong</h1>
            <p className="text-zinc-400">
              Please refresh the page. If the issue persists, you can reach me at{' '}
              <a
                href="mailto:karakoyunlutalha34@gmail.com"
                className="text-blue-400 hover:text-blue-300"
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
