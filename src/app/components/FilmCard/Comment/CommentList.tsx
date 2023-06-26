"use client";

import { FC, useRef } from "react";
import { Comment } from "./Comment";
import { useComments } from "./hooks";

export const CommentList: FC<{ filmId: string }> = ({ filmId }) => {
  const { comments, isError, isLoading } = useComments(filmId);

  console.log("comments", { comments }, { filmId }, { isLoading });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Не удалось загрузить комментарии</p>;
  if (!comments || !comments?.length) return <p>Пока нет комментариев</p>;

  return (
    <>
      {comments.map((comment) => (
        <Comment key={comment.id} {...comment}></Comment>
      ))}
    </>
  );
};
