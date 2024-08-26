import './style.css';

const Project = ({title, img}) => {
  return (
    <li className="project">
      <a href="./project-page.html">
        <img src={img} width="370px" alt={title} className="project__img" />
        <h3 className="project__title">{title}</h3>
      </a>
    </li>
  )
}

export default Project;