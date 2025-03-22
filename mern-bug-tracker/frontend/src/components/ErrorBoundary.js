import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, info) {
    console.error("Error caught in ErrorBoundary: ", error, info);
  }
  // The componentDidCatch method is called when an error is thrown in a child component.
  // It receives two arguments: error and info.
  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong. Please try again later.</h2>;
    }
    return this.props.children; 
  }
}

export default ErrorBoundary;
