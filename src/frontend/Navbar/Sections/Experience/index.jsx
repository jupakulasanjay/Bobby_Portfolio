const Experience = () => {
  return (
    <div className="d-flex flex-column align-items-center parent-container">
      <div className="d-flex align-items-center justify-content-center ">
        <img
          src="/images/experience.png"
          alt=""
          style={{ width: "75px", height: "auto" }}
          className="experience-image"
        />
        <span className="ms-3 section-label">Experience</span>
      </div>

      <div className="d-flex gap-space mt-5 w-auto h-auto experience-box-container">
        <div className="experience-box">
          <span className="experience-heading">OWL CODER - (Technical Hub)</span>
          <div className="experience-body">
            <ul>
              <li>
                Solved 400+ problems on LeetCode, 400+ on GeeksforGeeks (GFG),
                and 200+ on CodeChef, strengthening problem-solving skills.
              </li>
              <li>
                Gained hands-on experience in code optimization, time and space
                complexity analysis, and efficient algorithm design.
              </li>
              <li>
                Proficient in dynamic programming, graph algorithms, recursion,
                and other advanced techniques.
              </li>
              <li>
                Enhanced debugging skills and the ability to write optimized,
                scalable, and efficient code.
              </li>
              <li>
                Strong understanding of data structures, including trees,
                graphs, heaps, and tries.
              </li>
              <li>
                Improved critical thinking and problem-solving speed through
                competitive programming.
              </li>
            </ul>
          </div>
        </div>
        <div className="experience-box">
          <span className="experience-heading">
            SDE - INTERN - (SpringWorks)
          </span>
          <div className="experience-body">
            <ul>
              <li>
                Contributed to the development of a product-based software,
                focusing on responsive UI design and seamless user interactions.
              </li>
              <li>
                Collaborated with designers and backend teams to implement key
                frontend functionality, ensuring a smooth user experience across
                devices.
              </li>
              <li>
                Gained hands-on experience in React, JavaScript, and modern UI
                development practices, optimizing performance and
                maintainability.
              </li>
              <li>
                Developed and maintained test cases using React Testing Library,
                achieving 80%+ code coverage for each component.
              </li>
              <li>
                Ensured component reliability through unit and integration
                testing, improving overall code quality.
              </li>
              <li>
                Strengthened expertise in test-driven development (TDD) and
                scalable frontend architectures.
              </li>
            </ul>
          </div>
        </div>
        <div className="experience-box">
          <span className="experience-heading">
            SDE 1 - FRONTEND - (SpringWorks)
          </span>
          <div className="experience-body">
            <ul>
              <li>
                Contributed to Horizon 360, a dynamic web application, using
                React for interactive and seamless user experiences.
              </li>
              <li>
                Implemented responsive designs, ensuring smooth performance
                across multiple devices and screen sizes.
              </li>
              <li>
                Worked with key frontend libraries, including:
                <ul>
                  <li>
                    <strong>React-Query</strong> for efficient data fetching and
                    state management.
                  </li>
                  <li>
                    <strong>Formik</strong> for streamlined form handling and
                    validation.
                  </li>
                  <li>
                    <strong>Lodash</strong> for utility functions to simplify
                    complex operations.
                  </li>
                </ul>
              </li>
              <li>
                Wrote unit tests using Cypress, ensuring high code quality,
                reliability, and performance optimization.
              </li>
              <li>
                Optimized application performance and rendering efficiency,
                reducing load times and improving user experience.
              </li>
              <li>
                Collaborated with backend teams and UI/UX designers to ensure
                smooth data flow and visually appealing interfaces.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
