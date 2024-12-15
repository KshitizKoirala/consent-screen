export const Card = ({
  children,
  className = ''
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`rounded-md border-2 border-[#363E46] shadow-lg ${className}`}
      style={{ background: '#13191F' }}
    >
      {children}
    </div>
  );
};
