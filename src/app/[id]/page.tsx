import { FilmById } from "../components/pages/FilmPage/FilmById";

type FilmPageProps = {
  params: { id: string };
};

export default function FilmPage({ params: { id } }: FilmPageProps) {
  return <FilmById id={id} />;
}
