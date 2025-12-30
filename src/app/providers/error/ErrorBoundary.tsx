import React, { Component, type ReactNode } from "react";
import { ErrorPage } from "./ErrorPage";

// Определяем типы для пропсов
interface ErrorBoundaryProps {
  children: ReactNode;
}

// Определяем типы для состояния
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  // Начальное состояние
  state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  // Типизация статического метода getDerivedStateFromError
  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }

  // Типизация componentDidCatch
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("Error caught:", error, errorInfo);
    // Опционально: отправка ошибки в сервис логирования (например, Sentry)
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <ErrorPage error={this.state.error} />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
