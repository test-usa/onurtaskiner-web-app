type SectionTitleProps = {
  children: React.ReactNode;
};

export const Title = ({ children }: SectionTitleProps) => {
  return (
    <h1 className="text-[#1B1F28] font-public-sans text-[34px] font-bold leading-[40px] tracking-[-0.68px]">
      {children}
    </h1>
  );
};

export default Title;
