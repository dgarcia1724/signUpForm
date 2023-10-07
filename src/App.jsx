import Form from "./components/Form";

export default function App() {
  return (
    <div className="bodyBg mx-auto container h-screen ">
      <section className="text-center pt-[88px] px-[24px] lg:grid lg:grid-cols-2 lg:gap-[45px]">
        <MainText />
        <Form />
      </section>
    </div>
  );
}

function MainText() {
  return (
    <div className="mb-[64px] text-white lg:self-center lg:text-left">
      <h1 className="font-bold text-[28px] leading-[36px] tracking-[-0.29px] lg:text-[50px] lg:leading-[55px] lg:tracking-[-0.52px]">
        Learn to code by watching others
      </h1>
      <p className="mt-4 font-medium text-4 leading-[26px] tracking-[0px] lg:mt-[11px]">
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
    </div>
  );
}
