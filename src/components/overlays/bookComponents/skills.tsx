import "../../../styles/room/bookContent.css";

export default function Skills() {
  const techs = [
    {
      id: 1,
      name: "React",
      level: 5,
      description:
        "Biblioteca de JavaScript para construir interfaces de usuario.",
      projects: "Proyecto de portafolio, proyecto de e-commerce",
      image: "/assets/icos/react.png",
    },
  ];

  return (
    <>
      <div className="book-page bookshelf-index">
        <h2>Skills Tecnicas</h2>
        <ul>
          <li>
            <div>
              <h3>React</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                nobis inventore vel. Dolor temporibus dolore sapiente at magnam
                mollitia eius eaque laborum id hic, natus obcaecati
                exercitationem nemo eum autem?
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3>React</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                nobis inventore vel. Dolor temporibus dolore sapiente at magnam
                mollitia eius eaque laborum id hic, natus obcaecati
                exercitationem nemo eum autem?
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3>React</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                nobis inventore vel. Dolor temporibus dolore sapiente at magnam
                mollitia eius eaque laborum id hic, natus obcaecati
                exercitationem nemo eum autem?
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
