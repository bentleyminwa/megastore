interface ProductPriceProps {
  value: number;
  className?: string;
}

export default function ProductPrice({ value, className }: ProductPriceProps) {
  const stringValue = value.toFixed(2); // Ensure the value is 2 decimal places

  const [intValue, floatValue] = stringValue.split("."); // Get the integer and float parts

  return (
    <p className={className}>
      <span className="text-xs align-super">Ksh </span>
      <span className="text-2xl font-bold">{intValue}</span>
      <span className="text-xs align-super">{floatValue}</span>
    </p>
  );
}
