import React from 'react';

import ProjectListingSection from './../components/ProjectListingSection';

class ProjectsPage extends React.Component {
  render() {
    try {
      const allProjects = this.props.data.allMarkdownRemark.edges;

      const personalProjects = allProjects.filter(
        project => project.node.fields.projectType === 'personal'
      );

      const professionalProjects = allProjects.filter(
        project => project.node.fields.projectType === 'professional'
      );

      const formationProjects = allProjects.filter(
        project => project.node.fields.projectType === 'formation'
      );

      return (
        <div>
          <h1>Projets</h1>

          {professionalProjects.length > 0 && (
            <ProjectListingSection
              projects={professionalProjects}
              sectionTitle="Professionnel"
            />
          )}

          {personalProjects.length > 0 && (
            <ProjectListingSection
              projects={personalProjects}
              sectionTitle="Personnel"
            />
          )}


          {formationProjects.length > 0 && (
            <ProjectListingSection
              projects={formationProjects}
              sectionTitle="En formation"
            />
          )}

        </div>
      );
    } catch (e) {
      console.log(e);
      return <h2>Unable to find any projects.</h2>;
    }
  }
}

export default ProjectsPage;

export const query = graphql`
  query ProjectsPageQuery {
    allMarkdownRemark(
      filter: {
        frontmatter: { publish: { eq: true } }
        fields: { type: { eq: "project" } }
      }
      sort: { fields: [frontmatter___order], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            lede
          }
          fields {
            slug
            projectType
          }
        }
      }
    }
  }
`;
