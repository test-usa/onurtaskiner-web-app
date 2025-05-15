type SectionTitleProps = {
  title: string;
};

export const Title = ({ title }: SectionTitleProps) => {
  return (
    <h1 className="text-[var(--color-textSecondary)] font-Robot text-3xl sm:text-4xl font-medium leading-[40px] tracking-[-0.68px]">
      {title}
    </h1>
  );
};

export default Title;
