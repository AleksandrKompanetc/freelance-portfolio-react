import BtnGitHub from "../components/btnGitHub/BtnGitHub";

const Project = () => {
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">Video service</h1>
          <img className="project-details__cover" src="./img/projects/cover.jpg" alt="" />
            <div className="project-details__desc">
              <p>Skills: React, Node.js MongoDB</p>
            </div>
            <BtnGitHub link='https://github.com' />
        </div>
      </div>
    </main>
  )
}

export default Project;