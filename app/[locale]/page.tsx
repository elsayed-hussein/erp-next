import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>This is Home Page</h1>
        <h2>{t("title")}</h2>
        <Link href={"/test"}>Go to Test Page</Link>
      </div>
    </main>
  );
}
