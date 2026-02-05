import svgPaths from "./svg-2krwrozs4q";

function Icon() {
  return (
    <div className="absolute h-[17px] left-[5px] top-[5px] w-[17.8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.7997 17">
        <g id="Icon">
          <path d={svgPaths.p2ad900c0} fill="var(--fill-0, white)" id="Half Bottom Circle" />
          <path d={svgPaths.p187bef00} fill="var(--fill-0, white)" id="Half Top Circle" />
          <g id="Arrow">
            <path d={svgPaths.p182f4c00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3ca10d70} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Isotype() {
  return (
    <div className="relative shrink-0 aspect-square h-full" data-name="Isotype">
      <div className="absolute bg-[#292fdd] left-0 rounded-[4px] size-full top-0" data-name="Square" />
      <Icon />
    </div>
  );
}

function Logotype() {
  return (
    <div className="h-1/2 relative shrink-0 aspect-[46.935/13.5]" data-name="Logotype">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.935 13.5">
        <g id="Logotype">
          <path d={svgPaths.p54b9500} fill="var(--fill-0, #0F0F0F)" id="Letter p" />
          <path d={svgPaths.p3ceab100} fill="var(--fill-0, #0F0F0F)" id="Letter a" />
          <path d={svgPaths.p360f1680} fill="var(--fill-0, #0F0F0F)" id="Letter e" />
          <path d={svgPaths.p2f791200} fill="var(--fill-0, #0F0F0F)" id="Letter l" />
          <path d={svgPaths.p3857de00} fill="var(--fill-0, #0F0F0F)" id="Letter n" />
          <path d={svgPaths.p37d5bf2} fill="var(--fill-0, #0F0F0F)" id="Letter u" />
        </g>
      </svg>
    </div>
  );
}

export default function Imagotype() {
  return (
    <div className="flex gap-[33%] items-center relative size-full" data-name="Imagotype" style={{ gap: '9px' }}>
      <Isotype />
      <Logotype />
    </div>
  );
}