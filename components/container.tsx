interface IContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: IContainerProps) {
  return <div className="max-w-4xl px-5 mx-auto">{children}</div>;
}
