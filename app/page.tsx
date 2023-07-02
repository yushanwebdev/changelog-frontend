import Container from "@/components/container";
import LogsList from "@/components/logs-list";

export default function Home() {
  return (
    <main>
      <Container>
        <div className="pt-10">
          <h1 className="mb-8 text-5xl font-bold lg:text-8xl">Changelog</h1>
          <LogsList />
        </div>
      </Container>
    </main>
  );
}
