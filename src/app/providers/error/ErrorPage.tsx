type ErrorPageProps = {
  error?: Error | null;
};

const ErrorPage = ({ error }: ErrorPageProps) => {
  return <div className="text-white">Error looool: {error?.message}</div>;
};

export { ErrorPage };
