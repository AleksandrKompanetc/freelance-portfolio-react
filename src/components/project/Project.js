import './style.css';

const Project = () => {
  return (
    <li className="project">
      <a href="./project-page.html">
        <img src={project01} width="370px" alt="" className="project__img" />
        <h3 className="project__title">Gaming streaming portal</h3>
      </a>
    </li>
  )
}

export default Project;