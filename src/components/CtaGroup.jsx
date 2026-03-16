export default function CtaGroup({ getAQuoteUrl, bookOnlineUrl, mobile = false }) {
  if (mobile) {
    return (
      <div className="flex gap-3 flex-wrap justify-center">
        <a href={getAQuoteUrl} className="py-3.5 px-7 bg-abc-gold text-white font-euclid text-[0.766875rem] font-bold leading-[1.2275rem] tracking-[0.08em] uppercase no-underline rounded-full">Get a Quote</a>
        <a href={bookOnlineUrl} className="py-3.5 px-7 bg-white text-black font-euclid text-[0.766875rem] font-bold leading-[1.2275rem] tracking-[0.08em] uppercase no-underline rounded-full">Book Online</a>
      </div>
    );
  }

  return (
    <div className="flex gap-3 flex-wrap">
      <a href={getAQuoteUrl} className="flex items-center justify-center w-[11.75rem] h-[3.75rem] bg-abc-gold text-white font-euclid text-[0.9375rem] font-bold leading-[1.5rem] tracking-[0.05em] uppercase no-underline rounded-full transition-opacity duration-200 hover:opacity-85">Get a Quote</a>
      <a href={bookOnlineUrl} className="flex items-center justify-center w-[11.75rem] h-[3.75rem] bg-white text-black font-euclid text-[0.9375rem] font-bold leading-[1.5rem] tracking-[0.05em] uppercase no-underline rounded-full transition-opacity duration-200 hover:opacity-85">Book Online</a>
    </div>
  );
}
