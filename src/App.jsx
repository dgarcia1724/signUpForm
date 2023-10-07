import Form from "./components/Form";

export default function App() {
  return (
    <div className="bodyBg mx-auto container h-screen ">
      <section className="text-center pt-[88px] px-[24px]">
        <MainText />
        <Form />
      </section>
    </div>
  );
}

function MainText() {
  return (
    <div className="mb-[64px] text-white">
      <h1 className="font-bold text-[28px] leading-[36px] tracking-[-0.29px] ">
        Learn to code by watching others
      </h1>
      <p className="mt-4 font-medium text-4 leading-[26px] tracking-[0px]">
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
    </div>
  );
}
