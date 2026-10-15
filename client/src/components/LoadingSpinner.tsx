interface LoadingSpinnerProps {
  inline?: boolean;
  label?: string;
}

export default function LoadingSpinner({ inline = false, label = "Loading" }: LoadingSpinnerProps) {
  const spinner = <span className="spinner" role="status" aria-label={label} />;
  return inline ? spinner : <div className="page-loader">{spinner}</div>;
}
