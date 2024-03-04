import { default as School } from "../../assets/school0.jpg";
import ContentCard from "../../components/Home/ContentCard";
import { ICard, IForm } from "../../interfaces/Interfaces";

export default function IndexData() {
  const cards: ICard[] = [
    {
      active: false,
      title: "School",
      htmlFor: "c1",
      backgroundSrc: School,
      buttonCards: [
        {
          title: "Prijava",
          subTitle: "Sportske Dane za decu",
          backgroundSrc: School,
          images: [{ src: School }],
          contentCard: (
            <ContentCard
              title={"Prijava"}
              subTitle={"Sportske Dane za decu"}
              backgroundSrc={""}
              images={[{ src: School }]}
              form={{} as IForm}
              posts={[]}
            />
          ),
        },
        // {
        //   title: "asdf",
        //   subTitle: "",
        //   backgroundSrc: School,
        //   images: [{ src: School }],
        //   contentCard: (
        //     <ContentCard
        //       title={""}
        //       subTitle={""}
        //       backgroundSrc={""}
        //       images={[]}
        //       form={{} as IForm}
        //       posts={[]}
        //     />
        //   ),
        // },
        // {
        //   title: "asdf",
        //   subTitle: "",
        //   backgroundSrc: School,
        //   images: [{ src: School }],
        //   contentCard: (
        //     <ContentCard
        //       title={""}
        //       subTitle={""}
        //       backgroundSrc={""}
        //       images={[]}
        //       form={{} as IForm}
        //       posts={[]}
        //     />
        //   ),
        // },
      ],
    },
    // {
    //   active: false,
    //   htmlFor: "c3",
    //   title: "Sport",
    //   backgroundSrc: Sport,
    //   buttonCards: [
    //     {
    //       title: "asdf",
    //       subTitle: "",
    //       backgroundSrc: "",
    //       images: [{ src: School }],
    //       contentCard: (
    //         <ContentCard
    //           title={""}
    //           subTitle={""}
    //           backgroundSrc={""}
    //           images={[]}
    //           form={{} as IForm}
    //           posts={[]}
    //         />
    //       ),
    //     },
    //     {
    //       title: "asdf",
    //       subTitle: "",
    //       backgroundSrc: "",
    //       images: [{ src: School }],
    //       contentCard: (
    //         <ContentCard
    //           title={""}
    //           subTitle={""}
    //           backgroundSrc={""}
    //           images={[]}
    //           form={{} as IForm}
    //           posts={[]}
    //         />
    //       ),
    //     },
    //     {
    //       title: "asdf",
    //       subTitle: "",
    //       backgroundSrc: "",
    //       images: [{ src: School }],
    //       contentCard: (
    //         <ContentCard
    //           title={""}
    //           subTitle={""}
    //           backgroundSrc={""}
    //           images={[]}
    //           form={{} as IForm}
    //           posts={[]}
    //         />
    //       ),
    //     },
    //   ],
    // },
    // {
    //   active: false,
    //   title: "Sportski \nDani",
    //   htmlFor: "c3",
    //   backgroundSrc: SportskiDani,
    //   buttonCards: [
    //     {
    //       title: "asdf",
    //       subTitle: "",
    //       backgroundSrc: "",
    //       images: [{ src: School }],
    //       contentCard: (
    //         <ContentCard
    //           title={""}
    //           subTitle={""}
    //           backgroundSrc={""}
    //           images={[]}
    //           form={{} as IForm}
    //           posts={[]}
    //         />
    //       ),
    //     },
    //     {
    //       title: "asdf",
    //       subTitle: "",
    //       backgroundSrc: "",
    //       images: [{ src: School }],
    //       contentCard: (
    //         <ContentCard
    //           title={""}
    //           subTitle={""}
    //           backgroundSrc={""}
    //           images={[]}
    //           form={{} as IForm}
    //           posts={[]}
    //         />
    //       ),
    //     },
    //     {
    //       title: "asdf",
    //       subTitle: "",
    //       backgroundSrc: "",
    //       images: [{ src: School }],
    //       contentCard: (
    //         <ContentCard
    //           title={""}
    //           subTitle={""}
    //           backgroundSrc={""}
    //           images={[]}
    //           form={{} as IForm}
    //           posts={[]}
    //         />
    //       ),
    //     },
    //   ],
    // },
    // {
    //   active: false,
    //   title: "Pregled \nGodine",
    //   htmlFor: "c4",
    //   backgroundSrc: PregledGodine,
    //   buttonCards: [
    //     {
    //       title: "asdf",
    //       subTitle: "",
    //       backgroundSrc: "",
    //       images: [{ src: School }],
    //       contentCard: (
    //         <ContentCard
    //           title={""}
    //           subTitle={""}
    //           backgroundSrc={""}
    //           images={[]}
    //           form={{} as IForm}
    //           posts={[]}
    //         />
    //       ),
    //     },
    //     {
    //       title: "asdf",
    //       subTitle: "",
    //       backgroundSrc: "",
    //       images: [{ src: School }],
    //       contentCard: (
    //         <ContentCard
    //           title={""}
    //           subTitle={""}
    //           backgroundSrc={""}
    //           images={[]}
    //           form={{} as IForm}
    //           posts={[]}
    //         />
    //       ),
    //     },
    //     {
    //       title: "asdf",
    //       subTitle: "",
    //       backgroundSrc: "",
    //       images: [{ src: School }],
    //       contentCard: (
    //         <ContentCard
    //           title={""}
    //           subTitle={""}
    //           backgroundSrc={""}
    //           images={[]}
    //           form={{} as IForm}
    //           posts={[]}
    //         />
    //       ),
    //     },
    //   ],
    // },
  ];
  return { cards };
}
