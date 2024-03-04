import { IContentCard } from "../../interfaces/Interfaces";

export default function ContentCard(props: IContentCard) {
  const { title, backgroundSrc, form, images, posts, subTitle } = props;
  console.log(title, backgroundSrc, form, images, posts, subTitle);
  return (
    <>
      <h1>{title}</h1>
      {posts?.map((x) => x)}
    </>
  );
}
