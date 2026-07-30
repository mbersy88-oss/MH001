export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold">
        Barsi OS
      </h1>

      <p className="mt-2">
        Personal Operating System MVP v0.1
      </p>

      <div className="grid gap-4 mt-8 md:grid-cols-3">
        <div className="rounded-xl border p-4">
          <h2 className="font-bold">System Health</h2>
          <p>Repository ✅</p>
          <p>Backup ✅</p>
          <p>CI ✅</p>
        </div>

        <div className="rounded-xl border p-4">
          <h2 className="font-bold">Projects</h2>
          <p>UltraGel</p>
          <p>Hive</p>
          <p>ShielderZ</p>
        </div>

        <div className="rounded-xl border p-4">
          <h2 className="font-bold">Next</h2>
          <p>Build MVP modules</p>
        </div>
      </div>
    </main>
  );
}