import { Component, type ReactNode } from 'react';
import { useLanguage } from '@/context/LanguageContext';

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

const ErrorFallback = () => {
  const { messages } = useLanguage();
  return (
    <div className="min-h-screen flex items-center justify-center bg-app-bg text-app-text px-6">
      <div className="max-w-lg text-center">
        <h1 className="text-3xl font-semibold mb-3">{messages.error.title}</h1>
        <p className="text-app-muted">
          {messages.error.bodyBefore}
          <a
            href="mailto:karakoyunlutalha34@gmail.com"
            className="text-app-accent hover:text-app-accent/80"
          >
            karakoyunlutalha34@gmail.com
          </a>
          {messages.error.bodyAfter}
        </p>
      </div>
    </div>
  );
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
