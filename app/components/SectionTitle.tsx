export default function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-semibold mb-10 text-gradient text-center">
      {title}
    </h2>
  );
}
