export default function Main({
  url,
  title,
  fact,
}: {
  url: string;
  title: string;
  fact: string;
}) {
  return (
    <main>
      <section>
        <img src={url} alt={title} />
        <p>{fact}</p>
      </section>
    </main>
  );
}
