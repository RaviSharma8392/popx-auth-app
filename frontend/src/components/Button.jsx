export default function Button({ title, type, color, className }) {
  return (
    <button
      type={type}
      style={{ backgroundColor: color }}
      className={`w-[328px] h-[48px] rounded-[6px] text-[16px] font-medium flex items-center justify-center hover:opacity-90 transition ${className}`}>
      {title}
    </button>
  );
}
