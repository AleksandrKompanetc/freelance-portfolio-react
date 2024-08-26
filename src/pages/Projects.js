import Project from '../components/project/Project';
import project01 from './../img/projects/1.jpg';
import project02 from './../img/projects/2.jpg';
import project03 from './../img/projects/3.jpg';
import project04 from './../img/projects/4.jpg';
import project05 from './../img/projects/5.jpg';
import project06 from './../img/projects/6.jpg';

const Projects = () => {
  return (
    <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            <Project />
          </ul>
        </div>
      </main>
  )
}

export default Projects;