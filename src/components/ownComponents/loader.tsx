import Wrapper from "@/hooks/wrapper/wrapper";

const Loader = () => {
  return (
    <Wrapper>
      <div className="flex items-center justify-center h-screen w-full">
        <div className="flex items-center justify-center gap-x-2">
          <div className="w-[1.2rem] h-[1.2rem] rounded-full bg-[var(--color-coffeOne)] animate-bounce [animation-delay:0s]" />
          <div className="w-[1.2rem] h-[1.2rem] rounded-full bg-[var(--color-orange)] animate-bounce [animation-delay:0.1s]" />
          <div className="w-[1.2rem] h-[1.2rem] rounded-full bg-[var(--color-blueOne)] animate-bounce [animation-delay:0.2s]" />
          <div className="w-[1.2rem] h-[1.2rem] rounded-full bg-[var(--color-normalText)] animate-bounce [animation-delay:0.3s]" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Loader;
