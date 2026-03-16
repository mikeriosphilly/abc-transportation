export default function SectionHeading({ headingLine1, headingLine2, headingLine3, introBodyText, mobile = false }) {
  if (mobile) {
    return (
      <div className="text-center mb-7">
        <p className="font-baskerville font-normal leading-none text-white uppercase m-0 [font-size:clamp(2.5rem,10vw,4rem)]">{headingLine1}</p>
        <p className="font-baskerville font-normal italic leading-[1.15] text-abc-gold m-0 [font-size:clamp(1.5rem,6vw,2.5rem)]">{headingLine2}</p>
        <h1 className="font-baskerville font-normal leading-none text-white uppercase m-0 [font-size:clamp(2.5rem,10vw,4rem)] [margin-top:0.35em]">{headingLine3}</h1>
        <p className="font-euclid text-[0.9375rem] text-abc-body leading-[1.5] mt-4 text-center">{introBodyText}</p>
      </div>
    );
  }

  return (
    <>
      <div className="mb-3">
        <p className="font-baskerville font-normal leading-none text-white uppercase m-0 tracking-normal [font-size:clamp(3rem,5.625vw,5.625rem)]">{headingLine1}</p>
        <p className="font-baskerville font-normal italic leading-[1.15] text-abc-gold m-0 tracking-normal [font-size:clamp(2rem,3.75vw,3.75rem)]">{headingLine2}</p>
        <h1 className="font-baskerville font-normal leading-none text-white uppercase m-0 tracking-normal [font-size:clamp(3rem,5.625vw,5.625rem)] [margin-top:0.1em]">{headingLine3}</h1>
      </div>
      <p className="font-euclid text-[0.9375rem] font-normal leading-[1.4] text-abc-body mb-10 max-w-[480px]">{introBodyText}</p>
    </>
  );
}
