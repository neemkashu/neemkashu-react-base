import { FilmById } from "../components/pages/FilmPage/FilmById";

type FilmPageProps = {
  params: { id: string };
};

export default function FilmPage({ params: { id } }: FilmPageProps) {
  console.log("id in film page", id);
  return <FilmById id={id} />;
}
