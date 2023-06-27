import { QuestionProps } from "./types";

export const QuestionConfig: Readonly<Readonly<QuestionProps>[]> = [
  {
    question: "Что такое Билетопоиск?",
    answer:
      "Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.",
  },
  {
    question: "Какой компании принадлежит Билетопоиск?",
    answer:
      "Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.",
  },
  {
    question: "Как купить билет на Билетопоиск?",
    answer:
      "Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.",
  },
  {
    question: "Как оставить отзыв на Билетопоиск?",
    answer:
      "Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.",
  },
] as const;

export const FilterFields = {
  genre: {
    name: "genre",
    view: "Жанр",
  },
  cinema: {
    name: "cinema",
    view: "Кинотеатр",
  },
} as const;

export const MAX_TICKET_AMOUNT = 30;
export const MIN_TICKET_AMOUNT = 0;
export const DEFAULT_TICKET_AMOUNT = 0;
